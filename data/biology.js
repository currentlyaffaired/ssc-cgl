const biologyData = [

/* =========================
   1. INTRODUCTION TO BIOLOGY
========================= */
{
  title: "1. Introduction to Biology",
  icon: "dna",
  tags: ["hot","pyq"],
  text: "biology botany zoology lamarck aristotle theophrastus anatomy ecology genetics",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li><b>Biology</b> = Bios (Life) + Logos (Study)</li>
        <li>Term coined by Lamarck & Treviranus (1801)</li>
        <li><b>Father of Botany</b> — Theophrastus</li>
        <li><b>Father of Zoology & Biology</b> — Aristotle</li>
        <li>Botany → plants | Zoology → animals</li>
      </ul>
      `
    },

    {
      title: "Important Terms",
      content: `
      <table>
        <tr><th>Term</th><th>Study</th></tr>
        <tr><td>Anatomy</td><td>Internal structure</td></tr>
        <tr><td>Cytology</td><td>Cell</td></tr>
        <tr><td>Genetics</td><td>Heredity</td></tr>
        <tr><td>Ecology</td><td>Environment</td></tr>
        <tr><td>Immunology</td><td>Immune system</td></tr>
        <tr><td>Oncology</td><td>Cancer</td></tr>
        <tr><td>Neurology</td><td>Nervous system</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   2. CLASSIFICATION
========================= */
{
  title: "2. Classification of Organisms",
  icon: "globe",
  tags: ["hot","pyq"],
  text: "classification five kingdom linnaeus whittaker taxonomy",

  sections: [

    {
      title: "Five Kingdom System",
      content: `
      <ul>
        <li>Linnaeus → Father of Taxonomy</li>
        <li>Whittaker (1969) → Five kingdoms</li>
      </ul>

      <table>
        <tr><th>Kingdom</th><th>Features</th></tr>
        <tr><td>Monera</td><td>Prokaryotic</td></tr>
        <tr><td>Protista</td><td>Unicellular</td></tr>
        <tr><td>Fungi</td><td>Non-green</td></tr>
        <tr><td>Plantae</td><td>Plants</td></tr>
        <tr><td>Animalia</td><td>Animals</td></tr>
      </table>
      `
    },

    {
      title: "Binomial Nomenclature",
      content: `
      <ul>
        <li>Genus (capital) + species (small)</li>
      </ul>

      <table>
        <tr><th>Organism</th><th>Name</th></tr>
        <tr><td>Man</td><td>Homo sapiens</td></tr>
        <tr><td>Dog</td><td>Canis familiaris</td></tr>
        <tr><td>Rice</td><td>Oryza sativa</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   3. CELL BIOLOGY
========================= */
{
  title: "3. Cell Biology",
  icon: "microscope",
  tags: ["hot","pyq"],
  text: "cell organelles nucleus mitochondria dna rna",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li>Cell = structural & functional unit</li>
        <li>Discovered by Robert Hooke (1665)</li>
        <li>Cell theory → Schleiden & Schwann</li>
      </ul>
      `
    },

    {
      title: "Organelles",
      content: `
      <ul>
        <li>Mitochondria → Powerhouse</li>
        <li>Ribosome → Protein synthesis</li>
        <li>Lysosome → Suicide bag</li>
        <li>Golgi body → Packaging</li>
        <li>Nucleus → Control center</li>
      </ul>
      `
    },

    {
      title: "DNA vs RNA",
      content: `
      <table>
        <tr><th>Feature</th><th>DNA</th><th>RNA</th></tr>
        <tr><td>Structure</td><td>Double</td><td>Single</td></tr>
        <tr><td>Sugar</td><td>Deoxyribose</td><td>Ribose</td></tr>
        <tr><td>Bases</td><td>A,T,G,C</td><td>A,U,G,C</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   4. GENETICS
========================= */
{
  title: "4. Genetics",
  icon: "dna",
  tags: ["hot"],
  text: "mendel heredity mutation chromosomes",

  sections: [

    {
      title: "Mendel Laws",
      content: `
      <ul>
        <li>Mendel = Father of Genetics</li>
        <li>Law of Dominance</li>
        <li>Law of Segregation</li>
        <li>Law of Independent Assortment</li>
      </ul>
      `
    },

    {
      title: "Disorders",
      content: `
      <table>
        <tr><th>Disease</th><th>Cause</th></tr>
        <tr><td>Down Syndrome</td><td>Extra chromosome</td></tr>
        <tr><td>Hemophilia</td><td>Sex-linked</td></tr>
        <tr><td>Color blindness</td><td>Gene defect</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   5. EVOLUTION
========================= */
{
  title: "5. Organic Evolution",
  icon: "activity",
  tags: ["pyq"],
  text: "darwin lamarck evolution fossils homologous analogous",

  sections: [

    {
      title: "Theories",
      content: `
      <ul>
        <li>Lamarck → acquired characters</li>
        <li>Darwin → natural selection</li>
        <li>Modern theory → genetics + selection</li>
      </ul>
      `
    },

    {
      title: "Evidence",
      content: `
      <ul>
        <li>Homologous organs</li>
        <li>Analogous organs</li>
        <li>Vestigial organs</li>
        <li>Fossils</li>
      </ul>
      `
    }

  ]
},

/* =========================
   6. BOTANY
========================= */
{
  title: "6. Botany — Plants",
  icon: "sprout",
  tags: ["hot"],
  text: "plant classification algae fungi photosynthesis hormones",

  sections: [

    {
      title: "Plant Classification",
      content: `
      <table>
        <tr><th>Group</th><th>Feature</th></tr>
        <tr><td>Thallophyta</td><td>No differentiation</td></tr>
        <tr><td>Bryophyta</td><td>Amphibians</td></tr>
        <tr><td>Pteridophyta</td><td>Spore plants</td></tr>
        <tr><td>Gymnosperm</td><td>Naked seeds</td></tr>
        <tr><td>Angiosperm</td><td>Flowering plants</td></tr>
      </table>
      `
    },

    {
      title: "Photosynthesis",
      content: `
      <div class="fbox">
      6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂
      </div>
      `
    },

    {
      title: "Plant Hormones",
      content: `
      <ul>
        <li>Auxin → growth</li>
        <li>Gibberellin → height</li>
        <li>Cytokinin → division</li>
        <li>Ethylene → ripening</li>
      </ul>
      `
    }

  ]
},

/* =========================
   7. ZOOLOGY
========================= */
{
  title: "7. Zoology — Animal Kingdom",
  icon: "paw-print",
  tags: ["hot","pyq"],
  text: "animal kingdom classification vertebrates mammals birds",

  sections: [

    {
      title: "Animal Classification",
      content: `
      <table>
        <tr><th>Phylum</th><th>Example</th></tr>
        <tr><td>Protozoa</td><td>Amoeba</td></tr>
        <tr><td>Porifera</td><td>Sponge</td></tr>
        <tr><td>Arthropoda</td><td>Cockroach</td></tr>
        <tr><td>Mollusca</td><td>Octopus</td></tr>
        <tr><td>Chordata</td><td>Humans</td></tr>
      </table>
      `
    },

    {
      title: "Vertebrates",
      content: `
      <table>
        <tr><th>Class</th><th>Example</th></tr>
        <tr><td>Pisces</td><td>Fish</td></tr>
        <tr><td>Amphibia</td><td>Frog</td></tr>
        <tr><td>Reptilia</td><td>Snake</td></tr>
        <tr><td>Aves</td><td>Bird</td></tr>
        <tr><td>Mammalia</td><td>Human</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   8. HUMAN BLOOD
========================= */
{
  title: "8. Human Blood",
  icon: "droplet",
  tags: ["hot","pyq"],
  text: "blood rbc wbc platelets haemoglobin blood groups abo rh",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li>Blood = fluid connective tissue</li>
        <li>pH = 7.4 | ~7% body weight</li>
        <li>Average 5–6 litres in human body</li>
      </ul>
      `
    },

    {
      title: "Components",
      content: `
      <table>
        <tr><th>Component</th><th>Function</th></tr>
        <tr><td>Plasma</td><td>Transport</td></tr>
        <tr><td>RBC</td><td>Oxygen transport</td></tr>
        <tr><td>WBC</td><td>Immunity</td></tr>
        <tr><td>Platelets</td><td>Clotting</td></tr>
      </table>
      `
    },

    {
      title: "Blood Groups",
      content: `
      <ul>
        <li>Discovered by Landsteiner</li>
        <li>AB → universal receiver</li>
        <li>O → universal donor</li>
        <li>Rh factor → + or −</li>
      </ul>
      `
    }

  ]
},

/* =========================
   9. DIGESTIVE SYSTEM
========================= */
{
  title: "9. Digestive System",
  icon: "utensils",
  tags: ["hot","pyq"],
  text: "digestion enzymes liver pancreas absorption",

  sections: [

    {
      title: "Stages",
      content: `
      <div class="fbox">
      Ingestion → Digestion → Absorption → Assimilation → Defecation
      </div>
      `
    },

    {
      title: "Enzymes",
      content: `
      <table>
        <tr><th>Enzyme</th><th>Function</th></tr>
        <tr><td>Pepsin</td><td>Protein digestion</td></tr>
        <tr><td>Amylase</td><td>Starch → sugar</td></tr>
        <tr><td>Lipase</td><td>Fat digestion</td></tr>
      </table>
      `
    },

    {
      title: "Important Organs",
      content: `
      <ul>
        <li>Liver → largest gland</li>
        <li>Pancreas → insulin</li>
        <li>Small intestine → absorption</li>
      </ul>
      `
    }

  ]
},

/* =========================
   10. CIRCULATORY & EXCRETORY
========================= */
{
  title: "10. Circulatory & Excretory",
  icon: "heart",
  tags: ["hot"],
  text: "heart blood pressure kidney nephron urine",

  sections: [

    {
      title: "Circulatory System",
      content: `
      <ul>
        <li>Heart → 4 chambers</li>
        <li>72 beats/min</li>
        <li>BP → 120/80</li>
        <li>SA node → pacemaker</li>
      </ul>
      `
    },

    {
      title: "Excretory System",
      content: `
      <ul>
        <li>Kidney → main organ</li>
        <li>Nephron → functional unit</li>
        <li>Urine contains urea</li>
      </ul>
      `
    }

  ]
},

/* =========================
   11. NERVOUS + ENDOCRINE
========================= */
{
  title: "11. Nervous & Endocrine",
  icon: "brain",
  tags: ["hot"],
  text: "brain neuron hormones thyroid pituitary insulin",

  sections: [

    {
      title: "Nervous System",
      content: `
      <ul>
        <li>Unit → neuron</li>
        <li>Cerebrum → thinking</li>
        <li>Cerebellum → balance</li>
        <li>Medulla → breathing</li>
      </ul>
      `
    },

    {
      title: "Endocrine Glands",
      content: `
      <table>
        <tr><th>Gland</th><th>Function</th></tr>
        <tr><td>Pituitary</td><td>Master gland</td></tr>
        <tr><td>Thyroid</td><td>Metabolism</td></tr>
        <tr><td>Pancreas</td><td>Insulin</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   12. VITAMINS
========================= */
{
  title: "12. Vitamins & Nutrients",
  icon: "apple",
  tags: ["hot","pyq"],
  text: "vitamins deficiency diseases scurvy rickets",

  sections: [

    {
      title: "Types",
      content: `
      <ul>
        <li>Water soluble → B, C</li>
        <li>Fat soluble → A, D, E, K</li>
      </ul>
      `
    },

    {
      title: "Deficiency",
      content: `
      <table>
        <tr><th>Vitamin</th><th>Disease</th></tr>
        <tr><td>A</td><td>Night blindness</td></tr>
        <tr><td>B1</td><td>Beriberi</td></tr>
        <tr><td>C</td><td>Scurvy</td></tr>
        <tr><td>D</td><td>Rickets</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   13. DISEASES
========================= */
{
  title: "13. Human Diseases",
  icon: "bug",
  tags: ["hot"],
  text: "malaria dengue tuberculosis cholera aids",

  sections: [

    {
      title: "Protozoa",
      content: `
      <table>
        <tr><th>Disease</th><th>Cause</th></tr>
        <tr><td>Malaria</td><td>Plasmodium</td></tr>
        <tr><td>Kala-azar</td><td>Leishmania</td></tr>
      </table>
      `
    },

    {
      title: "Bacteria",
      content: `
      <table>
        <tr><th>Disease</th><th>Bacteria</th></tr>
        <tr><td>Cholera</td><td>Vibrio</td></tr>
        <tr><td>TB</td><td>Mycobacterium</td></tr>
      </table>
      `
    },

    {
      title: "Virus",
      content: `
      <table>
        <tr><th>Disease</th><th>Virus</th></tr>
        <tr><td>AIDS</td><td>HIV</td></tr>
        <tr><td>Dengue</td><td>Dengue virus</td></tr>
        <tr><td>Polio</td><td>Polio virus</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   14. MISCELLANEOUS
========================= */
{
  title: "14. Important Facts",
  icon: "star",
  tags: ["hot"],
  text: "facts biology records discoveries penicillin insulin",

  sections: [

    {
      title: "Important Discoveries",
      content: `
      <ul>
        <li>Penicillin → Alexander Fleming</li>
        <li>Insulin → Banting & Best</li>
        <li>DNA → Watson & Crick</li>
      </ul>
      `
    },

    {
      title: "Records",
      content: `
      <ul>
        <li>Largest mammal → Blue whale</li>
        <li>Largest land animal → Elephant</li>
        <li>Smallest bone → Stapes</li>
        <li>Total bones → 206</li>
      </ul>
      `
    }

  ]
}
];