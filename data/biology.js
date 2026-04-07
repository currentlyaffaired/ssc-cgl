const biologyData = [

/* =========================
   1. INTRODUCTION TO BIOLOGY
========================= */
{
  title: "1. Introduction to Biology",
  icon: "dna",
  tags: ["hot","pyq"],
  text: "biology botany zoology lamarck aristotle theophrastus anatomy ecology genetics physiology microbiology entomology cytology apiculture ornithology oncology hematology",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li><b>Biology</b> = Bios (Life) + Logos (Study)</li>
        <li>Term coined by <b>Lamarck & Treviranus</b> (1801)</li>
        <li><b>Father of Botany</b> — Theophrastus</li>
        <li><b>Father of Zoology & Biology</b> — Aristotle</li>
        <li>Botany → plants | Zoology → animals</li>
      </ul>
      `
    },

    {
      title: "Important Terms — 'Study of ___' (PYQ Favourite)",
      content: `
      <table>
        <tr><th>Term</th><th>Study of</th></tr>
        <tr><td>Anatomy</td><td>Internal structure of organisms</td></tr>
        <tr><td>Apiculture</td><td>Rearing of honey bees for honey</td></tr>
        <tr><td>Bacteriology</td><td>Bacteria</td></tr>
        <tr><td>Bryology</td><td>Bryophytes</td></tr>
        <tr><td>Cardiology</td><td>Heart</td></tr>
        <tr><td>Cytology</td><td>Cell</td></tr>
        <tr><td>Dendrochronology</td><td>Counting annual growth rings of trees to find age</td></tr>
        <tr><td>Dermatology</td><td>Skin</td></tr>
        <tr><td>Ecology</td><td>Inter-relationship between organisms and environment</td></tr>
        <tr><td>Embryology</td><td>Fertilization, zygote formation, embryo development</td></tr>
        <tr><td>Entomology</td><td>Insects</td></tr>
        <tr><td>Ethology</td><td>Animal behaviour in natural habitats</td></tr>
        <tr><td>Eugenics</td><td>Improvement of human race</td></tr>
        <tr><td>Genetics</td><td>Heredity and variation</td></tr>
        <tr><td>Gerontology</td><td>Ageing</td></tr>
        <tr><td>Gynecology</td><td>Female reproductive organ</td></tr>
        <tr><td>Hematology</td><td>Blood</td></tr>
        <tr><td>Hepatology</td><td>Liver</td></tr>
        <tr><td>Histology</td><td>Tissue organization (with microscope)</td></tr>
        <tr><td>Ichthyology</td><td>Fishes</td></tr>
        <tr><td>Immunology</td><td>Immune system / resistance to disease</td></tr>
        <tr><td>Mycology</td><td>Fungi</td></tr>
        <tr><td>Nephrology</td><td>Kidneys</td></tr>
        <tr><td>Neurology</td><td>Nervous system</td></tr>
        <tr><td>Oncology</td><td>Cancer and tumors</td></tr>
        <tr><td>Ophthalmology</td><td>Eyes</td></tr>
        <tr><td>Ornithology</td><td>Birds</td></tr>
        <tr><td>Osteology</td><td>Bones</td></tr>
        <tr><td>Paleontology</td><td>Fossils</td></tr>
        <tr><td>Pathology</td><td>Diseases, their effects, agents and transmission</td></tr>
        <tr><td>Physiology</td><td>Functions of various systems of organisms</td></tr>
        <tr><td>Serology</td><td>Serum; antigen-antibody interaction in blood</td></tr>
        <tr><td>Taxonomy</td><td>Classification, nomenclature and identification of organisms</td></tr>
        <tr><td>Virology</td><td>Viruses</td></tr>
        <tr><td>Oneirology</td><td>Dreams</td></tr>
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
  text: "classification five kingdom monera protista fungi plantae animalia binomial nomenclature linnaeus whittaker taxonomy scientific names homo sapiens oryza sativa",

  sections: [

    {
      title: "Five Kingdom System",
      content: `
      <ul>
        <li><b>Linnaeus</b> → divided organisms into 2 kingdoms (Plantae & Animalia). Called <b>Father of Taxonomy</b></li>
        <li><b>R.H. Whittaker (1969)</b> → Five Kingdom Classification</li>
      </ul>
      <table>
        <tr><th>Kingdom</th><th>Key Features</th><th>Examples</th></tr>
        <tr><td>Monera</td><td>Prokaryotic; all microscopic</td><td>Bacteria, Cyanobacteria</td></tr>
        <tr><td>Protista</td><td>Unicellular; usually aquatic</td><td>Euglena, Diatoms, Protozoa</td></tr>
        <tr><td>Fungi</td><td>Non-green; saprophytic; cell wall of chitin</td><td>Mushroom, Mucor, Albugo</td></tr>
        <tr><td>Plantae</td><td>All plants except some algae, diatoms, fungi</td><td>All plants</td></tr>
        <tr><td>Animalia</td><td>Almost all animals except protozoan</td><td>All animals</td></tr>
      </table>
      `
    },

    {
      title: "Binomial Nomenclature (PYQ Favourite)",
      content: `
      <ul>
        <li>Each organism: <b>Genus (Uppercase)</b> + <b>species (lowercase)</b></li>
      </ul>
      <table>
        <tr><th>Organism</th><th>Scientific Name</th></tr>
        <tr><td>Man</td><td>Homo sapiens</td></tr>
        <tr><td>Cat</td><td>Felis domestica</td></tr>
        <tr><td>Frog</td><td>Rana tigrina</td></tr>
        <tr><td>Dog</td><td>Canis familiaris</td></tr>
        <tr><td>Cow</td><td>Bos indicus</td></tr>
        <tr><td>Mango</td><td>Mangifera indica</td></tr>
        <tr><td>Wheat</td><td>Triticum aestivum</td></tr>
        <tr><td>Rice</td><td>Oryza sativa</td></tr>
        <tr><td>Pea</td><td>Pisum sativum</td></tr>
        <tr><td>Mustard</td><td>Brassica campestris</td></tr>
      </table>
      `
    },

    {
      title: "What is Living?",
      content: `
      <ul>
        <li><b>Growth</b> — Increase in number of cells or mass</li>
        <li><b>Reproduction</b> — Produces young ones of same kind</li>
        <li><b>Metabolism</b> — Chemical reactions inside a living cell</li>
        <li><b>Response to stimuli</b> — Senses and responds to surroundings</li>
      </ul>
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
  text: "cell organelles nucleus mitochondria ribosome lysosome golgi chloroplast dna rna prokaryote eukaryote robert hooke schleiden schwann cell theory cell wall plasma membrane centrosome vacuole plastid",

  sections: [

    {
      title: "Cell Basics",
      content: `
      <ul>
        <li>Cell = basic <b>structural and functional unit of life</b></li>
        <li>Term coined by <b>Robert Hooke</b> (1665)</li>
        <li><b>Cell Theory</b> → Schleiden & Schwann (1838–39)</li>
        <li><b>Smallest cell</b>: Mycoplasma gallisepticum</li>
        <li><b>Longest cell</b>: Neuron | <b>Biggest cell</b>: Ostrich egg</li>
        <li>Key: All organisms made of cells; each cell arises from pre-existing cell</li>
      </ul>
      `
    },

    {
      title: "Prokaryotes vs Eukaryotes",
      content: `
      <table>
        <tr><th>Feature</th><th>Prokaryotes</th><th>Eukaryotes</th></tr>
        <tr><td>Cell size</td><td>Generally small</td><td>Generally large</td></tr>
        <tr><td>Nucleus</td><td>Absent</td><td>Present</td></tr>
        <tr><td>Chromosomes</td><td>Single, circular</td><td>More than one</td></tr>
        <tr><td>Membrane-bound organelles</td><td>Absent</td><td>Present</td></tr>
        <tr><td>Cell division</td><td>Fission or budding</td><td>Mitosis and meiosis</td></tr>
        <tr><td>Examples</td><td>Bacteria, Virus, Cyanobacteria</td><td>Plants, Animals, Fungi</td></tr>
      </table>
      `
    },

    {
      title: "Cell Organelles (SSC Favourite)",
      content: `
      <ul>
        <li><b>Mitochondria</b> — Discovered by Altman (1886). <b>'Power house of cell'</b> — site of cellular respiration, synthesizes ATP</li>
        <li><b>Chloroplast</b> — <b>'Kitchen of the cell'</b>. Grana = light reaction; Stroma = dark reaction</li>
        <li><b>Ribosome</b> — Discovered by Palade. Made of RNA. Function: <b>protein synthesis</b></li>
        <li><b>Lysosome</b> — Discovered by De Duve. Contains hydrolytic enzymes. Also called <b>'suicidal bag'</b></li>
        <li><b>Golgi bodies</b> — Discovered by Camilo Golgi. Storage, processing and packaging. In plants = Dictyosomes</li>
        <li><b>Centrosome</b> — Only in animal cells. Helps in spindle fibre formation during cell division</li>
        <li><b>Nucleus</b> — <b>'Control room' of cell</b>. Contains nucleolus and chromatin</li>
        <li><b>Plastids</b> (only in plants) — Chloroplast (green), Chromoplast (coloured), Leucoplast (colourless, stores food)</li>
        <li><b>Cell wall</b> (plants) — Made of cellulose and chitin. Rigid, non-living, freely permeable</li>
        <li><b>Protoplasm</b> — Named by Purkenje (1839). Whole fluid inside plasma membrane</li>
        <li><b>Vacuoles</b> — Larger in plants, smaller in animals. Helps in osmoregulation</li>
      </ul>
      `
    },

    {
      title: "Plant Cell vs Animal Cell",
      content: `
      <table>
        <tr><th>Feature</th><th>Plant Cell</th><th>Animal Cell</th></tr>
        <tr><td>Cell wall</td><td>Present (cellulose & chitin)</td><td>Absent</td></tr>
        <tr><td>Plastid</td><td>Present</td><td>Absent</td></tr>
        <tr><td>Centrosome</td><td>Absent</td><td>Present</td></tr>
        <tr><td>Vacuoles</td><td>Larger</td><td>Smaller</td></tr>
        <tr><td>Size</td><td>Larger</td><td>Smaller</td></tr>
      </table>
      `
    },

    {
      title: "DNA vs RNA",
      content: `
      <div class="fbox">
        DNA Structure (Watson & Crick)
        Double helix — two polynucleotide strands
        Pairing: Adenine ↔ Thymine | Guanine ↔ Cytosine
        Location: Mainly nucleus; small amount in mitochondria & chloroplast
      </div>
      <table>
        <tr><th>Feature</th><th>DNA</th><th>RNA</th></tr>
        <tr><td>Structure</td><td>Double stranded</td><td>Single stranded</td></tr>
        <tr><td>Sugar</td><td>Deoxyribose</td><td>Ribose</td></tr>
        <tr><td>Bases</td><td>A, T, G, C</td><td>A, U, G, C (Uracil replaces Thymine)</td></tr>
        <tr><td>Location</td><td>Mainly nucleus</td><td>Nucleus and cytoplasm</td></tr>
      </table>
      <ul>
        <li><b>mRNA</b> (Messenger RNA) — Brings message from DNA to cytoplasm</li>
        <li><b>rRNA</b> (Ribosomal RNA) — Present in ribosome; site of protein synthesis</li>
        <li><b>tRNA</b> (Transfer RNA) — Carries amino acids to ribosome</li>
      </ul>
      `
    },

    {
      title: "Cell Division",
      content: `
      <table>
        <tr><th>Type</th><th>Where</th><th>Daughter Cells</th><th>Purpose</th></tr>
        <tr><td><b>Mitosis</b></td><td>Somatic cells</td><td>2 cells (same chromosome no.)</td><td>Growth, repair, development</td></tr>
        <tr><td><b>Meiosis</b></td><td>Reproductive cells</td><td>4 haploid cells</td><td>Gamete formation (reduction division)</td></tr>
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
  tags: ["hot","pyq"],
  text: "mendel heredity mutation chromosomes sex determination linkage down syndrome klinefelter turner hemophilia color blindness sickle cell cloning GMO autosome hugo de vries morgan",

  sections: [

    {
      title: "Mendel's Laws",
      content: `
      <ul>
        <li><b>Johan Mendel</b> = Father of Genetics. Experiments on pea plants</li>
        <li><b>Law of Dominance</b> — Only dominant character expressed in F1 generation</li>
        <li><b>Law of Segregation</b> — In F2, characters governed by genes are separated</li>
        <li><b>Law of Independent Assortment</b> — During dihybrid cross, characters segregate independently</li>
        <li><b>Phenotype</b> — Character directly visible | <b>Genotype</b> — Genetic constitution</li>
      </ul>
      `
    },

    {
      title: "Important Terms",
      content: `
      <ul>
        <li><b>Mutation</b> — Sudden heritable change in gene. Term coined by <b>Hugo de Vries</b></li>
        <li><b>Linkage</b> — Exception of Mendel's law; two genes on same chromosome work together. Term coined by <b>Morgan</b></li>
        <li><b>Cloning</b> — Producing identical organisms from single cell. Example: <b>Sheep Dolly</b></li>
        <li><b>Autosomes</b> — 22 pairs in humans | <b>Sex chromosomes</b> — 1 pair (X and Y)</li>
        <li>Humans: 23 pairs total = 22 autosomes + 1 sex chromosome</li>
      </ul>
      `
    },

    {
      title: "Sex Determination",
      content: `
      <div class="fbox">
        Male = XY | Female = XX
        Sperm: half carry X, half carry Y | All eggs carry X
        X sperm + egg = XX = Female
        Y sperm + egg = XY = Male
      </div>
      `
    },

    {
      title: "Chromosomal Disorders (PYQ Hot)",
      content: `
      <table>
        <tr><th>Disorder</th><th>Cause</th><th>Effect</th></tr>
        <tr><td>Down's Syndrome</td><td>Extra chromosome at 21st pair</td><td>Mental retardation, Mongolism</td></tr>
        <tr><td>Klinefelter Syndrome</td><td>Extra X in male (XXY/XYY)</td><td>Sterile; feminine development suppressed</td></tr>
        <tr><td>Turner's Syndrome</td><td>Female with single sex chromosome (X)</td><td>Rudimentary ovaries; lacks secondary sexual characters</td></tr>
        <tr><td>Sickle Cell Anemia</td><td>Change in 11th autosomal chromosome</td><td>Erythrocytes destroyed rapidly</td></tr>
        <tr><td>Hemophilia</td><td>Sex-linked gene</td><td>Failure of blood clotting</td></tr>
        <tr><td>Color Blindness</td><td>Gene on sex chromosomes</td><td>Failure to distinguish red & green</td></tr>
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
  text: "darwin lamarck linnaeus evolution fossils homologous analogous vestigial natural selection survival fittest modern synthetic theory",

  sections: [

    {
      title: "Theories of Evolution",
      content: `
      <table>
        <tr><th>Scientist</th><th>Period</th><th>Theory</th></tr>
        <tr><td>Carolus Linnaeus</td><td>1707–1778</td><td>Each species originates from pre-existing species</td></tr>
        <tr><td>Jean Baptiste Lamarck</td><td>1744–1829</td><td>Inheritance of acquired characters — use/disuse of organs; changes inherited by offspring</td></tr>
        <tr><td>Charles Darwin</td><td>1809–1882</td><td>Natural Selection / Darwinism — Survival of the fittest; variations accumulate over time</td></tr>
        <tr><td>Modern Synthetic Theory</td><td>Today</td><td>Most accepted — based on genetic variation + natural selection</td></tr>
      </table>
      `
    },

    {
      title: "Evidence for Evolution",
      content: `
      <ul>
        <li><b>Homologous organs</b> — Different function but similar structure/embryonic development. e.g. Flipper of whale, feather of bat, forelimb of horse</li>
        <li><b>Analogous organs</b> — Similar function, different internal structure. e.g. Wings of butterfly, bat and birds</li>
        <li><b>Vestigial organs</b> — Functionless in organism but functional in ancestor. e.g. Vermiform appendix in humans</li>
        <li><b>Fossils</b> — Remains of ancient plants or animals; direct evidence for evolution</li>
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
  tags: ["hot","pyq"],
  text: "plant classification thallophyta bryophyta pteridophyta gymnosperm angiosperm algae fungi photosynthesis hormones auxin gibberellin cytokinin ethylene abscisic virus bacteria ivanovsky sequoia monocot dicot morphology root stem flower pollination",

  sections: [

    {
      title: "Classification of Plantae (Eichler, 1883)",
      content: `
      <table>
        <tr><th>Division</th><th>Group</th><th>Key Features</th><th>Examples</th></tr>
        <tr><td rowspan="3">Cryptogames (no seeds)</td><td>Thallophyta</td><td>Body not differentiated; no conducting tissue. Sub-groups: Algae, Fungi</td><td>Algae, Mushroom</td></tr>
        <tr><td>Bryophyta</td><td>First land plants; no xylem/phloem; no true roots. <b>'Amphibians of Plant Kingdom'</b></td><td>Moss, Liverwort</td></tr>
        <tr><td>Pteridophyta</td><td>Wet/shady forests; root, stem, leaves; reproduce by spores</td><td>Ferns, Azolla</td></tr>
        <tr><td rowspan="2">Phanerogames (with seeds)</td><td>Gymnosperm</td><td>Naked seeds; pollination by air; woody, perennial</td><td>Pine, Cycas</td></tr>
        <tr><td>Angiosperm</td><td>Seeds inside fruit; Monocot (1 cotyledon) and Dicot (2 cotyledons)</td><td>Wheat, Rose</td></tr>
      </table>
      <ul>
        <li><b>Longest plant in world</b>: Sequoia giganteum (120m) — Red Wood of California</li>
        <li>Algae study = Phycology | Fungi study = Mycology | Iodine from Laminaria (algae)</li>
      </ul>
      `
    },

    {
      title: "Virus & Bacteria",
      content: `
      <table>
        <tr><th></th><th>Virus</th><th>Bacteria</th></tr>
        <tr><td>Discovered by</td><td>Ivanovsky (1892) — Mosaic disease on tobacco</td><td>Leeuwenhoek (1683) — Father of Bacteriology</td></tr>
        <tr><td>Nature</td><td>Connecting link between living and non-living</td><td>Prokaryotic microorganism</td></tr>
        <tr><td>Types</td><td>Plant virus (RNA), Animal virus (DNA/RNA), Bacteriophage (kills bacteria)</td><td>Bacillus (rod), Coccus (round), Vibrio (comma), Spirillum (spiral)</td></tr>
        <tr><td>Key discoveries</td><td>—</td><td>Koch → TB bacteria; Louis Pasteur → Rabies vaccine + pasteurization</td></tr>
      </table>
      `
    },

    {
      title: "Photosynthesis",
      content: `
      <div class="fbox">
        6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂
        Requires: CO₂ + H₂O + Chlorophyll + Sunlight
        Chlorophyll absorbs violet, blue and red light; rate maximum in RED light
        Light reaction (in Grana)  → Hill reaction → forms ATP
        Dark reaction (in Stroma)  → Calvin-Benson cycle → forms glucose
      </div>
      `
    },

    {
      title: "Plant Hormones",
      content: `
      <table>
        <tr><th>Hormone</th><th>Discovered by</th><th>Function</th></tr>
        <tr><td>Auxins</td><td>Darwin (1880)</td><td>Controls growth from apex; prevents leaf separation</td></tr>
        <tr><td>Gibberellins</td><td>Kurosava (1926)</td><td>Converts dwarf plants to tall; breaks dormancy; motivates seeds to sprout</td></tr>
        <tr><td>Cytokinins</td><td>Lethem (1955)</td><td>Cell division; breaks seed dormancy; aids RNA and protein synthesis</td></tr>
        <tr><td>Abscisic Acid (ABA)</td><td>Carnes & Adicote</td><td>Anti-growth; keeps seeds/buds dormant; causes leaf separation</td></tr>
        <tr><td>Ethylene</td><td>—</td><td>Only gaseous hormone; fruit ripening; increases female flowers</td></tr>
        <tr><td>Florigens</td><td>—</td><td>Formed in leaves; helps in blooming (flowering hormone)</td></tr>
      </table>
      `
    },

    {
      title: "Plant Morphology",
      content: `
      <ul>
        <li><b>Root</b> — Descending part; grows away from light; develops from radicle. Types: Tap root, Adventitious root</li>
        <li><b>Stem</b> — Grows towards light; develops from plumule. Underground stems: Tuber (potato), Corm (Colocasia), Bulb (onion), Rhizome (turmeric)</li>
        <li><b>Flower</b> — Reproductive part: Calyx, Corolla, Androecium (male), Gynoecium (female)</li>
        <li><b>Pollination</b> — Self-pollination vs Cross-pollination | Fertilized egg = Zygote</li>
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
  text: "animal kingdom classification phylum protozoa porifera coelenterate platyhelminthes annelida arthropoda mollusca echinodermata chordata vertebrate pisces amphibia reptilia aves mammalia fish bird warm blooded cold blooded heart chambers",

  sections: [

    {
      title: "Classification of Animal Kingdom",
      content: `
      <table>
        <tr><th>Phylum</th><th>Key Features</th><th>Examples</th></tr>
        <tr><td>Protozoa</td><td>Unicellular; all metabolic activities in one cell; respiration by diffusion</td><td>Amoeba, Euglena, Trypanosoma</td></tr>
        <tr><td>Porifera</td><td>Marine; pores (ostia) in body wall; multicellular but no regular tissues</td><td>Sycon, Sponge</td></tr>
        <tr><td>Coelenterate</td><td>Aquatic; diploblastic; radial symmetry; tentacles for food</td><td>Hydra, Jellyfish, Sea Anemone</td></tr>
        <tr><td>Platyhelminthes</td><td>Flat worm; triploblastic; no body cavity; hermaphrodite</td><td>Planaria, Liver fluke, Tapeworm</td></tr>
        <tr><td>Ascheleminthes</td><td>Round worm; complete alimentary canal; no respiratory/circulatory system</td><td>Ascaris, Threadworm</td></tr>
        <tr><td>Annelida</td><td>Body with rings; setae of chitin; red blood; excretion by nephridia</td><td>Earthworm, Nereis, Leech</td></tr>
        <tr><td>Arthropoda</td><td>Jointed legs; chitinous exoskeleton; open circulatory system</td><td>Cockroach, Prawn, Bees, Mosquito</td></tr>
        <tr><td>Mollusca</td><td>Soft body; mantle secretes hard shell; colourless blood; kidney excretion</td><td>Octopus, Squid, Pila</td></tr>
        <tr><td>Echinodermata</td><td>Spiny skin; all marine; tube feet for locomotion; regeneration ability</td><td>Starfish, Sea Urchin</td></tr>
        <tr><td>Chordata</td><td>Notochord present; triploblastic, coelomate, bilaterally symmetrical</td><td>All vertebrates</td></tr>
      </table>
      `
    },

    {
      title: "Vertebrate Groups",
      content: `
      <table>
        <tr><th>Class</th><th>Blood</th><th>Heart</th><th>Key Features</th><th>Examples</th></tr>
        <tr><td>Pisces (Fish)</td><td>Cold-blooded</td><td>2 chambers</td><td>Aquatic; respiration through gills</td><td>Shark, Torpedo</td></tr>
        <tr><td>Amphibia</td><td>Cold-blooded</td><td>3 chambers</td><td>Land & water; eggs without shell</td><td>Frog, Toad, Salamander</td></tr>
        <tr><td>Reptilia</td><td>Cold-blooded</td><td>3–4 chambers</td><td>Land; eggs with calcium carbonate shells</td><td>Lizard, Snake, Tortoise, Crocodile</td></tr>
        <tr><td>Aves (Birds)</td><td>Warm-blooded</td><td>4 chambers</td><td>Fore-feet = wings; lungs; no teeth</td><td>Crow, Peacock, Parrot</td></tr>
        <tr><td>Mammalia</td><td>Warm-blooded</td><td>4 chambers</td><td>Skin with hair; sweat glands; external ear; nurse young ones</td><td>Human, Whale, Bat</td></tr>
      </table>
      <ul>
        <li>Flightless birds: <b>Kiwi and Emu</b></li>
        <li>Largest living bird: <b>Ostrich</b> | Smallest bird: <b>Humming bird</b></li>
        <li>Largest mammal: <b>Blue Whale</b> | Largest land mammal: <b>African Elephant</b></li>
        <li>Fastest animal: <b>Cheetah</b> | Tallest mammal: <b>Giraffe</b></li>
      </ul>
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
  text: "blood rbc wbc platelets haemoglobin plasma blood groups abo rh factor landsteiner universal donor receptor biconcave",

  sections: [

    {
      title: "Blood Basics",
      content: `
      <ul>
        <li>Blood = <b>fluid connective tissue</b> | pH = 7.4 | ~7% of total body weight</li>
        <li>Average <b>5–6 litres</b> in human body; females have ~0.5 litre less than males</li>
      </ul>
      `
    },

    {
      title: "Components of Blood",
      content: `
      <table>
        <tr><th>Component</th><th>Details</th></tr>
        <tr><td><b>Plasma</b> (60% of blood)</td><td>Liquid part; 90% water, 7% protein, 0.9% salt. Transports food, hormones, excretory products</td></tr>
        <tr><td><b>RBC</b> (Red Blood Cells)</td><td>Biconcave; <b>no nucleus</b> (exception: camel & llama); lifespan 20–120 days; destroyed in liver & spleen; contains haemoglobin; carries O₂ and CO₂</td></tr>
        <tr><td><b>WBC</b> (White Blood Cells)</td><td>Amoeba-shaped; nucleus present; lifespan 1–2 days; formed in bone marrow & lymph nodes; protects from disease. <b>RBC:WBC = 600:1</b></td></tr>
        <tr><td><b>Platelets</b> (Thrombocytes)</td><td>Only in humans and mammals; no nucleus; lifespan 3–5 days; formed in bone marrow; dies in spleen; helps in <b>blood clotting</b></td></tr>
      </table>
      `
    },

    {
      title: "Blood Groups (ABO System)",
      content: `
      <ul>
        <li>Discovered by <b>Landsteiner</b> (1900); Nobel Prize 1930</li>
      </ul>
      <table>
        <tr><th>Blood Group</th><th>Antigen (in RBC)</th><th>Antibody (in Plasma)</th><th>Special</th></tr>
        <tr><td>A</td><td>Only A</td><td>Only b</td><td>—</td></tr>
        <tr><td>B</td><td>Only B</td><td>Only a</td><td>—</td></tr>
        <tr><td>AB</td><td>Both A and B</td><td>Absent</td><td><b>Universal Receptor</b></td></tr>
        <tr><td>O</td><td>Absent</td><td>Both a and b</td><td><b>Universal Donor</b></td></tr>
      </table>
      <ul>
        <li><b>Rh factor</b> — Discovered by Landsteiner & Wiener (1940) in Rhesus monkey. Rh⁺ = has factor; Rh⁻ = does not have factor</li>
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
  text: "digestion enzymes saliva ptyalin gastric juice pepsin rennin pancreas trypsin amylase lipase insulin liver bile intestine absorption assimilation ingestion banting best islets of langerhans",

  sections: [

    {
      title: "5 Stages of Digestion",
      content: `
      <div class="fbox">
        Ingestion → Digestion → Absorption → Assimilation → Defecation
      </div>
      `
    },

    {
      title: "Digestive Enzymes (PYQ Favourite)",
      content: `
      <table>
        <tr><th>Gland Juice</th><th>Enzyme</th><th>Substrate</th><th>Product</th></tr>
        <tr><td>Saliva</td><td>Ptylin</td><td>Starch</td><td>Maltose</td></tr>
        <tr><td>Saliva</td><td>Maltase</td><td>Maltose</td><td>Glucose</td></tr>
        <tr><td>Gastric Juice</td><td>Pepsin</td><td>Protein</td><td>Peptones</td></tr>
        <tr><td>Gastric Juice</td><td>Rennin</td><td>Casein</td><td>Calcium Paracasein</td></tr>
        <tr><td>Pancreatic Juice</td><td>Trypsin</td><td>Protein</td><td>Polypeptides</td></tr>
        <tr><td>Pancreatic Juice</td><td>Amylase</td><td>Starch</td><td>Sugar</td></tr>
        <tr><td>Pancreatic Juice</td><td>Lipase</td><td>Fat</td><td>Fatty acid & Glycerol</td></tr>
        <tr><td>Intestinal Juice</td><td>Erepsin</td><td>Protein</td><td>Amino acid</td></tr>
        <tr><td>Intestinal Juice</td><td>Maltase</td><td>Maltose</td><td>Glucose</td></tr>
        <tr><td>Intestinal Juice</td><td>Lactase</td><td>Lactose</td><td>Glucose & Fructose</td></tr>
        <tr><td>Intestinal Juice</td><td>Sucrase</td><td>Sucrose</td><td>Glucose & Galactose</td></tr>
      </table>
      `
    },

    {
      title: "Important Organs",
      content: `
      <ul>
        <li><b>Liver</b> — Largest gland (~1.5–2 kg). Produces bile (alkaline) and fibrinogen. Destroys dead RBCs</li>
        <li><b>Pancreas</b> — Second largest gland; both endocrine and exocrine. Contains Islets of Langerhans</li>
        <li><b>Insulin</b> — From β-cells of Islets of Langerhans. Discovered by <b>Banting & Best</b> (1921). Controls glucose → glycogen. Deficiency = <b>Diabetes</b></li>
        <li>Small intestine length = ~7 metres; diameter = 2.5 cm</li>
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
  tags: ["hot","pyq"],
  text: "circulatory system heart blood pressure sphygmomanometer pulmonary artery vein SA node pacemaker william harvey excretory kidney nephron urine urea uric acid urochrome",

  sections: [

    {
      title: "Circulatory System",
      content: `
      <ul>
        <li>Blood circulation discovered by <b>William Harvey</b> (1628)</li>
        <li>Human heart: <b>4 chambers</b> | Weight ~300g | <b>72 beats/minute</b> | Pumps ~70 ml per beat</li>
        <li>Normal blood pressure: <b>120/80</b> (Systolic 120, Diastolic 80)</li>
        <li>Blood pressure measured by <b>sphygmomanometer</b></li>
        <li><b>SA Node (Pacemaker)</b> — Specialized cardiac muscle fibre in right auricle; generates cardiac impulse</li>
        <li><b>Pulmonary artery</b>: Right ventricle → Lungs; carries <b>impure blood</b> (exception: artery with impure blood)</li>
        <li><b>Pulmonary vein</b>: Lungs → Left auricle; carries <b>pure blood</b> (exception: vein with pure blood)</li>
        <li>Blood circulation inside body takes ~23 seconds</li>
      </ul>
      `
    },

    {
      title: "Excretory System",
      content: `
      <ul>
        <li>Excretion = Removal of nitrogenous substances formed during metabolism</li>
        <li>Main excretory organs: Kidneys, Skin, Liver, Lungs</li>
        <li><b>Kidneys</b> — Main excretory organ | Weight 140g | Outer cortex + Inner medulla | Each kidney has ~<b>1,30,000 nephrons</b></li>
        <li>125 ml/min blood filtered | 180 litres/day | <b>1.45 litres urine</b> formed daily</li>
        <li>Normal urine: 95% water, 2% salt, 2.7% urea, 0.3% uric acid | pH 6 | Colour due to <b>urochrome</b></li>
      </ul>
      `
    }

  ]
},

/* =========================
   11. NERVOUS + SKELETAL + ENDOCRINE
========================= */
{
  title: "11. Nervous, Skeletal & Endocrine",
  icon: "brain",
  tags: ["hot","pyq"],
  text: "brain neuron cerebrum thalamus hypothalamus cerebellum medulla cranial spinal skeletal bones femur stapes skull endocrine pituitary thyroid adrenal insulin thyroxine hormones gland respiratory kreb's cycle aerobic",

  sections: [

    {
      title: "Nervous System",
      content: `
      <ul>
        <li>Three parts: Central Nervous System, Peripheral Nervous System, Autonomic Nervous System</li>
        <li><b>Cerebrum</b> — Most developed part; centre of wisdom, memory, will power, knowledge, thinking</li>
        <li><b>Thalamus</b> — Centre of pain, cold and heat</li>
        <li><b>Hypothalamus</b> — Controls hormonal secretion; centre of hunger, thirst, temperature, love, hate</li>
        <li><b>Cerebellum</b> — Large reflex centre for coordination of muscular movement and posture</li>
        <li><b>Medulla</b> — Controls cardiac, respiratory and vasomotor centres</li>
        <li>12 pairs of cranial nerves and 31 pairs of spinal cord in human</li>
        <li>Unit of nervous tissue = <b>Neuron</b> (nerve cell)</li>
        <li>Fastest nervous speed = 532 km/h | Weight of human brain = <b>1350 grams</b></li>
      </ul>
      `
    },

    {
      title: "Skeletal System",
      content: `
      <ul>
        <li>Total bones in adult human body: <b>206</b> (childhood: 300)</li>
        <li><b>Largest bone</b>: Femur (thigh) | <b>Smallest bone</b>: Stapes (ear)</li>
        <li>Skull: 29 bones | Vertebral column: 33 vertebrae | Ribs: 24</li>
        <li>Total muscles: <b>639</b> | Largest muscle: Gluteus Maximus (hip) | Smallest muscle: Stapedius</li>
      </ul>
      `
    },

    {
      title: "Endocrine Glands & Hormones",
      content: `
      <table>
        <tr><th>Gland</th><th>Key Hormones / Facts</th><th>Deficiency Disease</th></tr>
        <tr><td><b>Pituitary</b> (Master gland)</td><td>Weight 0.6g; in sphenoid bone. Controls growth (STH), thyroid (TSH), adrenal (ACTH), gonads (GTH), milk (LTH), BP (ADH)</td><td>Dwarfism / Gigantism</td></tr>
        <tr><td>Thyroid</td><td>Below larynx. Secretes Thyroxine and Triiodothyronine</td><td>Cretinism, Myxedema, Goitre</td></tr>
        <tr><td>Adrenal</td><td>Cortex: Glucocorticoids, Mineralocorticoids, Sex hormone. Medulla: Epinephrine, Norepinephrine</td><td>Addison's disease</td></tr>
        <tr><td>Pancreas</td><td>β-cells secrete Insulin (Banting & Best, 1921)</td><td>Diabetes mellitus</td></tr>
      </table>
      `
    },

    {
      title: "Respiratory System",
      content: `
      <ul>
        <li>Main organs: Nasal passage, Pharynx, Larynx, Trachea, Bronchi, Bronchioles, Lungs</li>
        <li>Air inhaled: 79% N₂, 21% O₂, 0.03% CO₂ | Air exhaled: <b>79% N₂, 17% O₂, 4% CO₂</b></li>
        <li>Right lung > Left lung; each surrounded by pleural membrane</li>
        <li><b>Aerobic respiration</b>: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2870 KJ (38 ATP)</li>
        <li><b>Kreb's Cycle</b> (Citric Acid Cycle) — Described by Hans Krebs (1937); occurs in mitochondria</li>
      </ul>
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
  text: "vitamins retinol thiamine riboflavin niacin cyanocobalamin ascorbic calciferol tocopherol phylloquinone beriberi scurvy rickets pellagra xerophthalmia night blindness fat soluble water soluble hopkins funk",

  sections: [

    {
      title: "Overview",
      content: `
      <ul>
        <li>Vitamin discovered by <b>Sir F.G. Hopkins</b>; term coined by <b>Funk</b></li>
        <li><b>Water-soluble</b>: B and C | <b>Fat-soluble</b>: A, D, E, K</li>
      </ul>
      `
    },

    {
      title: "Vitamin Table (PYQ Favourite)",
      content: `
      <table>
        <tr><th>Vitamin</th><th>Chemical Name</th><th>Deficiency Disease</th><th>Sources</th></tr>
        <tr><td>A</td><td>Retinol</td><td>Colour blindness, Xerophthalmia (night blindness)</td><td>Milk, Egg, Cheese, Green vegetables, Fish liver oil</td></tr>
        <tr><td>B₁</td><td>Thiamine</td><td>Beriberi</td><td>Groundnut, Rapeseed, Dried chilli, Pulses</td></tr>
        <tr><td>B₂</td><td>Riboflavin</td><td>Cracking of skin, reddish eyes, cracking of tongue</td><td>Meat, Green vegetables, Milk</td></tr>
        <tr><td>B₅</td><td>Nicotinamide / Niacin</td><td>Pellagra (4-D Syndrome)</td><td>Meat, Groundnut, Potato, Tomato</td></tr>
        <tr><td>B₁₂</td><td>Cyanocobalamin</td><td>Anaemia, Jaundice</td><td>Meat, Milk</td></tr>
        <tr><td>C</td><td>Ascorbic acid</td><td>Scurvy, Swelling of gums</td><td>Lemon, Orange, Tomato, Chilli</td></tr>
        <tr><td>D</td><td>Calciferol</td><td>Rickets (children), Osteomalacia (adults)</td><td>Fish liver oil, Milk, Eggs</td></tr>
        <tr><td>E</td><td>Tocopherol</td><td>Less fertility</td><td>Leafy vegetables, Milk, Butter</td></tr>
        <tr><td>K</td><td>Phylloquinone</td><td>Non-clotting of blood</td><td>Tomato, Soybean oil, Green vegetables</td></tr>
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
  tags: ["hot","pyq"],
  text: "diseases protozoa bacteria virus malaria plasmodium anopheles tuberculosis cholera typhoid pneumonia leprosy tetanus aids hiv dengue polio influenza chicken pox measles rabies sleeping sickness kala azar diarrhoea entamoeba",

  sections: [

    {
      title: "Diseases caused by Protozoa",
      content: `
      <table>
        <tr><th>Disease</th><th>Parasite</th><th>Carrier</th><th>Symptoms</th></tr>
        <tr><td>Malaria</td><td>Plasmodium</td><td>Female Anopheles mosquito</td><td>Fever with shivering</td></tr>
        <tr><td>Sleeping sickness</td><td>Trypanosoma</td><td>Tse-Tse flies</td><td>Fever with severe sleep</td></tr>
        <tr><td>Diarrhoea (Amoebic)</td><td>Entamoeba histolytica</td><td>House flies</td><td>Mucus & diarrhoea with blood</td></tr>
        <tr><td>Kala-azar</td><td>Leishmania donovani</td><td>Sand flies</td><td>High fever</td></tr>
      </table>
      `
    },

    {
      title: "Diseases caused by Bacteria",
      content: `
      <table>
        <tr><th>Disease</th><th>Bacteria</th><th>Symptoms</th></tr>
        <tr><td>Tetanus</td><td>Clostridium Tetani</td><td>High fever, spasm, closing of jaws</td></tr>
        <tr><td>Cholera</td><td>Vibrio cholerae</td><td>Continuous stool and vomiting</td></tr>
        <tr><td>Typhoid</td><td>Salmonella typhosa</td><td>High fever, headache</td></tr>
        <tr><td>Tuberculosis (TB)</td><td>Mycobacterium tuberculosis</td><td>Repeated coughing</td></tr>
        <tr><td>Pneumonia</td><td>Diplococcus pneumoniae</td><td>High fever, swelling in lungs</td></tr>
        <tr><td>Leprosy</td><td>Mycobacterium leprae</td><td>Spots on body, nerves affected</td></tr>
        <tr><td>Gonorrhea</td><td>Neisseria gonorrhoeae</td><td>Swelling in urinary path</td></tr>
        <tr><td>Syphilis</td><td>Treponema pallidum</td><td>Wounds in urinogenital tract</td></tr>
      </table>
      `
    },

    {
      title: "Diseases caused by Viruses",
      content: `
      <table>
        <tr><th>Disease</th><th>Virus</th><th>Symptoms</th></tr>
        <tr><td>AIDS</td><td>HIV</td><td>Immune system becomes weak</td></tr>
        <tr><td>Dengue fever</td><td>Dengue virus</td><td>Pain in eyes, muscles, head and joints</td></tr>
        <tr><td>Polio</td><td>Polio virus</td><td>Fever, body pain, backbone & intestine cells destroyed</td></tr>
        <tr><td>Influenza (Flu)</td><td>Mixo virus</td><td>Suffocation, sneezing, restlessness</td></tr>
        <tr><td>Chicken Pox</td><td>Variola virus</td><td>High fever, reddish eruption on body</td></tr>
        <tr><td>Measles</td><td>Morbeli virus</td><td>Reddish eruptions on body</td></tr>
        <tr><td>Rabies</td><td>Rabies virus</td><td>Patient becomes mad with severe headache & high fever</td></tr>
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
  tags: ["hot","pyq"],
  text: "facts biology records discoveries penicillin insulin dna watson crick heart transplant test tube baby barnard salk fleming waksman animal botany records bones muscles brain numbers",

  sections: [

    {
      title: "Medicinal Discoveries",
      content: `
      <table>
        <tr><th>Invention / Discovery</th><th>Inventor</th></tr>
        <tr><td>Vitamin (discovered)</td><td>F.G. Hopkins; term coined by Cosimir Funk</td></tr>
        <tr><td>Vitamin-D</td><td>Mc. Collum</td></tr>
        <tr><td>Streptomycin</td><td>Selman Waksman</td></tr>
        <tr><td>Heart Transplantation</td><td>Christian Barnard</td></tr>
        <tr><td>Malaria parasite & treatment</td><td>Ronald Ross</td></tr>
        <tr><td>First test-tube baby</td><td>Edwards & Steptoe</td></tr>
        <tr><td>DNA structure</td><td>James Watson & Crick</td></tr>
        <tr><td>Insulin</td><td>Banting & Best</td></tr>
        <tr><td>Penicillin</td><td>Alexander Fleming</td></tr>
        <tr><td>Polio vaccine</td><td>Jonas E. Salk</td></tr>
        <tr><td>Blood transfer / groups</td><td>Karl Landsteiner</td></tr>
        <tr><td>Bacteria discovered</td><td>Leeuwenhoek</td></tr>
      </table>
      `
    },

    {
      title: "Important Animal Records",
      content: `
      <table>
        <tr><th>Fact</th><th>Answer</th></tr>
        <tr><td>Largest & heaviest mammal</td><td>Blue Whale</td></tr>
        <tr><td>Largest land mammal</td><td>African Elephant</td></tr>
        <tr><td>Largest living reptile</td><td>Sea Turtle (Tortoise)</td></tr>
        <tr><td>Largest living bird</td><td>Ostrich</td></tr>
        <tr><td>Largest snake</td><td>Python</td></tr>
        <tr><td>Smallest bird</td><td>Humming bird</td></tr>
        <tr><td>Smallest mammal</td><td>Shrew</td></tr>
        <tr><td>Fastest animal on land</td><td>Cheetah (Panther)</td></tr>
        <tr><td>Fastest flying bird</td><td>Spine-tailed Swift</td></tr>
        <tr><td>Tallest mammal</td><td>Giraffe (Africa)</td></tr>
        <tr><td>Busiest human organ</td><td>Heart</td></tr>
      </table>
      `
    },

    {
      title: "Important Botany Records",
      content: `
      <table>
        <tr><th>Fact</th><th>Answer</th></tr>
        <tr><td>Largest angiosperm tree</td><td>Eucalyptus</td></tr>
        <tr><td>Longest tree in world</td><td>Sequoia giganteum (120m) — Red Wood of California</td></tr>
        <tr><td>Smallest angiosperm plant</td><td>Lemna (aquatic)</td></tr>
        <tr><td>Plant with largest leaf</td><td>Victoria Regia (aquatic, West Bengal)</td></tr>
        <tr><td>Largest fruit</td><td>Lodoicea (double coconut, Kerala)</td></tr>
        <tr><td>Largest flower</td><td>Rafflesia arnoldii (1 meter diameter, 8 kg)</td></tr>
        <tr><td>Smallest flower</td><td>Wolffia (0.1 mm diameter)</td></tr>
        <tr><td>Smallest seed</td><td>Orchid</td></tr>
        <tr><td>Plant with most chromosomes</td><td>Ophioglossum Fern (1266 chromosomes in diploid cell)</td></tr>
      </table>
      `
    },

    {
      title: "Key Biology Numbers (Must Know)",
      content: `
      <table>
        <tr><th>Fact</th><th>Value</th></tr>
        <tr><td>Total bones (adult)</td><td>206 (childhood: 300)</td></tr>
        <tr><td>Total muscles</td><td>639</td></tr>
        <tr><td>Largest muscle</td><td>Gluteus Maximus (hip)</td></tr>
        <tr><td>Smallest muscle</td><td>Stapedius</td></tr>
        <tr><td>Normal heartbeat</td><td>72 times/minute</td></tr>
        <tr><td>Normal blood pressure</td><td>120/80 mm Hg</td></tr>
        <tr><td>Blood pH</td><td>7.4</td></tr>
        <tr><td>Blood volume (adult)</td><td>5–6 litres</td></tr>
        <tr><td>Brain weight</td><td>~1350 grams</td></tr>
        <tr><td>Small intestine length</td><td>~7 metres</td></tr>
        <tr><td>Urine formed daily</td><td>~1.45 litres</td></tr>
        <tr><td>Nephrons per kidney</td><td>~1,30,000</td></tr>
        <tr><td>Cranial nerve pairs</td><td>12</td></tr>
        <tr><td>Spinal cord pairs</td><td>31</td></tr>
        <tr><td>RBC : WBC ratio</td><td>600 : 1</td></tr>
        <tr><td>Cells destroyed per second</td><td>~15 million</td></tr>
        <tr><td>Penicillin obtained from</td><td>Penicillium fungus</td></tr>
        <tr><td>Fastest nervous speed</td><td>532 km/h</td></tr>
      </table>
      `
    }

  ]
}

];