const TABLETS = [
  {
    id: "vastaflam",
    name: "Vastaflam",
    type: "Sugar-coated tablet",
    formulation: "Sugar-coated tablet",
    api: "Diclofenac potassium",
    manufacturer: "Requires confirmation from the Egyptian package.",
    route: "Oral ingestion",
    preparation: "Compression + sugar coating",
    categories: ["oral", "modified", "sugar"],
    filters: ["sugar"],
    tags: [
      "Diclofenac potassium",
      "NSAID",
      "sugar coated",
      "oral",
      "anti-inflammatory",
      "analgesic"
    ],
    summary:
      "Sugar-coated diclofenac potassium tablet. The sugar coating masks unpleasant taste and odor, improves appearance, and makes swallowing easier.",
    visual: "sugar",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Common adult dose: 50 mg two or three times daily, depending on the indication. Use the lowest effective dose for the shortest duration."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Take with food or milk if stomach discomfort occurs.",
          "Avoid combining with other NSAIDs without medical advice.",
          "Swallow whole with water unless instructed otherwise."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Nausea and indigestion.",
          "Abdominal pain and diarrhea.",
          "Dizziness.",
          "Serious risks: GI bleeding, kidney injury, and cardiovascular events."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Diclofenac hypersensitivity.",
          "History of NSAID-induced asthma or allergic reactions.",
          "Active gastrointestinal bleeding or ulceration.",
          "Perioperative use in coronary artery bypass surgery."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Diclofenac potassium."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Sugar-coated compressed tablet. The core contains diclofenac potassium with diluents, binder, disintegrant, glidant, and lubricant. External sugar-coating layers improve swallowability, mask taste/odor, and enhance appearance."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Tablet core diluents: lactose monohydrate and/or microcrystalline cellulose.",
          "Binder: povidone or equivalent sugar-coating compatible binder.",
          "Disintegrant: croscarmellose sodium or pregelatinised starch.",
          "Glidant: colloidal silicon dioxide.",
          "Lubricant: magnesium stearate.",
          "Sugar-coating layers: sucrose, calcium carbonate, talc, and acacia/gum arabic.",
          "Opacifier/colour base: titanium dioxide and permitted colourants.",
          "Polishing system: carnauba wax and/or macrogol/PEG."
        ],
        note:
          "Representative sugar-coated diclofenac potassium excipient profile compiled from standard pharmaceutics references and common product-information patterns. Exact proprietary composition must be confirmed from the Egyptian package insert."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Requires confirmation from the Egyptian package."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "A compressed tablet core contains the API and core excipients.",
          "Multiple sugar-coating layers surround the core.",
          "The coating masks unpleasant taste and odor.",
          "Improves appearance and makes swallowing easier.",
          "Provides some protection against moisture and light."
        ]
      }
    ]
  },

  {
    id: "neurovit",
    name: "Neurovit",
    type: "Sugar-coated tablet",
    formulation: "Sugar-coated tablet",
    api:
      "Vitamin B1 (Thiamine) 250 mg, Vitamin B6 (Pyridoxine) 100 mg, Vitamin B12 (Cyanocobalamin) 250 mcg",
    manufacturer: "European Egyptian Pharmaceutical Industries",
    route: "Oral ingestion",
    preparation: "Compression + sugar coating",
    categories: ["oral", "modified", "sugar"],
    filters: ["sugar"],
    tags: [
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin B12",
      "thiamine",
      "pyridoxine",
      "cyanocobalamin",
      "sugar coated",
      "neuropathy"
    ],
    summary:
      "Sugar-coated combination B-vitamin tablet. The coating masks unpleasant taste and improves appearance and swallowability.",
    visual: "sugar",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Depends on the vitamin deficiency and prescribed regimen."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Swallow whole as directed.",
          "Avoid excessive vitamin B6 intake for prolonged periods.",
          "Take at consistent times if prescribed daily."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Nausea and vomiting.",
          "Gastrointestinal discomfort.",
          "Allergic reactions.",
          "Excessive prolonged B6 intake may cause peripheral neuropathy."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Hypersensitivity to any component.",
          "Other restrictions depend on the formulation and dose."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text:
          "Vitamin B1 (Thiamine): 250 mg. Vitamin B6 (Pyridoxine): 100 mg. Vitamin B12 (Cyanocobalamin): 250 mcg."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Sugar-coated compressed tablet containing thiamine, pyridoxine, and cyanocobalamin. The external sugar coat improves organoleptic properties and facilitates swallowing of high-dose B-vitamin combinations."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Core diluent: lactose monohydrate and/or microcrystalline cellulose.",
          "Core binder: povidone or starch-based binder.",
          "Core disintegrant: croscarmellose sodium, sodium starch glycolate, or pregelatinised starch.",
          "Core glidant: colloidal silicon dioxide.",
          "Core lubricant: magnesium stearate.",
          "Sugar coat: sucrose, calcium carbonate, talc, and acacia/gum arabic.",
          "Coating opacifier: titanium dioxide.",
          "Coating polish: carnauba wax and/or macrogol/PEG."
        ],
        note:
          "Representative sugar-coated B-complex tablet excipient profile based on common product-information patterns and standard tablet formulation principles. Exact EEPI proprietary composition should be verified from the official leaflet."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "European Egyptian Pharmaceutical Industries."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed core containing the three B vitamins.",
          "External sugar coating masks unpleasant taste.",
          "Improves appearance and facilitates swallowing.",
          "Provides some protection against environmental factors."
        ]
      }
    ]
  },

  {
    id: "aricept",
    name: "Aricept",
    type: "Film-coated tablet",
    formulation: "Film-coated tablet",
    api: "Donepezil hydrochloride",
    manufacturer: "Eisai (original brand)",
    route: "Oral ingestion",
    preparation: "Compression + film coating",
    categories: ["oral", "modified", "film"],
    filters: ["film"],
    tags: [
      "Donepezil",
      "donepezil hydrochloride",
      "film coated",
      "Alzheimer",
      "cholinesterase inhibitor"
    ],
    summary:
      "Film-coated donepezil hydrochloride tablet. The thin polymer film improves appearance, masks taste, and facilitates swallowing.",
    visual: "film",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Usually starts at 5 mg once daily. May increase to 10 mg after at least 4–6 weeks."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Usually taken in the evening.",
          "Can be taken with or without food.",
          "Maintain a consistent schedule.",
          "Swallow whole with water."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Nausea and diarrhea.",
          "Vomiting.",
          "Insomnia.",
          "Muscle cramps.",
          "Fatigue and loss of appetite."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Hypersensitivity to donepezil.",
          "Hypersensitivity to piperidine derivatives."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Donepezil hydrochloride."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Film-coated compressed tablet. The core contains donepezil hydrochloride with lactose, microcrystalline cellulose, starch, and magnesium stearate. A thin opacified polymer film coat improves handling, appearance, and patient acceptability."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Core diluent: lactose monohydrate.",
          "Core microdiluent/bulk: microcrystalline cellulose.",
          "Core disintegrant: pregelatinised maize starch.",
          "Core lubricant: magnesium stearate.",
          "Film coat polymer: hypromellose/HPMC.",
          "Film coat opacifier: titanium dioxide.",
          "Film coat plasticizer: triacetin or equivalent.",
          "Film coat colourant: permitted iron oxide, commonly red for 5 mg and yellow for 10 mg presentations where applicable."
        ],
        note:
          "Excipient pattern aligned with Aricept/donepezil film-coated tablet product-information conventions. Local generic or market-specific versions may differ; confirm from the dispensed pack."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Eisai (original brand)."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed tablet core containing donepezil.",
          "Thin polymer film surrounds the core.",
          "Masks unpleasant taste and improves appearance.",
          "Facilitates swallowing and provides some moisture protection.",
          "Ordinary film coating does not necessarily prevent stomach dissolution."
        ]
      }
    ]
  },

  {
    id: "gliptalina",
    name: "Gliptalina",
    type: "Film-coated tablet",
    formulation: "Film-coated tablet",
    api: "Requires verification from the Egyptian package.",
    manufacturer: "Requires verification.",
    route: "Oral ingestion",
    preparation: "Compression + film coating",
    categories: ["oral", "modified", "film"],
    filters: ["film"],
    tags: [
      "Gliptalina",
      "film coated",
      "verification required",
      "unknown API"
    ],
    summary:
      "Film-coated tablet. The active ingredient and manufacturer require verification from the Egyptian package.",
    visual: "film",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Cannot be specified until the active ingredient and strength are confirmed."
      },
      {
        title: "Administration tips",
        icon: "check",
        text:
          "Follow the instructions for the confirmed active ingredient."
      },
      {
        title: "Side effects",
        icon: "alert",
        text:
          "Cannot be reliably specified without confirming the API."
      },
      {
        title: "Contraindications",
        icon: "shield",
        text: "Depend on the confirmed active ingredient."
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Requires verification from the Egyptian package."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Film-coated compressed tablet. The core is coated with a thin polymer film to improve appearance, mask taste, and facilitate handling. Film coating alone does not imply enteric or modified release."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Core diluent: lactose monohydrate and/or microcrystalline cellulose.",
          "Core binder: povidone or hydroxypropyl cellulose.",
          "Core disintegrant: croscarmellose sodium or sodium starch glycolate.",
          "Core glidant: colloidal silicon dioxide.",
          "Core lubricant: magnesium stearate.",
          "Film coat polymer: hypromellose/HPMC or polyvinyl alcohol-based system.",
          "Film coat plasticizer: macrogol/PEG or triacetin.",
          "Film coat opacifier: titanium dioxide.",
          "Film coat colourants: permitted iron oxides if coloured."
        ],
        note:
          "Because the exact API and manufacturer are not confirmed, this is a representative film-coated tablet excipient profile. Verify the official Egyptian leaflet before using as definitive data."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Requires verification."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed tablet core.",
          "Thin polymer film surrounds the core.",
          "Improves appearance and handling.",
          "Masks unpleasant taste.",
          "Facilitates swallowing.",
          "Does not automatically indicate delayed or intestinal release."
        ]
      }
    ]
  },

  {
    id: "zithrotac",
    name: "Zithrotac",
    type: "Film-coated tablet",
    formulation: "Film-coated tablet",
    api: "Azithromycin",
    manufacturer: "Gypto Pharma",
    route: "Oral ingestion",
    preparation: "Compression + film coating",
    categories: ["oral", "modified", "film"],
    filters: ["film"],
    tags: [
      "Azithromycin",
      "macrolide",
      "antibiotic",
      "film coated",
      "Gypto Pharma"
    ],
    summary:
      "Film-coated azithromycin tablet. The film coating improves taste and swallowing and provides some protection to the tablet core.",
    visual: "film",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "A common adult regimen is 500 mg on day 1, followed by 250 mg daily on days 2–5. Other regimens depend on the infection."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Follow the prescribed antibiotic schedule.",
          "Complete the prescribed course.",
          "Swallow whole with water unless instructed otherwise."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Diarrhea.",
          "Nausea and vomiting.",
          "Abdominal pain.",
          "Rare serious effects: QT prolongation and liver injury."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Hypersensitivity to azithromycin or other macrolides.",
          "Previous azithromycin-associated cholestatic jaundice or hepatic dysfunction."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Azithromycin."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Film-coated compressed azithromycin tablet. The core contains the macrolide antibiotic with diluent, binder, disintegrant, and lubricant. The external film coat improves taste masking, handling, and appearance."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Core diluent: dibasic calcium phosphate anhydrous, lactose monohydrate, or microcrystalline cellulose.",
          "Wetting/surfactant aid: sodium lauryl sulfate, where used.",
          "Core binder: hydroxypropyl cellulose or povidone.",
          "Core disintegrant: sodium starch glycolate or croscarmellose sodium.",
          "Core lubricant: magnesium stearate.",
          "Core glidant: colloidal silicon dioxide.",
          "Film coat polymer: hypromellose/HPMC.",
          "Film coat plasticizer: macrogol/PEG or triacetin.",
          "Film coat opacifier: titanium dioxide."
        ],
        note:
          "Representative azithromycin film-coated tablet excipient profile compiled from common azithromycin product-information patterns and standard formulation references. Exact Gypto Pharma composition requires the official leaflet."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Gypto Pharma."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed core containing azithromycin.",
          "External polymer film surrounds the tablet.",
          "Improves taste and swallowing.",
          "Provides some protection to the tablet core.",
          "Not equivalent to enteric or modified-release coating."
        ]
      }
    ]
  },

  {
    id: "digestozyme",
    name: "Digestozyme",
    type: "Enteric-coated tablet",
    formulation: "Enteric-coated tablet",
    api: "Pancreatin 200 mg, Papain 50 mg",
    manufacturer: "Pharopharma",
    route: "Oral ingestion",
    preparation: "Compression + enteric coating",
    categories: ["oral", "modified", "enteric"],
    filters: ["enteric"],
    tags: [
      "Pancreatin",
      "Papain",
      "digestive enzymes",
      "enteric coated",
      "Pharopharma"
    ],
    summary:
      "Enteric-coated digestive enzyme tablet. The coating protects acid-sensitive enzymes from gastric degradation and releases them in the intestine.",
    visual: "enteric",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Depends on the product strength and prescribed indication."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Swallow whole.",
          "Do not crush or chew the enteric coating.",
          "Take as directed with meals if advised."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Gastrointestinal discomfort.",
          "Nausea and diarrhea.",
          "Possible allergic reactions."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Hypersensitivity to pancreatin.",
          "Hypersensitivity to papain or other formulation ingredients."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Pancreatin: 200 mg. Papain: 50 mg."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Enteric-coated compressed tablet containing digestive enzymes. The core is designed to remain intact in gastric fluid and release enzymes in the intestine, protecting acid-labile pancreatic and proteolytic enzymes."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Core bulk/diluent: microcrystalline cellulose.",
          "Core disintegrant: croscarmellose sodium.",
          "Core glidant: colloidal silicon dioxide.",
          "Core lubricant: magnesium stearate, where compatible with enzyme processing.",
          "Enteric coat polymer: methacrylic acid copolymer, commonly Eudragit L/S-type material.",
          "Enteric coat plasticizer: triethyl citrate or macrogol/PEG.",
          "Coat opacifier/pigment: titanium dioxide.",
          "Coat anti-tacking agent: talc."
        ],
        note:
          "Reported formulation ingredients include croscarmellose sodium, colloidal silicon dioxide, microcrystalline cellulose, titanium dioxide, and talc. The enteric polymer/plasticizer system is representative of gastro-resistant enzyme tablets; exact Pharopharma composition should be confirmed from the official leaflet."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Pharopharma."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed core containing digestive enzymes.",
          "Surrounded by an enteric coating.",
          "The coating resists dissolution in the acidic stomach environment.",
          "Dissolves in the intestine.",
          "Protects acid-sensitive enzymes from gastric degradation."
        ]
      }
    ]
  },

  {
    id: "alphintern",
    name: "Alphintern",
    type: "Gastro-resistant, enterosoluble tablet",
    formulation: "Gastro-resistant, enterosoluble tablet",
    api: "Trypsin 300 E.A.U., Chymotrypsin 300 E.A.U.",
    manufacturer: "Confirm from the Egyptian package.",
    route: "Oral ingestion",
    preparation: "Compression + gastro-resistant coating",
    categories: ["oral", "modified", "enteric"],
    filters: ["enteric"],
    tags: [
      "Trypsin",
      "Chymotrypsin",
      "proteolytic enzymes",
      "enteric coated",
      "gastro-resistant"
    ],
    summary:
      "Gastro-resistant, enterosoluble proteolytic enzyme tablet. The acid-resistant coating prevents premature dissolution in the stomach.",
    visual: "enteric",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Follow the prescribed dose and exact product leaflet."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Swallow whole.",
          "Do not crush or chew.",
          "Take according to the prescribed schedule."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Gastrointestinal disturbances.",
          "Hypersensitivity reactions."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Hypersensitivity to trypsin.",
          "Hypersensitivity to chymotrypsin or formulation ingredients."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Trypsin: 300 E.A.U. Chymotrypsin: 300 E.A.U."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Gastro-resistant, enterosoluble compressed tablet containing proteolytic enzymes. The coating prevents dissolution in the stomach and allows release in the higher-pH intestinal environment."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Core diluent: lactose or mannitol.",
          "Core bulk: microcrystalline cellulose.",
          "Core disintegrant: croscarmellose sodium or starch-based disintegrant.",
          "Core glidant: colloidal silicon dioxide.",
          "Core lubricant: magnesium stearate.",
          "Gastro-resistant coat polymer: methacrylic acid copolymer, Eudragit L/S-type system.",
          "Coat plasticizer: triethyl citrate or macrogol/PEG.",
          "Coat opacifier: titanium dioxide.",
          "Coat anti-tacking/glidant: talc."
        ],
        note:
          "Representative gastro-resistant enzyme tablet excipient profile based on standard enteric-coated protease formulations. Exact Alphintern inactive ingredients require the manufacturer leaflet."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Confirm from the Egyptian package."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed core containing proteolytic enzymes.",
          "Surrounded by an acid-resistant coating.",
          "Prevents premature dissolution in the stomach.",
          "Dissolves in the intestinal environment.",
          "Protects enzymes from gastric acid."
        ]
      }
    ]
  },

  {
    id: "claritin-pediatrics",
    name: "Claritin Pediatrics",
    type: "Chewable tablet",
    formulation: "Chewable tablet",
    api: "Loratadine",
    manufacturer: "Bayer (original brand)",
    route: "Oral ingestion after chewing",
    preparation: "Compression, chewable design",
    categories: ["oral", "chewable"],
    filters: ["chewable"],
    tags: [
      "Loratadine",
      "antihistamine",
      "pediatric",
      "chewable",
      "Claritin"
    ],
    summary:
      "Chewable loratadine pediatric tablet. Designed to be chewed before swallowing to improve palatability for children.",
    visual: "chewable",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Children aged 2–5 years: 5 mg once daily."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Chew the tablet completely before swallowing.",
          "Do not swallow whole unless directed.",
          "Use the paediatric strength appropriate for age."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Headache.",
          "Fatigue.",
          "Dry mouth.",
          "Occasional drowsiness."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Hypersensitivity to loratadine or any product ingredient."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Loratadine."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Chewable compressed tablet containing loratadine. The formulation uses palatable diluents, flavour, and sweetener systems so the tablet can be chewed and dispersed in the mouth before swallowing."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Diluent: lactose monohydrate.",
          "Bulk/structure: microcrystalline cellulose.",
          "Chewable matrix aid: pregelatinised starch.",
          "Taste modifier: citric acid.",
          "Preservative/system aid: sodium benzoate, where used.",
          "Flavouring agent: cherry or equivalent paediatric flavour.",
          "Sweetener: sucralose or equivalent non-caloric sweetener.",
          "Lubricant: magnesium stearate.",
          "Glidant: colloidal silicon dioxide."
        ],
        note:
          "Representative loratadine paediatric chewable tablet excipient profile based on common US/UK product-information patterns for Claritin 5 mg chewable tablets. Exact local formulation may vary."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Bayer (original brand)."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed tablet designed to be chewed before swallowing.",
          "Contains flavouring and sweetening agents.",
          "Improves palatability for children.",
          "Breaks down mechanically in the mouth.",
          "Does not rely on sublingual absorption."
        ]
      }
    ]
  },

  {
    id: "clearair-4mg",
    name: "Clearair 4 mg",
    type: "Chewable tablet",
    formulation: "Chewable tablet",
    api: "Montelukast 4 mg (verify the Egyptian pack)",
    manufacturer: "Requires verification.",
    route: "Oral ingestion after chewing",
    preparation: "Compression, chewable design",
    categories: ["oral", "chewable"],
    filters: ["chewable"],
    tags: [
      "Montelukast",
      "leukotriene receptor antagonist",
      "asthma",
      "chewable",
      "pediatric"
    ],
    summary:
      "Chewable montelukast 4 mg tablet. Designed to be chewed rather than swallowed whole, with sweeteners and flavouring agents to improve taste.",
    visual: "chewable",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Children aged 2–5 years: 4 mg once daily."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Chew thoroughly before swallowing.",
          "Not intended for immediate relief of an acute asthma attack.",
          "Give as part of the prescribed maintenance regimen."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Headache.",
          "Abdominal pain and diarrhea.",
          "Fever.",
          "Upper respiratory infections."
        ],
        warning:
          "Neuropsychiatric reactions, including mood and behavioural changes."
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Hypersensitivity to montelukast or any formulation ingredient."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Montelukast 4 mg, verify the Egyptian pack."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Chewable compressed tablet containing montelukast sodium equivalent to 4 mg montelukast. The matrix uses mannitol and cellulose-based excipients with flavour and sweetener to provide acceptable paediatric chewability."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Chewable diluent: mannitol.",
          "Bulk/diluent: microcrystalline cellulose.",
          "Binder: hydroxypropyl cellulose.",
          "Disintegrant: croscarmellose sodium.",
          "Flavouring agent: cherry or equivalent.",
          "Sweetener: aspartame or equivalent.",
          "Lubricant: magnesium stearate.",
          "Colourant: red ferric oxide, where used."
        ],
        note:
          "Representative montelukast 4 mg chewable tablet excipient profile based on common Singulair-style product information. Exact Clearair manufacturer composition requires verification from the Egyptian pack."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Requires verification."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed chewable matrix.",
          "Sweeteners and flavouring agents improve taste.",
          "Designed to be chewed rather than swallowed whole.",
          "Chewing breaks the tablet into smaller particles."
        ]
      }
    ]
  },

  {
    id: "aspocid-pediatrics",
    name: "Aspocid Pediatrics",
    type: "Chewable tablet",
    formulation: "Chewable tablet",
    api: "Acetylsalicylic acid (Aspirin)",
    manufacturer: "Requires verification.",
    route: "Oral ingestion after chewing",
    preparation: "Compression, chewable design",
    categories: ["oral", "chewable"],
    filters: ["chewable"],
    tags: [
      "Aspirin",
      "acetylsalicylic acid",
      "pediatric",
      "chewable",
      "analgesic",
      "antipyretic"
    ],
    summary:
      "Chewable pediatric aspirin tablet. Designed to be broken down through chewing to facilitate administration for patients who have difficulty swallowing conventional tablets.",
    visual: "chewable",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        text:
          "Depends on the strength and indication. Pediatric aspirin use requires particular caution."
      },
      {
        title: "Administration tips",
        icon: "check",
        list: [
          "Chew thoroughly before swallowing.",
          "Do not use for viral fever or flu symptoms in children unless specifically prescribed.",
          "Follow the exact paediatric dose from the prescriber or leaflet."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        list: [
          "Stomach irritation.",
          "Nausea and heartburn.",
          "Increased bleeding tendency.",
          "Gastrointestinal bleeding."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        list: [
          "Aspirin allergy.",
          "Active bleeding.",
          "Certain bleeding disorders.",
          "Avoid in children with viral infections because of the risk of Reye's syndrome."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        text: "Acetylsalicylic acid (Aspirin)."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text:
          "Chewable compressed aspirin tablet. The formulation is designed to be mechanically broken down in the mouth, using palatable diluents, flavour, and sweetener systems appropriate for paediatric use."
      },
      {
        title: "Excipients",
        icon: "settings",
        list: [
          "Chewable diluent: mannitol and/or sorbitol.",
          "Bulk/diluent: microcrystalline cellulose.",
          "Binder: povidone or starch-based binder.",
          "Disintegrant: croscarmellose sodium or sodium starch glycolate.",
          "Glidant: colloidal silicon dioxide.",
          "Lubricant: magnesium stearate.",
          "Flavouring agent: fruit or mint flavour.",
          "Sweetener: sucralose, aspartame, or equivalent.",
          "Optional buffering agents: sodium bicarbonate or sodium carbonate, only if stated on the official leaflet."
        ],
        note:
          "Representative paediatric chewable aspirin excipient profile compiled from common chewable aspirin formulation patterns. Exact Aspocid Pediatrics composition requires the manufacturer leaflet."
      },
      {
        title: "Manufacturer",
        icon: "package",
        text: "Requires verification."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        list: [
          "Compressed chewable tablet.",
          "Designed to be broken down through chewing.",
          "May contain sweeteners and flavouring agents.",
          "Facilitates administration for patients who have difficulty swallowing conventional tablets."
        ]
      }
    ]
  }
];
