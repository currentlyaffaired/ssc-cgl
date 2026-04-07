const physicsData = [

/* =========================
   1. MEASUREMENTS & UNITS
========================= */
{
  title: "1. Measurements & Units",
  icon: "ruler",
  tags: ["hot","formula","pyq"],
  text: "units si fundamental derived density dimensional analysis conversions",

  sections: [

    {
      title: "SI Base Units",
      content: `
      <table>
        <tr><th>Quantity</th><th>SI Unit</th><th>Symbol</th><th>Key Fact</th></tr>
        <tr><td>Length</td><td>Metre</td><td>m</td><td>1 km = 1000 m</td></tr>
        <tr><td>Mass</td><td>Kilogram</td><td>kg</td><td>Heaviest SI base unit</td></tr>
        <tr><td>Time</td><td>Second</td><td>s</td><td>1 hour = 3600 s</td></tr>
        <tr><td>Electric Current</td><td>Ampere</td><td>A</td><td>Flow of charge</td></tr>
        <tr><td>Temperature</td><td>Kelvin</td><td>K</td><td>K = °C + 273</td></tr>
        <tr><td>Amount of Substance</td><td>Mole</td><td>mol</td><td>6.022 × 10²³ particles</td></tr>
        <tr><td>Luminous Intensity</td><td>Candela</td><td>cd</td><td>Brightness of light source</td></tr>
      </table>
      `
    },

    {
      title: "Derived Quantities",
      content: `
      <table>
        <tr><th>Quantity</th><th>Formula</th><th>SI Unit</th></tr>
        <tr><td>Area</td><td>Length × Breadth</td><td>m²</td></tr>
        <tr><td>Volume</td><td>L × B × H</td><td>m³</td></tr>
        <tr><td>Velocity</td><td>Displacement / Time</td><td>m/s</td></tr>
        <tr><td>Acceleration</td><td>Δvelocity / Time</td><td>m/s²</td></tr>
        <tr><td>Force</td><td>Mass × Acceleration</td><td>Newton (N)</td></tr>
        <tr><td>Pressure</td><td>Force / Area</td><td>Pascal (Pa)</td></tr>
        <tr><td>Work / Energy</td><td>Force × Displacement</td><td>Joule (J)</td></tr>
        <tr><td>Power</td><td>Work / Time</td><td>Watt (W)</td></tr>
        <tr><td>Density</td><td>Mass / Volume</td><td>kg/m³</td></tr>
        <tr><td>Frequency</td><td>1 / Time period</td><td>Hertz (Hz)</td></tr>
      </table>
      `
    },

    {
      title: "Important Unit Conversions",
      content: `
      <ul>
        <li>1 km = 1000 m = 10⁵ cm</li>
        <li>1 hour = 60 min = 3600 s</li>
        <li>1 kg = 1000 g</li>
        <li>1 litre = 10⁻³ m³ = 1000 cm³</li>
        <li>1 Newton = 10⁵ dyne (CGS unit)</li>
        <li>1 Joule = 10⁷ erg</li>
        <li>1 kWh = 3.6 × 10⁶ J (unit on electricity bill)</li>
        <li>1 light year = 9.46 × 10¹⁵ m (distance, NOT time!)</li>
        <li>1 parsec = 3.26 light years (used in astronomy)</li>
        <li>1 angstrom (Å) = 10⁻¹⁰ m (used for atomic / wavelength sizes)</li>
        <li>1 Horsepower (HP) = 746 W</li>
      </ul>
      `
    },

    {
      title: "Density",
      content: `
      <div class="fbox">
      Density (ρ) = Mass (m) / Volume (V) &nbsp;&nbsp; Unit: kg/m³
      </div>
      <ul>
        <li>Density of water = 1000 kg/m³</li>
        <li>Density of ice = 917 kg/m³ → ice is less dense → ice floats</li>
        <li>Relative density (Specific Gravity) = Density of substance / Density of water → no unit</li>
      </ul>
      <div class="pyq">★ PYQ: Why does ice float on water? — Density of ice (917 kg/m³) &lt; density of water (1000 kg/m³). On freezing, water expands (anomalous expansion), reducing its density.</div>
      <div class="pyq">★ PYQ: 1 kWh is the commercial unit of electrical energy. 1 kWh = 3.6 × 10⁶ J.</div>
      `
    }

  ]
},

/* =========================
   2. MOTION
========================= */
{
  title: "2. Motion & Kinematics",
  icon: "move",
  tags: ["hot","formula","pyq"],
  text: "motion speed velocity acceleration equations graph uniform non-uniform",

  sections: [

    {
      title: "Types of Motion",
      content: `
      <ul>
        <li><b>Uniform Motion:</b> Equal distance in equal time intervals (constant speed)</li>
        <li><b>Non-Uniform Motion:</b> Unequal distances in equal time intervals (speed changes)</li>
        <li><b>Linear / Rectilinear Motion:</b> Along a straight line</li>
        <li><b>Circular Motion:</b> Along a circular path</li>
        <li><b>Oscillatory / Vibratory Motion:</b> Back and forth (e.g., pendulum)</li>
        <li><b>Random Motion:</b> Irregular, no fixed path (e.g., gas molecules)</li>
      </ul>
      `
    },

    {
      title: "Distance vs Displacement",
      content: `
      <table>
        <tr><th>Property</th><th>Distance</th><th>Displacement</th></tr>
        <tr><td>Definition</td><td>Total path length travelled</td><td>Shortest path from start to end</td></tr>
        <tr><td>Type</td><td>Scalar (magnitude only)</td><td>Vector (magnitude + direction)</td></tr>
        <tr><td>Value</td><td>Always positive</td><td>Can be +, −, or zero</td></tr>
        <tr><td>Example</td><td>Running 4 km on a circular track</td><td>= 0 if you return to start</td></tr>
      </table>
      `
    },

    {
      title: "Speed vs Velocity",
      content: `
      <table>
        <tr><th>Property</th><th>Speed</th><th>Velocity</th></tr>
        <tr><td>Definition</td><td>Distance per unit time</td><td>Displacement per unit time</td></tr>
        <tr><td>Type</td><td>Scalar</td><td>Vector</td></tr>
        <tr><td>Formula</td><td>Speed = Distance / Time</td><td>Velocity = Displacement / Time</td></tr>
        <tr><td>Unit</td><td>m/s</td><td>m/s</td></tr>
      </table>
      <div class="note">📌 A body can have constant speed but changing velocity (e.g., uniform circular motion — direction keeps changing).</div>
      `
    },

    {
      title: "Acceleration",
      content: `
      <div class="fbox">
      a = (v − u) / t &nbsp;&nbsp; Unit: m/s²
      </div>
      <ul>
        <li><b>Positive acceleration:</b> speed increasing</li>
        <li><b>Retardation / Deceleration:</b> negative acceleration (speed decreasing)</li>
        <li><b>Uniform acceleration:</b> equal change in velocity in equal time intervals</li>
      </ul>
      `
    },

    {
      title: "Equations of Motion",
      content: `
      <div class="fbox">
      v = u + at
      s = ut + ½at²
      v² = u² + 2as
      </div>
      <p>u = initial velocity &nbsp;|&nbsp; v = final velocity &nbsp;|&nbsp; a = acceleration &nbsp;|&nbsp; t = time &nbsp;|&nbsp; s = displacement</p>
      `
    },

    {
      title: "Graphs of Motion",
      content: `
      <ul>
        <li><b>Distance–Time graph:</b> Slope = Speed. Straight line = uniform. Curve = accelerating. Horizontal = rest.</li>
        <li><b>Velocity–Time graph:</b> Slope = Acceleration. Area under graph = Distance. Horizontal line = uniform velocity.</li>
      </ul>
      <div class="pyq">★ PYQ: Frequently asked — identify type of motion from graphs.</div>
      `
    },

    {
      title: "Free Fall & Projectile",
      content: `
      <ul>
        <li>Free fall: only gravity acts → a = g = 9.8 m/s² downward</li>
        <li>At highest point of a projectile: vertical velocity = 0, horizontal velocity unchanged</li>
        <li>Range is maximum at 45° angle of projection</li>
        <li>Time to reach max height = Time to fall back (symmetry)</li>
      </ul>
      <div class="pyq">★ PYQ: A ball thrown upward has zero velocity at top but non-zero acceleration (= g downward). Velocity and acceleration can be in opposite directions.</div>
      `
    }

  ]
},

/* =========================
   3. LAWS OF MOTION
========================= */
{
  title: "3. Laws of Motion",
  icon: "activity",
  tags: ["hot","pyq"],
  text: "newton laws inertia force momentum friction impulse conservation",

  sections: [

    {
      title: "Newton's First Law — Law of Inertia",
      content: `
      <p>A body continues in its state of rest or uniform motion in a straight line unless acted upon by an external unbalanced force.</p>
      <ul>
        <li><b>Inertia of Rest:</b> Tendency to remain at rest</li>
        <ul>
          <li>Passengers jerk backward when a stationary bus suddenly moves</li>
          <li>Dust falls off a carpet when beaten</li>
        </ul>
        <li><b>Inertia of Motion:</b> Tendency to continue moving</li>
        <ul>
          <li>Passengers jerk forward when a moving bus brakes suddenly</li>
          <li>Athlete runs before a long jump</li>
        </ul>
        <li><b>Inertia of Direction:</b> Tendency to move in the same direction</li>
        <ul>
          <li>Mud flies off tangentially from a spinning wheel</li>
        </ul>
      </ul>
      <div class="pyq">★ PYQ: Why do we fall forward when a moving bus stops suddenly? — Inertia of motion. Lower body stops with bus, upper body continues forward.</div>
      `
    },

    {
      title: "Newton's Second Law",
      content: `
      <div class="fbox">
      F = ma
      Momentum (p) = mv &nbsp;&nbsp; Unit: kg·m/s
      Impulse = F × t = mv − mu
      </div>
      <ul>
        <li>Greater mass or greater acceleration → greater force needed</li>
        <li>Momentum is a vector quantity</li>
        <li>Airbags in cars increase time of impact → reduce force on passengers (impulse-momentum theorem)</li>
      </ul>
      `
    },

    {
      title: "Newton's Third Law",
      content: `
      <p>To every action, there is an equal and opposite reaction. They act on <b>different</b> bodies.</p>
      <ul>
        <li>Gun recoil: bullet goes forward, gun moves backward</li>
        <li>Rocket propulsion: gases expelled downward, rocket moves upward</li>
        <li>Swimming: swimmer pushes water backward, water pushes swimmer forward</li>
        <li>Walking: foot pushes ground backward, ground pushes foot forward</li>
      </ul>
      <div class="pyq">★ PYQ: Why does a gun recoil when fired? — Newton's 3rd Law.</div>
      `
    },

    {
      title: "Law of Conservation of Momentum",
      content: `
      <div class="fbox">
      m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂
      (in absence of external forces)
      </div>
      <ul>
        <li>Elastic collision: both momentum AND kinetic energy conserved</li>
        <li>Inelastic collision: only momentum conserved, KE NOT conserved</li>
        <li>Applied in: collisions, explosions, rocket propulsion</li>
      </ul>
      `
    },

    {
      title: "Friction",
      content: `
      <ul>
        <li><b>Static friction:</b> keeps body at rest → greatest of all types</li>
        <li><b>Kinetic (sliding) friction:</b> acts when body is moving</li>
        <li><b>Rolling friction:</b> least → that's why wheels / balls are used</li>
        <li>Friction depends on: nature of surfaces (μ) and normal force. Does NOT depend on area of contact.</li>
        <li>Reduced by: lubricants, ball bearings, smooth surfaces</li>
        <li>Increased by: rough surfaces, increased weight</li>
      </ul>
      <div class="pyq">★ PYQ: Ball bearings are used in machines because rolling friction is much less than sliding friction.</div>
      `
    }

  ]
},

/* =========================
   4. WORK ENERGY POWER
========================= */
{
  title: "4. Work, Energy & Power",
  icon: "zap",
  tags: ["hot","formula"],
  text: "work energy kinetic potential power conservation machines kWh",

  sections: [

    {
      title: "Work",
      content: `
      <div class="fbox">
      W = F × d × cosθ &nbsp;&nbsp; Unit: Joule (J)
      </div>
      <ul>
        <li>Work done = 0 when:
          <ul>
            <li>Displacement is zero (e.g., pushing a wall)</li>
            <li>Force ⊥ displacement (θ = 90°): e.g., carrying a bag while walking horizontally</li>
            <li>No force is applied</li>
          </ul>
        </li>
        <li>Work is negative when force and displacement are in opposite directions (e.g., friction)</li>
      </ul>
      <div class="pyq">★ PYQ: A coolie carries luggage on head walking horizontally — work done by gravity = 0 (force is vertical, displacement is horizontal).</div>
      `
    },

    {
      title: "Kinetic & Potential Energy",
      content: `
      <div class="fbox">
      KE = ½mv²
      PE = mgh
      </div>
      <ul>
        <li>If velocity doubles → KE becomes 4 times</li>
        <li>KE is always positive</li>
        <li>Elastic PE: stored in compressed/stretched springs</li>
      </ul>
      `
    },

    {
      title: "Law of Conservation of Energy",
      content: `
      <p>Energy cannot be created or destroyed; it can only be converted from one form to another.</p>
      <ul>
        <li>Pendulum at top: max PE, min KE (= 0 at extreme)</li>
        <li>Pendulum at bottom: max KE, min PE</li>
        <li>Total mechanical energy = KE + PE = constant</li>
      </ul>
      <div class="pyq">★ PYQ: Stone thrown upward: KE decreases, PE increases. At top: KE = 0, PE = max. Total energy remains constant throughout.</div>
      `
    },

    {
      title: "Power",
      content: `
      <div class="fbox">
      P = W / t = F × v &nbsp;&nbsp; Unit: Watt (W)
      1 kW = 1000 W
      1 Horsepower (HP) = 746 W
      1 kWh = 3.6 × 10⁶ J
      </div>
      <div class="pyq">★ PYQ: The commercial unit of electrical energy is kilowatt-hour (kWh), also called 1 "unit". 1 unit = 1 kWh = 3.6 × 10⁶ J.</div>
      `
    },

    {
      title: "Other Forms of Energy",
      content: `
      <ul>
        <li>Chemical energy: stored in fuel, food</li>
        <li>Thermal / Heat energy: related to temperature</li>
        <li>Electrical energy: flow of charges</li>
        <li>Nuclear energy: released in fission/fusion</li>
        <li>Sound energy: vibration of medium</li>
        <li>Light / Radiant energy: electromagnetic radiation</li>
      </ul>
      `
    }

  ]
},

/* =========================
   5. GRAVITATION
========================= */
{
  title: "5. Gravitation",
  icon: "globe",
  tags: ["hot","formula"],
  text: "gravitation g mass weight satellites kepler escape velocity",

  sections: [

    {
      title: "Universal Law of Gravitation",
      content: `
      <div class="fbox">
      F = G × m₁ × m₂ / r²
      G = 6.67 × 10⁻¹¹ N·m²/kg²
      </div>
      <ul>
        <li>Force ∝ product of masses</li>
        <li>Force ∝ 1/r² (inverse square law)</li>
        <li>Gravitational force is always attractive (never repulsive)</li>
        <li>G is universal — same everywhere in the universe</li>
      </ul>
      `
    },

    {
      title: "Acceleration Due to Gravity (g)",
      content: `
      <div class="fbox">
      g = GM / R² &nbsp;&nbsp; g = 9.8 m/s²
      </div>
      <ul>
        <li>g does NOT depend on mass, shape, or size of falling body</li>
        <li>g decreases with height above Earth</li>
        <li>g decreases with depth inside Earth</li>
        <li>g = 0 at Earth's centre</li>
        <li>g is maximum at poles (Earth is flatter, shorter radius)</li>
        <li>g is minimum at equator (Earth bulges, larger radius + centrifugal effect)</li>
        <li>On Moon: g = 1.63 m/s² ≈ g/6</li>
      </ul>
      <div class="pyq">★ PYQ: g is maximum at poles and minimum at equator. Weight of a body is maximum at poles.</div>
      `
    },

    {
      title: "Mass vs Weight",
      content: `
      <table>
        <tr><th>Property</th><th>Mass</th><th>Weight</th></tr>
        <tr><td>Definition</td><td>Amount of matter in a body</td><td>Gravitational force on a body</td></tr>
        <tr><td>Type</td><td>Scalar</td><td>Vector</td></tr>
        <tr><td>Formula</td><td>—</td><td>W = mg</td></tr>
        <tr><td>Unit</td><td>kilogram (kg)</td><td>Newton (N)</td></tr>
        <tr><td>Constant?</td><td>Yes — same everywhere</td><td>No — varies with g</td></tr>
        <tr><td>On Moon</td><td>Same as on Earth</td><td>Becomes 1/6th</td></tr>
        <tr><td>At Earth's centre</td><td>Same</td><td>Becomes 0</td></tr>
      </table>
      `
    },

    {
      title: "Satellites & Orbital Motion",
      content: `
      <ul>
        <li>Geostationary satellite: orbits at ~36,000 km height, period = 24 hours, appears stationary → used for communication, weather</li>
        <li>Escape velocity from Earth = 11.2 km/s</li>
        <li>In a satellite, astronauts feel weightless because both astronaut and spacecraft are in free fall (orbiting)</li>
        <li>Moon is a natural satellite of Earth</li>
      </ul>
      <div class="pyq">★ PYQ: Why do astronauts feel weightless in a spacecraft? — Both are in a state of free fall (orbiting), so no normal reaction = apparent weightlessness.</div>
      `
    },

    {
      title: "Kepler's Laws",
      content: `
      <ul>
        <li><b>1st Law (Orbits):</b> Every planet revolves around the Sun in an elliptical orbit with the Sun at one focus</li>
        <li><b>2nd Law (Areas):</b> A planet sweeps equal areas in equal times — moves fastest when closest to Sun (perihelion)</li>
        <li><b>3rd Law (Periods):</b> T² ∝ R³ — square of orbital period is proportional to cube of mean orbital radius</li>
      </ul>
      <div class="pyq">★ PYQ: A planet moves fastest when nearest to the Sun — Kepler's 2nd Law (conservation of angular momentum).</div>
      `
    }

  ]
},

/* =========================
   6. PRESSURE & FLUIDS
========================= */
{
  title: "6. Pressure & Fluids",
  icon: "droplet",
  tags: ["hot","formula"],
  text: "pressure pascal archimedes buoyancy bernoulli surface tension viscosity atmospheric",

  sections: [

    {
      title: "Pressure",
      content: `
      <div class="fbox">
      P = F / A &nbsp;&nbsp; Unit: Pascal (Pa) = N/m²
      1 atm = 1.013 × 10⁵ Pa = 760 mm Hg
      </div>
      <ul>
        <li>Smaller area → greater pressure (knife edge, needle, stiletto heels)</li>
        <li>Greater area → less pressure (snow shoes, tank tracks, wide foundations)</li>
      </ul>
      <div class="pyq">★ PYQ: A sharp knife cuts better than a blunt one — smaller area, greater pressure for same applied force.</div>
      `
    },

    {
      title: "Atmospheric Pressure",
      content: `
      <ul>
        <li>At sea level: 1 atm ≈ 101,325 Pa = 760 mm Hg</li>
        <li>Decreases with altitude (less air above)</li>
        <li>Measured by Barometer (Torricelli)</li>
        <li>Mercury barometer: height of mercury column = atmospheric pressure</li>
        <li>Aneroid barometer: no liquid, uses spring mechanism</li>
      </ul>
      <div class="pyq">★ PYQ: Water boils below 100°C at high altitudes (e.g., Himalayas) because atmospheric pressure is lower, reducing the boiling point.</div>
      `
    },

    {
      title: "Liquid Pressure",
      content: `
      <div class="fbox">
      Pressure at depth h: P = hρg
      </div>
      <ul>
        <li>Liquid pressure increases with depth</li>
        <li>Does NOT depend on shape or area of container</li>
        <li>Pressure acts equally in all directions at a given depth</li>
      </ul>
      `
    },

    {
      title: "Pascal's Law",
      content: `
      <p>Pressure applied to an enclosed fluid is transmitted equally and undiminished to every part of the fluid.</p>
      <ul>
        <li>Small force on small piston → large force on large piston</li>
        <li>Applications: Hydraulic press, hydraulic lift, hydraulic brakes, hydraulic jack</li>
      </ul>
      <div class="pyq">★ PYQ: Hydraulic brakes and hydraulic lifts work on Pascal's Law.</div>
      `
    },

    {
      title: "Archimedes' Principle & Buoyancy",
      content: `
      <div class="fbox">
      Buoyant Force = Weight of fluid displaced = ρ_fluid × V_submerged × g
      </div>
      <ul>
        <li>Body floats when: density of body ≤ density of fluid</li>
        <li>Body sinks when: density of body > density of fluid</li>
        <li>Ships float: large hollow hull → average density &lt; water</li>
        <li>Submarine dives by taking in water (increases weight), rises by expelling water</li>
        <li>Hot air balloon: hot air is less dense → buoyancy in cooler air</li>
      </ul>
      <div class="pyq">★ PYQ: Ice floats in water but sinks in alcohol — ice density (917) > alcohol density but &lt; water density (1000).</div>
      `
    },

    {
      title: "Surface Tension & Viscosity",
      content: `
      <ul>
        <li><b>Surface tension:</b> liquid surface contracts like a stretched membrane due to cohesive forces. Decreases with temperature.</li>
        <li>Examples: insects walking on water, water drops forming spheres, detergent reduces surface tension</li>
        <li><b>Viscosity:</b> internal resistance to flow ("fluid friction")</li>
        <li>Liquids: viscosity decreases with temperature (honey flows faster when warm)</li>
        <li>Gases: viscosity increases with temperature (opposite to liquids)</li>
      </ul>
      `
    }

  ]
},

/* =========================
   7. SOUND
========================= */
{
  title: "7. Sound",
  icon: "volume-2",
  tags: ["hot","pyq"],
  text: "sound wave frequency amplitude pitch echo sonar ultrasound doppler decibel",

  sections: [

    {
      title: "Nature of Sound",
      content: `
      <ul>
        <li>Mechanical, longitudinal wave</li>
        <li>Requires a material medium to travel (cannot travel in vacuum)</li>
        <li>Propagates as compressions and rarefactions</li>
      </ul>
      <div class="pyq">★ PYQ: Why is there no sound in space? — Sound is a mechanical wave and requires a medium. Space is a vacuum.</div>
      `
    },

    {
      title: "Speed of Sound",
      content: `
      <table>
        <tr><th>Medium</th><th>Speed (approx.)</th><th>Key Point</th></tr>
        <tr><td>Air (at 0°C)</td><td>332 m/s</td><td>Increases with temperature</td></tr>
        <tr><td>Air (at 25°C)</td><td>346 m/s</td><td>~0.6 m/s increase per °C</td></tr>
        <tr><td>Water</td><td>1480 m/s</td><td>~4× faster than in air</td></tr>
        <tr><td>Steel / Iron</td><td>5100 m/s</td><td>Fastest in solids</td></tr>
        <tr><td>Vacuum</td><td>0</td><td>Cannot travel</td></tr>
      </table>
      <ul>
        <li>Speed: Solids > Liquids > Gases</li>
        <li>Speed of sound increases with temperature</li>
        <li>Speed of sound is NOT affected by change in pressure at constant temperature</li>
      </ul>
      `
    },

    {
      title: "Characteristics of Sound",
      content: `
      <ul>
        <li><b>Pitch:</b> determined by frequency. High freq = high pitch (shriller). Low freq = low pitch (deeper).</li>
        <li><b>Loudness:</b> determined by amplitude. Greater amplitude = louder sound.</li>
        <li><b>Timbre / Quality:</b> distinguishes two sounds of same pitch and loudness. Depends on harmonics.</li>
      </ul>
      <table>
        <tr><th>Sound Level</th><th>Decibel (dB)</th><th>Example</th></tr>
        <tr><td>Threshold of hearing</td><td>0 dB</td><td>Faintest audible sound</td></tr>
        <tr><td>Whisper</td><td>20–30 dB</td><td>Library</td></tr>
        <tr><td>Normal conversation</td><td>60 dB</td><td>Everyday speech</td></tr>
        <tr><td>Traffic noise</td><td>80–90 dB</td><td>Busy road</td></tr>
        <tr><td>Threshold of pain</td><td>120–130 dB</td><td>Rock concert, jet engine</td></tr>
      </table>
      `
    },

    {
      title: "Frequency Range",
      content: `
      <ul>
        <li><b>Infrasonic:</b> &lt; 20 Hz → earthquakes, volcanoes; heard by elephants, whales</li>
        <li><b>Audible:</b> 20 Hz to 20,000 Hz → heard by humans</li>
        <li><b>Ultrasonic:</b> &gt; 20,000 Hz → bats, dolphins; used in SONAR and medical imaging</li>
      </ul>
      <div class="pyq">★ PYQ: Bats navigate using echolocation — emit ultrasonic waves and detect the echo to find obstacles and prey.</div>
      `
    },

    {
      title: "Echo & Applications",
      content: `
      <ul>
        <li><b>Echo:</b> Reflected sound heard distinctly. Minimum distance ~17 m (sound must return after ≥ 0.1 s)</li>
        <li><b>Reverberation:</b> Multiple reflections creating prolonged sound in large empty halls</li>
        <li><b>SONAR:</b> Sound Navigation And Ranging — uses ultrasonic waves to detect underwater objects, measure ocean depth</li>
        <li><b>Medical Ultrasound (USG):</b> Imaging internal organs, detecting tumors, checking fetal development</li>
        <li><b>Industrial uses:</b> Detecting cracks in metals, cleaning delicate instruments</li>
      </ul>
      <div class="pyq">★ PYQ: SONAR depth = Speed of sound in water × (time for echo / 2).</div>
      `
    },

    {
      title: "Doppler Effect",
      content: `
      <p>Apparent change in frequency of sound (or light) due to relative motion between source and observer.</p>
      <ul>
        <li>Source moving toward observer → apparent frequency increases (higher pitch)</li>
        <li>Source moving away from observer → apparent frequency decreases (lower pitch)</li>
        <li>Example: Train whistle sounds higher-pitched when approaching, lower-pitched when moving away</li>
      </ul>
      <div class="pyq">★ PYQ: Doppler effect is used in speed guns, Doppler radar (weather), medical ultrasound (blood flow), and detecting astronomical redshift.</div>
      `
    }

  ]
},

/* =========================
   8. HEAT & THERMODYNAMICS
========================= */
{
  title: "8. Heat & Thermodynamics",
  icon: "thermometer",
  tags: ["hot","formula"],
  text: "heat temperature conduction convection radiation specific heat latent expansion thermodynamics",

  sections: [

    {
      title: "Temperature Scales",
      content: `
      <table>
        <tr><th>Scale</th><th>Freezing Point</th><th>Boiling Point</th><th>Absolute Zero</th></tr>
        <tr><td>Celsius (°C)</td><td>0°C</td><td>100°C</td><td>−273°C</td></tr>
        <tr><td>Fahrenheit (°F)</td><td>32°F</td><td>212°F</td><td>−459.67°F</td></tr>
        <tr><td>Kelvin (K)</td><td>273 K</td><td>373 K</td><td>0 K</td></tr>
      </table>
      <div class="fbox">
      K = °C + 273
      °F = (9/5 × °C) + 32
      °C = (°F − 32) × 5/9
      </div>
      <ul>
        <li>Normal body temperature: 37°C = 98.6°F = 310 K</li>
        <li>Absolute zero (0 K = −273°C): lowest possible temperature — molecular motion theoretically ceases</li>
      </ul>
      <div class="pyq">★ PYQ: SI unit of temperature is Kelvin (K), never written with a degree symbol.</div>
      `
    },

    {
      title: "Heat vs Temperature",
      content: `
      <table>
        <tr><th>Property</th><th>Heat</th><th>Temperature</th></tr>
        <tr><td>Definition</td><td>Total thermal energy of a body</td><td>Average KE of molecules</td></tr>
        <tr><td>Unit</td><td>Joule (J) or Calorie (cal)</td><td>Kelvin (K)</td></tr>
        <tr><td>Depends on</td><td>Mass, specific heat, temperature</td><td>Only average KE of molecules</td></tr>
      </table>
      <ul>
        <li>1 calorie = 4.186 J</li>
        <li>1 kcal = 4186 J (food energy is measured in kcal)</li>
      </ul>
      `
    },

    {
      title: "Specific Heat Capacity",
      content: `
      <div class="fbox">
      Q = mcΔT
      Specific heat of water = 4200 J/kg°C
      </div>
      <ul>
        <li>Water has highest specific heat of common substances</li>
        <li>Because of high specific heat: water heats and cools slowly → used as coolant in car engines and moderator in nuclear reactors</li>
        <li>Coastal areas have moderate climate due to high specific heat of sea water</li>
        <li>Land heats and cools faster than sea → causes sea breeze and land breeze</li>
      </ul>
      `
    },

    {
      title: "Modes of Heat Transfer",
      content: `
      <table>
        <tr><th>Mode</th><th>Medium?</th><th>How it works</th><th>Examples</th></tr>
        <tr><td>Conduction</td><td>Required (esp. solids)</td><td>Molecule-to-molecule transfer</td><td>Metals, iron rod</td></tr>
        <tr><td>Convection</td><td>Required (liquids/gases)</td><td>Bulk movement of fluid</td><td>Boiling water, sea breeze, room heater</td></tr>
        <tr><td>Radiation</td><td>Not required</td><td>Electromagnetic waves (IR)</td><td>Sun's heat, microwave oven</td></tr>
      </table>
      <ul>
        <li>Good conductors: silver (best), copper, gold, aluminium</li>
        <li>Poor conductors (insulators): wood, rubber, glass, wool, air</li>
        <li>Black/dark surfaces: best absorbers AND emitters of radiation</li>
        <li>White/silver surfaces: best reflectors, poorest absorbers</li>
        <li>Thermos flask: prevents conduction (vacuum walls), convection (vacuum), radiation (silver-coated walls)</li>
      </ul>
      <div class="pyq">★ PYQ: Heat from the Sun reaches Earth by radiation — travels through vacuum as electromagnetic (infrared) waves. Conduction and convection are not possible in space.</div>
      `
    },

    {
      title: "Thermal Expansion",
      content: `
      <ul>
        <li>Solids expand when heated; gases expand the most</li>
        <li><b>Anomalous expansion of water:</b> Water expands when cooled from 4°C to 0°C. Maximum density at 4°C. Ice forms on surface of lakes in winter, insulating water below.</li>
        <li>Bimetallic strip: two metals bonded together; bends on heating → used in thermostats, fire alarms</li>
        <li>Gaps left in railway tracks, bridges have expansion joints, electrical wires sag in summer — all due to thermal expansion</li>
      </ul>
      <div class="pyq">★ PYQ: Water has maximum density at 4°C — this anomalous expansion allows aquatic life to survive in winter.</div>
      `
    },

    {
      title: "Change of State & Latent Heat",
      content: `
      <ul>
        <li><b>Melting:</b> Solid → Liquid (absorbs latent heat of fusion)</li>
        <li><b>Freezing:</b> Liquid → Solid (releases latent heat)</li>
        <li><b>Evaporation / Boiling:</b> Liquid → Gas (absorbs latent heat of vaporisation)</li>
        <li><b>Condensation:</b> Gas → Liquid (releases latent heat)</li>
        <li><b>Sublimation:</b> Solid → Gas directly (dry ice/CO₂, iodine, naphthalene)</li>
        <li>Latent heat of vaporisation of water (2260 kJ/kg) > Latent heat of fusion (334 kJ/kg)</li>
      </ul>
      <div class="pyq">★ PYQ: Steam at 100°C causes more severe burns than water at 100°C — steam releases additional latent heat of vaporisation (2260 kJ/kg) when it condenses on skin.</div>
      `
    }

  ]
},

/* =========================
   9. LIGHT & OPTICS
========================= */
{
  title: "9. Light & Optics",
  icon: "eye",
  tags: ["hot","pyq"],
  text: "reflection refraction lens mirror defects dispersion scattering rainbow TIR rainbow blue sky twinkling",

  sections: [

    {
      title: "Nature of Light",
      content: `
      <ul>
        <li>Light is an electromagnetic wave; travels at 3 × 10⁸ m/s in vacuum</li>
        <li>Visible light wavelength: 380 nm (violet) to 700 nm (red)</li>
        <li>Does NOT need a medium to travel (unlike sound)</li>
        <li>Shows both wave and particle (photon) properties — wave-particle duality</li>
      </ul>
      `
    },

    {
      title: "Reflection of Light",
      content: `
      <ul>
        <li>Laws: Angle of incidence = Angle of reflection (∠i = ∠r)</li>
        <li>Incident ray, reflected ray, and normal all lie in the same plane</li>
        <li><b>Regular (Specular) reflection:</b> smooth surface → clear image (mirror, still water)</li>
        <li><b>Irregular (Diffuse) reflection:</b> rough surface → no clear image (wall, paper) — this is why we can see non-luminous objects</li>
      </ul>
      `
    },

    {
      title: "Mirrors",
      content: `
      <table>
        <tr><th>Property</th><th>Plane Mirror</th><th>Concave Mirror</th><th>Convex Mirror</th></tr>
        <tr><td>Shape</td><td>Flat</td><td>Curved inward</td><td>Curved outward</td></tr>
        <tr><td>Nature</td><td>—</td><td>Converging</td><td>Diverging</td></tr>
        <tr><td>Image</td><td>Virtual, erect, same size</td><td>Real &amp; inverted / virtual &amp; erect</td><td>Always virtual, erect, diminished</td></tr>
        <tr><td>Uses</td><td>Dressing, periscope</td><td>Torch, headlights, shaving mirror, solar cooker</td><td>Rear-view mirror in vehicles</td></tr>
      </table>
      <div class="pyq">★ PYQ: Rear-view mirrors are convex — wider field of view, always erect image. Concave mirrors used in torches/headlights — converges parallel rays to a focus.</div>
      `
    },

    {
      title: "Refraction of Light",
      content: `
      <ul>
        <li>Bending of light when it passes from one medium to another due to change in speed</li>
        <li>Rarer → denser (air to glass): light bends toward normal, slows down</li>
        <li>Denser → rarer (glass to air): light bends away from normal</li>
        <li>Snell's Law: n₁ sin θ₁ = n₂ sin θ₂</li>
        <li>Refractive index (n) = Speed of light in vacuum / Speed in medium</li>
      </ul>
      <table>
        <tr><th>Medium</th><th>Refractive Index</th></tr>
        <tr><td>Vacuum / Air</td><td>1.0</td></tr>
        <tr><td>Water</td><td>1.33</td></tr>
        <tr><td>Glass</td><td>1.5</td></tr>
        <tr><td>Diamond</td><td>2.42 (highest)</td></tr>
      </table>
      <ul>
        <li>Apparent depth &lt; Real depth due to refraction (pool appears shallower than it is)</li>
        <li>Straw in water appears bent — refraction at water-air surface</li>
      </ul>
      `
    },

    {
      title: "Total Internal Reflection (TIR)",
      content: `
      <ul>
        <li>Occurs when light goes from denser to rarer medium at angle greater than the critical angle</li>
        <li>Critical angle for glass-air: ~42°; diamond-air: ~24° (low → brilliant sparkle)</li>
        <li>Applications: Optical fibre (internet/telecom), mirage, sparkling of diamond, endoscopes</li>
      </ul>
      <div class="pyq">★ PYQ: Mirage in deserts — hot air near ground is rarer; TIR creates illusion of water. Optical fibres use TIR to carry light signals with negligible loss.</div>
      `
    },

    {
      title: "Lenses",
      content: `
      <table>
        <tr><th>Property</th><th>Convex (Converging)</th><th>Concave (Diverging)</th></tr>
        <tr><td>Shape</td><td>Thicker at centre</td><td>Thinner at centre</td></tr>
        <tr><td>Effect on light</td><td>Converges rays</td><td>Diverges rays</td></tr>
        <tr><td>Focal length</td><td>Positive</td><td>Negative</td></tr>
        <tr><td>Image</td><td>Real/inverted OR virtual/erect</td><td>Always virtual, erect, diminished</td></tr>
        <tr><td>Uses</td><td>Magnifying glass, camera, microscope, far-sightedness correction</td><td>Correction of short-sightedness (myopia)</td></tr>
      </table>
      <div class="fbox">
      1/f = 1/v − 1/u &nbsp;&nbsp; (Lens formula)
      Power of lens (P) = 1/f (metres) &nbsp;&nbsp; Unit: Dioptre (D)
      </div>
      <div class="pyq">★ PYQ: Myopia (short-sightedness) → concave lens. Hypermetropia (far-sightedness) → convex lens.</div>
      `
    },

    {
      title: "Dispersion of Light",
      content: `
      <ul>
        <li>White light splits into VIBGYOR through a prism or water droplet</li>
        <li>VIBGYOR: Violet, Indigo, Blue, Green, Yellow, Orange, Red</li>
        <li>Red: least deviation (longest wavelength). Violet: maximum deviation (shortest wavelength).</li>
        <li>Rainbow: dispersion + TIR of sunlight in raindrops</li>
        <li>Primary rainbow: red on outside, violet inside. Secondary rainbow: colours reversed.</li>
      </ul>
      <div class="pyq">★ PYQ: Rainbow is formed due to dispersion + total internal reflection + refraction of sunlight by water droplets.</div>
      `
    },

    {
      title: "Scattering of Light",
      content: `
      <ul>
        <li><b>Rayleigh scattering:</b> smaller particles scatter shorter wavelengths more effectively</li>
        <li>Sky is blue: atmosphere scatters blue light (shorter λ) much more than red</li>
        <li>Sunset/sunrise sky is red/orange: blue scatters away along longer path, only red/orange reaches eyes</li>
        <li>Tyndall effect: scattering of light by colloidal particles (smoke, dust, fog) — makes beam visible</li>
      </ul>
      <div class="pyq">★ PYQ: Sky is blue — Rayleigh scattering. Stars twinkle (scintillation) — atmospheric refraction. Planets do NOT twinkle — they appear as extended discs, fluctuations cancel out.</div>
      `
    },

    {
      title: "Defects of Vision",
      content: `
      <table>
        <tr><th>Defect</th><th>Problem</th><th>Cause</th><th>Correction</th></tr>
        <tr><td>Myopia</td><td>Cannot see far objects</td><td>Eyeball too long</td><td>Concave lens</td></tr>
        <tr><td>Hypermetropia</td><td>Cannot see near objects</td><td>Eyeball too short</td><td>Convex lens</td></tr>
        <tr><td>Presbyopia</td><td>Cannot see near (old age)</td><td>Weakening of ciliary muscles</td><td>Bifocal glasses</td></tr>
        <tr><td>Astigmatism</td><td>Blurring in specific directions</td><td>Non-spherical cornea</td><td>Cylindrical lens</td></tr>
        <tr><td>Colour blindness</td><td>Cannot distinguish colours (red-green)</td><td>Absence of cones</td><td>No cure</td></tr>
        <tr><td>Cataract</td><td>Clouded lens</td><td>Age-related opacity</td><td>Surgery + artificial lens</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   10. ELECTRICITY
========================= */
{
  title: "10. Electricity",
  icon: "plug",
  tags: ["hot","formula"],
  text: "current voltage resistance ohm law power circuit series parallel fuse heating magnetic effect",

  sections: [

    {
      title: "Electric Charge & Current",
      content: `
      <div class="fbox">
      I = Q / t &nbsp;&nbsp; Unit: Ampere (A)
      Charge of electron = 1.6 × 10⁻¹⁹ C
      </div>
      <ul>
        <li>Conventional current: positive to negative terminal (high to low potential)</li>
        <li>Actual electron flow: negative to positive (opposite direction)</li>
        <li>Conductors: metals (silver best, then copper, gold, aluminium)</li>
        <li>Insulators: rubber, wood, glass, plastic, dry air</li>
        <li>Semiconductors: silicon, germanium — basis of all electronics</li>
      </ul>
      `
    },

    {
      title: "Ohm's Law & Resistance",
      content: `
      <div class="fbox">
      V = IR &nbsp;&nbsp; (Ohm's Law)
      R = V / I &nbsp;&nbsp; Unit: Ohm (Ω)
      </div>
      <ul>
        <li>Resistance increases with: longer length, smaller cross-sectional area</li>
        <li>Metals: resistance increases with temperature</li>
        <li>Semiconductors: resistance decreases with temperature</li>
      </ul>
      <div class="fbox">
      Series: R_total = R₁ + R₂ + R₃
      Parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃
      </div>
      <ul>
        <li>Series: same current, total resistance increases, one fuse stops all</li>
        <li>Parallel: same voltage, total resistance decreases, one fuse doesn't affect others</li>
        <li>House wiring is in parallel — each appliance gets full voltage and works independently</li>
      </ul>
      `
    },

    {
      title: "Power & Energy",
      content: `
      <div class="fbox">
      P = VI = I²R = V²/R &nbsp;&nbsp; Unit: Watt (W)
      Electrical energy = P × t
      1 kWh = 3.6 × 10⁶ J = 1 "unit" of electricity
      </div>
      <ul>
        <li>A 100W bulb uses 1 unit (kWh) in 10 hours</li>
      </ul>
      <div class="pyq">★ PYQ: The commercial / billing unit of electricity is kWh. 1 kWh = 3.6 × 10⁶ J.</div>
      `
    },

    {
      title: "Heating Effect of Current",
      content: `
      <div class="fbox">
      H = I²Rt &nbsp;&nbsp; (Joule's Law)
      </div>
      <ul>
        <li>Applications: Electric heaters, iron, toaster, incandescent bulb, fuse</li>
        <li><b>Fuse:</b> Thin wire of low melting point alloy (tin-lead). Melts and breaks circuit if current exceeds safe limit. Always connected in series.</li>
        <li><b>Tungsten:</b> Used as filament in bulbs — very high melting point (3422°C), emits white light when hot</li>
        <li><b>Nichrome:</b> Used in heaters — high resistance, high melting point, doesn't oxidise</li>
      </ul>
      `
    },

    {
      title: "Magnetic Effect of Current",
      content: `
      <ul>
        <li>Current-carrying conductor produces a magnetic field (discovered by Oersted, 1820)</li>
        <li>Right-hand thumb rule: thumb in direction of current, fingers curl in direction of field</li>
        <li>Electromagnet: soft iron core + coil. Temporary — stops when current stops.</li>
        <li>Applications: Electric bell, crane, MRI machine, transformers, generators</li>
        <li>Electric motor: converts electrical energy → mechanical energy</li>
        <li>Generator / Dynamo: converts mechanical energy → electrical energy (electromagnetic induction)</li>
      </ul>
      <div class="fbox">
      Transformer ratio: V₂/V₁ = N₂/N₁
      (Only works with AC, not DC)
      </div>
      <div class="pyq">★ PYQ: India's household AC supply: 220V, 50Hz. Step-up transformers used for long-distance power transmission to reduce energy loss.</div>
      `
    }

  ]
},

/* =========================
   11. MAGNETISM
========================= */
{
  title: "11. Magnetism",
  icon: "magnet",
  tags: ["hot"],
  text: "magnet poles electromagnet field lines ferromagnetic terrestrial declination dip",

  sections: [

    {
      title: "Properties of Magnets",
      content: `
      <ul>
        <li>Like poles repel; unlike poles attract</li>
        <li>Every magnet has North and South poles — poles cannot be separated (no magnetic monopoles)</li>
        <li>Earth acts as a giant bar magnet — geographic South pole is near the magnetic North pole</li>
        <li>A freely suspended magnet always aligns in the North-South direction</li>
        <li>Magnetic field lines: North to South outside the magnet; South to North inside. Never intersect.</li>
      </ul>
      `
    },

    {
      title: "Magnetic Materials",
      content: `
      <table>
        <tr><th>Type</th><th>Behavior</th><th>Examples</th></tr>
        <tr><td>Ferromagnetic</td><td>Strongly attracted, can be permanently magnetised</td><td>Iron, Nickel, Cobalt</td></tr>
        <tr><td>Paramagnetic</td><td>Weakly attracted, cannot be permanently magnetised</td><td>Aluminium, Platinum, Oxygen</td></tr>
        <tr><td>Diamagnetic</td><td>Weakly repelled by magnets</td><td>Copper, Bismuth, Gold, Water</td></tr>
      </table>
      <ul>
        <li>Soft iron: easily magnetised and demagnetised → used in electromagnets</li>
        <li>Steel: hard to magnetise but retains magnetism → used in permanent magnets</li>
      </ul>
      `
    },

    {
      title: "Terrestrial Magnetism",
      content: `
      <ul>
        <li><b>Magnetic declination:</b> angle between geographic North and magnetic North</li>
        <li><b>Magnetic dip (inclination):</b> angle made by Earth's magnetic field with the horizontal</li>
        <li>At magnetic equator: dip = 0°. At magnetic poles: dip = 90°</li>
        <li>Compass needle points to magnetic north, not true geographic north</li>
      </ul>
      `
    },

    {
      title: "Electromagnet & Applications",
      content: `
      <ul>
        <li>Temporary magnet made by passing current through a coil wound on soft iron core</li>
        <li>Strength depends on: number of turns, current, core material</li>
        <li>Applications: cranes (lifting scrap iron), electric bell, MRI machine, loudspeakers, relays</li>
      </ul>
      `
    }

  ]
},

/* =========================
   12. MODERN PHYSICS
========================= */
{
  title: "12. Modern Physics",
  icon: "atom",
  tags: ["hot","pyq"],
  text: "photoelectric radioactivity alpha beta gamma nuclear fission fusion atomic structure",

  sections: [

    {
      title: "Photoelectric Effect",
      content: `
      <div class="fbox">
      Photon energy: E = hf
      h = Planck's constant = 6.626 × 10⁻³⁴ J·s
      </div>
      <ul>
        <li>Light (photon) falling on metal surface ejects electrons if frequency ≥ threshold frequency</li>
        <li>Explained by Einstein — won him Nobel Prize in Physics (1921), not for relativity</li>
        <li>Applications: Solar cells, photodiodes, light meters, TV cameras, night-vision devices</li>
      </ul>
      <div class="pyq">★ PYQ: Einstein received the Nobel Prize for explaining the Photoelectric Effect (not for Theory of Relativity).</div>
      `
    },

    {
      title: "Atomic Structure",
      content: `
      <ul>
        <li>Proton: positive charge, in nucleus. Mass ≈ 1.67 × 10⁻²⁷ kg</li>
        <li>Neutron: no charge, in nucleus. Similar mass to proton</li>
        <li>Electron: negative charge, orbits nucleus. Mass ≈ 9.11 × 10⁻³¹ kg (1/1836 of proton)</li>
        <li>Atomic number (Z) = number of protons. Mass number (A) = protons + neutrons</li>
        <li>Isotopes: Same Z, different A. Examples: C-12, C-13, C-14</li>
        <li>Isobars: Same A, different Z. Examples: Ar-40 and Ca-40</li>
      </ul>
      `
    },

    {
      title: "Radioactivity",
      content: `
      <p>Spontaneous disintegration of unstable atomic nuclei, emitting radiation.</p>
      <table>
        <tr><th>Radiation</th><th>Composition</th><th>Charge</th><th>Penetrating Power</th><th>Stopped by</th></tr>
        <tr><td>Alpha (α)</td><td>2 protons + 2 neutrons (He nucleus)</td><td>+2</td><td>Least</td><td>Paper / skin</td></tr>
        <tr><td>Beta (β)</td><td>High-speed electrons</td><td>−1</td><td>Medium</td><td>Aluminium sheet</td></tr>
        <tr><td>Gamma (γ)</td><td>High-energy EM radiation</td><td>0</td><td>Most (highest)</td><td>Thick lead / concrete</td></tr>
      </table>
      <ul>
        <li>Alpha: most ionising, least penetrating</li>
        <li>Gamma: least ionising, most penetrating</li>
        <li>Half-life: time for half of a radioactive sample to decay — constant for each isotope</li>
      </ul>
      <div class="pyq">★ PYQ: Gamma rays are used in cancer radiotherapy (high penetrating power). Carbon-14 dating is used to find age of fossils up to ~50,000 years old (half-life ~5730 years).</div>
      `
    },

    {
      title: "Nuclear Fission & Fusion",
      content: `
      <div class="fbox">
      E = mc² &nbsp;&nbsp; (Einstein — mass-energy equivalence)
      </div>
      <ul>
        <li><b>Fission:</b> Heavy nucleus (U-235) splits into lighter nuclei + enormous energy → basis of nuclear reactors and atom bomb</li>
        <li><b>Fusion:</b> Light nuclei (hydrogen isotopes) combine → even larger energy → basis of hydrogen bomb and the Sun's energy</li>
        <li>Chain reaction: fission products (neutrons) trigger more fission. Controlled in reactors, uncontrolled in bombs</li>
        <li>Moderators in reactors: heavy water (D₂O), graphite — slow down neutrons</li>
        <li>Control rods: boron or cadmium — absorb neutrons to control rate</li>
      </ul>
      <div class="pyq">★ PYQ: Atom bomb = nuclear fission (U-235 or Pu-239). Hydrogen bomb = nuclear fusion. H-bomb releases far more energy. Sun's energy comes from nuclear fusion.</div>
      `
    }

  ]
},

/* =========================
   13. WAVES
========================= */
{
  title: "13. Waves",
  icon: "radio",
  tags: ["hot","formula"],
  text: "transverse longitudinal wavelength frequency wave speed electromagnetic spectrum",

  sections: [

    {
      title: "Types of Waves",
      content: `
      <table>
        <tr><th>Property</th><th>Transverse Waves</th><th>Longitudinal Waves</th></tr>
        <tr><td>Vibration direction</td><td>Perpendicular to wave propagation</td><td>Parallel to wave propagation</td></tr>
        <tr><td>Medium</td><td>Solids, surface of liquids, EM waves</td><td>Solids, liquids, and gases</td></tr>
        <tr><td>Examples</td><td>Light, radio waves, water ripples</td><td>Sound waves, seismic P-waves</td></tr>
        <tr><td>Parts</td><td>Crests and troughs</td><td>Compressions and rarefactions</td></tr>
      </table>
      `
    },

    {
      title: "Wave Parameters",
      content: `
      <table>
        <tr><th>Parameter</th><th>Symbol</th><th>Definition</th><th>Unit</th></tr>
        <tr><td>Wavelength</td><td>λ (lambda)</td><td>Distance between two consecutive crests / troughs</td><td>metre (m)</td></tr>
        <tr><td>Frequency</td><td>f</td><td>Number of waves per second</td><td>Hertz (Hz)</td></tr>
        <tr><td>Time Period</td><td>T</td><td>Time for one complete wave</td><td>second (s)</td></tr>
        <tr><td>Amplitude</td><td>A</td><td>Maximum displacement from equilibrium</td><td>metre (m)</td></tr>
        <tr><td>Wave speed</td><td>v</td><td>Distance travelled per second</td><td>m/s</td></tr>
      </table>
      <div class="fbox">
      v = f × λ &nbsp;&nbsp; (Wave speed)
      T = 1 / f &nbsp;&nbsp; (Time period)
      </div>
      `
    },

    {
      title: "Electromagnetic Spectrum",
      content: `
      <p>All EM waves travel at speed of light (3 × 10⁸ m/s) in vacuum and require no medium.</p>
      <table>
        <tr><th>Type</th><th>Wavelength</th><th>Uses / Properties</th></tr>
        <tr><td>Radio waves</td><td>&gt; 10 cm</td><td>AM/FM radio, TV broadcast</td></tr>
        <tr><td>Microwaves</td><td>1 mm – 10 cm</td><td>Microwave oven, RADAR, mobile phones, satellite TV</td></tr>
        <tr><td>Infrared (IR)</td><td>700 nm – 1 mm</td><td>Thermal imaging, TV remote, night-vision, physiotherapy</td></tr>
        <tr><td>Visible light</td><td>380 – 700 nm</td><td>VIBGYOR; seen by human eye</td></tr>
        <tr><td>Ultraviolet (UV)</td><td>10 – 380 nm</td><td>Sterilisation, fluorescence, causes sunburn, banknote verification</td></tr>
        <tr><td>X-rays</td><td>0.01 – 10 nm</td><td>Medical imaging (bones), airport security, cancer detection</td></tr>
        <tr><td>Gamma rays</td><td>&lt; 0.01 nm</td><td>Cancer radiotherapy, nuclear reactions — highest energy</td></tr>
      </table>
      <ul>
        <li><b>Increasing frequency:</b> Radio → Microwave → IR → Visible → UV → X-ray → Gamma</li>
        <li><b>Increasing wavelength:</b> Gamma → X-ray → UV → Visible → IR → Microwave → Radio</li>
      </ul>
      <div class="pyq">★ PYQ: RADAR uses microwaves. UV rays from Sun are absorbed by the ozone layer (O₃) in the stratosphere — harmful, can cause skin cancer.</div>
      `
    }

  ]
},

/* =========================
   14. SCIENTIFIC INSTRUMENTS
========================= */
{
  title: "14. Scientific Instruments",
  icon: "telescope",
  tags: ["hot","pyq"],
  text: "barometer thermometer ammeter voltmeter galvanometer anemometer hydrometer lactometer seismograph",

  sections: [

    {
      title: "Instruments & Their Functions",
      content: `
      <table>
        <tr><th>Instrument</th><th>Measures / Detects</th><th>Additional Info</th></tr>
        <tr><td>Barometer</td><td>Atmospheric pressure</td><td>Mercury (Torricelli); Aneroid (no liquid)</td></tr>
        <tr><td>Thermometer</td><td>Temperature</td><td>Clinical: 35–42°C</td></tr>
        <tr><td>Hydrometer</td><td>Specific gravity / density of liquids</td><td>Floats higher in denser liquid</td></tr>
        <tr><td>Ammeter</td><td>Electric current</td><td>Connected in series (low resistance)</td></tr>
        <tr><td>Voltmeter</td><td>Potential difference (voltage)</td><td>Connected in parallel (high resistance)</td></tr>
        <tr><td>Galvanometer</td><td>Detects small current &amp; direction</td><td>Basis of ammeter &amp; voltmeter</td></tr>
        <tr><td>Ohmmeter</td><td>Electrical resistance</td><td>—</td></tr>
        <tr><td>Anemometer</td><td>Wind speed</td><td>Used in meteorology</td></tr>
        <tr><td>Seismograph</td><td>Earthquakes / seismic waves</td><td>Richter scale for magnitude</td></tr>
        <tr><td>Lactometer</td><td>Purity / density of milk</td><td>Higher reading = more water in milk (Archimedes' principle)</td></tr>
        <tr><td>Manometer</td><td>Pressure of gases / liquids</td><td>Industrial processes</td></tr>
        <tr><td>Sphygmomanometer</td><td>Blood pressure</td><td>BP instrument (BP cuff)</td></tr>
        <tr><td>Stethoscope</td><td>Heart / lung sounds</td><td>Invented by Laënnec</td></tr>
        <tr><td>Altimeter</td><td>Altitude above sea level</td><td>Used in aircraft</td></tr>
        <tr><td>Speedometer</td><td>Speed of a vehicle</td><td>In cars, bikes</td></tr>
        <tr><td>Calorimeter</td><td>Heat capacity, latent heat</td><td>Calorimetry experiments</td></tr>
        <tr><td>Hygrometer</td><td>Humidity of air</td><td>Wet and dry bulb thermometer type</td></tr>
        <tr><td>Periscope</td><td>Seeing over obstacles</td><td>Uses plane mirrors; used in submarines</td></tr>
        <tr><td>Gyroscope</td><td>Angular velocity / orientation</td><td>Used in aircraft, missiles, smartphones</td></tr>
        <tr><td>Magnetometer</td><td>Earth's magnetic field strength</td><td>Also measures magnetic dipole moments</td></tr>
        <tr><td>Spectrometer</td><td>Spectrum of light</td><td>Used to identify elements</td></tr>
        <tr><td>Photometer</td><td>Luminous intensity of light sources</td><td>Compares intensity</td></tr>
      </table>
      <div class="pyq">★ PYQ: Ammeter connected in series; Voltmeter connected in parallel. Lactometer works on Archimedes' principle.</div>
      `
    }

  ]
},

/* =========================
   15. EVERYDAY PHYSICS
========================= */
{
  title: "15. Everyday Physics",
  icon: "sun",
  tags: ["hot","pyq"],
  text: "blue sky stars twinkle ice float thunder rainbow mirage pressure cooker everyday phenomena",

  sections: [

    {
      title: "Optical Phenomena",
      content: `
      <ul>
        <li><b>Sky is blue:</b> Rayleigh scattering — blue light (shorter λ) scattered more by atmospheric particles</li>
        <li><b>Sunset / Sunrise red-orange:</b> Light travels longer path; blue scatters away, red/orange remains</li>
        <li><b>Rainbow:</b> Dispersion + TIR in water droplets; only visible when Sun is behind the observer</li>
        <li><b>Stars twinkle:</b> Atmospheric refraction through varying density layers (scintillation)</li>
        <li><b>Planets don't twinkle:</b> Extended discs — fluctuations from different parts cancel out</li>
        <li><b>Mirage:</b> TIR near hot ground — illusion of water in deserts</li>
      </ul>
      `
    },

    {
      title: "Thermal Phenomena",
      content: `
      <ul>
        <li><b>Ice floats on water:</b> Density of ice (917 kg/m³) &lt; water (1000 kg/m³) due to anomalous expansion</li>
        <li><b>Steam burns more than boiling water:</b> Steam releases latent heat of vaporisation (2260 kJ/kg) when it condenses</li>
        <li><b>Pressure cooker:</b> High pressure raises boiling point → food cooks faster</li>
        <li><b>Boiling point decreases at higher altitude:</b> Lower atmospheric pressure → difficult to cook on mountains</li>
        <li><b>Water as coolant:</b> High specific heat (4200 J/kg°C) → used in car engines and nuclear reactors</li>
      </ul>
      `
    },

    {
      title: "Sound & Motion Phenomena",
      content: `
      <ul>
        <li><b>Thunder heard after lightning:</b> Light (3 × 10⁸ m/s) is much faster than sound (340 m/s)</li>
        <li><b>No sound in space:</b> Sound needs a medium; space is a vacuum</li>
        <li><b>Bats navigate in darkness:</b> Echolocation using ultrasonic waves</li>
        <li><b>Passenger jerks forward when bus brakes:</b> Inertia of motion</li>
        <li><b>Dust falls off beaten carpet:</b> Inertia of rest</li>
        <li><b>Gun recoil:</b> Newton's 3rd law — equal and opposite reaction</li>
        <li><b>Rocket propulsion:</b> Newton's 3rd law — exhaust gases expelled downward, rocket moves upward</li>
      </ul>
      `
    },

    {
      title: "Pressure & Electricity Phenomena",
      content: `
      <ul>
        <li><b>Sharp knife cuts better:</b> Smaller area → greater pressure for same force</li>
        <li><b>Ships float:</b> Average density of ship (hollow hull with air) &lt; water</li>
        <li><b>Dead Sea:</b> Very salty → high density → very easy to float</li>
        <li><b>Hydraulic brakes:</b> Pascal's Law — pressure transmitted equally in fluid</li>
        <li><b>Lightning conductor:</b> Pointed tip concentrates charge, provides conducting path to Earth safely</li>
        <li><b>Earthing / Grounding:</b> Safety measure — excess charge flows to Earth</li>
        <li><b>Fuse blows in short circuit:</b> Sudden large current heats fuse wire beyond melting point</li>
      </ul>
      `
    }

  ]
},

/* =========================
   16. IMPORTANT CONSTANTS
========================= */
{
  title: "16. Important Constants & Values",
  icon: "hash",
  tags: ["formula","pyq"],
  text: "constants speed light gravity planck avogadro electron escape velocity",

  sections: [

    {
      title: "Key Constants at a Glance",
      content: `
      <table>
        <tr><th>Constant / Quantity</th><th>Value</th><th>Unit</th></tr>
        <tr><td>Speed of light (c)</td><td>3 × 10⁸</td><td>m/s</td></tr>
        <tr><td>Acceleration due to gravity (g)</td><td>9.8 (≈9.81)</td><td>m/s²</td></tr>
        <tr><td>Absolute zero</td><td>−273°C = 0 K</td><td>—</td></tr>
        <tr><td>Universal gravitational constant (G)</td><td>6.67 × 10⁻¹¹</td><td>N·m²/kg²</td></tr>
        <tr><td>Planck's constant (h)</td><td>6.626 × 10⁻³⁴</td><td>J·s</td></tr>
        <tr><td>Speed of sound in air (25°C)</td><td>346</td><td>m/s</td></tr>
        <tr><td>Density of water</td><td>1000</td><td>kg/m³</td></tr>
        <tr><td>Density of ice</td><td>917</td><td>kg/m³</td></tr>
        <tr><td>Atmospheric pressure (sea level)</td><td>101,325</td><td>Pa (= 1 atm)</td></tr>
        <tr><td>Normal body temperature</td><td>37°C / 98.6°F / 310 K</td><td>—</td></tr>
        <tr><td>Avogadro's number</td><td>6.022 × 10²³</td><td>mol⁻¹</td></tr>
        <tr><td>Charge of electron</td><td>1.6 × 10⁻¹⁹</td><td>C</td></tr>
        <tr><td>Mass of electron</td><td>9.11 × 10⁻³¹</td><td>kg</td></tr>
        <tr><td>1 calorie</td><td>4.186</td><td>J</td></tr>
        <tr><td>1 kWh (1 unit of electricity)</td><td>3.6 × 10⁶</td><td>J</td></tr>
        <tr><td>1 Horsepower (HP)</td><td>746</td><td>W</td></tr>
        <tr><td>Escape velocity from Earth</td><td>11.2</td><td>km/s</td></tr>
        <tr><td>Boiling point of water (sea level)</td><td>100°C / 373 K</td><td>—</td></tr>
        <tr><td>Specific heat of water</td><td>4200</td><td>J/kg°C</td></tr>
        <tr><td>Latent heat of vaporisation (water)</td><td>2260</td><td>kJ/kg</td></tr>
        <tr><td>Latent heat of fusion (water / ice)</td><td>334</td><td>kJ/kg</td></tr>
      </table>
      `
    },

    {
      title: "Important Formulae at a Glance",
      content: `
      <table>
        <tr><th>Formula</th><th>Description</th></tr>
        <tr><td>F = ma</td><td>Newton's Second Law</td></tr>
        <tr><td>v = u + at</td><td>First equation of motion</td></tr>
        <tr><td>s = ut + ½at²</td><td>Second equation of motion</td></tr>
        <tr><td>v² = u² + 2as</td><td>Third equation of motion</td></tr>
        <tr><td>KE = ½mv²</td><td>Kinetic energy</td></tr>
        <tr><td>PE = mgh</td><td>Potential energy (gravitational)</td></tr>
        <tr><td>P = W/t = Fv</td><td>Power</td></tr>
        <tr><td>p = mv</td><td>Momentum</td></tr>
        <tr><td>F = Gm₁m₂/r²</td><td>Law of Gravitation</td></tr>
        <tr><td>P = F/A</td><td>Pressure</td></tr>
        <tr><td>Q = mcΔT</td><td>Heat energy</td></tr>
        <tr><td>V = IR</td><td>Ohm's Law</td></tr>
        <tr><td>P = VI = I²R = V²/R</td><td>Electrical power</td></tr>
        <tr><td>v = fλ</td><td>Wave speed</td></tr>
        <tr><td>E = hf</td><td>Photon energy (Planck)</td></tr>
        <tr><td>E = mc²</td><td>Mass-energy equivalence (Einstein)</td></tr>
        <tr><td>W = Fd cosθ</td><td>Work done</td></tr>
        <tr><td>ρ = m/V</td><td>Density</td></tr>
        <tr><td>H = I²Rt</td><td>Joule's heating law</td></tr>
        <tr><td>1/f = 1/v − 1/u</td><td>Lens formula</td></tr>
      </table>
      `
    }

  ]
}

];