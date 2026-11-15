const TABLETS = [
  {
    id: "compressed",
    name: "Compressed Tablet",
    categories: ["method", "oral"],
    tags: ["standard", "most common", "representative"],
    route: "Oral ingestion",
    preparation: "Compression",
    representative: "Paracetamol / Panadol",
    summary:
      "The standard tablet prepared by applying high pressure to powders or granules using steel punches and dies.",
    visual: "compressed",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This is a regular tablet meant to be swallowed with water. It contains a measured amount of medicine compressed into a solid piece."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Swallow whole with a full glass of water unless your pharmacist says otherwise.",
          "Do not crush, break, or chew coated tablets unless instructed.",
          "Take at the times prescribed; use reminders if needed.",
          "Store in a cool, dry place away from children."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Easy to carry and dose accurately.",
          "Usually stable and long-lasting.",
          "Coatings can reduce bad taste if present."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "If swallowing is difficult, ask a pharmacist before changing the form. Some tablets must remain intact.",
        video: {
          title: "Patient clip: swallowing a standard tablet safely",
          duration: "00:52",
          note: "Placeholder for your patient-facing recording."
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Compressed tablets are solid unit-dose preparations produced by applying high pressure to powder or granules using steel punches and dies. They are the most common tablet dosage form."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Core", value: "Compacted drug + excipient matrix" },
          { label: "Surface", value: "May be uncoated, film-coated, sugar-coated, or scored" },
          { label: "Shape", value: "Round, oval, caplet, custom debossed" }
        ],
        text:
          "The compact must maintain identity, hardness, and disintegration while allowing accurate dose delivery."
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "Ingredient weighing and sifting/blending.",
          "Granulation, wet or dry, or direct compression.",
          "Compression on single-punch or rotary press.",
          "Optional coating, polishing, and packaging."
        ],
        note:
          "Processing problems can include capping, lamination, sticking, picking, weight variation, and poor content uniformity."
      },
      {
        title: "Important excipients and functions",
        icon: "🧪",
        facts: [
          { label: "Diluents", value: "Lactose, microcrystalline cellulose, dicalcium phosphate" },
          { label: "Binders", value: "Starch paste, PVP, gelatin" },
          { label: "Disintegrants", value: "Croscarmellose sodium, sodium starch glycolate, cross-linked PVP" },
          { label: "Lubricants / glidants", value: "Magnesium stearate, colloidal silicon dioxide" }
        ]
      },
      {
        title: "Advantages and limitations",
        icon: "⚖️",
        pros: [
          "Lowest cost for large-scale production.",
          "High stability and compactness.",
          "Excellent dose precision and packaging convenience.",
          "Coating can mask unpleasant taste and improve acceptability."
        ],
        cons: [
          "Some drugs resist compression.",
          "Poorly wetted drugs may be difficult to formulate.",
          "Bitter, odorous, or oxygen-sensitive drugs may need coating or encapsulation.",
          "Difficult to swallow for some patients."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Weight variation and content uniformity.",
          "Hardness and friability.",
          "Disintegration and/or dissolution.",
          "Appearance, debossing, and coating integrity."
        ],
        video: {
          title: "Pharmacist clip: compression mechanism and critical quality attributes",
          duration: "01:28"
        }
      }
    ]
  },

  {
    id: "molded",
    name: "Molded Tablet / Triturate",
    categories: ["method"],
    tags: ["low pressure", "drying", "potent drugs"],
    route: "Depends on formulation",
    preparation: "Molding",
    representative: "Official trituration / molded hypodermic tablet, historical example",
    summary:
      "Dampened powder is forced under low pressure into die cavities; solidification occurs during drying through crystal bridges.",
    visual: "molded",
    image: "",
    patient: [
      {
        title: "What is this?",
        icon: "ℹ️",
        text:
          "A molded tablet is generally softer and may dissolve quickly. It is less common today and may be used for potent diluted medicines or special preparations."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Follow the exact instruction because molded tablets can be fragile.",
          "Keep dry; moisture may make them soften or disintegrate prematurely.",
          "Do not substitute another tablet form without pharmacist advice."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Some molded tablets were historically intended for special routes such as hypodermic use. Never self-inject or improvise.",
        video: {
          title: "Patient clip: handling fragile molded tablets",
          duration: "00:44"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Molded tablets are prepared by forcing dampened powders under low pressure into the die cavities of a tablet mold. Solidification depends on crystal bridges built up during the subsequent drying process."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        text:
          "They are generally softer, more porous, and faster to wet than compressed tablets. Official triturations were commonly 10% dilutions of finely divided potent drugs in lactose."
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "Moisten drug/diluent blend to a damp powder.",
          "Press into mold cavities with low pressure.",
          "Dry so crystal bridges solidify the shape.",
          "Size and package carefully."
        ],
        note:
          "Triturates quickly disintegrate in the presence of moisture, which is useful for potent diluted doses."
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Weight uniformity.",
          "Moisture sensitivity and physical integrity.",
          "Dissolution/disintegration where applicable.",
          "Sterility or solution clarity for hypodermic molded tablets."
        ],
        video: {
          title: "Pharmacist clip: molding vs compression",
          duration: "01:05"
        }
      }
    ]
  },

  {
    id: "multiple-compressed",
    name: "Multiple Compressed Tablet",
    categories: ["oral", "modified"],
    tags: ["bilayer", "tablet-in-tablet", "incompatible drugs"],
    route: "Oral ingestion",
    preparation: "Multiple compression",
    representative:
      "Bilayer combination tablet, conceptual example; tablet-in-tablet is limited in the Egyptian market",
    summary:
      "A tablet subjected to more than one compression, producing either multiple layers or a tablet within a tablet.",
    visual: "multiple",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This tablet contains more than one medicine layer or region. It is designed to combine treatments conveniently while keeping incompatible ingredients separated."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Swallow whole unless specifically instructed otherwise.",
          "Do not split or crush unless your pharmacist confirms it is safe.",
          "Notice if the tablet has two colors; this may represent two layers."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Convenience of taking two medicines in one tablet.",
          "Helps separate incompatible drugs physically."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Splitting a bilayer tablet may destroy the intended separation or release pattern.",
        video: {
          title: "Patient clip: why not to split special combination tablets",
          duration: "00:56"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Multiple compressed tablets are prepared by subjecting the material to more than a single compression. The result may be a multiple-layer tablet or a tablet within a tablet."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Multilayer", value: "Two or more distinct compressed layers" },
          { label: "Tablet-in-tablet", value: "A core surrounded by an outer coat/tablet" },
          { label: "Purpose", value: "Physical separation of incompatible drugs or modified release regions" }
        ],
        text:
          "Example from lecture: paracetamol + phenylephrine hydrochloride in one layer, and paracetamol + ascorbic acid in another layer."
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "First layer or core is compressed.",
          "Second material is fed over or around the first compact.",
          "Second compression forms the final multi-compressed structure.",
          "Requires specialized tooling and rotary press arrangements."
        ],
        note:
          "Bilayer tablets are more commonly discussed in the local market context; tablet-in-tablet examples are limited."
      },
      {
        title: "Important considerations",
        icon: "🧪",
        list: [
          "Layer adhesion must be sufficient.",
          "Each layer must retain its identity and release behavior.",
          "Incompatibility must be prevented by physical separation.",
          "Tooling alignment is critical."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Layer thickness and bond strength.",
          "Weight variation of overall tablet and individual layers where possible.",
          "Content uniformity for each active.",
          "Dissolution profile for each layer or region."
        ],
        video: {
          title: "Pharmacist clip: multi-compression tooling and layer separation",
          duration: "01:34"
        }
      }
    ]
  },

  {
    id: "repeat-action",
    name: "Repeat Action Tablet",
    categories: ["oral", "modified"],
    tags: ["dual release", "sustained effect", "immediate + delayed"],
    route: "Oral ingestion",
    preparation: "Modified compression / layered design",
    representative: "Repeat-action decongestant or analgesic model example",
    summary:
      "A tablet designed to provide an initial release of drug followed by one or more later releases from the same dosage form.",
    visual: "repeat",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This tablet is designed to start working after swallowing and then continue releasing medicine over a longer period."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Swallow whole with water.",
          "Do not chew or crush unless your pharmacist says it is allowed.",
          "Take exactly at the prescribed interval."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Can reduce the number of doses per day.",
          "Useful when prolonged symptom control is needed."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Damaging the tablet may cause too much medicine to be released at once.",
        video: {
          title: "Patient clip: respecting modified-release tablets",
          duration: "01:02"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Repeat action tablets combine an immediate-release portion with a delayed or sustained portion, allowing therapeutic effect to begin quickly and then continue."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Outer region", value: "Often immediate release" },
          { label: "Inner region", value: "Slower-release core or coated portion" },
          { label: "Goal", value: "Initial onset plus prolonged or repeated effect" }
        ]
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "Prepare immediate-release and sustained-release granules or layers separately.",
          "Combine using multilayer compression or bead-in-tablet approaches.",
          "Control polymer coating or matrix density for release modulation."
        ]
      },
      {
        title: "Dissolution importance",
        icon: "🔍",
        text:
          "Dissolution testing is critical because the product must demonstrate both early release and later release according to design."
      },
      {
        title: "Quality control",
        icon: "🧪",
        list: [
          "Multi-point dissolution profile.",
          "Content uniformity.",
          "Hardness and integrity.",
          "Dose dumping risk assessment if damaged."
        ],
        video: {
          title: "Pharmacist clip: repeat-action release curves",
          duration: "01:18"
        }
      }
    ]
  },

  {
    id: "enteric-coated",
    name: "Enteric Coated Tablet",
    categories: ["oral", "modified"],
    tags: ["delayed release", "gastric protection", "intestinal release", "added by group"],
    route: "Oral ingestion",
    preparation: "Compression + enteric coating",
    representative: "Bisacodyl / Dulcolax",
    summary:
      "A delayed-release tablet coated with polymers that resist stomach acid and dissolve in the intestine.",
    visual: "enteric",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This tablet has a special coating that helps it survive the stomach and release the medicine later in the intestine."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Swallow whole with a full glass of water.",
          "Never crush, chew, or break it.",
          "Do not take with milk, antacids, or acidic drinks unless instructed.",
          "Follow the timing on the label or prescription."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Helps protect the stomach from irritating drugs.",
          "Helps protect acid-sensitive drugs from stomach acid.",
          "Can target release in the intestine."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Crushing an enteric-coated tablet can destroy the coating and cause stomach irritation or unpredictable release.",
        video: {
          title: "Patient clip: why enteric-coated tablets must be swallowed whole",
          duration: "01:08"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Enteric-coated tablets are delayed-release oral tablets coated with polymers that remain intact in gastric pH but dissolve or erode in intestinal pH."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Core", value: "Compressed tablet containing drug" },
          { label: "Functional barrier", value: "Enteric polymer coating" },
          { label: "Trigger", value: "pH-dependent dissolution, usually intestinal pH" }
        ]
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "Compress conventional core tablet.",
          "Apply enteric coating in pan or fluid-bed equipment.",
          "Control coating thickness and plasticizer level.",
          "Perform acid-stage and buffer-stage disintegration testing."
        ]
      },
      {
        title: "Important coating materials",
        icon: "🧪",
        list: [
          "Cellulose acetate phthalate, CAP",
          "Hydroxypropyl methylcellulose phthalate, HPMCP",
          "Eudragit L and S types",
          "Plasticizers such as triethyl citrate or PEG"
        ]
      },
      {
        title: "Advantages and limitations",
        icon: "⚖️",
        pros: [
          "Protects stomach from irritant drugs.",
          "Protects acid-labile drugs.",
          "Can target intestinal or colonic release."
        ],
        cons: [
          "Delayed onset.",
          "Coating damage can cause dose dumping or gastric irritation.",
          "More complex QC than standard compressed tablets."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Disintegration in simulated gastric fluid: coating should remain intact.",
          "Disintegration or dissolution in intestinal buffer: should release promptly.",
          "Coating uniformity and weight gain.",
          "Acid resistance validation."
        ],
        video: {
          title: "Pharmacist clip: enteric coating pH-trigger behavior",
          duration: "01:42"
        }
      }
    ]
  },

  {
    id: "sugar-coated",
    name: "Sugar Coated Tablet",
    categories: ["oral", "modified"],
    tags: ["classic coating", "taste masking", "multivitamin"],
    route: "Oral ingestion",
    preparation: "Compression + sugar coating",
    representative: "Multivitamin tablet",
    summary:
      "A tablet covered with multiple sugar-based layers to improve appearance, mask taste, and protect the core.",
    visual: "sugar",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This tablet has a sweet outer coating that makes it easier to swallow and helps hide unpleasant taste."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Swallow whole with water.",
          "Do not crush or chew unless instructed.",
          "Keep container closed and dry."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Better taste and appearance.",
          "Can protect the tablet surface."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Sugar-coated tablets may contain significant sugar; diabetic patients should check the product information.",
        video: {
          title: "Patient clip: sugar-coated tablet basics",
          duration: "00:49"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Sugar coating is a traditional multi-step coating process using syrup layers, pigmenting solutions, and polishing to produce a smooth, attractive tablet surface."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Seal coat", value: "Protects core from moisture" },
          { label: "Sub-coats", value: "Build rounded shape" },
          { label: "Color syrup", value: "Provides appearance" },
          { label: "Polish", value: "Gives glossy finish" }
        ]
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "Sealing of the compressed core.",
          "Application of successive sub-coat syrup layers.",
          "Coloring and smoothing.",
          "Final polishing."
        ],
        note:
          "Sugar coating is time-consuming and adds substantial weight compared with film coating."
      },
      {
        title: "Advantages and limitations",
        icon: "⚖️",
        pros: [
          "Excellent taste masking.",
          "Attractive glossy appearance.",
          "Can hide core defects."
        ],
        cons: [
          "Long process.",
          "Large weight increase.",
          "Risk of cracking, chipping, or blooming.",
          "Not ideal for sugar-sensitive patients."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Appearance and color uniformity.",
          "Weight gain control.",
          "Disintegration.",
          "Hardness and coating integrity."
        ],
        video: {
          title: "Pharmacist clip: sugar coating layers",
          duration: "01:22"
        }
      }
    ]
  },

  {
    id: "film-coated",
    name: "Film Coated Tablet",
    categories: ["oral", "modified"],
    tags: ["thin coating", "modern", "metronidazole"],
    route: "Oral ingestion",
    preparation: "Compression + film coating",
    representative: "Metronidazole tablet",
    summary:
      "A tablet coated with a thin polymer film to mask taste, improve appearance, and provide protection.",
    visual: "film",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This tablet has a thin smooth coating that makes it easier to swallow and helps reduce bad taste."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Swallow whole with water.",
          "Do not crush or chew unless advised.",
          "Store away from moisture and heat."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Thin coating, usually easier to swallow than thick sugar coats.",
          "Improves appearance and patient acceptability."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Some film-coated tablets are still modified-release or irritant-protective; always check whether splitting is allowed.",
        video: {
          title: "Patient clip: film-coated tablet handling",
          duration: "00:54"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Film coating applies a thin polymeric layer to the tablet surface. It is faster and adds less weight than sugar coating."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Film former", value: "HPMC, HPC, PVA, or related polymers" },
          { label: "Plasticizer", value: "PEG, glycerol, triethyl citrate" },
          { label: "Pigments", value: "Titanium dioxide, iron oxides" },
          { label: "Function", value: "Taste masking, appearance, protection" }
        ]
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "Prepare coating dispersion or solution.",
          "Apply to tablets in coating pan or fluid-bed equipment.",
          "Control spray rate, temperature, and airflow.",
          "Cure or dry film to final specification."
        ]
      },
      {
        title: "Advantages and limitations",
        icon: "⚖️",
        pros: [
          "Thin and efficient coating.",
          "Faster process than sugar coating.",
          "Good taste masking and appearance."
        ],
        cons: [
          "Can show bridging or cracking if formulation is poor.",
          "May not fully mask very strong odors.",
          "Requires careful solvent/plasticizer control."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Coating uniformity.",
          "Weight gain.",
          "Disintegration/dissolution.",
          "Surface defects: orange peel, bridging, picking."
        ],
        video: {
          title: "Pharmacist clip: film coating vs sugar coating",
          duration: "01:16"
        }
      }
    ]
  },

  {
    id: "chewable",
    name: "Chewable Tablet",
    categories: ["oral"],
    tags: ["children", "antacid", "pleasant taste"],
    route: "Oral ingestion after chewing",
    preparation: "Compression",
    representative: "Antacid tablet or pediatric multivitamin formulation",
    summary:
      "A tablet designed to be chewed before swallowing, commonly used for children or patients who dislike swallowing tablets.",
    visual: "chewable",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This tablet is meant to be chewed thoroughly before swallowing. It is usually flavored and softer than regular tablets."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Chew completely before swallowing.",
          "Do not swallow whole unless the label says it is acceptable.",
          "Good option for children or patients with swallowing difficulty."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Easier for pediatric use.",
          "Pleasant taste.",
          "Can provide faster dispersion in the mouth."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Check sugar or polyol content if the patient is diabetic or sensitive to sorbitol/mannitol.",
        video: {
          title: "Patient clip: how to chew a chewable tablet properly",
          duration: "00:47"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Chewable tablets must have pleasant taste and acceptable mouth feel. They are compressed but formulated to be broken down by chewing rather than solely by disintegration."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Texture", value: "Softer and more friable than standard compressed tablets" },
          { label: "Taste system", value: "Sweeteners, flavors, sometimes colors" },
          { label: "Disintegration", value: "Less critical because chewing provides comminution" }
        ]
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "Direct compression is common.",
          "Use water-soluble or palatable diluents.",
          "Optimize hardness to allow chewing but maintain handling strength."
        ]
      },
      {
        title: "Important excipients",
        icon: "🧪",
        facts: [
          { label: "Diluents / sweeteners", value: "Sorbitol, mannitol, sucrose, aspartame where suitable" },
          { label: "Flavoring agents", value: "Mint, fruit flavors, masking systems" },
          { label: "Binders / lubricants", value: "Selected for palatability and compression performance" }
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Hardness lower than ordinary compressed tablets.",
          "Taste and organoleptic evaluation.",
          "Content uniformity.",
          "Microbial limits for pediatric products where relevant."
        ],
        video: {
          title: "Pharmacist clip: chewable tablet formulation logic",
          duration: "01:10"
        }
      }
    ]
  },

  {
    id: "buccal",
    name: "Buccal Tablet",
    categories: ["cavity"],
    tags: ["cheek pouch", "local", "systemic", "Buccastem"],
    route: "Oral cavity, buccal pouch",
    preparation: "Compression / specialized design",
    representative:
      "Vitamin C buccal tablet; Buccastem prochlorperazine maleate 3 mg equivalent to 1.85 mg prochlorperazine base",
    summary:
      "A tablet placed between the cheek and gum, where it dissolves or erodes slowly for local or systemic absorption.",
    visual: "buccal",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This tablet is placed between the cheek and gum, not swallowed immediately. It is designed to stay there and release medicine locally or through the mouth lining."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Insert gently between the cheek and gum.",
          "Let it dissolve or erode slowly.",
          "Do not chew or swallow it unless instructed.",
          "Avoid eating or drinking until it has dissolved if the leaflet says so."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Useful for nausea associated with migraine in products like Buccastem.",
          "Can avoid first-pass metabolism for some drugs.",
          "Convenient when swallowing is not desired."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "If the tablet falls out or dissolves too quickly, effectiveness may be reduced. Follow the exact placement instructions.",
        video: {
          title: "Patient clip: how to place a buccal tablet",
          duration: "01:03"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Buccal tablets are inserted into the buccal pouch. They may act locally or systemically through the buccal mucosa."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Placement", value: "Between cheek and gingiva" },
          { label: "Behavior", value: "Slow erosion, dissolution, or mucoadhesive retention" },
          { label: "Absorption", value: "Buccal mucosa can bypass gastrointestinal degradation and first-pass metabolism" }
        ]
      },
      {
        title: "Manufacturing / formulation considerations",
        icon: "⚙️",
        list: [
          "Tablet must adhere or remain in place long enough.",
          "Excipients should not irritate oral mucosa.",
          "Polymer systems may be used to control erosion or adhesion."
        ]
      },
      {
        title: "Representative lecture example",
        icon: "🧪",
        text:
          "Buccastem contains prochlorperazine maleate 3 mg, equivalent to 1.85 mg prochlorperazine base, and is used for nausea and vomiting associated with migraine."
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Erosion/dissolution behavior.",
          "Mucoadhesive strength where applicable.",
          "Content uniformity.",
          "Local tolerability considerations."
        ],
        video: {
          title: "Pharmacist clip: buccal absorption and retention design",
          duration: "01:26"
        }
      }
    ]
  },

  {
    id: "sublingual",
    name: "Sublingual Tablet",
    categories: ["cavity"],
    tags: ["under tongue", "rapid", "nitroglycerin"],
    route: "Oral cavity, sublingual",
    preparation: "Compression / rapid dissolving design",
    representative: "Nitroglycerin tablet",
    summary:
      "A tablet placed under the tongue to dissolve rapidly and absorb through the sublingual mucosa.",
    visual: "sublingual",
    image: "",
    patient: [
      {
        title: "What is this tablet?",
        icon: "ℹ️",
        text:
          "This tablet is placed under the tongue and allowed to dissolve. It is not meant to be swallowed whole."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Place the tablet under the tongue.",
          "Let it dissolve completely.",
          "Do not swallow, chew, or move it around unnecessarily.",
          "Avoid eating or drinking until it has dissolved if instructed."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Rapid effect, important in angina attacks.",
          "Avoids some stomach and liver breakdown of the drug."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Sublingual nitroglycerin tablets are often sensitive to light and moisture. Keep the container tightly closed and do not transfer to another bottle unless advised.",
        video: {
          title: "Patient clip: emergency sublingual use demonstration",
          duration: "01:11"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Sublingual tablets are inserted beneath the tongue. The rich sublingual vascular network allows rapid systemic absorption."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Size", value: "Usually small and thin" },
          { label: "Dissolution", value: "Rapid in saliva" },
          { label: "Route advantage", value: "Bypasses first-pass metabolism to a significant extent" }
        ]
      },
      {
        title: "Manufacturing / formulation considerations",
        icon: "⚙️",
        list: [
          "Use rapidly dissolving excipients.",
          "Avoid irritant materials.",
          "Protect unstable drugs from light, moisture, and air.",
          "Ensure adequate drug solubility for mucosal absorption."
        ]
      },
      {
        title: "Representative lecture example",
        icon: "🧪",
        text:
          "Nitroglycerin sublingual tablets are classic examples for rapid relief of angina."
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Dissolution time.",
          "Content uniformity.",
          "Stability under storage conditions.",
          "Moisture and light protection validation."
        ],
        video: {
          title: "Pharmacist clip: sublingual pharmacokinetic advantage",
          duration: "01:31"
        }
      }
    ]
  },

  {
    id: "lozenges",
    name: "Lozenge / Pastille",
    categories: ["cavity"],
    tags: ["slow dissolve", "throat", "local action"],
    route: "Oral cavity, local",
    preparation: "Molding or compression, slow-dissolving design",
    representative: "Antiseptic or soothing throat lozenge",
    summary:
      "A tablet that dissolves slowly in saliva to deliver local action in the mouth or throat.",
    visual: "lozenge",
    image: "",
    patient: [
      {
        title: "What is this?",
        icon: "ℹ️",
        text:
          "A lozenge is meant to be sucked slowly in the mouth. It is not chewed or swallowed whole."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Let it dissolve slowly in the mouth.",
          "Do not chew or swallow it whole.",
          "Use as directed for sore throat or local mouth treatment."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Prolongs contact with throat or oral mucosa.",
          "Can deliver antiseptic, soothing, or local medicinal effects."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Lozenges can be a choking risk for young children if swallowed improperly.",
        video: {
          title: "Patient clip: how to suck a lozenge correctly",
          duration: "00:50"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Lozenges are tablets that dissolve slowly in saliva in the mouth. They are used for local medication of the mouth or throat, for example antiseptic action."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Release", value: "Slow erosion by saliva" },
          { label: "Disintegrants", value: "Generally not used" },
          { label: "Excipient requirement", value: "Water-soluble and good taste" }
        ]
      },
      {
        title: "Important excipients",
        icon: "🧪",
        list: [
          "Fillers: sorbitol and mannitol",
          "Common binder: gelatin",
          "Flavoring and sweetening systems for palatability"
        ]
      },
      {
        title: "Manufacturing considerations",
        icon: "⚙️",
        list: [
          "Must maintain cohesion during slow dissolution.",
          "Should not fragment too quickly.",
          "Taste and mouth feel are critical."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Dissolution/erosion time.",
          "Content uniformity.",
          "Organoleptic properties.",
          "Microbial quality where relevant."
        ],
        video: {
          title: "Pharmacist clip: lozenge slow-release logic",
          duration: "01:07"
        }
      }
    ]
  },

  {
    id: "dental-cone",
    name: "Dental Cone",
    categories: ["cavity"],
    tags: ["tooth socket", "local", "astringent", "antibacterial"],
    route: "Dental socket",
    preparation: "Loose molding / specialized local form",
    representative: "Antibacterial or astringent dental cone",
    summary:
      "A form designed to be placed in an extraction socket and dissolve or erode slowly over 20 to 40 minutes.",
    visual: "dental",
    image: "",
    patient: [
      {
        title: "What is this?",
        icon: "ℹ️",
        text:
          "A dental cone is placed by the dentist into the empty socket after tooth extraction. It is meant to stay there and act locally."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Do not disturb the socket after placement.",
          "Follow dental instructions regarding rinsing and eating.",
          "The cone is designed to dissolve or erode slowly."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Can help control local infection risk.",
          "Can help reduce bleeding using astringent or coagulant action."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "This is a dental local form. It should be placed and managed by a dental professional.",
        video: {
          title: "Patient clip: what to expect after dental cone placement",
          duration: "00:58"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Dental cones are designed to be loosely packed in the empty socket remaining after tooth extraction. They dissolve or erode slowly in the presence of a small volume of fluid over a 20 to 40 minute period."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Placement", value: "Extraction socket" },
          { label: "Behavior", value: "Slow erosion in small fluid volume" },
          { label: "Purpose", value: "Local antibacterial, astringent, or coagulant effect" }
        ]
      },
      {
        title: "Formulation purpose",
        icon: "⚙️",
        list: [
          "Prevent multiplication of bacteria in the socket.",
          "Reduce bleeding through astringent or coagulant action.",
          "Maintain local contact time without rapid washout."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Erosion time.",
          "Sterility or microbial control where appropriate.",
          "Content uniformity.",
          "Physical fit for socket placement."
        ],
        video: {
          title: "Pharmacist clip: dental cone local delivery concept",
          duration: "01:04"
        }
      }
    ]
  },

  {
    id: "implantation",
    name: "Implantation Tablet",
    categories: ["other"],
    tags: ["subdermal", "prolonged release", "Norplant"],
    route: "Under the skin",
    preparation: "Specialized solid implant form",
    representative: "Norplant contraceptive implant, historical example",
    summary:
      "Small tablets or rod-like implants inserted under the skin to provide prolonged drug effect from months to years.",
    visual: "implant",
    image: "",
    patient: [
      {
        title: "What is this?",
        icon: "ℹ️",
        text:
          "An implantation tablet or implant is placed under the skin by a healthcare professional. It releases medicine slowly over a long period."
      },
      {
        title: "How it is used",
        icon: "📋",
        list: [
          "Inserted and removed only by trained clinicians.",
          "Effect may last months to years.",
          "Follow-up appointments are important."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Very long duration of action.",
          "Reduces need for daily dosing."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Do not attempt self-insertion or removal. Migration, infection, or improper removal can occur.",
        video: {
          title: "Patient clip: implant aftercare basics",
          duration: "01:09"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Implantation tablets are small solid forms inserted under the skin. Their purpose is to provide prolonged drug effect ranging from months to years."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Route", value: "Subdermal implantation" },
          { label: "Release", value: "Prolonged diffusion or erosion" },
          { label: "Example", value: "Norplant, first FDA-approved contraceptive implant in 1990" }
        ]
      },
      {
        title: "Manufacturing / formulation considerations",
        icon: "⚙️",
        list: [
          "Sterile manufacturing and handling.",
          "Controlled polymer or matrix release system.",
          "Mechanical strength for insertion and removal.",
          "Long-term stability."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Sterility.",
          "In vitro release profile.",
          "Dimensions and insertion compatibility.",
          "Content uniformity and stability."
        ],
        video: {
          title: "Pharmacist clip: implant release systems",
          duration: "01:38"
        }
      }
    ]
  },

  {
    id: "vaginal",
    name: "Vaginal Tablet",
    categories: ["other"],
    tags: ["local", "clotrimazole", "applicator"],
    route: "Vaginal",
    preparation: "Compression / specialized local base",
    representative: "Clotrimazole vaginal tablet",
    summary:
      "A tablet inserted locally into the vagina to treat local infections or deliver regional effect.",
    visual: "vaginal",
    image: "",
    patient: [
      {
        title: "What is this?",
        icon: "ℹ️",
        text:
          "This tablet is inserted into the vagina, usually with an applicator, to treat local infection or symptoms."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Wash hands before handling.",
          "Insert deeply using the applicator if provided.",
          "Lie down afterward if advised.",
          "Complete the full course even if symptoms improve."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Targets the site of infection directly.",
          "Can reduce systemic exposure compared with oral dosing."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Some vaginal tablets are for local use only and should not be swallowed.",
        video: {
          title: "Patient clip: vaginal tablet insertion guidance",
          duration: "01:14"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Vaginal tablets are inserted locally in the vagina. They are designed to dissolve, melt, or disperse in vaginal fluids to produce local effect."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Shape", value: "Ovoid, torpedo, or applicator-compatible form" },
          { label: "Base", value: "Water-soluble or fusible local base" },
          { label: "Action", value: "Mostly local, e.g. antifungal therapy" }
        ]
      },
      {
        title: "Manufacturing / formulation considerations",
        icon: "⚙️",
        list: [
          "Comfortable insertion geometry.",
          "Adequate dispersion or dissolution at body temperature.",
          "Local tolerability and pH considerations.",
          "Compatibility with applicator materials."
        ]
      },
      {
        title: "Representative lecture example",
        icon: "🧪",
        text:
          "Clotrimazole vaginal tablet is a typical local antifungal example."
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Disintegration or dissolution.",
          "Content uniformity.",
          "Microbial quality.",
          "Physical shape and insertability."
        ],
        video: {
          title: "Pharmacist clip: vaginal local delivery design",
          duration: "01:17"
        }
      }
    ]
  },

  {
    id: "effervescent",
    name: "Effervescent Tablet",
    categories: ["solution", "oral"],
    tags: ["CO2 release", "vitamin C", "never swallow whole"],
    route: "Oral after dissolution in water",
    preparation: "Compression under dry conditions",
    representative: "Vitamin C effervescent tablet",
    summary:
      "A tablet containing acid and carbonate/bicarbonate systems that release carbon dioxide when dissolved in water.",
    visual: "effervescent",
    image: "",
    patient: [
      {
        title: "What is this?",
        icon: "ℹ️",
        text:
          "This tablet must be dissolved in water before drinking. It fizzes because carbon dioxide gas is released."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Drop the tablet into a full glass of water.",
          "Wait until fizzing stops and the tablet dissolves.",
          "Drink the solution.",
          "Never swallow the tablet whole."
        ]
      },
      {
        title: "Why it is useful",
        icon: "✅",
        list: [
          "Pleasant taste.",
          "Helps with hydration.",
          "Can be easier for patients who dislike swallowing tablets."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Effervescent products may contain sodium. People on salt-restricted diets should check the product. Keep tablets in moisture-proof packaging.",
        video: {
          title: "Patient clip: effervescent tablet safety demonstration",
          duration: "01:13"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Effervescent tablets are prepared by compression and contain mixtures of acids such as citric acid and sodium bicarbonate, which release carbon dioxide when dissolved in water."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Reaction pair", value: "Organic acid + bicarbonate/carbonate" },
          { label: "Gas produced", value: "Carbon dioxide" },
          { label: "Final form", value: "Ready-to-drink solution after dissolution" }
        ]
      },
      {
        title: "Manufacturing process",
        icon: "⚙️",
        list: [
          "Use dry granulation or direct compression under controlled humidity.",
          "All excipients must be water-soluble.",
          "Avoid premature acid-base reaction during manufacturing.",
          "Package in moisture-proof containers or blister foils."
        ]
      },
      {
        title: "Important excipients",
        icon: "🧪",
        list: [
          "Citric acid or tartaric acid",
          "Sodium bicarbonate",
          "Soluble diluents and flavoring systems",
          "Moisture-barrier packaging components"
        ]
      },
      {
        title: "Labeling and storage",
        icon: "⚠️",
        text:
          "They should be stored in tightly closed containers or moisture-proof packs and labeled to indicate that they are not to be swallowed directly."
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Disintegration/dissolution in water.",
          "Moisture content control.",
          "CO2 evolution consistency.",
          "Packaging integrity."
        ],
        video: {
          title: "Pharmacist clip: effervescent chemistry and packaging",
          duration: "01:29"
        }
      }
    ]
  },

  {
    id: "dispensing",
    name: "Dispensing Tablet",
    categories: ["solution"],
    tags: ["soluble", "solution preparation", "compounding"],
    route: "After dissolution, as directed",
    preparation: "Compression of fully soluble ingredients",
    representative: "Soluble dispensing tablet, compounding example",
    summary:
      "A soluble tablet intended for application or use after dissolution in water.",
    visual: "dispensing",
    image: "",
    patient: [
      {
        title: "What is this?",
        icon: "ℹ️",
        text:
          "This tablet is meant to be dissolved in water to prepare a solution or suspension for use as directed. Do not assume it is a normal swallowed tablet."
      },
      {
        title: "How to use it",
        icon: "📋",
        list: [
          "Dissolve in the specified amount of water.",
          "Use immediately or as directed.",
          "Follow the exact route of administration stated by the pharmacist or prescriber.",
          "Do not swallow whole unless the product is intended for that use."
        ]
      },
      {
        title: "Safety note",
        icon: "⚠️",
        warning:
          "Dispensing tablets are preparation forms. The final use may be topical, gargle, irrigation, or another directed route.",
        video: {
          title: "Patient clip: preparing a dispensing tablet solution",
          duration: "01:01"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Dispensing tablets are soluble tablets intended for application after dissolution in water. They are used to prepare a solution or usable mixture at the point of care or home use."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Solubility", value: "All excipients must be completely water-soluble" },
          { label: "Function", value: "Accurate solid measure for solution preparation" },
          { label: "Use", value: "Dissolved before administration/application" }
        ]
      },
      {
        title: "Manufacturing considerations",
        icon: "⚙️",
        list: [
          "Choose fully soluble diluents and binders.",
          "Ensure rapid and complete dissolution.",
          "Avoid residues or insoluble lubricants.",
          "Control hygroscopicity."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Dissolution time.",
          "Clarity of resulting solution where required.",
          "Content uniformity.",
          "pH and compatibility with final use."
        ],
        video: {
          title: "Pharmacist clip: dispensing tablet solubility requirements",
          duration: "01:06"
        }
      }
    ]
  },

  {
    id: "hypodermic",
    name: "Hypodermic Tablet",
    categories: ["solution", "method"],
    tags: ["molded", "injectable solution", "sterile", "historical"],
    route: "Parenteral after dissolution, professional use only",
    preparation: "Molding of soluble ingredients",
    representative: "Morphine hypodermic tablet, historical/official example",
    summary:
      "A molded tablet made from completely and readily soluble ingredients to form an injectable solution after dissolution.",
    visual: "hypodermic",
    image: "",
    patient: [
      {
        title: "What is this?",
        icon: "ℹ️",
        text:
          "This is not a normal tablet for patients. It is a specialized soluble tablet historically used to prepare an injectable solution under professional control."
      },
      {
        title: "Important safety message",
        icon: "⚠️",
        warning:
          "Never attempt to prepare or inject from a tablet at home. Sterility, dose accuracy, and solution safety are medical concerns.",
        video: {
          title: "Patient-facing safety clip: why hypodermic tablets are professional-only",
          duration: "00:59"
        }
      }
    ],
    pharmacist: [
      {
        title: "General background",
        icon: "📚",
        text:
          "Hypodermic tablets are molded tablets made from completely and readily soluble ingredients to form an injectable solution. They represent a historical/specialized dosage form concept."
      },
      {
        title: "Architecture and structural design",
        icon: "🧱",
        facts: [
          { label: "Form", value: "Molded, highly soluble compact" },
          { label: "Final use", value: "Dissolved to prepare injectable solution" },
          { label: "Critical requirement", value: "Solubility, purity, sterility considerations" }
        ]
      },
      {
        title: "Manufacturing considerations",
        icon: "⚙️",
        list: [
          "Use readily soluble ingredients.",
          "Avoid insoluble excipients.",
          "Control microbial and particulate quality.",
          "Ensure accurate dose in final solution."
        ]
      },
      {
        title: "Quality control",
        icon: "🔍",
        list: [
          "Complete dissolution in water.",
          "Clarity and absence of particles.",
          "Content uniformity.",
          "Sterility or pyrogen control where applicable."
        ],
        video: {
          title: "Pharmacist clip: hypodermic tablet concept and modern relevance",
          duration: "01:24"
        }
      }
    ]
  }
];
