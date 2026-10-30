# Tabla de inervación: nervio periférico -> raíces, músculos (motor) y regiones cutáneas (sensitivo).
# Los nombres de músculos y regiones deben coincidir con los del modelo Z-Anatomy (base o grupo padre).
# skin: (región, parcial)  parcial=True -> el nervio inerva solo parte de esa región.
import json
N = []
def nerve(key, es, roots, plexus, muscles=(), skin=(), show=None, note=""):
    N.append(dict(key=key, es=es, roots=roots, plexus=plexus, muscles=list(muscles),
                  skin=[{"r": r, "p": p} for r, p in skin], show=show or [key], note=note))

P, F = True, False
# ---------------- PLEXO BRAQUIAL ----------------
nerve("Dorsal scapular nerve", "Nervio dorsal de la escápula", "C5 (C4)", "Plexo braquial (raíz)",
      ["Rhomboid major muscle", "Rhomboid minor muscle", "Levator scapulae"])
nerve("Long thoracic nerve", "Nervio torácico largo", "C5–C7", "Plexo braquial (raíces)",
      ["Serratus anterior muscle"], note="Lesión → escápula alada.")
nerve("Suprascapular nerve", "Nervio supraescapular", "C5–C6", "Plexo braquial (tronco superior)",
      ["Supraspinatus muscle", "Infraspinatus muscle"])
nerve("Subclavian nerve", "Nervio subclavio", "C5–C6", "Plexo braquial (tronco superior)",
      ["Subclavius muscle"])
nerve("Lateral pectoral nerve", "Nervio pectoral lateral", "C5–C7", "Plexo braquial (fascículo lateral)",
      ["Clavicular head of pectoralis major muscle", "Sternocostal head of pectoralis major muscle"])
nerve("Medial pectoral nerve", "Nervio pectoral medial", "C8–T1", "Plexo braquial (fascículo medial)",
      ["Pectoralis minor muscle", "Sternocostal head of pectoralis major muscle", "(Abdominal part of pectoralis major muscle)"])
nerve("Superior subscapular nerve", "Nervio subescapular superior", "C5–C6", "Plexo braquial (fascículo posterior)",
      ["Subscapularis muscle"])
nerve("Inferior subscapular nerve", "Nervio subescapular inferior", "C5–C6", "Plexo braquial (fascículo posterior)",
      ["Subscapularis muscle", "Teres major muscle"])
nerve("Thoracodorsal nerve", "Nervio toracodorsal", "C6–C8", "Plexo braquial (fascículo posterior)",
      ["Latissimus dorsi muscle"])
nerve("Axillary nerve", "Nervio axilar", "C5–C6", "Plexo braquial (fascículo posterior)",
      ["Deltoid muscle", "Teres minor muscle"],
      [("Deltoid region", F), ("Posterior region of arm", P)],
      show=["Axillary nerve", "Muscular branches of axillary nerve", "Superior lateral brachial cutaneous nerve"],
      note="Rama cutánea: n. cutáneo braquial lateral superior (‘parche’ del deltoides).")
nerve("Musculocutaneous nerve", "Nervio musculocutáneo", "C5–C7", "Plexo braquial (fascículo lateral)",
      ["Coracobrachialis muscle", "Biceps brachii muscle", "Brachialis muscle"],
      [("Lateral border of forearm", F), ("Anterior region of forearm", P), ("Posterior region of forearm", P)],
      show=["Musculocutaneous nerve", "Lateral antebrachial cutaneous nerve"],
      note="Termina como n. cutáneo antebraquial lateral.")
nerve("Radial nerve", "Nervio radial", "C5–T1", "Plexo braquial (fascículo posterior)",
      ["Triceps brachii muscle", "Anconeus muscle", "Brachioradialis muscle", "Extensor carpi radialis longus",
       "Extensor carpi radialis brevis", "Supinator", "Extensor digitorum", "Extensor digiti minimi",
       "Humeral head of extensor carpi ulnaris", "Ulnar head of extensor carpi ulnaris", "Abductor pollicis longus",
       "Extensor pollicis brevis", "Extensor pollicis longus", "Extensor indicis"],
      [("Posterior region of arm", F), ("Posterior region of elbow", P), ("Posterior region of forearm", F),
       ("Posterior region of wrist", P), ("Dorsum of hand", P), ("Dorsal surfaces of digits of hand", P)],
      show=["Radial nerve", "Deep branch of radial nerve", "Superficial branch of radial nerve",
            "Posterior interosseous nerve of forearm", "Muscular branches of radial nerve",
            "Posterior antebrachial cutaneous nerve", "Inferior lateral brachial cutaneous nerve",
            "Dorsal digital branches of radial nerve"],
      note="Mano: dorso lateral (3½ dedos, sin las falanges distales). Lesión alta → mano péndula.")
nerve("Median nerve", "Nervio mediano", "C6–T1", "Plexo braquial (fascículos lateral y medial)",
      ["Superficial head of pronator teres", "Deep head of pronator teres", "Flexor carpi radialis", "Palmaris longus muscle",
       "Humero-ulnar head of flexor digitorum superficialis", "Radial head of flexor digitorum superficialis",
       "Flexor pollicis longus", "Flexor digitorum profundus", "Pronator quadratus", "Abductor pollicis brevis",
       "Opponens pollicis muscle", "Superficial head of flexor pollicis brevis", "Lumbrical muscles of hand"],
      [("Palm", P), ("Palmar surfaces of digits of hand", P), ("Dorsal surfaces of digits of hand", P), ("Anterior region of wrist", P)],
      show=["Median nerve", "Anterior interosseous nerve of forearm", "Muscular branches of median nerve",
            "Palmar branch of median nerve", "Common palmar digital branches of median nerve",
            "Proper palmar digital branches of median nerve"],
      note="FDP: solo mitad lateral (dedos II–III). Lumbricales: solo I–II. Piel: palma lateral y 3½ dedos.")
nerve("Ulnar nerve", "Nervio cubital (ulnar)", "C8–T1", "Plexo braquial (fascículo medial)",
      ["Humeral head of flexor carpi ulnaris", "Ulnar head of flexor carpi ulnaris", "Flexor digitorum profundus",
       "Abductor digiti minimi of hand", "Flexor digiti minimi of hand", "Opponens digiti minimi muscle of hand",
       "Oblique head of adductor pollicis", "Transverse head of adductor pollicis", "Deep head of flexor pollicis brevis",
       "Dorsal interossei muscles of hand", "Palmar interossei muscles", "Lumbrical muscles of hand"],
      [("Palm", P), ("Dorsum of hand", P), ("Palmar surfaces of digits of hand", P), ("Dorsal surfaces of digits of hand", P),
       ("Medial border of forearm", P)],
      show=["Ulnar nerve", "Deep branch of ulnar nerve", "Superficial branch of ulnar nerve", "Dorsal branch of ulnar nerve",
            "Palmar branch of ulnar nerve", "Muscular branches of ulnar nerve", "Common palmar digital branches of ulnar nerve",
            "Proper palmar digital branches of ulnar nerve", "Dorsal digital branches of ulnar nerve"],
      note="FDP: mitad medial (dedos IV–V). Lumbricales III–IV. Piel: 1½ dedos mediales y borde cubital de la mano.")
nerve("Medial brachial cutaneous nerve", "Nervio cutáneo braquial medial", "C8–T1", "Plexo braquial (fascículo medial)",
      [], [("Medial bicipital groove", F), ("Anterior region of arm", P), ("Posterior region of arm", P)])
nerve("Medial antebrachial cutaneous nerve", "Nervio cutáneo antebraquial medial", "C8–T1", "Plexo braquial (fascículo medial)",
      [], [("Medial border of forearm", F), ("Anterior region of forearm", P), ("Posterior region of forearm", P)],
      show=["Medial antebrachial cutaneous nerve", "Anterior branch of medial antebrachial cutaneous nerve",
            "Posterior branch of medial antebrachial cutaneous nerve"])
# ---------------- TRONCO ----------------
nerve("Intercostal nerves", "Nervios intercostales", "T1–T11", "Ramos anteriores torácicos",
      ["External intercostal muscles", "Internal intercostal muscles", "Innermost intercostal muscles", "Transversus thoracis muscle",
       "Serratus posterior superior muscle", "Serratus posterior inferior muscle", "Rectus abdominis muscle",
       "External abdominal oblique muscle", "Internal abdominal oblique muscle", "Transversus abdominis muscle", "Levatores costarum"],
      [("Pectoral region", F), ("Presternal region", F), ("Mammary region", F), ("Inframammary region", F),
       ("Lateral region of thorax", F), ("Epigastric region", F), ("Hypochondriac region", F), ("Umbilical region", F),
       ("Lateral region of abdomen", F)],
      show=["Intercostal nerves", "Anterior rami of thoracic nerves"],
      note="T7–T11 continúan como nervios toracoabdominales hacia la pared abdominal. T10 ≈ ombligo.")
nerve("Iliohypogastric nerve", "Nervio iliohipogástrico", "T12–L1", "Plexo lumbar",
      ["Internal abdominal oblique muscle", "Transversus abdominis muscle"],
      [("Hypogastric region", F), ("Hip region", P)])
nerve("Ilio-inguinal nerve", "Nervio ilioinguinal", "L1", "Plexo lumbar",
      ["Internal abdominal oblique muscle", "Transversus abdominis muscle"],
      [("Inguinal region", F), ("Urogenital region", P), ("Femoral triangle", P)])
nerve("Genitofemoral nerve", "Nervio genitofemoral", "L1–L2", "Plexo lumbar",
      [], [("Femoral triangle", P), ("Urogenital region", P)],
      show=["Genitofemoral nerve", "Femoral branch of genitofemoral nerve", "Genital branch of genitofemoral nerve"],
      note="Rama genital: músculo cremáster (no modelado) y escroto/labio mayor.")
# ---------------- PLEXO LUMBAR ----------------
nerve("Lateral femoral cutaneous nerve", "Nervio cutáneo femoral lateral", "L2–L3", "Plexo lumbar",
      [], [("Anterior region of thigh", P), ("Hip region", P)], note="Atrapamiento → meralgia parestésica.")
nerve("Femoral nerve", "Nervio femoral", "L2–L4", "Plexo lumbar",
      ["Iliacus muscle", "Psoas major", "Pectineus muscle", "Sartorius muscle", "Rectus femoris muscle", "Vastus lateralis muscle",
       "Vastus medialis muscle", "Vastus intermedius muscle"],
      [("Anterior region of thigh", F), ("Anterior region of knee", F), ("Anterior region of leg", P), ("Medial malleolus", F),
       ("Medial border of foot", P), ("Posterior region of leg", P)],
      show=["Femoral nerve", "Anterior cutaneous branches of femoral nerve", "Saphenous nerve",
            "Infrapatellar branch of saphenous nerve", "Medial crural cutaneous branches of saphenous nerve"],
      note="Psoas mayor recibe además ramos directos L1–L3. Rama terminal sensitiva: n. safeno (cara medial de pierna y pie).")
nerve("Obturator nerve", "Nervio obturador", "L2–L4", "Plexo lumbar",
      ["Adductor longus", "Adductor brevis", "Adductor magnus", "Gracilis muscle", "Obturator externus", "Pectineus muscle"],
      [("Anterior region of thigh", P)],
      show=["Obturator nerve", "Anterior branch of obturator nerve", "Posterior branch of obturator nerve"],
      note="Piel: parche en cara medial del muslo. Aductor mayor: porción aductora (la isquiotibial es del ciático).")
# ---------------- PLEXO SACRO ----------------
nerve("Superior gluteal nerve", "Nervio glúteo superior", "L4–S1", "Plexo sacro",
      ["Gluteus medius muscle", "Gluteus minimus muscle", "Tensor fasciae latae"], note="Lesión → signo de Trendelenburg.")
nerve("Inferior gluteal nerve", "Nervio glúteo inferior", "L5–S2", "Plexo sacro",
      ["Gluteus maximus muscle"], show=[], note="El nervio no está modelado en el atlas; se muestra solo su territorio.")
nerve("Nerve to piriformis muscle", "Nervio del piriforme", "S1–S2", "Plexo sacro", ["Piriformis muscle"])
nerve("Nerve to quadratus femoris muscle", "Nervio del cuadrado femoral", "L4–S1", "Plexo sacro",
      ["Quadratus femoris muscle", "Inferior gemellus muscle"])
nerve("Posterior femoral cutaneous nerve", "Nervio cutáneo femoral posterior", "S1–S3", "Plexo sacro",
      [], [("Posterior region of thigh", F), ("Popliteal fossa", F), ("Gluteal fold", F), ("Gluteal region", P)],
      show=["Posterior femoral cutaneous nerve", "Anterior root of posterior femoral cutaneous nerve",
            "Posterior root of posterior femoral cutaneous nerve"])
nerve("Sciatic nerve", "Nervio ciático", "L4–S3", "Plexo sacro",
      ["Semitendinosus muscle", "Semimembranosus muscle", "Long head of biceps femoris", "Short head of biceps femoris", "Adductor magnus"],
      note="Se divide en n. tibial y n. fibular común (habitualmente en el vértice del rombo poplíteo). La cabeza corta del bíceps femoral la inerva la división fibular.")
nerve("Tibial nerve", "Nervio tibial", "L4–S3", "Plexo sacro (ciático)",
      ["Lateral head of gastrocnemius", "Medial head of gastrocnemius", "Soleus muscle", "Plantaris muscle", "Popliteus muscle",
       "Tibialis posterior muscle", "Flexor digitorum longus", "Flexor hallucis longus"],
      [("Heel region", F), ("Posterior region of leg", P), ("Medial retromalleolar region", F)],
      show=["Tibial nerve", "Medial sural cutaneous nerve"],
      note="En el pie se divide en nervios plantares medial y lateral.")
nerve("Medial plantar nerve", "Nervio plantar medial", "L4–L5", "Plexo sacro (tibial)",
      ["Abductor hallucis", "Flexor digitorum brevis", "Medial head of flexor hallucis brevis", "Lateral head of flexor hallucis brevis",
       "Lumbrical muscles of foot"],
      [("Sole", P), ("Plantar surfaces of digits of foot", P), ("Medial part of longitudinal arch of foot", F)],
      show=["Medial plantar nerve", "Common plantar digital branches of medial plantar nerve", "Proper plantar digital branches of medial plantar nerve"],
      note="Lumbricales: solo el 1.º. Piel: planta medial y 3½ dedos (análogo al mediano).")
nerve("Lateral plantar nerve", "Nervio plantar lateral", "S1–S2", "Plexo sacro (tibial)",
      ["Quadratus plantae muscle", "Abductor digiti minimi of foot", "Flexor digiti minimi of foot", "Oblique head of adductor hallucis",
       "Transverse head of adductor hallucis", "Plantar interossei muscles", "Dorsal interossei muscles of foot", "Lumbrical muscles of foot",
       "(Opponens digiti minimi muscle of foot)"],
      [("Sole", P), ("Plantar surfaces of digits of foot", P), ("Lateral part of longitudinal arch of foot", F)],
      show=["Lateral plantar nerve", "Common plantar digital branches of lateral plantar nerve", "Proper plantar digital branches of lateral plantar nerve"],
      note="Lumbricales 2.º–4.º. Análogo al cubital en la mano.")
nerve("Common fibular nerve", "Nervio fibular (peroneo) común", "L4–S2", "Plexo sacro (ciático)",
      ["Short head of biceps femoris"], [("Posterior region of leg", P), ("Anterior region of leg", P)],
      show=["Common fibular nerve", "Sural communicating branch of common fibular nerve"],
      note="Rodea el cuello del peroné: sitio frecuente de lesión → pie caído. Da el n. cutáneo sural lateral.")
nerve("Superficial fibular nerve", "Nervio fibular superficial", "L4–S1", "Plexo sacro (fibular común)",
      ["Fibularis longus muscle", "Fibularis brevis muscle"],
      [("Anterior region of leg", P), ("Dorsum of foot", F), ("Dorsal surfaces of digits of foot", P), ("Anterior region of ankle", P)],
      show=["Superficial fibular nerve", "Medial dorsal cutaneous nerve of foot", "Intermediate dorsal cutaneous nerve of foot",
            "Dorsal digital branches of superficial fibular nerve"])
nerve("Deep fibular nerve", "Nervio fibular profundo", "L4–L5", "Plexo sacro (fibular común)",
      ["Tibialis anterior muscle", "Extensor digitorum longus", "Extensor hallucis longus", "Fibularis tertius muscle",
       "Extensor digitorum brevis", "Extensor hallucis brevis"],
      [("Dorsal surfaces of digits of foot", P)],
      show=["Deep fibular nerve", "Muscular branches of deep fibular nerve", "Dorsal digital branches of deep fibular nerve"],
      note="Piel: solo el primer espacio interdigital dorsal.")
nerve("Sural nerve", "Nervio sural", "S1–S2", "Plexo sacro (tibial + fibular común)",
      [], [("Lateral border of foot", F), ("Lateral malleolus", F), ("Lateral retromalleolar region", F), ("Posterior region of leg", P),
           ("Heel region", P)])
nerve("Pudendal nerve", "Nervio pudendo", "S2–S4", "Plexo sacro",
      ["External anal sphincter", "Perineal muscles", "Pubococcygeus muscle", "Pubo-analis muscle"],
      [("Anal region", F), ("Urogenital region", F)])
# ---------------- CERVICAL / CRANEALES ----------------
nerve("Accessory nerve (XI)", "Nervio accesorio (XI)", "Núcleo bulbar/espinal C1–C5", "Nervio craneal",
      ["Sternocleidomastoid muscle", "Trapezius muscle"])
nerve("Hypoglossal nerve (XII)", "Nervio hipogloso (XII)", "Núcleo del hipogloso", "Nervio craneal",
      ["Genioglossus muscle", "Hyoglossus muscle", "Geniohyoid muscle", "Thyrohyoid muscle"],
      note="Genihioideo y tirohioideo: fibras de C1 que viajan con el XII.")
nerve("Oculomotor nerve (III)", "Nervio oculomotor (III)", "Mesencéfalo", "Nervio craneal",
      ["Superior rectus muscle", "Inferior rectus muscle", "Medial rectus muscle", "Inferior oblique muscle", "Levator palpebrae superioris"])
nerve("Trochlear nerve (IV)", "Nervio troclear (IV)", "Mesencéfalo", "Nervio craneal", ["Superior oblique muscle"])
nerve("Abducens nerve (VI)", "Nervio abducens (VI)", "Puente", "Nervio craneal", ["Lateral rectus muscle"])
nerve("Ophthalmic nerve", "Nervio oftálmico (V1)", "Ganglio trigeminal", "Trigémino",
      [], [("Frontal region", F), ("Orbital region", P), ("Nasal region", P), ("Parietal region", P)])
nerve("Maxillary nerve", "Nervio maxilar (V2)", "Ganglio trigeminal", "Trigémino",
      [], [("Infra-orbital region", F), ("Zygomatic region", F), ("Oral region", P), ("Orbital region", P), ("Nasal region", P),
           ("Buccal region", P), ("Temporal region", P)])
nerve("Trigeminal nerve (V)", "Nervio trigémino (V) – división mandibular (V3)", "Puente", "Nervio craneal",
      ["Superficial part of masseter", "Deep part of masseter", "Temporalis muscle", "Medial pterygoid muscle",
       "Superior head of lateral pterygoid muscle", "Inferior head of lateral pterygoid muscle", "Mylohyoid muscle",
       "Anterior belly of digastric muscle"],
      [("Mental region", F), ("Oral region", P), ("Buccal region", P), ("Temporal region", P), ("Parotideomasseteric region", P),
       ("Auricular region", P)],
      show=["Trigeminal nerve (V)", "Motor root of trigeminal nerve", "Anterior division of mandibular nerve",
            "Posterior division of mandibular nerve", "Inferior alveolar nerve", "Mental nerve", "Buccal nerve",
            "Nerve to mylohyoid muscle", "Lingual nerve"],
      note="Motor: músculos de la masticación (V3). Para la piel de V1 y V2 selecciona nervio oftálmico/maxilar.")
nerve("Facial nerve (VII)", "Nervio facial (VII)", "Puente", "Nervio craneal",
      ["Frontalis muscle", "Occipitalis muscle", "Temporoparietalis muscle", "Orbital part of orbicularis oculi",
       "Palpebral part of orbicularis oculi", "Corrugator supercilii", "Procerus muscle", "Nasalis muscle", "Depressor septi nasi",
       "Levator labii superioris", "Levator nasolabialis", "Levator anguli oris", "Zygomaticus major muscle", "Zygomaticus minor muscle",
       "Risorius muscle", "Bucinator", "Orbicularis oris muscle", "Depressor anguli oris", "Depressor labii inferioris",
       "Mentalis muscle", "Platysma", "Posterior belly of digastric muscle", "Stylohyoid muscle"],
      show=["Facial nerve (VII)", "Chorda tympani"], note="Motor de la mímica. La cuerda del tímpano lleva gusto de los 2/3 anteriores de la lengua.")
nerve("Glossopharyngeal nerve (IX)", "Nervio glosofaríngeo (IX)", "Bulbo", "Nervio craneal", ["Stylopharyngeus muscle"])
nerve("Vagus nerve (X)", "Nervio vago (X)", "Bulbo", "Nervio craneal",
      ["Superior pharyngeal constrictor", "Middle pharyngeal constrictor", "Inferior pharyngeal constrictor", "Palatopharyngeus muscle",
       "Straight part of cricothyroid muscle", "Oblique part of cricothyroid muscle", "Posterior crico-arytenoid muscle",
       "Lateral crico-arytenoid muscle", "Transverse arytenoid muscle", "External part of thyro-arytenoid muscle",
       "Thyro-epiglottic part of thyro-arytenoid muscle", "Ary-epiglottic part of oblique arytenoid muscle"],
      note="También inervación parasimpática de vísceras torácicas y abdominales.")

json.dump(N, open("/home/claude/work/out/innervation.json", "w"), ensure_ascii=False, indent=1)
print(len(N))
