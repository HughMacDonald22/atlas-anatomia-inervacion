import bpy, json, re, math
import numpy as np
bpy.ops.wm.open_mainfile(filepath="/home/claude/src/zip/Z-Anatomy/Startup.blend")
for o in bpy.data.objects:
    for md in getattr(o, 'modifiers', []):
        if md.type in ('SUBSURF', 'DECIMATE'): md.show_viewport = False
dg = bpy.context.evaluated_depsgraph_get()

def geo(o):
    oe = o.evaluated_get(dg); m = oe.to_mesh()
    n = len(m.vertices)
    co = np.empty(n * 3); m.vertices.foreach_get('co', co); co = co.reshape(-1, 3)
    no = np.empty(n * 3); m.vertices.foreach_get('normal', no); no = no.reshape(-1, 3)
    mw = np.array(o.matrix_world)
    co = co @ mw[:3, :3].T + mw[:3, 3]
    no = no @ np.linalg.inv(mw[:3, :3])  # normal matrix
    no /= np.linalg.norm(no, axis=1, keepdims=True) + 1e-9
    oe.to_mesh_clear()
    # Blender Z-up -> glTF Y-up : (x, z, -y)
    return np.c_[co[:, 0], co[:, 2], -co[:, 1]], np.c_[no[:, 0], no[:, 2], -no[:, 1]]

sk = [c for c in bpy.context.scene.collection.children if c.name.startswith('1:')][0]
bones = {}
for o in sk.objects:
    if o.type != 'MESH' or o.name.endswith(('.g', '.j')): continue
    if len(o.data.vertices) == 0: continue
    bones[o.name] = o

ORD = {'first': 1, 'second': 2, 'third': 3, 'fourth': 4, 'fifth': 5, 'sixth': 6, 'seventh': 7, 'eighth': 8, 'ninth': 9, 'tenth': 10, 'eleventh': 11, 'twelfth': 12}
PTS, LAB = [], []
LABELS = []
def L(name):
    if name not in LABELS: LABELS.append(name)
    return LABELS.index(name)

def add(P, labs, step):
    idx = np.arange(0, len(P), step)
    for i in idx:
        if labs[i] is None: continue
        PTS.append(P[i]); LAB.append(L(labs[i]))

def tpar(P):  # 0 = extremo superior (proximal en posición anatómica), 1 = inferior
    y = P[:, 1]; return (y.max() - y) / max(y.max() - y.min(), 1e-6)

ribs_P, ribs_lab = [], []
deferred = []
for name, o in bones.items():
    b = re.sub(r'\.(r|l)$', '', name); side = name[-1] if re.search(r'\.(r|l)$', name) else ''
    lat = 1.0 if side == 'l' else -1.0   # glTF +X = izquierda del paciente
    P, N = geo(o)
    if len(P) == 0: continue
    step = max(1, len(P) // 400)
    t = tpar(P); nl = N[:, 0] * lat; nz = N[:, 2]
    c = P.mean(0)
    labs = None
    bl = b.lower()
    if b in ('Frontal bone', 'Nasal bone', 'Lacrimal bone', 'Ethmoid bone'): labs = ['V1'] * len(P)
    elif b == 'Parietal bone': labs = ['V1' if p[2] > c[2] + 0.01 else 'C2' for p in P]
    elif b == 'Occipital bone': labs = ['C2'] * len(P)
    elif b == 'Temporal bone': labs = ['V3' if p[2] > c[2] and p[1] > c[1] - 0.01 else 'C2' for p in P]
    elif b in ('Zygomatic bone', 'Maxilla', 'Palatine bone', 'Inferior nasal concha bone', 'Vomer'): labs = ['V2'] * len(P)
    elif b == 'Mandible':
        zmin = P[:, 2].min(); zr = P[:, 2].max() - zmin
        labs = ['C2' if (p[2] - zmin) < 0.3 * zr and p[1] < c[1] else 'V3' for p in P]
    elif b in ('Hyoid bone', 'Thyroid cartilage', 'Cricoid cartilage', 'Atlas (C1)', 'Axis (C2)', 'Vertebra C3', 'Vertebra C4'):
        labs = ['C2' if b in ('Atlas (C1)', 'Axis (C2)') else 'C3'] * len(P)
    elif b in ('Vertebra C5', 'Vertebra C6', 'Vertebra C7', 'Clavicle'): labs = ['C4'] * len(P)
    elif re.match(r'Vertebra T(\d+)', b): labs = ['T' + re.match(r'Vertebra T(\d+)', b).group(1)] * len(P)
    elif re.match(r'Vertebra L(\d)', b):
        k = int(b[-1]); labs = ['L%d' % min(k, 3)] * len(P)
    elif b == 'Sacrum': labs = ['S3' if tt < 0.6 else 'S4-S5' for tt in t]
    elif b == 'Coccyx': labs = ['S4-S5'] * len(P)
    elif re.match(r'(\w+) rib$', b):
        k = ORD[b.split()[0].lower()]; labs = ['T%d' % max(k, 2)] * len(P)
        ribs_P.append(P); ribs_lab += labs
    elif b.startswith('Costal cartilage of'):
        k = ORD[b.split()[3].lower()]; labs = ['T%d' % max(k, 2)] * len(P)
    elif b == 'Manubrium of sternum': labs = ['T2'] * len(P)
    elif b == 'Body of sternum': labs = ['T%d' % (3 + min(3, int(tt * 4))) for tt in t]
    elif b == 'Xiphoid process': labs = ['T6'] * len(P)
    elif b == 'Scapula': deferred.append((P, step, t)); continue
    elif b == 'Hip bone':
        yr = P[:, 1].max() - P[:, 1].min(); y0 = P[:, 1].min()
        labs = []
        for p, n in zip(P, N):
            h = (p[1] - y0) / yr
            if p[2] > c[2] + 0.02 and h < 0.45: labs.append('L1')          # pubis
            elif p[2] < c[2] - 0.02 and h < 0.4: labs.append('S3')        # isquion
            elif p[2] > c[2]: labs.append('L1')                            # ilion anterior / cresta anterior
            elif abs(n[0]) > 0.6: labs.append('L2')                        # cara lateral del ilion
            else: labs.append('L2' if h > 0.7 else 'S3')
    elif b == 'Femur': labs = ['S2' if nz[i] < -0.35 else ('L1' if t[i] < 0.25 else 'L2' if t[i] < 0.6 else 'L3') for i in range(len(P))]
    elif b == 'Patella': labs = ['L3' if tt < 0.5 else 'L4' for tt in t]
    elif b == 'Tibia': labs = [('S2' if t[i] < 0.4 else 'S1') if nz[i] < -0.35 else 'L4' for i in range(len(P))]
    elif b == 'Fibula': labs = ['S1' if nz[i] < -0.35 else 'L5' for i in range(len(P))]
    elif b in ('Calcaneus', 'Cuboid bone', 'Fourth metatarsal bone', 'Fifth metatarsal bone'): labs = ['S1'] * len(P)
    elif b in ('Navicular bone', 'Medial cuneiform bone'): labs = ['L4'] * len(P)
    elif b == 'First metatarsal bone': labs = ['L4' if nl[i] < -0.5 else 'L5' for i in range(len(P))]
    elif b in ('Talus', 'Intermediate cuneiform bone', 'Lateral cuneiform bone', 'Second metatarsal bone', 'Third metatarsal bone', 'Sesamoid bones of foot'): labs = ['L5'] * len(P)
    elif 'finger of foot' in b:
        k = ORD[re.search(r'of (\w+) finger', b).group(1)]; labs = ['L5' if k <= 3 else 'S1'] * len(P)
    elif b == 'Humerus':
        labs = []
        for i in range(len(P)):
            if nl[i] >= 0: labs.append('C5')
            else: labs.append('T2' if t[i] < 0.55 else 'T1')
    elif b == 'Radius': labs = ['C6'] * len(P)
    elif b == 'Ulna': labs = ['T1' if tt < 0.45 else 'C8' for tt in t]
    elif b in ('Scaphoid bone', 'Trapezium bone', 'Trapezoid bone', 'First metacarpal bone', 'Second metacarpal bone'): labs = ['C6'] * len(P)
    elif b in ('Lunate bone', 'Capitate bone', 'Third metacarpal bone'): labs = ['C7'] * len(P)
    elif b in ('Hamate bone', 'Triquetrum bone', 'Pisiform bone', 'Fourth metacarpal bone', 'Fifth metacarpal bone'): labs = ['C8'] * len(P)
    elif 'finger of hand' in b:
        k = ORD[re.search(r'of (\w+) finger', b).group(1)]; labs = [{1: 'C6', 2: 'C6', 3: 'C7', 4: 'C8', 5: 'C8'}[k]] * len(P)
    if labs: add(P, labs, step)

# escápula: acromion/espina alta -> C4; resto toma la costilla más cercana
RP = np.vstack(ribs_P); RL = np.array(ribs_lab)
for P, step, t in deferred:
    labs = []
    for i, p in enumerate(P):
        if t[i] < 0.12: labs.append('C4')
        else: labs.append(RL[np.argmin(((RP - p) ** 2).sum(1))])
    add(P, labs, step)

# puntos de referencia para el abdomen (puntos clave ASIA)
def centroid(names, coll):
    pts = []
    for o in coll.objects:
        if o.type in ('MESH', 'CURVE') and re.sub(r'\.(r|l|j)$', '', o.name) in names:
            P, _ = geo(o); pts.append(P)
    return np.vstack(pts) if pts else None
regs = [c for c in bpy.context.scene.collection.children if c.name.startswith('9:')][0]
mus = [c for c in bpy.context.scene.collection.children if c.name.startswith('4:')][0]
xi = np.vstack([geo(bones['Xiphoid process'])[0]])
umb = centroid({'Umbilicus'}, regs)
ing = centroid({'Inguinal ligament'}, mus)
abd = {'yXiph': float(xi[:, 1].min()), 'yUmb': float(umb[:, 1].mean()), 'yIng': float(ing[:, 1].mean()), 'xMid': float(umb[:, 0].mean()), 'zUmb': float(umb[:, 2].mean())}
P = np.array(PTS)
out = {'labels': LABELS, 'pts': [round(float(v), 4) for v in P.reshape(-1)], 'lab': LAB, 'abd': abd}
json.dump(out, open('/home/claude/work/out/dermatomes.json', 'w'), separators=(',', ':'))
print('points', len(PTS), 'labels', LABELS, abd)
