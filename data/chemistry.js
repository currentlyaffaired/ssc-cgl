const chemistryData = [

/* =========================
   1. MATTER & CLASSIFICATION
========================= */
{
  title: "1. Matter & Classification",
  icon: "beaker",
  tags: ["hot","pyq"],
  text: "matter classification solid liquid gas element compound mixture homogeneous heterogeneous lavoisier sublimation distillation chromatography",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li><b>Father of modern chemistry</b> — Lavoisier (1743–1793)</li>
        <li>Matter → anything that occupies space, possesses mass, and can be felt by senses</li>
      </ul>
      `
    },

    {
      title: "States of Matter",
      content: `
      <table>
        <tr><th>State</th><th>Shape</th><th>Volume</th><th>Compressible?</th><th>Examples</th></tr>
        <tr><td>Solid</td><td>Definite</td><td>Definite</td><td>No</td><td>Metals, wood, bricks</td></tr>
        <tr><td>Liquid</td><td>Container shape</td><td>Definite</td><td>Slightly</td><td>Water, milk, oil</td></tr>
        <tr><td>Gas</td><td>No</td><td>No</td><td>Highly</td><td>Air, O₂, N₂, CO₂</td></tr>
      </table>
      `
    },

    {
      title: "Pure Substances",
      content: `
      <ul>
        <li><b>Element</b> → simplest pure substance; cannot be broken by physical/chemical means. Types: Metals, Non-metals, Metalloids.</li>
        <li><b>Compound</b> → two or more elements in fixed proportion by mass. Properties entirely different from constituent elements. e.g. Water, Salt, Sugar.</li>
        <li><b>Metals</b> → hard, lustrous, high mp/bp, good conductors. Conductivity decreases with temperature. e.g. Fe, Cu, Ag, Au, Al, Zn.</li>
        <li><b>Non-metals</b> → poor conductors (exception: graphite), no lustre (exception: iodine). e.g. H, C, O, N, S, P.</li>
        <li><b>Metalloids</b> → properties of both metals and non-metals. e.g. Arsenic, Antimony, Bismuth.</li>
        <li>Mercury → only liquid metal at room temperature.</li>
        <li>Organic compounds → from living sources; hydrocarbons and derivatives. e.g. Carbohydrates, Proteins, Fats.</li>
        <li>Inorganic compounds → from non-living sources (rocks, minerals). e.g. Common Salt, Marble, Washing Soda.</li>
      </ul>
      `
    },

    {
      title: "Mixtures",
      content: `
      <ul>
        <li><b>Homogeneous</b> → uniform composition; no visible boundaries. e.g. Salt in water, iodine in CCl₄.</li>
        <li><b>Heterogeneous</b> → non-uniform; visible boundaries. e.g. Sulphur + Sand, milk.</li>
      </ul>
      `
    },

    {
      title: "Separation Methods",
      content: `
      <ul>
        <li><b>Sublimation</b> → solid → vapour directly. Substances: Naphthalene, Iodine, Ammonium Chloride, Camphor.</li>
        <li><b>Filtration</b> → removes suspended solid particles using filter paper.</li>
        <li><b>Evaporation</b> → liquid heated → vapours off; solid remains. e.g. Common salt from sea water.</li>
        <li><b>Crystallisation</b> → purification of solids using suitable solvent. Pure solid crystallises on cooling.</li>
        <li><b>Distillation</b> → liquid → vapour (heating) → liquid again (cooling). Separates liquids with different boiling points.</li>
        <li><b>Fractional distillation</b> → separates crude petroleum (petrol, diesel, kerosene) and liquid air (O₂, N₂).</li>
        <li><b>Chromatography</b> → based on difference in rates of absorption. Types: Column, Thin layer, Paper, HPLC, Gas, Ion-exchange.</li>
        <li><b>Sedimentation + Decantation</b> → insoluble solid settles at bottom; clear liquid transferred. e.g. Muddy water.</li>
      </ul>
      `
    },

    {
      title: "Change of State — Key Terms",
      content: `
      <ul>
        <li><b>Melting point</b> → solid and liquid exist in equilibrium (equal vapour pressure).</li>
        <li><b>Boiling point</b> → vapour pressure of liquid equals atmospheric pressure.</li>
        <li><b>Evaporation</b> → liquid → vapour at room temperature. Causes cooling. Affected by: nature of liquid, temperature, surface area.</li>
        <li>Vapour pressure increases with temperature. Higher vapour pressure → weaker intermolecular forces.</li>
      </ul>
      <table>
        <tr><th>Liquid</th><th>Boiling Point</th></tr>
        <tr><td>Water</td><td>373 K (100°C)</td></tr>
        <tr><td>Ethanol</td><td>349 K (76°C)</td></tr>
        <tr><td>Chloroform</td><td>334 K (61°C)</td></tr>
        <tr><td>Acetone</td><td>329 K (56°C)</td></tr>
      </table>
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
  text: "atom proton neutron electron isotope isobar isotone mole avogadro thomson rutherford bohr planck heisenberg",

  sections: [

    {
      title: "Subatomic Particles",
      content: `
      <table>
        <tr><th>Particle</th><th>Discovered by</th><th>Named by</th><th>Charge</th><th>Mass (amu)</th></tr>
        <tr><td>Electron</td><td>J.J. Thomson (Cathode rays)</td><td>Stoney</td><td>−1 (−1.6×10⁻¹⁹ C)</td><td>0.000543</td></tr>
        <tr><td>Proton</td><td>Goldstein (Anode rays)</td><td>Rutherford</td><td>+1 (+1.6×10⁻¹⁹ C)</td><td>1.00763</td></tr>
        <tr><td>Neutron</td><td>James Chadwick</td><td>—</td><td>0</td><td>1.00863</td></tr>
      </table>
      `
    },

    {
      title: "Important Formulas",
      content: `
      <div class="fbox">
Atomic number (Z) = no. of protons = no. of electrons
Mass number (A)  = protons + neutrons
No. of neutrons  = A − Z
Example: ²³₁₁Na → Z=11, A=23, neutrons=12
      </div>
      `
    },

    {
      title: "Key Terms",
      content: `
      <ul>
        <li><b>Isotopes</b> → same Z, different A. Same element, different mass. e.g. ¹²C, ¹³C, ¹⁴C</li>
        <li><b>Isobars</b> → same A, different Z. Different elements. e.g. ⁴⁰Ar, ⁴⁰K, ⁴⁰Ca</li>
        <li><b>Isotones</b> → same number of neutrons. e.g. ¹⁴C, ¹⁵N, ¹⁶O</li>
        <li><b>Isoelectronic</b> → same number of electrons. e.g. O²⁻, F⁻, Ne, Na⁺, Mg²⁺</li>
        <li><b>Avogadro's number</b> → 6.023 × 10²³ particles per mole</li>
        <li>Atomic mass: ratio of mass of 1 atom to 1/12 mass of C-12 atom</li>
      </ul>
      `
    },

    {
      title: "Atomic Models",
      content: `
      <table>
        <tr><th>Scientist</th><th>Model Name</th><th>Key Concept</th></tr>
        <tr><td>Thomson</td><td>Plum pudding / Watermelon model</td><td>Positive sphere with embedded electrons</td></tr>
        <tr><td>Rutherford</td><td>Nuclear atomic model</td><td>Dense +ve nucleus; electrons orbit like planets</td></tr>
        <tr><td>Bohr</td><td>Quantization model</td><td>Electrons in fixed orbits; photon emitted on transition</td></tr>
        <tr><td>Planck</td><td>Quantum theory</td><td>Energy in packets called photons/quanta</td></tr>
        <tr><td>Sommerfeld</td><td>—</td><td>Elliptical & spherical orbitals</td></tr>
        <tr><td>de-Broglie</td><td>—</td><td>Dual nature of electron</td></tr>
        <tr><td>Heisenberg</td><td>Uncertainty principle</td><td>Exact position & momentum cannot be determined simultaneously</td></tr>
        <tr><td>Schrödinger</td><td>Wave equation</td><td>Wave nature of electron</td></tr>
      </table>
      <div class="pyq-box"><b>📋 PYQ:</b> Rutherford's model → nucleus radius = 10⁻¹³ cm; atom radius = 10⁻⁸ cm. Atom volume is 10¹⁵ times nucleus volume. Electrons called planetary electrons.</div>
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
  text: "periodic table mendeleev moseley dobereiner newland lother mayer trends atomic radius ionization electronegativity electron affinity blocks s p d f",

  sections: [

    {
      title: "History of Classification",
      content: `
      <ul>
        <li><b>Father of periodic table</b> — Mendeleev</li>
        <li>Lavoisier → first classified elements into metals and non-metals</li>
        <li><b>Dobereiner's Triads (1829)</b> → middle element's atomic mass ≈ average of first and third. e.g. Li(7), Na(23), K(39)</li>
        <li><b>Newland's Law of Octaves (1866)</b> → every 8th element has similar properties to the first (like musical notes). Failed for elements with atomic mass > 40.</li>
        <li><b>Lother-Mayer's atomic volume curve (1869)</b> → elements with similar properties occupy similar positions.</li>
        <li><b>Mendeleev's Periodic Law</b> → properties are periodic functions of atomic mass.</li>
        <li><b>Modern Periodic Law (Moseley)</b> → properties are periodic functions of atomic number.</li>
      </ul>
      `
    },

    {
      title: "Structure",
      content: `
      <div class="fbox">
Periods  : 7 horizontal rows
Groups   : 18 vertical columns
Mendeleev's table: 7 periods, 9 groups
Horizontal line = Period | Vertical line = Group
      </div>
      <table>
        <tr><th>Block</th><th>Elements</th><th>Groups</th></tr>
        <tr><td>s-block</td><td>Alkali & Alkaline earth metals</td><td>1, 2</td></tr>
        <tr><td>p-block</td><td>Chalcogen, Pnictogens, Halogens, Noble gases</td><td>13–18</td></tr>
        <tr><td>d-block</td><td>Transition elements</td><td>3–12</td></tr>
        <tr><td>f-block</td><td>Inner transition elements (Lanthanides & Actinides)</td><td>—</td></tr>
      </table>
      `
    },

    {
      title: "Trends (Periodic Properties)",
      content: `
      <ul>
        <li><b>Atomic radius</b> → ↓ across a period (left → right); ↑ down a group. Van der Waals > Metallic > Covalent radii. Anionic > Atomic > Cationic radii.</li>
        <li><b>Ionization Energy (IE)</b> → energy to remove electron from gaseous atom. ↑ across period; ↓ down group.</li>
        <li><b>Electron Affinity (Eₐ)</b> → energy released when extra electron added. Chlorine (Cl) has highest Eₐ value.</li>
        <li><b>Electronegativity</b> → highest in F (most electronegative atom). ↑ across period; ↓ down group.</li>
        <li>Eₙ > 1.7 → ionic compound | Eₙ &lt; 1.7 → polar covalent | Eₙ = 0 → nonpolar</li>
        <li><b>Lattice energy</b> → energy released during formation of 1 mole of ionic compound from its ions.</li>
        <li>Hydration energy > Lattice energy → compound soluble in water (and vice versa).</li>
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
  text: "ionic covalent coordinate sigma pi hydrogen bond NaCl bond energy bond length",

  sections: [

    {
      title: "Types of Bonds",
      content: `
      <table>
        <tr><th>Bond Type</th><th>How Formed</th><th>Properties</th><th>Examples</th></tr>
        <tr><td>Ionic (Electrovalent)</td><td>Complete transfer of electrons</td><td>High mp/bp; conducts in molten/aqueous state; bad conductor in solid; soluble in water</td><td>NaCl, KCl, MgCl₂</td></tr>
        <tr><td>Covalent</td><td>Mutual sharing of electrons</td><td>Generally bad conductor (exception: graphite); insoluble in water; soluble in organic solvents; directional</td><td>H₂, Cl₂, CH₄, H₂O</td></tr>
        <tr><td>Co-ordinate (Dative)</td><td>One atom donates both electrons</td><td>Special type of covalent bond; denoted by →</td><td>SO₂, BF₃·NH₃</td></tr>
      </table>
      <ul>
        <li>Conditions for ionic bond: low ionization energy of metal + high electron affinity of non-metal</li>
      </ul>
      `
    },

    {
      title: "Sigma & Pi Bonds",
      content: `
      <ul>
        <li><b>σ (Sigma) bond</b> → linear overlapping → large overlap → strong bond</li>
        <li><b>π (Pi) bond</b> → sideways/lateral overlapping → lesser overlap → weak bond</li>
        <li>Single bond: 1σ | Double bond: 1σ + 1π | Triple bond: 1σ + 2π</li>
        <li>Bond energy: Single &lt; Double &lt; Triple</li>
        <li>Bond length: Single > Double > Triple (greater multiplicity → shorter bond)</li>
      </ul>
      `
    },

    {
      title: "Hydrogen Bond",
      content: `
      <ul>
        <li>Occurs when H is between two highly electronegative atoms (N, O, F)</li>
        <li><b>Intermolecular H-bond</b> → between different molecules → ↑ mp & bp. e.g. HF, H₂O</li>
        <li><b>Intramolecular H-bond</b> → within same molecule → ↓ mp & bp. e.g. o-Nitrophenol</li>
        <li>Water has unusually high bp due to strong intermolecular H-bonding.</li>
        <li>Alcohol is soluble in water due to intermolecular H-bonding.</li>
      </ul>
      `
    }

  ]
},

/* =========================
   5. OXIDATION & REDUCTION
========================= */
{
  title: "5. Oxidation & Reduction",
  icon: "flask-conical",
  tags: ["hot","formula","pyq"],
  text: "oxidation reduction redox oxidising reducing agent oxidation number KMnO4 K2Cr2O7 electron loss gain LEO GER",

  sections: [

    {
      title: "Concept — Old vs Modern",
      content: `
      <table>
        <tr><th>Concept</th><th>Oxidation</th><th>Reduction</th></tr>
        <tr><td>Old</td><td>Addition of O / Removal of H</td><td>Removal of O / Addition of H</td></tr>
        <tr><td>Modern</td><td>Loss of electrons (LEO)</td><td>Gain of electrons (GER)</td></tr>
      </table>
      <div class="pyq-box"><b>📋 Mnemonic:</b> LEO the lion says GER — Loss of Electrons = Oxidation; Gain of Electrons = Reduction.</div>
      `
    },

    {
      title: "Agents",
      content: `
      <ul>
        <li><b>Oxidising agent (O.A.)</b> → undergoes reduction itself. e.g. O₂, O₃, H₂O₂, KMnO₄, K₂Cr₂O₇</li>
        <li><b>Reducing agent (R.A.)</b> → undergoes oxidation itself. e.g. H₂, CO, H₂S, SO₂, C, SnCl₂</li>
        <li>Redox reaction → both oxidation and reduction occur simultaneously.</li>
      </ul>
      `
    },

    {
      title: "Oxidation Number Rules",
      content: `
      <div class="fbox">
① Free element → O.N. = 0
② Alkali metals (Li, Na, K, Rb, Cs) → always +1
③ Alkaline earth metals (Be, Mg, Ca, Sr, Ba) → always +2
④ H → +1 (normally), −1 (in metal hydrides like NaH)
⑤ O → −2 (normal), −1 (peroxide), −½ (superoxide)
⑥ Sum of O.N. in neutral molecule = 0
⑦ Sum of O.N. in ion = charge of ion

Examples:
Mn in KMnO₄:   1 + x + (−2)×4 = 0  → x = +7
Cr in K₂Cr₂O₇: 2 + 2x − 14 = 0    → x = +6
      </div>
      `
    },

    {
      title: "Types of Chemical Reactions",
      content: `
      <ul>
        <li><b>Decomposition</b> → compound breaks into simpler substances. e.g. 2H₂O → 2H₂ + O₂</li>
        <li><b>Combination</b> → two or more substances combine. e.g. C + O₂ → CO₂</li>
        <li><b>Displacement</b> → one atom/ion replaces another. e.g. FeSO₄ + Zn → ZnSO₄ + Fe</li>
        <li><b>Disproportionation</b> → one substance simultaneously oxidised and reduced. e.g. Cl₂ + 2NaOH → NaCl + NaOCl + H₂O</li>
        <li><b>Neutralisation</b> → acid + base → salt + water. e.g. HCl + NaOH → NaCl + H₂O</li>
        <li><b>Reversible</b> → products recombine to give reactants. e.g. N₂ + 3H₂ ⇌ 2NH₃</li>
        <li><b>Irreversible</b> → proceeds only in one direction. e.g. CaCO₃ → CaO + CO₂</li>
      </ul>
      `
    }

  ]
},

/* =========================
   6. ACIDS BASES SALTS
========================= */
{
  title: "6. Acids, Bases & Salts",
  icon: "test-tube",
  tags: ["hot","pyq"],
  text: "acid base pH indicators HCl H2SO4 HNO3 NaOH citric lactic acetic formic oxalic salts baking soda washing soda plaster",

  sections: [

    {
      title: "Acids",
      content: `
      <ul>
        <li>Sour taste; turns blue litmus red; gives H⁺ in solution (Arrhenius); donates proton (Bronsted-Lowry); accepts electron pair (Lewis)</li>
        <li><b>Strong acids</b> (completely ionised): HCl, HNO₃, H₂SO₄</li>
        <li><b>Weak acids</b> (partially ionised): CH₃COOH, H₂CO₃, HCOOH</li>
        <li>Acidic strength: HF &lt; HCl &lt; HBr &lt; HI</li>
      </ul>
      `
    },

    {
      title: "Natural Acids in Foods",
      content: `
      <table>
        <tr><th>Acid</th><th>Found in</th></tr>
        <tr><td>Citric acid</td><td>Lemon, oranges (citrus fruits)</td></tr>
        <tr><td>Lactic acid</td><td>Sour milk, curd</td></tr>
        <tr><td>Butyric acid</td><td>Rancid butter</td></tr>
        <tr><td>Tartaric acid</td><td>Grapes; component of baking powder</td></tr>
        <tr><td>Acetic acid</td><td>Vinegar (5–10% solution)</td></tr>
        <tr><td>Malic acid</td><td>Apples</td></tr>
        <tr><td>Carbonic acid</td><td>Soda water, aerated drinks</td></tr>
        <tr><td>Oxalic acid</td><td>Tomato, wood sorrel; removes rust</td></tr>
        <tr><td>Formic acid</td><td>Red ants (first acid synthesised)</td></tr>
        <tr><td>Uric acid</td><td>Urine of mammals</td></tr>
        <tr><td>Ascorbic acid</td><td>Vitamin C source</td></tr>
        <tr><td>Stearic acid</td><td>Fats</td></tr>
      </table>
      `
    },

    {
      title: "Uses of Common Acids",
      content: `
      <ul>
        <li><b>HCl</b> → digestion (gastric juice), bathroom cleaner, pickling before galvanisation, leather tanning</li>
        <li><b>HNO₃</b> → fertilisers (ammonium nitrate), explosives (TNT, Dynamite), purification of gold & silver</li>
        <li><b>H₂SO₄</b> (Oil of vitriol) → lead storage battery, manufacture of HCl, alum, fertilisers, detergents. Called King of Chemicals.</li>
        <li><b>Boric acid</b> → antiseptic, eye wash</li>
        <li><b>Phosphoric acid</b> → bones (calcium salt), phosphatic fertilisers</li>
      </ul>
      `
    },

    {
      title: "pH Scale",
      content: `
      <div class="fbox">
pH = −log[H⁺]
pH &lt; 7 → Acidic solution
pH = 7 → Neutral (pure water)
pH > 7 → Basic solution
      </div>
      <table>
        <tr><th>Liquid</th><th>pH</th><th>Liquid</th><th>pH</th></tr>
        <tr><td>Lemon juice</td><td>2.5</td><td>Saliva / Milk</td><td>6.5</td></tr>
        <tr><td>Vinegar</td><td>3.0</td><td>Blood</td><td>7.4</td></tr>
        <tr><td>Coffee</td><td>5.0</td><td>Sea water</td><td>8.5</td></tr>
        <tr><td>Urine</td><td>4.8</td><td>Toothpaste</td><td>9.0</td></tr>
      </table>
      `
    },

    {
      title: "Indicators",
      content: `
      <table>
        <tr><th>Indicator</th><th>In Acid</th><th>In Base</th></tr>
        <tr><td>Blue litmus</td><td>Turns red</td><td>Stays blue</td></tr>
        <tr><td>Red litmus</td><td>Stays red</td><td>Turns blue</td></tr>
        <tr><td>Methyl orange</td><td>Red/orange</td><td>Yellow</td></tr>
        <tr><td>Phenolphthalein</td><td>Colourless</td><td>Pink</td></tr>
      </table>
      `
    },

    {
      title: "Important Salts & Their Uses",
      content: `
      <ul>
        <li><b>NaCl</b> (Common salt) → flavouring, saline water (0.9%), manufacture of HCl</li>
        <li><b>NaHCO₃</b> (Baking soda) → fire extinguisher, bakery, antacid</li>
        <li><b>Na₂CO₃</b> (Washing soda) → glass industry, paper industry, removes permanent hardness of water</li>
        <li><b>CaCO₃</b> (Limestone) → cement, buildings, extraction of metals</li>
        <li><b>CaSO₄·½H₂O</b> (Plaster of Paris) → moulds, statues, fracture casts. From gypsum (CaSO₄·2H₂O)</li>
        <li><b>Bleaching powder</b> Ca(OCl)Cl → disinfectant, bleaching agent (removes colours)</li>
        <li><b>Alum</b> K₂SO₄·Al₂(SO₄)₃·24H₂O → water purification, dyeing industry, antiseptic</li>
        <li><b>KNO₃</b> (Potassium nitrate) → fertiliser, gun powder (C+S+KNO₃), match sticks</li>
        <li><b>CaCl₂</b> → dehydrating agent; removes moisture from gases</li>
      </ul>
      `
    }

  ]
},

/* =========================
   7. BEHAVIOUR OF GASES
========================= */
{
  title: "7. Behaviour of Gases",
  icon: "wind",
  tags: ["hot","formula"],
  text: "boyle charles gay-lussac avogadro gas laws PV=nRT STP NTP graham dalton diffusion partial pressure",

  sections: [

    {
      title: "Gas Laws",
      content: `
      <div class="fbox">
Boyle's Law (constant T):
  V ∝ 1/P  →  PV = K  →  P₁V₁ = P₂V₂

Charle's Law (constant P):
  V ∝ T  →  V/T = k  →  V₁/T₁ = V₂/T₂

Gay-Lussac's Law (constant V):
  P ∝ T  →  P/T = K  →  P₁/T₁ = P₂/T₂

Avogadro's Law (constant T & P):
  V ∝ n  (n = number of moles)

Ideal Gas Equation:
  PV = nRT
  R = 0.0821 lit·atm·K⁻¹·mol⁻¹
    = 8.314 J·K⁻¹·mol⁻¹
      </div>
      `
    },

    {
      title: "STP",
      content: `
      <div class="fbox">
At STP, 1 mole gas:
  V = 22.4 litres = 22400 mL
  P = 1 atm = 76 cm Hg = 760 mm Hg
  T = 273 K (0°C)
      </div>
      `
    },

    {
      title: "Graham's & Dalton's Laws",
      content: `
      <ul>
        <li><b>Graham's Law of Diffusion</b> → rates of diffusion of gases are inversely proportional to square roots of their densities. r₁/r₂ = √(d₂/d₁) = √(M₂/M₁)</li>
        <li><b>Dalton's Law of Partial Pressure</b> → total pressure of non-reacting gas mixture = sum of individual partial pressures. P = P₁ + P₂ + P₃</li>
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
  text: "electrolysis electrolyte anode cathode faraday oxidation reduction NaCl strong weak",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li><b>Electrolytes</b> → substances that allow electricity to pass through in molten state or aqueous solution and undergo chemical decomposition. e.g. Acids, bases, salts.</li>
        <li><b>Strong electrolytes</b> → almost completely dissociated. e.g. NaCl, KCl, HCl, NaOH</li>
        <li><b>Weak electrolytes</b> → partially ionised. e.g. CH₃COOH, H₂CO₃, HCN, NH₄OH</li>
        <li>Electrolysis → chemical decomposition by passing electric current through molten state or solution.</li>
      </ul>
      `
    },

    {
      title: "Electrodes",
      content: `
      <ul>
        <li><b>Anode (+)</b> → connected to positive terminal. Oxidation occurs at anode.</li>
        <li><b>Cathode (−)</b> → connected to negative terminal. Reduction occurs at cathode.</li>
        <li>Memory tip: OIL RIG → Oxidation Is Loss; Reduction Is Gain (of electrons)</li>
      </ul>
      `
    },

    {
      title: "Example — Electrolysis of Molten NaCl",
      content: `
      <ul>
        <li>At anode: Cl⁻ − e → Cl ; Cl + Cl → Cl₂ gas</li>
        <li>At cathode: Na⁺ + e → Na metal</li>
      </ul>
      <div class="pyq-box"><b>📋 PYQ:</b> Cl₂ gas occurs at anode; Na metal at cathode. Electrolysis is the basis of electroplating.</div>
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
  text: "carbon diamond graphite fullerene hydrocarbon alkane alkene alkyne aromatic polymer rubber plastic bakelite nylon teflon isomerism",

  sections: [

    {
      title: "Allotropes of Carbon",
      content: `
      <table>
        <tr><th>Allotrope</th><th>Key Properties</th><th>Uses</th></tr>
        <tr><td>Diamond</td><td>Hardest natural substance; transparent; bad conductor; sp³ hybridisation; refractive index 2.415; specific gravity 3.52</td><td>Ornaments, glass cutting, rock drilling, abrasives</td></tr>
        <tr><td>Graphite (Black lead)</td><td>Soft, greasy, dark grey; good conductor; sp² hybridisation; hexagonal layers; van der Waals forces hold layers</td><td>Electrodes, pencils, lubricant, nuclear reactor moderator</td></tr>
        <tr><td>Fullerene (C₆₀)</td><td>Soccer ball shape; 60 carbon atoms (Buckminsterfullerene)</td><td>Superconductors, lubricants</td></tr>
      </table>
      <ul>
        <li>Amorphous carbon forms: Wood charcoal (from wood), Sugar charcoal (cane sugar), Bone charcoal (animal bones), Coke (from coal)</li>
      </ul>
      `
    },

    {
      title: "Hydrocarbons",
      content: `
      <div class="fbox">
Alkanes (Saturated, Paraffins): CₙH₂ₙ₊₂
  e.g. Methane (CH₄), Ethane (C₂H₆)

Alkenes (Unsaturated, double bond): CₙH₂ₙ
  e.g. Ethene/Ethylene (C₂H₄)

Alkynes (Unsaturated, triple bond): CₙH₂ₙ₋₂
  e.g. Ethyne/Acetylene (C₂H₂)

Aromatic: contain benzene ring; alternating single & double bonds
  e.g. Benzene (C₆H₆), Naphthalene, Anthracene
      </div>
      <ul>
        <li>Natural source of hydrocarbons: petroleum</li>
        <li><b>Isomerism</b> → two or more compounds with same molecular formula but different properties</li>
      </ul>
      `
    },

    {
      title: "Polymers",
      content: `
      <table>
        <tr><th>Polymer</th><th>Use</th></tr>
        <tr><td>Polythene (Polyethylene)</td><td>Packaging, carry bags, bottles</td></tr>
        <tr><td>PVC (Polyvinyl chloride)</td><td>Pipes, insulation</td></tr>
        <tr><td>Teflon</td><td>Non-stick cookware</td></tr>
        <tr><td>Nylon (Polyester)</td><td>Fibres, ropes, parachutes</td></tr>
        <tr><td>Polystyrene</td><td>Foam thermocole</td></tr>
        <tr><td>Bakelite</td><td>Electrical insulation, combs, pens, buttons</td></tr>
        <tr><td>Lexan</td><td>Bulletproof glass</td></tr>
        <tr><td>Melamine</td><td>Crockery</td></tr>
      </table>
      <ul>
        <li><b>Thermoplastics</b> → soften on heating, can be reused. e.g. Polyethylene, PVC, Teflon</li>
        <li><b>Thermosetting plastics</b> → permanent change on heating; cannot be reused. e.g. Bakelite, Glyptal</li>
        <li>Vulcanization of rubber → treating with sulphur under heat → stronger, elastic. Used for tyres, gloves.</li>
        <li><b>Rayon</b> → synthetic fibre obtained from cellulose.</li>
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
  text: "coal petroleum LPG CNG gobar gas water gas producer gas natural gas calorific value peat lignite bituminous anthracite",

  sections: [

    {
      title: "Types of Coal",
      content: `
      <table>
        <tr><th>Type</th><th>Carbon %</th><th>Calorific Value</th><th>Nature</th></tr>
        <tr><td>Peat</td><td>50–60%</td><td>2500–3500 kcal/m³</td><td>Lowest grade; more smoke & ash</td></tr>
        <tr><td>Lignite</td><td>60–70%</td><td>3500–4500 kcal/m³</td><td>High moisture; burns easily</td></tr>
        <tr><td>Bituminous</td><td>75–80%</td><td>7500–8000 kcal/m³</td><td>Black, hard, smoky; domestic fuel</td></tr>
        <tr><td>Anthracite</td><td>90–95%</td><td>6700–7500 kcal/m³</td><td>Best quality; hardest; highest grade</td></tr>
      </table>
      `
    },

    {
      title: "Gaseous Fuels",
      content: `
      <ul>
        <li><b>Water gas</b> (Syn gas) → CO + H₂. Made by steam on red hot coke at 1000°C. High calorific value (2700 kcal/m³). Used for welding.</li>
        <li><b>Producer gas</b> → CO + N₂. Cheapest gaseous fuel. Made by burning coke in limited air. Low calorific value.</li>
        <li><b>Coal gas</b> → H₂ + CH₄ + CO + N₂ + C₂H₄. From destructive distillation of coal at ~1000°C.</li>
        <li><b>Gobar gas</b> → CH₄ + CO + H₂. From fermentation of animal waste without air. Domestic fuel in villages.</li>
        <li><b>Natural gas</b> → mainly methane (85%), ethane, propane, butane.</li>
        <li><b>LPG</b> → liquefied petroleum; mainly butane + isobutane.</li>
        <li><b>CNG</b> → Compressed Natural Gas; mainly methane. Used in vehicles as cleaner fuel.</li>
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
  text: "ore gangue flux slag calcination roasting smelting alloys brass bronze steel duralumin amalgam bauxite haematite galena cinnabar",

  sections: [

    {
      title: "Basic Terms",
      content: `
      <ul>
        <li><b>Mineral</b> → compound of metal found in nature</li>
        <li><b>Ore</b> → mineral from which metal can be economically extracted. All ores are minerals but not all minerals are ores.</li>
        <li><b>Gangue (matrix)</b> → earthy impurities (sand, rocks, limestone) in ore</li>
        <li><b>Flux</b> → substance added to remove impurities. Acidic flux removes basic impurity; Basic flux removes acidic impurity.</li>
        <li><b>Slag</b> → Gangue + Flux → fusible material</li>
      </ul>
      `
    },

    {
      title: "Processes",
      content: `
      <ul>
        <li><b>Calcination</b> → heating ore in absence of air; removes water/CO₂. e.g. Al₂O₃·2H₂O → Al₂O₃ + 2H₂O</li>
        <li><b>Roasting</b> → heating ore in presence of air below melting point. e.g. ZnS + 2O₂ → ZnSO₄</li>
        <li><b>Smelting</b> → reduction of oxide ore with carbon at high temperature. e.g. Fe₂O₃ + 3C → 2Fe + 3CO</li>
        <li>Concentration methods: Gravity separation, Magnetic concentration, Froth flotation, Chemical methods</li>
      </ul>
      `
    },

    {
      title: "Important Ores",
      content: `
      <table>
        <tr><th>Metal</th><th>Ore</th><th>Formula</th></tr>
        <tr><td>Iron (Fe)</td><td>Haematite</td><td>Fe₂O₃</td></tr>
        <tr><td>Iron (Fe)</td><td>Magnetite</td><td>Fe₃O₄</td></tr>
        <tr><td>Iron (Fe)</td><td>Iron Pyrite (Fool's gold)</td><td>FeS₂</td></tr>
        <tr><td>Aluminium (Al)</td><td>Bauxite (main ore)</td><td>Al₂O₃·2H₂O</td></tr>
        <tr><td>Aluminium (Al)</td><td>Cryolite</td><td>Na₃AlF₆</td></tr>
        <tr><td>Copper (Cu)</td><td>Copper pyrites</td><td>CuFeS₂</td></tr>
        <tr><td>Zinc (Zn)</td><td>Zinc blende</td><td>ZnS</td></tr>
        <tr><td>Mercury (Hg)</td><td>Cinnabar</td><td>HgS</td></tr>
        <tr><td>Lead (Pb)</td><td>Galena</td><td>PbS</td></tr>
        <tr><td>Silver (Ag)</td><td>Horn silver</td><td>AgCl</td></tr>
        <tr><td>Tin (Sn)</td><td>Casseterite</td><td>SnO₂</td></tr>
        <tr><td>Uranium (U)</td><td>Pitch blende</td><td>U₃O₈</td></tr>
      </table>
      `
    },

    {
      title: "Alloys",
      content: `
      <table>
        <tr><th>Alloy</th><th>Composition</th><th>Use</th></tr>
        <tr><td>Brass</td><td>Cu (70%) + Zn (30%)</td><td>Utensils</td></tr>
        <tr><td>Bronze</td><td>Cu (90%) + Sn (10%)</td><td>Coins, bells, utensils</td></tr>
        <tr><td>German silver</td><td>Cu+Zn+Ni (60%+20%+20%)</td><td>Utensils</td></tr>
        <tr><td>Stainless steel</td><td>Fe+Cr+Ni+C</td><td>Utensils, surgical cutlery</td></tr>
        <tr><td>Duralumin</td><td>Al+Cu+Mg+Mn (94%+3%+2%+1%)</td><td>Aircraft bodies</td></tr>
        <tr><td>Solder</td><td>Pb (50%) + Sn (50%)</td><td>Soldering</td></tr>
        <tr><td>Bell metal</td><td>Cu (80%) + Sn (20%)</td><td>Casting bells, statues</td></tr>
        <tr><td>Munz metal</td><td>Cu (60%) + Zn (40%)</td><td>Coins</td></tr>
        <tr><td>Amalgam</td><td>Any metal + Mercury</td><td>Dental fillings, mirrors</td></tr>
      </table>
      <div class="pyq-box"><b>📋 PYQ facts:</b> Pure gold = 24 carat. Galvanised iron = coated with zinc. Iron Pyrites (FeS₂) = Fool's gold. Stainless steel resists rusting due to chromium.</div>
      `
    }

  ]
},

/* =========================
   12. NON-METALS & ELEMENTS
========================= */
{
  title: "12. Non-metals & Elements",
  icon: "bolt",
  tags: ["hot","pyq"],
  text: "hydrogen oxygen nitrogen ozone ammonia haber chlorine halogen noble gas helium neon argon fluorine hard soft water deuterium tritium",

  sections: [

    {
      title: "Hydrogen",
      content: `
      <ul>
        <li>Lightest element; three isotopes: Protium (¹H), Deuterium (²H), Tritium (³H, radioactive)</li>
        <li>Protium → only element with zero neutrons in periodic table</li>
        <li>Deuterium oxide (D₂O) = Heavy water → moderator in nuclear reactor</li>
        <li>Liquid hydrogen → used as rocket fuel</li>
        <li>Hydrogen: "range element" → can be placed in Group I and Group VII A</li>
      </ul>
      `
    },

    {
      title: "Water",
      content: `
      <ul>
        <li><b>Hard water</b> → less froth with soap. Due to bicarbonates, chlorides, sulphates of Ca & Mg.</li>
        <li><b>Soft water</b> → more froth with soap.</li>
        <li><b>Temporary hardness</b> → bicarbonates of Ca/Mg → removed by boiling or Clark's method (adding lime)</li>
        <li><b>Permanent hardness</b> → chlorides/sulphates of Ca/Mg → removed by Soda ash (Na₂CO₃) or Permutit process</li>
        <li>Zeolite is also used to remove hardness of water</li>
      </ul>
      `
    },

    {
      title: "Oxygen & Ozone",
      content: `
      <ul>
        <li>Most important constituent of air; three isotopes: ₈O¹⁶, ₈O¹⁷, ₈O¹⁸</li>
        <li><b>Ozone (O₃)</b> → allotrope of oxygen. Reduces effect of UV radiation in atmosphere. Found in stratosphere.</li>
      </ul>
      `
    },

    {
      title: "Nitrogen",
      content: `
      <ul>
        <li>78% by volume in atmosphere. Liquid nitrogen used for refrigeration.</li>
        <li><b>Ammonia (NH₃)</b> prepared by Haber's process: N₂ + 3H₂ ⇌ 2NH₃ (catalyst: Fe+Mo)</li>
        <li>Uses of ammonia: refrigerant, manufacture of HNO₃, fertilisers (urea, ammonium sulphate), Na₂CO₃, NaHCO₃, artificial silk</li>
      </ul>
      `
    },

    {
      title: "Halogens & Noble Gases",
      content: `
      <ul>
        <li><b>Fluorine (F)</b> → most electronegative element; Freon (CFC) used as refrigerant and aerosol. Teflon = polytetra-fluoroethylene.</li>
        <li><b>Chlorine</b> → used in PVC, insecticides, herbicides, bleaching powder</li>
        <li><b>Bromine</b> → used in ethylene bromide synthesis; AgBr used in photography</li>
        <li><b>Noble gases</b> (Group 18): He, Ne, Ar, Kr, Xe, Rn</li>
        <li>Argon → electric bulbs, arc welding. Helium → balloons (light + non-inflammable). Neon → discharge tube glow lights. Radon → heaviest gas.</li>
      </ul>
      `
    }

  ]
},

/* =========================
   13. IMPORTANT METAL FACTS
========================= */
{
  title: "13. Important Metal Facts",
  icon: "medal",
  tags: ["hot","pyq"],
  text: "metal facts silver gold copper iron zinc mercury aluminium lithium osmium platinum conductivity malleable ductile fireworks colours",

  sections: [

    {
      title: "SSC-Favourite Metal Facts",
      content: `
      <ul>
        <li><b>Best conductor of electricity</b> → Silver, then Copper</li>
        <li><b>Heaviest metal</b> → Osmium (Os). <b>Hardest metal</b> → Platinum. <b>Hardest natural substance</b> → Diamond.</li>
        <li><b>Lightest metal / most reductant / least dense</b> → Lithium (Li)</li>
        <li><b>Most malleable metals</b> → Gold and Silver</li>
        <li>Mercury and Gallium are liquid at room temperature.</li>
        <li>Galvanised iron → coated with zinc (prevents rusting)</li>
        <li>Rusting of iron → chemical change; increases weight.</li>
        <li>Calcium hydride (CaH₂) = Hydrolith → used to make fireproof and waterproof clothes</li>
        <li>Titanium → called strategic metal (lighter than iron)</li>
        <li>Co-60 → used in cancer treatment (radiotherapy)</li>
        <li>Cadmium rod → slows down neutrons in nuclear reactor</li>
        <li>Sodium peroxide → used in submarines to purify air</li>
        <li>Sodium → kept in kerosene oil (very reactive)</li>
        <li>Yellow phosphorus → kept in water (catches fire in air)</li>
        <li>Noble metals: Ag, Au, Pt, Ir, Hg, Pd, Rh, Ru, Os</li>
      </ul>
      `
    },

    {
      title: "Flame Colours in Fireworks",
      content: `
      <table>
        <tr><th>Colour</th><th>Element / Compound</th></tr>
        <tr><td>Crimson red</td><td>Strontium (Sr)</td></tr>
        <tr><td>Green</td><td>Barium (Ba)</td></tr>
        <tr><td>Yellow</td><td>Sodium (Na)</td></tr>
        <tr><td>Violet / Purple</td><td>Potassium (K)</td></tr>
        <tr><td>White</td><td>Magnesium (Mg)</td></tr>
        <tr><td>Blue</td><td>Copper (Cu)</td></tr>
      </table>
      `
    },

    {
      title: "Compounds & Their Uses",
      content: `
      <ul>
        <li>Silver nitrate (AgNO₃) → marker during elections; kept in coloured bottle</li>
        <li>Silver chloride (AgCl) → photochromatic glass</li>
        <li>Silver iodide (AgI) → artificial rain (cloud seeding)</li>
        <li>Barium sulphate → X-ray of abdomen (barium meal)</li>
        <li>Iron pyrites (FeS₂) → fool's gold</li>
        <li>Mercury → kept in iron pot (doesn't form amalgam with iron)</li>
        <li>In tubelight → mercury vapour + argon</li>
        <li>Tetra-ethyl lead → anti-knocking compound in petrol</li>
        <li>Gun powder → 75% KNO₃ + 10% Sulphur + 15% Charcoal</li>
        <li>Fuse wire → lead + tin alloy (low melting point)</li>
        <li>Nichrome wire → used in electrical heaters (Ni + Cr + Fe)</li>
        <li>Radium → extracted from pitch blende</li>
      </ul>
      `
    }

  ]
},

/* =========================
   14. CATALYSTS & PROCESSES
========================= */
{
  title: "14. Catalysts, Processes & Common Facts",
  icon: "zap",
  tags: ["hot","pyq"],
  text: "catalyst haber contact lead chamber deacon explosives TNT dynamite Nobel medicines aspirin DDT chloroform saccharin urea",

  sections: [

    {
      title: "Important Industrial Catalysts",
      content: `
      <table>
        <tr><th>Catalyst</th><th>Process</th></tr>
        <tr><td>Fe + Mo</td><td>Synthesis of NH₃ — Haber's process</td></tr>
        <tr><td>Ni</td><td>Hydrogenation (Vanaspati ghee from oils)</td></tr>
        <tr><td>Pt</td><td>Synthesis of H₂SO₄ — Contact process</td></tr>
        <tr><td>NO</td><td>Manufacture of H₂SO₄ — Lead chamber process</td></tr>
        <tr><td>Hot Al₂O₃</td><td>Preparation of ether from alcohol</td></tr>
        <tr><td>CuCl₂</td><td>Preparation of Cl₂ — Deacon process</td></tr>
      </table>
      `
    },

    {
      title: "Explosives",
      content: `
      <ul>
        <li><b>Dynamite</b> → discovered by Alfred Nobel (1863). Made by absorption of Nitro-glycerine in raw dust. Modern dynamite uses Sodium Nitrate.</li>
        <li>TNT (Tri Nitro Toluene) → military explosive</li>
        <li>TNB (Tri Nitro Benzene) → explosive</li>
        <li>Picric acid (TNP — Tri Nitro Phenol)</li>
        <li>RDX → highly explosive; Aluminium powder mixed to increase temperature and speed</li>
      </ul>
      `
    },

    {
      title: "Medicines & Useful Chemicals",
      content: `
      <ul>
        <li><b>Analgesics</b> (painkillers) → Aspirin, Paracetamol, Morphine</li>
        <li><b>Antimalarial</b> → Quinine derivatives, Chloroquine</li>
        <li><b>Antibiotics</b> → Penicillin, Amoxicillin</li>
        <li><b>Antacids</b> → Magnesium hydrate, Aluminium phosphate, Magnesium carbonate</li>
        <li>Epsom salt (MgSO₄·7H₂O) → laxative, empties bowels</li>
        <li>Chloroform (CHCl₃) → anaesthetic, solvent. In sunlight → poisonous gas Phosgene (COCl₂)</li>
        <li>Saccharin → 550 times sweeter than sugar; no food value; used by diabetic patients</li>
        <li>DDT → Dichloro-diphenyl-trichloro-ethane; insecticide (white powder)</li>
        <li>Vinegar → contains 5–10% acetic acid</li>
        <li>Urea → first organic compound synthesised in laboratory; contains 46% nitrogen</li>
        <li>Carbon-14 dating → determines age of fossils/archaeological objects</li>
        <li>Ferric chloride (FeCl₃) → used to stop bleeding</li>
      </ul>
      `
    }

  ]
},

/* =========================
   15. MAN-MADE SUBSTANCES
========================= */
{
  title: "15. Man-made Substances",
  icon: "factory",
  tags: ["hot","pyq"],
  text: "glass cement dyes fertilizers soda glass borosilicate optical coloured glass soaps detergents saponification concrete",

  sections: [

    {
      title: "Glass",
      content: `
      <ul>
        <li><b>Glass = supercooled liquid.</b> SiO₂ is the common constituent.</li>
        <li><b>Soda glass</b> (soda lime glass): Na₂O·CaO·5SiO₂. Cheapest. Used for window panes, bottles.</li>
        <li><b>Potash glass</b>: contains K instead of Na. Higher softening temperature. Used in beakers, flasks.</li>
        <li><b>Optical glass</b>: contains B₂O₃ + SiO₂. Used for lenses, prisms, microscopes, telescopes.</li>
        <li><b>Borosilicate glass (Pyrex)</b>: resistant to heat and chemicals. Used in lab glassware.</li>
        <li><b>Crooks glass</b> (for spectacles): absorbs UV rays harmful to eyes.</li>
        <li><b>Lead crystal glass</b>: contains ≥24% PbO. Sparkles. Used for decorative items.</li>
      </ul>
      <table>
        <tr><th>Colour of Glass</th><th>Substance Added</th></tr>
        <tr><td>Red</td><td>Selenium (Se) or Cu₂O</td></tr>
        <tr><td>Green</td><td>Chromium III oxide (Cr₂O₃)</td></tr>
        <tr><td>Violet</td><td>Manganese IV oxide (MnO₂)</td></tr>
        <tr><td>Blue</td><td>Copper II oxide (CuO) or CoO</td></tr>
        <tr><td>Brown</td><td>Iron III oxide (Fe₂O₃)</td></tr>
      </table>
      `
    },

    {
      title: "Cement & Concrete",
      content: `
      <ul>
        <li>Cement → complex material of calcium and aluminium silicates. Paste in water sets into hard rocky mass.</li>
        <li>Mortar → sand + cement + water. Used for joining bricks and plastering.</li>
        <li>Concrete → stone chips + sand + cement + water. Harder than mortar.</li>
        <li>Reinforced concrete (RC) → concrete with steel bars/wires. Very strong — used for bridges, roofs, pillars.</li>
      </ul>
      `
    },

    {
      title: "Fertilizers",
      content: `
      <ul>
        <li><b>Nitrogenous</b>: ammonium sulphate, calcium cyanamide, sodium nitrate, ammonium nitrate, urea, diammonium phosphate</li>
        <li><b>Phosphatic</b>: rock phosphate Ca₃(PO₄)₂, superphosphate of lime, triple superphosphate</li>
        <li>Urea → 46% nitrogen. Ammonium sulphate. Potassium nitrate.</li>
      </ul>
      `
    },

    {
      title: "Soaps & Detergents",
      content: `
      <ul>
        <li><b>Soaps</b> → sodium or potassium salts of fatty acids. Made by saponification of fats (fat + NaOH → soap + glycerol).</li>
        <li><b>Detergents</b> → made from petroleum products. Work in hard water (unlike soap).</li>
        <li>Soap doesn't work well in hard water → forms scum (insoluble calcium/magnesium soap).</li>
      </ul>
      `
    },

    {
      title: "Common Chemistry Facts",
      content: `
      <ul>
        <li>Dry ice → solid CO₂; directly converts to gas on heating (sublimation). CO₂: fire extinguisher, soda water.</li>
        <li>N₂O → laughing gas; used in surgery</li>
        <li>Saccharine prepared from toluene. Artificial perfumes from Ethyl acetate.</li>
        <li>Red phosphorus → used in match industry (match box side)</li>
        <li>Silver mirror test → glucose used for preparation of silver mirror</li>
        <li>For artificial respiration → O₂ + He gas cylinder used</li>
        <li>Ethylene glycol → decreases freezing point of water; anti-freeze in cold places</li>
        <li>Fluorine (F₂) → most oxidising agent. Silver → best conductor of electricity. Radon → heaviest gas.</li>
        <li>Power alcohol → pure alcohol + benzene; used as rocket fuel</li>
        <li>Acetylene → used for light production and welding</li>
      </ul>
      `
    }

  ]
}

];