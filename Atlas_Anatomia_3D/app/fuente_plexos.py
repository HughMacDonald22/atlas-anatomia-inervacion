# Añade a innervation.json la vía por el plexo ("via": objetos del modelo) y el recorrido en texto ("route").
import json
P = '/home/claude/work/out/innervation.json'
N = json.load(open(P))
T = lambda t: f'{t} trunk of brachial plexus'
AD = lambda t: f'Anterior division of {t} trunk of brachial plexus'
PD = lambda t: f'Posterior division of {t} trunk of brachial plexus'
LAT = [T('Superior'), T('Middle'), AD('superior'), AD('middle')]
MED = [T('Inferior'), AD('inferior')]
POST = [T('Superior'), T('Middle'), T('Inferior'), PD('superior'), PD('middle'), PD('inferior'), 'Posterior cord of brachial plexus']
R_LAT = 'troncos superior y medio → divisiones anteriores → fascículo lateral'
R_MED = 'tronco inferior → división anterior → fascículo medial'
R_POST = 'troncos superior, medio e inferior → divisiones posteriores → fascículo posterior'
via = {
    'Dorsal scapular nerve': ([], 'Sale directamente de la raíz C5 (ramo anterior), antes de formarse los troncos.'),
    'Long thoracic nerve': ([], 'Sale directamente de las raíces C5, C6 y C7, antes de formarse los troncos.'),
    'Suprascapular nerve': ([T('Superior')], 'Raíces C5–C6 → tronco superior (porción supraclavicular).'),
    'Subclavian nerve': ([T('Superior')], 'Raíces C5–C6 → tronco superior.'),
    'Lateral pectoral nerve': (LAT, f'Raíces C5–C7 → {R_LAT} → nervio pectoral lateral.'),
    'Musculocutaneous nerve': (LAT, f'Raíces C5–C7 → {R_LAT} → nervio musculocutáneo.'),
    'Median nerve': (LAT + MED, f'Raíz lateral: C6–C7 → {R_LAT}. Raíz medial: C8–T1 → {R_MED}. Ambas raíces se unen por delante de la arteria axilar.'),
    'Ulnar nerve': (MED, f'Raíces C8–T1 → {R_MED} → nervio cubital.'),
    'Medial pectoral nerve': (MED, f'Raíces C8–T1 → {R_MED} → nervio pectoral medial.'),
    'Medial brachial cutaneous nerve': (MED, f'Raíces C8–T1 → {R_MED}.'),
    'Medial antebrachial cutaneous nerve': (MED, f'Raíces C8–T1 → {R_MED}.'),
    'Superior subscapular nerve': (POST, f'Raíces C5–C6 → {R_POST}.'),
    'Inferior subscapular nerve': (POST, f'Raíces C5–C6 → {R_POST}.'),
    'Thoracodorsal nerve': (POST, f'Raíces C6–C8 → {R_POST} → nervio toracodorsal.'),
    'Axillary nerve': (POST, f'Raíces C5–C6 → {R_POST} → nervio axilar (pasa por el espacio cuadrangular).'),
    'Radial nerve': (POST, f'Raíces C5–T1 → {R_POST} → nervio radial (rama terminal mayor del fascículo posterior).'),
    'Intercostal nerves': ([], 'Ramos anteriores de T1–T11; no forman plexo: cada uno recorre su espacio intercostal.'),
    'Iliohypogastric nerve': ([], 'Plexo lumbar: ramo anterior de L1 (con T12), emerge por el borde lateral del psoas.'),
    'Ilio-inguinal nerve': ([], 'Plexo lumbar: ramo anterior de L1, emerge por el borde lateral del psoas.'),
    'Genitofemoral nerve': ([], 'Plexo lumbar: L1–L2, atraviesa el psoas y desciende por su cara anterior.'),
    'Lateral femoral cutaneous nerve': ([], 'Plexo lumbar: divisiones posteriores de L2–L3, emerge por el borde lateral del psoas.'),
    'Femoral nerve': ([], 'Plexo lumbar: divisiones posteriores de L2–L4, formado dentro del psoas mayor; sale entre psoas e ilíaco.'),
    'Obturator nerve': ([], 'Plexo lumbar: divisiones anteriores de L2–L4, emerge por el borde medial del psoas y sale por el canal obturador.'),
    'Superior gluteal nerve': ([], 'Plexo sacro: L4–S1 (tronco lumbosacro + S1), sale por el foramen ciático mayor por encima del piriforme.'),
    'Inferior gluteal nerve': ([], 'Plexo sacro: L5–S2, sale por el foramen ciático mayor por debajo del piriforme.'),
    'Nerve to piriformis muscle': ([], 'Plexo sacro: S1–S2.'),
    'Nerve to quadratus femoris muscle': ([], 'Plexo sacro: L4–S1.'),
    'Posterior femoral cutaneous nerve': ([], 'Plexo sacro: S1–S3, sale por debajo del piriforme.'),
    'Sciatic nerve': ([], 'Plexo sacro: tronco lumbosacro (L4–L5) + raíces S1–S3 sobre el piriforme; sale por el foramen ciático mayor, por debajo del piriforme.'),
    'Tibial nerve': ([], 'Plexo sacro (divisiones anteriores L4–S3) → nervio ciático → nervio tibial (vértice de la fosa poplítea).'),
    'Medial plantar nerve': ([], 'Plexo sacro → ciático → tibial → nervio plantar medial (bajo el retináculo flexor).'),
    'Lateral plantar nerve': ([], 'Plexo sacro → ciático → tibial → nervio plantar lateral.'),
    'Common fibular nerve': ([], 'Plexo sacro (divisiones posteriores L4–S2) → nervio ciático → nervio fibular común.'),
    'Superficial fibular nerve': ([], 'Plexo sacro → ciático → fibular común → fibular superficial.'),
    'Deep fibular nerve': ([], 'Plexo sacro → ciático → fibular común → fibular profundo.'),
    'Sural nerve': ([], 'Plexo sacro → ciático → tibial (cutáneo sural medial) + fibular común (ramo comunicante) → nervio sural.'),
    'Pudendal nerve': ([], 'Plexo sacro (pudendo): S2–S4, sale por el foramen ciático mayor y vuelve por el menor (canal de Alcock).'),
}
for n in N:
    v = via.get(n['key'])
    if v: n['via'], n['route'] = v[0], v[1]
    else: n.setdefault('via', []); n.setdefault('route', 'Nervio craneal: nace del tronco encefálico; no forma parte de un plexo espinal.' if 'craneal' in n['plexus'].lower() or n['plexus'] in ('Trigémino',) else '')
json.dump(N, open(P, 'w'), ensure_ascii=False, indent=1)
print(sum(1 for n in N if n.get('route')), 'de', len(N))
