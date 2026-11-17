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
      "anti-inflammatory"
    ],
    summary:
      "Sugar-coated diclofenac potassium tablet. The sugar coating masks unpleasant taste and odor, improves appearance, and makes swallowing easier.",
    visual: "sugar",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        videoKey: "dosage",
        text:
          "Common adult dose: 50 mg two or three times daily, depending on the indication. Use the lowest effective dose for the shortest duration."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Take with food or milk if stomach discomfort occurs.",
          "Avoid combining with other NSAIDs without medical advice."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
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
        videoKey: "contraindications",
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
        videoKey: "api",
        text: "Diclofenac potassium."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Sugar-coated tablet."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text:
          "Tablet core excipients and sugar-coating materials."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Requires confirmation from the Egyptian package."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
        list: [
          "A compressed tablet core contains the API and excipients.",
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
      "sugar coated"
    ],
    summary:
      "Sugar-coated combination B-vitamin tablet. The coating masks unpleasant taste and improves appearance and swallowability.",
    visual: "sugar",
    image: "",
    patient: [
      {
        title: "Dosage and administration",
        icon: "clipboard",
        videoKey: "dosage",
        text:
          "Depends on the vitamin deficiency and prescribed regimen."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Swallow as directed.",
          "Avoid excessive vitamin B6 intake for prolonged periods."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
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
        videoKey: "contraindications",
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
        videoKey: "api",
        text:
          "Vitamin B1 (Thiamine): 250 mg. Vitamin B6 (Pyridoxine): 100 mg. Vitamin B12 (Cyanocobalamin): 250 mcg."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Sugar-coated tablet."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text: "Core excipients and sugar-coating materials."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "European Egyptian Pharmaceutical Industries."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
        videoKey: "dosage",
        text:
          "Usually starts at 5 mg once daily. May increase to 10 mg after at least 4–6 weeks."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Usually taken in the evening.",
          "Can be taken with or without food.",
          "Maintain a consistent schedule."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
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
        videoKey: "contraindications",
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
        videoKey: "api",
        text: "Donepezil hydrochloride."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Film-coated tablet."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text: "Manufacturer-specific."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Eisai (original brand)."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
        videoKey: "dosage",
        text:
          "Cannot be specified until the active ingredient and strength are confirmed."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        text:
          "Follow the instructions for the confirmed active ingredient."
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
        text:
          "Cannot be reliably specified without confirming the API."
      },
      {
        title: "Contraindications",
        icon: "shield",
        videoKey: "contraindications",
        text: "Depend on the confirmed active ingredient."
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        videoKey: "api",
        text: "Requires verification from the Egyptian package."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Film-coated tablet according to the supplied classification."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text: "Manufacturer-specific."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Requires verification."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
        videoKey: "dosage",
        text:
          "A common adult regimen is 500 mg on day 1, followed by 250 mg daily on days 2–5. Other regimens depend on the infection."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Follow the prescribed antibiotic schedule.",
          "Complete the prescribed course."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
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
        videoKey: "contraindications",
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
        videoKey: "api",
        text: "Azithromycin."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Film-coated tablet."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text: "Exact inactive ingredients require the leaflet."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Gypto Pharma."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
        videoKey: "dosage",
        text:
          "Depends on the product strength and prescribed indication."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Swallow whole.",
          "Do not crush or chew the enteric coating."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
        list: [
          "Gastrointestinal discomfort.",
          "Nausea and diarrhea.",
          "Possible allergic reactions."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        videoKey: "contraindications",
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
        videoKey: "api",
        text: "Pancreatin: 200 mg. Papain: 50 mg."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Enteric-coated tablet."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text:
          "Croscarmellose sodium, colloidal silicon dioxide, microcrystalline cellulose, titanium dioxide, and talc (reported formulation)."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Pharopharma."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
        videoKey: "dosage",
        text:
          "Follow the prescribed dose and exact product leaflet."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Swallow whole.",
          "Do not crush or chew."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
        list: [
          "Gastrointestinal disturbances.",
          "Hypersensitivity reactions."
        ]
      },
      {
        title: "Contraindications",
        icon: "shield",
        videoKey: "contraindications",
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
        videoKey: "api",
        text: "Trypsin: 300 E.A.U. Chymotrypsin: 300 E.A.U."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Gastro-resistant, enterosoluble tablet."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text:
          "Exact inactive ingredients require the manufacturer's leaflet."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Confirm from the Egyptian package."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
        videoKey: "dosage",
        text:
          "Children aged 2–5 years: 5 mg once daily."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Chew the tablet before swallowing."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
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
        videoKey: "contraindications",
        list: [
          "Hypersensitivity to loratadine or any product ingredient."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        videoKey: "api",
        text: "Loratadine."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Chewable tablet, 5 mg presentation."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text: "Formulation-specific."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Bayer (original brand)."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
        videoKey: "dosage",
        text:
          "Children aged 2–5 years: 4 mg once daily."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Chew thoroughly.",
          "Not intended for immediate relief of an acute asthma attack."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
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
        videoKey: "contraindications",
        list: [
          "Hypersensitivity to montelukast or any formulation ingredient."
        ]
      }
    ],
    pharmacist: [
      {
        title: "API",
        icon: "flask",
        videoKey: "api",
        text: "Montelukast 4 mg, verify the Egyptian pack."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Chewable tablet."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text:
          "Sweeteners, flavouring agents, fillers, binders, and lubricants."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Requires verification."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
        videoKey: "dosage",
        text:
          "Depends on the strength and indication. Pediatric aspirin use requires particular caution."
      },
      {
        title: "Administration tips",
        icon: "check",
        videoKey: "administration-tips",
        list: [
          "Do not use for viral fever or flu symptoms in children unless specifically prescribed."
        ]
      },
      {
        title: "Side effects",
        icon: "alert",
        videoKey: "side-effects",
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
        videoKey: "contraindications",
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
        videoKey: "api",
        text: "Acetylsalicylic acid (Aspirin)."
      },
      {
        title: "Tablet formulation",
        icon: "layers",
        videoKey: "tablet-formulation",
        text: "Chewable tablet."
      },
      {
        title: "Excipients",
        icon: "settings",
        videoKey: "excipients",
        text:
          "Exact formulation requires the manufacturer leaflet."
      },
      {
        title: "Manufacturer",
        icon: "package",
        videoKey: "manufacturer",
        text: "Requires verification."
      },
      {
        title: "Architecture and structural design",
        icon: "layers",
        videoKey: "architecture",
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
