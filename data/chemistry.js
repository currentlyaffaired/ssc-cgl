const chemistryData = [
/* =========================
   1. MATTER & CLASSIFICATION
========================= */
{
  title: "1. Matter & Classification",
  icon: "beaker",
  tags: ["hot","pyq"],
  text: "matter classification solid liquid gas element compound mixture",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li><b>Father of modern chemistry</b> — Lavoisier</li>
        <li>Matter → anything that occupies space and has mass</li>
      </ul>
      `
    },

    {
      title: "States of Matter",
      content: `
      <table>
        <tr><th>State</th><th>Shape</th><th>Volume</th></tr>
        <tr><td>Solid</td><td>Definite</td><td>Definite</td></tr>
        <tr><td>Liquid</td><td>Container shape</td><td>Definite</td></tr>
        <tr><td>Gas</td><td>No</td><td>No</td></tr>
      </table>
      `
    },

    {
      title: "Pure Substances",
      content: `
      <ul>
        <li><b>Element</b> → cannot be broken further</li>
        <li><b>Compound</b> → fixed proportion of elements</li>
        <li>Mercury → only liquid metal</li>
      </ul>
      `
    },

    {
      title: "Mixtures",
      content: `
      <ul>
        <li>Homogeneous → uniform</li>
        <li>Heterogeneous → non-uniform</li>
      </ul>
      `
    },

    {
      title: "Separation Methods",
      content: `
      <ul>
        <li>Sublimation → iodine, camphor</li>
        <li>Distillation → different boiling points</li>
        <li>Chromatography → absorption difference</li>
      </ul>
      `
    }

  ]
},

/* =========================
   2. ATOMIC STRUCTURE
========================= */
{
  title: "2. Atomic Structure",
  icon: "atom",
  tags: ["hot","formula","pyq"],
  text: "atom proton neutron electron isotope isobar mole",

  sections: [

    {
      title: "Subatomic Particles",
      content: `
      <table>
        <tr><th>Particle</th><th>Charge</th></tr>
        <tr><td>Electron</td><td>-1</td></tr>
        <tr><td>Proton</td><td>+1</td></tr>
        <tr><td>Neutron</td><td>0</td></tr>
      </table>
      `
    },

    {
      title: "Important Formulas",
      content: `
      <div class="fbox">
      Atomic number = Protons  
      Mass number = Protons + Neutrons  
      Neutrons = A - Z
      </div>
      `
    },

    {
      title: "Key Terms",
      content: `
      <ul>
        <li>Isotopes → same Z, different mass</li>
        <li>Isobars → same mass, different Z</li>
        <li>Avogadro number → 6.023 × 10²³</li>
      </ul>
      `
    }

  ]
},

/* =========================
   3. PERIODIC TABLE
========================= */
{
  title: "3. Periodic Table",
  icon: "app-window-mac",
  tags: ["hot","pyq"],
  text: "periodic table mendeleev moseley trends atomic radius",

  sections: [

    {
      title: "History",
      content: `
      <ul>
        <li>Mendeleev → Father of periodic table</li>
        <li>Moseley → modern periodic law (atomic number)</li>
      </ul>
      `
    },

    {
      title: "Structure",
      content: `
      <ul>
        <li>7 periods, 18 groups</li>
      </ul>
      `
    },

    {
      title: "Trends",
      content: `
      <ul>
        <li>Atomic size ↓ across, ↑ down</li>
        <li>Ionization energy ↑ across</li>
        <li>Electronegativity → highest F</li>
      </ul>
      `
    }

  ]
},

/* =========================
   4. CHEMICAL BONDING
========================= */
{
  title: "4. Chemical Bonding",
  icon: "link",
  tags: ["hot","pyq"],
  text: "ionic covalent bond sigma pi hydrogen bond",

  sections: [

    {
      title: "Types",
      content: `
      <ul>
        <li>Ionic → electron transfer</li>
        <li>Covalent → electron sharing</li>
        <li>Coordinate → one-sided sharing</li>
      </ul>
      `
    },

    {
      title: "Sigma & Pi",
      content: `
      <ul>
        <li>σ → strong</li>
        <li>π → weak</li>
      </ul>
      `
    },

    {
      title: "Hydrogen Bond",
      content: `
      <ul>
        <li>Occurs with N, O, F</li>
        <li>Water high BP due to H-bond</li>
      </ul>
      `
    }

  ]
},

/* =========================
   5. REDOX
========================= */
{
  title: "5. Oxidation & Reduction",
  icon: "flask-conical",
  tags: ["hot","pyq"],
  text: "oxidation reduction oxidising reducing agent",

  sections: [

    {
      title: "Concept",
      content: `
      <ul>
        <li>Oxidation → loss of electrons</li>
        <li>Reduction → gain of electrons</li>
      </ul>
      `
    },

    {
      title: "Agents",
      content: `
      <ul>
        <li>Oxidising → KMnO₄</li>
        <li>Reducing → H₂, CO</li>
      </ul>
      `
    }

  ]
},

/* =========================
   6. ACIDS BASES SALTS
========================= */
{
  title: "6. Acids Bases Salts",
  icon: "test-tube",
  tags: ["hot","pyq"],
  text: "acid base pH indicators salts",

  sections: [

    {
      title: "Acids",
      content: `
      <ul>
        <li>HCl, H₂SO₄ → strong acids</li>
        <li>CH₃COOH → weak acid</li>
      </ul>
      `
    },

    {
      title: "pH Scale",
      content: `
      <div class="fbox">
      pH < 7 → Acid  
      pH = 7 → Neutral  
      pH > 7 → Base
      </div>
      `
    },

    {
      title: "Indicators",
      content: `
      <ul>
        <li>Litmus → red/blue</li>
        <li>Phenolphthalein → pink in base</li>
      </ul>
      `
    }

  ]
},

/* =========================
   7. GASES
========================= */
{
  title: "7. Behaviour of Gases",
  icon: "wind",
  tags: ["hot","formula"],
  text: "boyle charles avogadro gas laws PV=nRT",

  sections: [

    {
      title: "Gas Laws",
      content: `
      <div class="fbox">
      Boyle → PV = constant  
      Charles → V/T = constant  
      Ideal gas → PV = nRT
      </div>
      `
    },

    {
      title: "STP",
      content: `
      <ul>
        <li>1 mole gas = 22.4 L</li>
      </ul>
      `
    }

  ]
},

/* =========================
   8. ELECTROLYSIS
========================= */
{
  title: "8. Electrolysis",
  icon: "battery",
  tags: ["formula","pyq"],
  text: "electrolysis electrolyte anode cathode faraday oxidation reduction",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li>Electrolysis → decomposition using electricity</li>
        <li>Electrolytes → conduct electricity in molten/aqueous state</li>
      </ul>
      `
    },

    {
      title: "Electrodes",
      content: `
      <ul>
        <li><b>Anode (+)</b> → oxidation</li>
        <li><b>Cathode (-)</b> → reduction</li>
      </ul>
      `
    },

    {
      title: "Example (NaCl)",
      content: `
      <ul>
        <li>Anode → Cl₂ gas</li>
        <li>Cathode → Na metal</li>
      </ul>
      `
    }

  ]
},

/* =========================
   9. CARBON & COMPOUNDS
========================= */
{
  title: "9. Carbon & Compounds",
  icon: "gem",
  tags: ["hot","pyq"],
  text: "carbon diamond graphite hydrocarbons alkane alkene polymer",

  sections: [

    {
      title: "Allotropes",
      content: `
      <ul>
        <li>Diamond → hardest, insulator</li>
        <li>Graphite → conductor</li>
        <li>Fullerene → C₆₀</li>
      </ul>
      `
    },

    {
      title: "Hydrocarbons",
      content: `
      <ul>
        <li>Alkane → C<sub>n</sub>H<sub>2n+2</sub></li>
        <li>Alkene → C<sub>n</sub>H<sub>2n</sub></li>
        <li>Alkyne → C<sub>n</sub>H<sub>2n-2</sub></li>
      </ul>
      `
    },

    {
      title: "Polymers",
      content: `
      <ul>
        <li>Polythene → bags</li>
        <li>PVC → pipes</li>
        <li>Bakelite → switches</li>
      </ul>
      `
    }

  ]
},

/* =========================
   10. FUELS
========================= */
{
  title: "10. Fuels",
  icon: "fuel",
  tags: ["hot","pyq"],
  text: "coal petroleum LPG CNG calorific value",

  sections: [

    {
      title: "Types of Coal",
      content: `
      <ul>
        <li>Peat → lowest</li>
        <li>Lignite → brown coal</li>
        <li>Bituminous → most used</li>
        <li>Anthracite → best quality</li>
      </ul>
      `
    },

    {
      title: "Gaseous Fuels",
      content: `
      <ul>
        <li>Water gas → CO + H₂</li>
        <li>Producer gas → CO + N₂</li>
        <li>LPG → butane</li>
        <li>CNG → methane</li>
      </ul>
      `
    }

  ]
},

/* =========================
   11. METALLURGY
========================= */
{
  title: "11. Metallurgy",
  icon: "hammer",
  tags: ["hot","pyq"],
  text: "ore gangue flux slag calcination roasting smelting alloys",

  sections: [

    {
      title: "Basic Terms",
      content: `
      <ul>
        <li>Ore → useful mineral</li>
        <li>Gangue → impurities</li>
        <li>Flux → removes impurities</li>
        <li>Slag → gangue + flux</li>
      </ul>
      `
    },

    {
      title: "Processes",
      content: `
      <ul>
        <li>Calcination → no air</li>
        <li>Roasting → with air</li>
        <li>Smelting → extraction</li>
      </ul>
      `
    },

    {
      title: "Alloys",
      content: `
      <ul>
        <li>Brass → Cu + Zn</li>
        <li>Bronze → Cu + Sn</li>
        <li>Steel → Fe + C</li>
      </ul>
      `
    }

  ]
},

/* =========================
   12. NON-METALS
========================= */
{
  title: "12. Non-metals & Elements",
  icon: "bolt",
  tags: ["hot","pyq"],
  text: "hydrogen oxygen nitrogen chlorine ozone ammonia",

  sections: [

    {
      title: "Hydrogen",
      content: `
      <ul>
        <li>Lightest element</li>
        <li>Isotopes → Protium, Deuterium, Tritium</li>
      </ul>
      `
    },

    {
      title: "Water",
      content: `
      <ul>
        <li>Hard water → Ca, Mg salts</li>
        <li>Soft water → no hardness</li>
      </ul>
      `
    },

    {
      title: "Oxygen & Ozone",
      content: `
      <ul>
        <li>Ozone → protects from UV rays</li>
      </ul>
      `
    },

    {
      title: "Nitrogen",
      content: `
      <ul>
        <li>78% of air</li>
        <li>Ammonia → Haber process</li>
      </ul>
      `
    }

  ]
}
];