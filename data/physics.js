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
      title: "SI Units",
      content: `
      <table>
        <tr><th>Quantity</th><th>Unit</th></tr>
        <tr><td>Length</td><td>metre (m)</td></tr>
        <tr><td>Mass</td><td>kilogram (kg)</td></tr>
        <tr><td>Time</td><td>second (s)</td></tr>
        <tr><td>Current</td><td>ampere (A)</td></tr>
        <tr><td>Temperature</td><td>kelvin (K)</td></tr>
        <tr><td>Amount</td><td>mole (mol)</td></tr>
        <tr><td>Luminous intensity</td><td>candela (cd)</td></tr>
      </table>
      `
    },

    {
      title: "Derived Quantities",
      content: `
      <ul>
        <li>Force = ma → Newton</li>
        <li>Work = Fd → Joule</li>
        <li>Power = W/t → Watt</li>
        <li>Pressure = F/A → Pascal</li>
      </ul>
      `
    },

    {
      title: "Density",
      content: `
      <div class="fbox">
      Density = Mass / Volume
      Water = 1000 kg/m³
      </div>
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
  text: "motion speed velocity acceleration equations graph",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li>Speed = distance/time</li>
        <li>Velocity = displacement/time</li>
        <li>Acceleration = change in velocity/time</li>
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
      `
    },

    {
      title: "Important Points",
      content: `
      <ul>
        <li>Free fall → g = 9.8 m/s²</li>
        <li>Velocity zero at highest point</li>
      </ul>
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
  text: "newton laws inertia force momentum friction",

  sections: [

    {
      title: "Newton Laws",
      content: `
      <ul>
        <li>1st → inertia</li>
        <li>2nd → F = ma</li>
        <li>3rd → action = reaction</li>
      </ul>
      `
    },

    {
      title: "Momentum",
      content: `
      <div class="fbox">
      p = mv  
      Impulse = F × t
      </div>
      `
    },

    {
      title: "Friction",
      content: `
      <ul>
        <li>Static > kinetic > rolling</li>
        <li>Needed for walking, braking</li>
      </ul>
      `
    }

  ]
},

/* =========================
   4. WORK ENERGY POWER
========================= */
{
  title: "4. Work Energy Power",
  icon: "zap",
  tags: ["hot","formula"],
  text: "work energy kinetic potential power",

  sections: [

    {
      title: "Work",
      content: `
      <div class="fbox">
      W = Fd cosθ
      </div>
      `
    },

    {
      title: "Energy",
      content: `
      <div class="fbox">
      KE = ½mv²  
      PE = mgh
      </div>
      `
    },

    {
      title: "Power",
      content: `
      <div class="fbox">
      P = W/t
      </div>
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
  text: "gravitation g mass weight satellites",

  sections: [

    {
      title: "Law",
      content: `
      <div class="fbox">
      F = Gm₁m₂ / r²
      </div>
      `
    },

    {
      title: "Important Facts",
      content: `
      <ul>
        <li>g = 9.8 m/s²</li>
        <li>Moon → g/6</li>
        <li>Weight = mg</li>
      </ul>
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
  text: "pressure pascal archimedes buoyancy bernoulli",

  sections: [

    {
      title: "Pressure",
      content: `
      <div class="fbox">
      Pressure = Force / Area  
      Liquid pressure = ρgh
      </div>
      `
    },

    {
      title: "Pascal Law",
      content: `
      <ul>
        <li>Pressure transmitted equally</li>
        <li>Used in hydraulic lift</li>
      </ul>
      `
    },

    {
      title: "Archimedes Principle",
      content: `
      <div class="fbox">
      Buoyant force = weight of fluid displaced
      </div>
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
  text: "sound wave frequency amplitude pitch echo sonar ultrasound",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li>Sound → mechanical, longitudinal wave</li>
        <li>Needs medium (cannot travel in vacuum)</li>
      </ul>
      `
    },

    {
      title: "Properties",
      content: `
      <ul>
        <li>Frequency → pitch</li>
        <li>Amplitude → loudness</li>
        <li>Unit → decibel (dB)</li>
      </ul>
      `
    },

    {
      title: "Echo & Uses",
      content: `
      <ul>
        <li>Echo → reflected sound</li>
        <li>SONAR → underwater detection</li>
        <li>Ultrasound → medical imaging</li>
      </ul>
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
  text: "heat temperature conduction convection radiation specific heat",

  sections: [

    {
      title: "Temperature",
      content: `
      <div class="fbox">
      K = °C + 273  
      °F = (9/5)°C + 32
      </div>
      `
    },

    {
      title: "Heat Transfer",
      content: `
      <ul>
        <li>Conduction → solids</li>
        <li>Convection → liquids/gases</li>
        <li>Radiation → no medium</li>
      </ul>
      `
    },

    {
      title: "Important Concepts",
      content: `
      <ul>
        <li>Specific heat → Q = mcΔT</li>
        <li>Steam burns more than water</li>
      </ul>
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
  text: "reflection refraction lens mirror defects dispersion",

  sections: [

    {
      title: "Reflection",
      content: `
      <ul>
        <li>Angle of incidence = angle of reflection</li>
        <li>Concave → converging</li>
        <li>Convex → diverging</li>
      </ul>
      `
    },

    {
      title: "Refraction",
      content: `
      <ul>
        <li>Light bends in different media</li>
        <li>Snell’s law</li>
      </ul>
      `
    },

    {
      title: "Defects of Vision",
      content: `
      <ul>
        <li>Myopia → concave lens</li>
        <li>Hypermetropia → convex lens</li>
      </ul>
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
  text: "current voltage resistance ohm law power circuit",

  sections: [

    {
      title: "Basics",
      content: `
      <div class="fbox">
      I = Q/t  
      V = IR  
      R = V/I
      </div>
      `
    },

    {
      title: "Power",
      content: `
      <div class="fbox">
      P = VI = I²R = V²/R
      </div>
      `
    },

    {
      title: "Circuits",
      content: `
      <ul>
        <li>Series → same current</li>
        <li>Parallel → same voltage</li>
      </ul>
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
  text: "magnet poles electromagnet field lines",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li>Like poles repel</li>
        <li>Unlike poles attract</li>
      </ul>
      `
    },

    {
      title: "Electromagnet",
      content: `
      <ul>
        <li>Works with current</li>
        <li>Used in cranes, motors</li>
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
  text: "photoelectric radioactivity alpha beta gamma nuclear",

  sections: [

    {
      title: "Photoelectric Effect",
      content: `
      <ul>
        <li>Light ejects electrons</li>
        <li>E = hf</li>
      </ul>
      `
    },

    {
      title: "Radioactivity",
      content: `
      <ul>
        <li>Alpha → + charge</li>
        <li>Beta → - charge</li>
        <li>Gamma → no charge</li>
      </ul>
      `
    },

    {
      title: "Nuclear Energy",
      content: `
      <div class="fbox">
      E = mc²
      </div>
      `
    }

  ]
}
];