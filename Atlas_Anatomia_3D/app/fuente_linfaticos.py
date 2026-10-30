import json, math
import numpy as np
S = json.load(open('/home/claude/work/out/lymph_src.json'))
V, N, B = S['veins'], S['nodes'], S['bones']
SIDE = {'D': ('.r', -1), 'I': ('.l', 1)}   # glTF +X = izquierda del paciente

def vein(name, side=None):
    key = name + (SIDE[side][0] if side else '')
    if key not in V: key = name
    if key not in V: raise KeyError(key)
    sp = max(V[key], key=lambda s: sum(np.linalg.norm(np.diff(np.array(s), axis=0), axis=1)))
    return np.array(sp, float)

def nodes(group, side=None):
    for g in [group + (SIDE[side][0] if side else ''), group]:
        if g in N:
            pts = [x['c'] for x in N[g] if not side or x['n'].endswith(SIDE[side][0]) or g.endswith(SIDE[side][0])]
            if not pts and side:  # grupo sin sufijo: separar por signo de x
                pts = [x['c'] for x in N[g] if np.sign(x['c'][0]) == SIDE[side][1]]
            if not pts: pts = [x['c'] for x in N[g]]
            return np.array(pts, float).mean(0)
    raise KeyError(group)

def orient(p, start='low'):
    if start == 'low' and p[0][1] > p[-1][1]: p = p[::-1]
    if start == 'high' and p[0][1] < p[-1][1]: p = p[::-1]
    if start == 'far' and abs(p[0][0]) < abs(p[-1][0]): p = p[::-1]
    return p

def offset(p, side, d=0.004, dz=0.003):
    s = SIDE[side][1] if side else 1
    return p + np.array([s * d, 0, dz])

def resample(p, step=0.01):
    p = np.array(p, float); seg = np.linalg.norm(np.diff(p, axis=0), axis=1); keep = [0]
    acc = 0
    for i, L in enumerate(seg):
        acc += L
        if acc >= step: keep.append(i + 1); acc = 0
    if keep[-1] != len(p) - 1: keep.append(len(p) - 1)
    return p[keep]

def cat(*parts):
    out = []
    for q in parts:
        q = np.atleast_2d(np.array(q, float))
        if out and np.linalg.norm(out[-1] - q[0]) < 1e-4: q = q[1:]
        out.extend(q)
    return np.array(out)

def trim_to(p, target, from_end=True):
    """corta la polilínea en el punto más cercano a target y termina en target"""
    i = int(np.argmin(np.linalg.norm(p - target, axis=1)))
    return cat(p[:i + 1], [target]) if from_end else cat([target], p[i:])

PATHS = []
def add(b, es, g, side, r, pts, d):
    PATHS.append({'b': b, 'es': es, 'g': g, 's': side or '', 'r': r, 'pts': [[round(float(x), 4) for x in q] for q in resample(pts)], 'd': d})

SUP, DEEP, TRUNK = 'Vasos linfáticos superficiales', 'Vasos linfáticos profundos', 'Troncos y conductos linfáticos'

# ---------- referencias centrales
def vb(n): return np.array(B[n], float)
ang = {}
for side in 'DI':
    ij = orient(vein('Internal jugular vein', side), 'high')
    ang[side] = ij[-1].copy()              # ángulo venoso (unión yugular interna–subclavia)
# cisterna del quilo: delante de L1–L2, a la derecha de la aorta
zf = 0.03
cis_lo = vb('Vertebra L2') + np.array([-0.008, 0, zf]); cis_hi = vb('Vertebra T12') + np.array([-0.006, 0, zf - 0.004])
cis_mid = (cis_lo + cis_hi) / 2
add('Cisterna chyli', 'Cisterna del quilo', TRUNK, '', 0.0065, cat(cis_lo, cis_mid, cis_hi),
    'Dilatación sacular donde confluyen los troncos lumbares e intestinal, delante de L1–L2. Origen del conducto torácico.')

# conducto torácico: asciende delante de los cuerpos vertebrales, a la derecha de la línea media hasta T5, cruza a la izquierda y termina en el ángulo venoso izquierdo
td = [cis_hi]
for k in range(11, 0, -1):
    c = vb(f'Vertebra T{k}'); x = -0.007 if k >= 6 else (-0.007 + (6 - k) * 0.0055 if k >= 3 else 0.012)
    td.append(c + np.array([x, 0, zf - 0.006 + (0.004 if k < 4 else 0)]))
top = vb('Vertebra T1') + np.array([0.02, 0.045, 0.02])
arch = top + np.array([0.012, 0.012, 0.004])
td += [top, arch, (arch + ang['I']) / 2 + np.array([0.004, 0.01, 0]), ang['I']]
add('Thoracic duct', 'Conducto torácico', TRUNK, '', 0.0028, np.array(td),
    'Principal conducto linfático. Drena miembros inferiores, abdomen, hemitórax izquierdo, miembro superior izquierdo y mitad izquierda de cabeza y cuello. Desemboca en el ángulo venoso izquierdo (yugular interna + subclavia).')

# tronco linfático derecho
rld_start = ang['D'] + np.array([-0.012, 0.012, 0.004])
add('Right lymphatic duct', 'Conducto linfático derecho', TRUNK, 'D', 0.0024, cat(rld_start, ang['D']),
    'Conducto corto (≈1 cm) formado por los troncos yugular, subclavio y broncomediastínico derechos. Drena el cuadrante superior derecho del cuerpo.')
term = {'D': rld_start, 'I': (arch + ang['I']) / 2 + np.array([0.004, 0.01, 0])}

for side in 'DI':
    s = SIDE[side][1]
    lado = 'derecho' if side == 'D' else 'izquierdo'
    # ---------- miembro inferior
    sup_ing = nodes('Superficial inguinal nodes', side); deep_ing = nodes('Deep inguinal nodes', side)
    popl = nodes('Popliteal nodes', side)
    gs = offset(orient(vein('Great saphenous vein', side), 'low'), side, -0.004, 0.004)
    add('Superficial lymphatic vessels of lower limb (medial)', 'Colectores superficiales mediales del miembro inferior', SUP, side, 0.0011,
        trim_to(gs, sup_ing), 'Acompañan a la vena safena magna desde el dorso y borde medial del pie hasta los ganglios inguinales superficiales. Es la vía principal del drenaje superficial de la pierna.')
    ss = offset(orient(vein('Small saphenous vein', side), 'low'), side, 0.004, -0.003)
    add('Superficial lymphatic vessels of lower limb (posterolateral)', 'Colectores superficiales posterolaterales de la pierna', SUP, side, 0.0011,
        trim_to(ss, popl), 'Acompañan a la vena safena menor desde el borde lateral del pie y el talón hasta los ganglios poplíteos.')
    for vn, es in [('Posterior tibial veins', 'tibiales posteriores'), ('Anterior tibial veins', 'tibiales anteriores'), ('Fibular veins', 'fibulares')]:
        try:
            p = offset(orient(vein(vn, side), 'low'), side, 0.003, 0.003)
            add('Deep lymphatic vessels of leg (' + vn + ')', f'Colectores profundos de la pierna (vasos {es})', DEEP, side, 0.0009, trim_to(p, popl),
                'Colectores profundos que siguen a las venas homónimas hasta los ganglios poplíteos.')
        except KeyError: pass
    fem = offset(orient(cat(vein('Popliteal vein', side), vein('Femoral vein', side)), 'low'), side, 0.004, 0.003)
    add('Deep lymphatic vessels of thigh', 'Colectores profundos del muslo', DEEP, side, 0.0012, cat(popl, trim_to(fem, deep_ing)[1:]),
        'De los ganglios poplíteos ascienden junto a los vasos poplíteos y femorales hasta los ganglios inguinales profundos.')
    add('Inguinal efferent vessels', 'Vasos eferentes inguinales', DEEP, side, 0.0013, cat(sup_ing, (sup_ing + deep_ing) / 2 + np.array([0, 0.004, 0]), deep_ing),
        'Los ganglios inguinales superficiales drenan a los profundos, bajo el ligamento inguinal.')
    ext = nodes('External iliac nodes', side); com = nodes('Common iliac nodes', side); inti = nodes('Internal iliac nodes', side)
    ei = offset(orient(vein('External iliac vein', side), 'low'), side, 0.006, 0.006)
    add('External iliac lymphatic vessels', 'Vasos ilíacos externos', DEEP, side, 0.0016, cat(deep_ing, trim_to(ei, ext)[1:]),
        'Ascienden junto a los vasos ilíacos externos hasta los ganglios ilíacos externos.')
    ci = offset(orient(vein('Common iliac vein', side), 'low'), side, 0.006, 0.008)
    add('Common iliac lymphatic vessels', 'Vasos ilíacos comunes', DEEP, side, 0.0017, cat(ext, trim_to(ci, com)[1:]),
        'Llevan la linfa del miembro inferior y la pelvis hacia los ganglios ilíacos comunes.')
    ii = offset(orient(vein('Internal iliac vein', side), 'low'), side, 0.005, 0.0)
    add('Internal iliac lymphatic vessels', 'Vasos ilíacos internos', DEEP, side, 0.0013, cat(inti, trim_to(ii, com)[1:]) if np.linalg.norm(ii[0] - inti) < 0.08 else cat(inti, com),
        'Drenan las vísceras pélvicas, el periné profundo y la región glútea hacia los ganglios ilíacos comunes.')
    lum = nodes('Right lumbar nodes' if side == 'D' else 'Left lumbar nodes')
    add('Lumbar trunk', 'Tronco lumbar ' + lado, TRUNK, side, 0.002, cat(com, (com + lum) / 2 + np.array([-s * 0.004, 0, 0.004]), lum, cis_lo + np.array([s * 0.006, 0, 0])),
        'Recoge la linfa de miembro inferior, pelvis, riñón y pared abdominal (vía ganglios lumbares) y desemboca en la cisterna del quilo.')

    # ---------- miembro superior
    axn = nodes('Axillary nodes', side)
    cub = nodes('Cubital nodes', side)
    ce = offset(orient(vein('Cephalic vein', side), 'low'), side, 0.004, 0.003)
    add('Superficial lymphatic vessels of upper limb (lateral)', 'Colectores superficiales laterales del miembro superior', SUP, side, 0.001, trim_to(ce, axn),
        'Siguen a la vena cefálica por el borde radial del antebrazo y el brazo; algunos drenan a ganglios deltopectorales y axilares apicales.')
    ba = offset(orient(vein('Basilic vein', side), 'low'), side, -0.004, 0.003)
    br = offset(orient(vein('Brachial veins', side), 'low'), side, 0.004, 0.004)
    add('Superficial lymphatic vessels of upper limb (medial)', 'Colectores superficiales mediales del miembro superior', SUP, side, 0.001, cat(trim_to(ba, cub), trim_to(br, axn) if True else []),
        'Siguen a la vena basílica por el borde cubital, pasan por los ganglios cubitales (supratrocleares) y llegan a los axilares laterales.')
    for vn, es in [('Radial veins', 'radiales'), ('Ulnar veins', 'cubitales')]:
        try:
            p = offset(orient(cat(vein(vn, side), vein('Brachial veins', side)), 'low'), side, 0.003, -0.003)
            add('Deep lymphatic vessels of upper limb (' + vn + ')', f'Colectores profundos del miembro superior (vasos {es})', DEEP, side, 0.0009, trim_to(p, axn),
                'Acompañan a las venas profundas del antebrazo y a las braquiales hasta los ganglios axilares.')
        except KeyError: pass
    sc = vein('Right subclavian vein' if side == 'D' else 'Left subclavian vein')
    sc = offset(orient(cat(vein('Axillary vein', side), sc), 'far'), side, 0.0, 0.006)
    add('Subclavian trunk', 'Tronco subclavio ' + lado, TRUNK, side, 0.0018, cat(axn, trim_to(sc, term[side])[1:]),
        'Formado por los eferentes de los ganglios axilares apicales; drena el miembro superior y la pared torácica (incluida la mama).')

    # ---------- cabeza y cuello
    sdl = nodes('Superior deep lateral nodes', side); idl = nodes('Inferior deep lateral cervical nodes', side)
    ij = offset(orient(vein('Internal jugular vein', side), 'high'), side, 0.006, 0.006)
    add('Jugular trunk', 'Tronco yugular ' + lado, TRUNK, side, 0.0018, cat(sdl, trim_to(ij, idl)[1:], term[side]),
        'Sigue a la vena yugular interna a través de los ganglios cervicales profundos; recoge toda la linfa de cabeza y cuello del mismo lado.')
    fa = offset(orient(vein('Facial vein', side), 'high'), side, 0.004, 0.004)
    add('Superficial lymphatic vessels of face', 'Colectores superficiales de la cara', SUP, side, 0.0009, cat(trim_to(fa, nodes('Facial nodes', side) if 'Facial nodes' in N else fa[-1]), sdl),
        'Drenan la cara hacia los ganglios faciales y submandibulares y luego a los cervicales profundos superiores.')
    ej = offset(orient(vein('External jugular vein', side), 'high'), side, 0.004, 0.0)
    add('Superficial lymphatic vessels of neck', 'Colectores superficiales del cuello', SUP, side, 0.0009, trim_to(ej, idl),
        'Acompañan a la vena yugular externa (cuero cabelludo posterior, región parotídea) hacia los ganglios cervicales profundos inferiores.')
    # ---------- tórax
    med = nodes('Mediastinal lymph nodes', side)
    add('Bronchomediastinal trunk', 'Tronco broncomediastínico ' + lado, TRUNK, side, 0.0016, cat(med, (med + term[side]) / 2 + np.array([s * 0.01, 0, 0.01]), term[side]),
        'Drena pulmones, mediastino, pared torácica profunda y cara superior del hígado.')

# tronco intestinal
smn = nodes('Superior mesenteric nodes')
add('Intestinal trunk', 'Tronco intestinal', TRUNK, '', 0.002, cat(smn, (smn + cis_lo) / 2 + np.array([0, 0.01, -0.01]), cis_lo),
    'Recoge la linfa del tubo digestivo, hígado, páncreas y bazo (vía ganglios mesentéricos y celíacos) y desemboca en la cisterna del quilo. Transporta el quilo (grasa absorbida).')
json.dump(PATHS, open('/home/claude/work/out/lymphatics.json', 'w'), ensure_ascii=False, separators=(',', ':'))
print(len(PATHS), sum(len(p['pts']) for p in PATHS))
