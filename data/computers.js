const computersData = [

/* =========================
   1. INTRODUCTION
========================= */
{
  title: "1. Introduction & History",
  icon: "monitor",
  tags: ["hot","pyq"],
  text: "computer history babbage pascal eniac edvac univac ada lovelace hollerith",

  sections: [

    {
      title: "Basics",
      content: `
      <ul>
        <li><b>Computer</b> → electronic data processing machine; processes input to produce output</li>
        <li>Derived from <b>"Compute"</b> → to calculate</li>
        <li>Two main parts → <b>Hardware + Software</b></li>
        <li>Three units → <b>Input + Processing (CPU) + Output</b></li>
        <li><b>Program</b> → set of instructions given to computer</li>
        <li>Information processing is the <b>essence of computing</b></li>
      </ul>
      `
    },

    {
      title: "Important Personalities",
      content: `
      <ul>
        <li><b>Blaise Pascal</b> → first mechanical calculator <b>'Pascalene'</b> (1642 AD)</li>
        <li><b>Charles Babbage</b> → conceived first automatic computer (1833) → <b>Father of Modern Computer</b></li>
        <li><b>Lady Ada Augusta</b> → student of Babbage → <b>first computer programmer</b></li>
        <li><b>Herman Hollerith</b> → electronic tabulating machine using <b>Punch Card</b> (1880)</li>
        <li><b>Howard Ekin</b> → first Mechanical Computer <b>'Mark-I'</b> (1937)</li>
        <li><b>J.P. Ekart & John Moschley</b> → world's first electronic computer <b>'ENIAC-I'</b> (1946)</li>
        <li><b>John Van Newman</b> → invented <b>EDVAC</b> (1951); introduced Stored Program & Binary System → <b>Second Revolution</b></li>
        <li><b>J.S. Kilby</b> → developed <b>IC chips</b></li>
        <li><b>Linus Torvalds</b> → created <b>Linux</b> OS (1991)</li>
        <li><b>Ted Nelson</b> → coined term <b>Hyper Text</b> (1960s); wrote first book on Personal Computer</li>
      </ul>
      `
    },

    {
      title: "Important Computers",
      content: `
      <ul>
        <li><b>ENIAC-I</b> (1946) → world's first electronic computer; used Electronic Valve / Vacuum Tube</li>
        <li><b>EDVAC</b> (1951) → first to use Stored Program concept; by John Van Newman</li>
        <li><b>UNIVAC</b> → first Practical Digital Computer</li>
        <li><b>Mark-I</b> (1937) → first Mechanical Computer; by Howard Ekin</li>
        <li><b>Deep Blue</b> → IBM supercomputer; defeated chess champion Garry Kasparov; works like 32 computers combined; can think 20 crore chess steps per second</li>
        <li><b>PARAM-10000</b> → India's supercomputer; 1 billion calculations/second; by C-DAC (March 28, 1998)</li>
        <li><b>Siddharth</b> → first computer made in India; by Electronics Corporation of India</li>
      </ul>
      `
    },

    {
      title: "Important Firsts",
      content: `
      <ul>
        <li>First electronic digital computer → <b>ENIAC</b></li>
        <li>First practical digital computer → <b>UNIVAC</b></li>
        <li>First programming language → <b>FORTRAN</b></li>
        <li>First home computer → <b>Comodor VIC/20</b></li>
        <li>First book on Personal Computer → <b>Ted Nelson</b> ('Soul of New Machine' — won Pulitzer Prize)</li>
        <li>First magazine on Computer → <b>'Computer and Automotion'</b></li>
        <li>Most popular OS → <b>WINDOWS</b></li>
        <li>Fastest printers → <b>Laser Printers</b></li>
        <li>Computer error → called <b>Bug</b></li>
        <li>Computer Literacy Day → <b>December 2</b></li>
      </ul>
      `
    }

  ]
},

/* =========================
   2. GENERATIONS
========================= */
{
  title: "2. Generations of Computers",
  icon: "layers",
  tags: ["hot","pyq"],
  text: "generations vacuum transistor ic microprocessor ai prolog fortran cobol",

  sections: [

    {
      title: "Five Generations",
      content: `
      <table>
        <tr><th>Gen</th><th>Period</th><th>Technology</th><th>Main Computers</th></tr>
        <tr><td><b>I</b></td><td>1940–52</td><td>Electronic Valve / Vacuum Tube</td><td>EDSAC, EDVAC, UNIVAC</td></tr>
        <tr><td><b>II</b></td><td>1952–64</td><td>Transistor</td><td>IBM-700, IBM-1401, IBM-1620, CDC-1604, CDC-3600, ATLAS, ICL-1901</td></tr>
        <tr><td><b>III</b></td><td>1964–71</td><td>Integrated Circuit (IC)</td><td>IBM-360, IBM-370, NCR-395, CDC-1700, ICL-2903</td></tr>
        <tr><td><b>IV</b></td><td>1971–</td><td>Largely Integrated Circuit (Microprocessor)</td><td>APPLE, DCM</td></tr>
        <tr><td><b>V</b></td><td>Future</td><td>Optical Fibre / AI</td><td>Quantum Computers</td></tr>
      </table>
      `
    },

    {
      title: "Programming Languages by Generation",
      content: `
      <table>
        <tr><th>Generation</th><th>Languages</th></tr>
        <tr><td>1st (1940–52)</td><td>FORTRAN-i</td></tr>
        <tr><td>2nd (1952–64)</td><td>FORTRAN-ii, ALGOL-60, COBOL, LISP</td></tr>
        <tr><td>3rd (1964–71)</td><td>PL/I, ALGOL-W, ALGOL-68, Pascal, SIMULA-67, APL, SNOBOL, BASIC, C</td></tr>
        <tr><td>4th (1971–)</td><td>CLUE, ALFARD, UCLID, Reformed Pascal, MODULA, EDA, ORACLE</td></tr>
        <tr><td>5th (Future)</td><td>Artificial Intelligence Languages — <b>PROLOG</b></td></tr>
      </table>
      `
    },

    {
      title: "Key Language Facts",
      content: `
      <ul>
        <li><b>FORTRAN</b> → Formula Translation; <b>first programming language</b></li>
        <li><b>COBOL</b> → Common Business Oriented Language; used for business</li>
        <li><b>PROLOG</b> → language of the <b>5th generation</b> (AI language)</li>
        <li><b>BASIC</b> → Beginners All-purpose Symbolic Instruction Code</li>
        <li><b>LISP</b> → List Processing</li>
        <li><b>SNOBOL</b> → String Oriented Symbolic Language</li>
        <li>High-level languages use <b>compilers or interpreters</b> to convert to binary</li>
        <li>Low-level languages: Machine language & Assembly language; use <b>Assembler</b></li>
        <li>Popular high-level languages → <b>C, C++, JAVA, Pascal, Fortran</b></li>
      </ul>
      `
    }

  ]
},

/* =========================
   3. TYPES OF COMPUTERS
========================= */
{
  title: "3. Types of Computers",
  icon: "database",
  tags: ["hot","pyq"],
  text: "micro mini mainframe supercomputer quantum digital analog hybrid pc",

  sections: [

    {
      title: "By Size & Capacity",
      content: `
      <table>
        <tr><th>Type</th><th>Key Feature</th><th>Examples</th></tr>
        <tr><td><b>Micro</b></td><td>Personal use; also called PC. Used for domestic & official work</td><td>PC, laptop, electronic notebook</td></tr>
        <tr><td><b>Mini</b></td><td>5 to 50× more powerful than Micro; used by small organisations</td><td>—</td></tr>
        <tr><td><b>Mainframe</b></td><td>Large; 100+ people work simultaneously via Time Sharing & Multi Tasking</td><td>IBM Mainframes</td></tr>
        <tr><td><b>Super</b></td><td>Most expensive & fastest; processes most complex jobs at highest speed</td><td>PARAM, CRAY, Deep Blue</td></tr>
        <tr><td><b>Quantum</b></td><td>In final development stage; uses <b>Q-Bit</b> instead of Binary Bits; more advanced than human brain</td><td>—</td></tr>
      </table>
      `
    },

    {
      title: "By Technology",
      content: `
      <ul>
        <li><b>Digital</b> → processes data in binary form (0s and 1s)</li>
        <li><b>Analog</b> → works on continuous data (voltages, temperatures etc.)</li>
        <li><b>Hybrid</b> → combination of both Digital and Analog</li>
      </ul>
      `
    },

    {
      title: "Operating Systems for Micro Computers",
      content: `
      <ul>
        <li>CP/M, Mac OS (Apple), DOS, Pro DOS, MS-DOS / PC-DOS</li>
        <li>XENIX, WINDOWS, LINUX</li>
        <li>Most popular OS in the world → <b>WINDOWS</b></li>
      </ul>
      `
    }

  ]
},

/* =========================
   4. COMPUTER IN INDIA
========================= */
{
  title: "4. Computer in India",
  icon: "flag",
  tags: ["hot","pyq"],
  text: "india siddharth param cdac bangalore silicon valley param vellanad simputer bjp",

  sections: [

    {
      title: "Important India Firsts",
      content: `
      <ul>
        <li>First computer made in India → <b>'Siddharth'</b> — by Electronics Corporation of India</li>
        <li>First computer installed in India → <b>Main Post Office, Bangalore</b> (August 16, 1986)</li>
        <li>First Pollution Free Computerized Petrol Pump → <b>Mumbai</b></li>
        <li>First Computer University (Private Sector) → <b>Rajeev Gandhi Computer University</b></li>
        <li>First Indian News Paper on Internet → <b>'The Hindu'</b></li>
        <li>First Indian Magazine on Internet → <b>'India Today'</b></li>
        <li>First Indian political party with website → <b>Bhartiya Janata Party (BJP)</b></li>
        <li>First computerarium in India → <b>Bengaluru (Karnataka)</b></li>
        <li>First fully computerised village → <b>Vellanad</b>, Thiruvananthpuram district, Kerala</li>
        <li>Development of computer started in India → since <b>1955</b></li>
        <li>New Computer Policy announced → <b>1984</b></li>
      </ul>
      `
    },

    {
      title: "Key Institutions",
      content: `
      <ul>
        <li><b>Bangalore (Bengaluru)</b> → Silicon Valley of India</li>
        <li><b>C-DAC</b> (Centre for Development and Advanced Computing) → established in Pune, 1988</li>
        <li><b>PARAM-10000</b> → by C-DAC scientists; 1 billion calculations/second; March 28, 1998; credit to <b>Dr. Vijay P. Bhaskar</b>, Executive Director of C-DAC</li>
        <li><b>NAL, Bangalore</b> → first in India to develop Super Computer named <b>FLO SOLVER</b></li>
        <li><b>IISc, Bangalore</b> → developed <b>'Simputer'</b> — small palm-sized touch screen computer</li>
        <li><b>USENET</b> → link to connect all universities</li>
      </ul>
      `
    },

    {
      title: "Supercomputers in India",
      content: `
      <table>
        <tr><th>Name</th><th>Manufacturer</th></tr>
        <tr><td>FLO SOLVER</td><td>NAL, Bangalore</td></tr>
        <tr><td>PACE</td><td>DRDO</td></tr>
        <tr><td>PARAM-10000</td><td>C-DAC, Pune</td></tr>
        <tr><td>CHIPP-16</td><td>C-Dot, Bangalore</td></tr>
        <tr><td>MULTIMICRO</td><td>IIS, Bangalore</td></tr>
        <tr><td>MACH</td><td>IIT, Bombay</td></tr>
      </table>
      `
    },

    {
      title: "Supercomputers in the World",
      content: `
      <table>
        <tr><th>Name</th><th>Manufacturer</th></tr>
        <tr><td>CRAY KIS</td><td>CRAY K Research Co., USA</td></tr>
        <tr><td>Deep Blue</td><td>IBM Co., USA</td></tr>
        <tr><td>Blue Gene</td><td>IBM Co., USA</td></tr>
        <tr><td>COSMOS</td><td>Cambridge University, UK</td></tr>
      </table>
      <ul>
        <li>First Super Computer of world → <b>CRAY K-1-S</b> by Cray K Company, USA</li>
        <li><b>IBM</b> → International Business Machine; American computer company</li>
      </ul>
      `
    }

  ]
},

/* =========================
   5. HARDWARE
========================= */
{
  title: "5. Hardware",
  icon: "cpu",
  tags: ["hot","formula","pyq"],
  text: "cpu alu cu ram rom prom input output memory binary bits bytes kb mb gb registers clock",

  sections: [

    {
      title: "Memory Units",
      content: `
      <div class="fbox">
      1 Bit = 0 or 1 (Binary Digit)
      1 Byte = 8 bits
      1 KB (Kilobyte) = 1024 bytes
      1 MB (Megabyte) = 1000 KB
      1 GB (Gigabyte) = 1000 MB
      </div>
      <ul>
        <li>8 bits = 1 byte → covers 256 symbols (alphabets, numbers, special chars)</li>
        <li>Computers work with bits only — cannot understand any other form</li>
        <li>Hertz = unit of frequency; 1 MHz = 1 million ticks/second; 1 GHz = 1000 MHz</li>
      </ul>
      `
    },

    {
      title: "Three Basic Units",
      content: `
      <ul>
        <li><b>CPU</b> (Central Processing Unit) → brain of computer; makes all calculations</li>
        <li><b>Memory Unit (MU)</b> → stores instructions and data</li>
        <li><b>Input/Output Unit</b> → interface with outside world</li>
      </ul>
      <ul>
        <li>Three basic logic gates → <b>AND, OR, NOT</b></li>
        <li><b>Flip-flop</b> → basic element; simple electrical device signalling 0 or 1</li>
        <li><b>Register</b> → tiny set of flip-flops; fastest memory elements in computer</li>
        <li><b>Integrated Circuit (IC)</b> → entire circuits on a small silicon chip; IC = J.S. Kilby</li>
        <li><b>Microprocessor</b> → complete computer on a single silicon chip (by 1971)</li>
        <li>Silicon → obtained from sand; poor conductor; made into semiconductor by chemical processes</li>
      </ul>
      `
    },

    {
      title: "CPU Components",
      content: `
      <ul>
        <li><b>ALU</b> (Arithmetic & Logic Unit) → performs all mathematical and logical operations</li>
        <li><b>CU</b> (Control Unit) → directs working of CPU; fetches instructions; controls data flow between ALU and other parts</li>
        <li><b>Registers</b> → storage locations holding instructions/data while CPU processes; fastest memory in computer</li>
      </ul>
      `
    },

    {
      title: "CPU Attributes",
      content: `
      <ul>
        <li><b>Data Width</b> → number of bits manipulated at one time; also called word size; ranges 8–64 bits; higher = more powerful</li>
        <li><b>Address Range</b> → amount of memory CPU can directly read/write</li>
        <li><b>Clock Speed</b> → measured in MHz / GHz; higher clock speed = faster computer</li>
      </ul>
      `
    },

    {
      title: "Memory Types",
      content: `
      <table>
        <tr><th>Type</th><th>Nature</th><th>Speed</th><th>Examples</th></tr>
        <tr><td><b>RAM</b></td><td>Volatile (data lost on power off)</td><td>Fast</td><td>Primary memory / working memory</td></tr>
        <tr><td><b>ROM</b></td><td>Non-volatile; cannot be altered; set at manufacture</td><td>Fast</td><td>BIOS stored here</td></tr>
        <tr><td><b>PROM</b></td><td>Programmable ROM; programmed once by manufacturer</td><td>Fast</td><td>—</td></tr>
        <tr><td><b>Secondary</b></td><td>Non-volatile; permanent; cheaper</td><td>Slow</td><td>HDD, Floppy, Tape, CD</td></tr>
      </table>
      <ul>
        <li>Primary memory → directly accessible to CPU; temporary</li>
        <li>Secondary memory → not directly accessible; data moves to primary first then to CPU</li>
        <li><b>CD</b> → optical medium; made of special plastic; read using <b>laser beam</b></li>
        <li>Floppy → plastic disk coated with magnetic material; data directly accessible</li>
        <li>Magnetic tape → stores far more data but cannot be directly accessed</li>
      </ul>
      `
    },

    {
      title: "Input Devices",
      content: `
      <ul>
        <li><b>Keyboard</b> → most popular input device</li>
        <li><b>Mouse</b> → pointing device; motion monitored by computer; generates cursor movement</li>
        <li><b>OMR</b> (Optical Mark Reader) → reads black marks on specially prepared forms; used in competitive exams</li>
        <li><b>MICR</b> (Magnetic Ink Character Reader) → used by banks; reads magnetic ink on cheques</li>
        <li><b>Bar Code Reader</b> → reads parallel vertical lines of different thickness; identifies product (price, expiry etc.)</li>
        <li><b>Digital Camera</b> → circuit sensitive to light</li>
      </ul>
      `
    },

    {
      title: "Output Devices",
      content: `
      <ul>
        <li><b>Monitor / VDU</b> (Visual Display Unit) → uses cathode ray tube; <b>pixels</b> = picture elements</li>
        <li><b>Printer types</b>:
          <ul>
            <li>Dot matrix → tiny dots forming characters</li>
            <li>Ink-jet → sprays ink; absolutely smooth characters</li>
            <li><b>Laser</b> → uses laser beam to burn characters; <b>fastest printer</b></li>
          </ul>
        </li>
        <li><b>Speakers</b> → audio output</li>
      </ul>
      `
    }

  ]
},

/* =========================
   6. SOFTWARE
========================= */
{
  title: "6. Software & OS",
  icon: "settings",
  tags: ["hot","pyq"],
  text: "software system application os windows linux android programming compiler assembler",

  sections: [

    {
      title: "Software Basics",
      content: `
      <ul>
        <li><b>Software</b> → set of programs; controls hardware; governs operations of computer system</li>
        <li>Two types → <b>Application Programs</b> and <b>System Programs</b></li>
        <li><b>Application Programs</b> → computer used as tool for specific tasks (word processing, payroll, graphics, DBMS)</li>
        <li><b>System Programs</b> → most important = <b>Operating System</b>; helps users interact with computer</li>
        <li><b>Word Processor</b> → common term for special text editors</li>
        <li><b>DBMS</b> (Database Management System) → popular application program type</li>
      </ul>
      `
    },

    {
      title: "Programming Language Types",
      content: `
      <ul>
        <li><b>Low-level</b> → Machine language & Assembly language; <b>Assembler</b> converts to binary</li>
        <li><b>High-level</b> → C, C++, JAVA, Pascal, Fortran; use <b>compilers or interpreters</b> to convert to binary</li>
        <li>FORTRAN → <b>first language</b></li>
        <li>PROLOG → language of <b>5th generation</b></li>
        <li>Each language has its own grammar called <b>syntax</b></li>
      </ul>
      `
    },

    {
      title: "Operating Systems",
      content: `
      <ul>
        <li><b>Linux</b> → Unix-like OS with graphical user interface; open source; free
          <ul>
            <li>Created by <b>Linus Benedict Torvalds</b> (born Helsinki, Finland, December 28, 1969)</li>
            <li>First version completed: <b>September 17, 1991</b></li>
            <li>Released under <b>General Public Licence</b> → free to all</li>
          </ul>
        </li>
        <li><b>Mac OS</b> → for Macintosh Computer; developed by Apple</li>
        <li><b>SOLARIS</b> → Unix-like OS by Sun Microsystems</li>
        <li><b>Unix</b> → powerful multiuser OS; command line interface</li>
        <li><b>DOS</b> (Disk Operating System) → Disc Operating System</li>
        <li>Most popular OS → <b>WINDOWS</b></li>
        <li>Micro computer OS → CP/M, Mac OS, DOS, MS-DOS/PC-DOS, XENIX, WINDOWS, LINUX</li>
      </ul>
      `
    },

    {
      title: "Programs & Data",
      content: `
      <ul>
        <li><b>Program</b> → detailed sequence of instructions for computer to follow on data</li>
        <li>Program stored in RAM or secondary memory; transferred to RAM when needed</li>
        <li><b>Execution</b> → data moved around in CPU as per programme's sequence</li>
        <li><b>Concatenation</b> → process of linking text values in a series within a formula</li>
        <li><b>Windows Explorer</b> → efficient for viewing folders; divided into two panes (left = folder hierarchy; right = contents)</li>
      </ul>
      `
    }

  ]
},

/* =========================
   7. NETWORKING & INTERNET
========================= */
{
  title: "7. Networking & Internet",
  icon: "globe",
  tags: ["hot","pyq"],
  text: "lan wan man internet html http url dns modem virus hacker firewall isp wwww",

  sections: [

    {
      title: "Network Types",
      content: `
      <table>
        <tr><th>Type</th><th>Full Form</th><th>Range</th></tr>
        <tr><td><b>LAN</b></td><td>Local Area Network</td><td>Local (building/campus)</td></tr>
        <tr><td><b>MAN</b></td><td>Metropolitan Area Network</td><td>City-wide</td></tr>
        <tr><td><b>WAN</b></td><td>Wide Area Network</td><td>Global</td></tr>
        <tr><td><b>RABMN</b></td><td>Remote Area Business Message Network</td><td>Remote areas</td></tr>
      </table>
      `
    },

    {
      title: "Internet & Web",
      content: `
      <ul>
        <li><b>Internet</b> → network of computer networks; millions of computers attached</li>
        <li><b>WWW</b> (World Wide Web) → collection of all websites</li>
        <li><b>Website</b> → files in servers (powerful computers) containing Web Pages</li>
        <li><b>Hyper Text</b> → first coined by <b>Ted Nelson</b> in 1960s</li>
        <li><b>HTML</b> (Hyper Text Markup Language) → markup language to create Web Pages using Tags</li>
        <li><b>DHTML</b> → Dynamic HTML; creates dynamic content on web pages</li>
        <li><b>HTTP</b> (Hyper Text Transfer Protocol) → web communication protocol</li>
        <li><b>Internet Society</b> → formed in <b>1992</b> to promote use of Internet</li>
        <li><b>IAB</b> (Internet Activities Board) → formed 1983; now called <b>Internet Architectural Board</b></li>
        <li><b>IAS</b> → Internet Application Software; also known as <b>Browsers</b></li>
        <li><b>ISP</b> → Internet Service Provider</li>
        <li><b>IETF</b> → Internet Engineer Task Force</li>
        <li><b>IRTF</b> → Internet Research Task Force</li>
        <li><b>Dial Up Networking</b> → method by which computer connects to Internet using telephone</li>
        <li><b>USENET</b> → link to connect all universities</li>
      </ul>
      `
    },

    {
      title: "Security & Threats",
      content: `
      <ul>
        <li><b>Computer Virus</b> → man-made digital parasite; corrupts files; known as <b>'File corrupter'</b></li>
        <li><b>Bug</b> → computer error</li>
        <li><b>Y-2K</b> → technical problem associated with calendar (Date, Month, Year); known as <b>'Millennium Bug'</b></li>
        <li><b>Hacker</b> → breaks into computer system to <b>access</b> information stored there</li>
        <li><b>Cracker</b> → breaks into computer system to <b>steal</b> information for unauthorized use</li>
        <li><b>Piracy</b> → illegal reproduction and distribution of software</li>
        <li><b>Counterfeiting</b> → making and distributing illegal copies of software packages</li>
        <li><b>Copyright</b> → material and information that are personal property of owner/producer</li>
      </ul>
      `
    },

    {
      title: "Connectivity Devices",
      content: `
      <ul>
        <li><b>Modem</b> → connects computers to internet via telephone or cable lines (Modulation-Demodulation)</li>
        <li><b>PSTN</b> → Public Switched Telephone Network</li>
        <li><b>PSPDN</b> → Pocket Switched Public Data Network</li>
        <li><b>GAIS</b> → Gateway Internet Access Service</li>
      </ul>
      `
    }

  ]
},

/* =========================
   8. COMPUTER GLOSSARY
========================= */
{
  title: "8. Computer Glossary",
  icon: "book-open",
  tags: ["pyq"],
  text: "glossary bios alu database dbms dos bit byte software hardware active cell boot loader sorting tag unix",

  sections: [

    {
      title: "A – D",
      content: `
      <ul>
        <li><b>Active Cell</b> → cell in MS Excel with dark boundary</li>
        <li><b>ALU</b> → Arithmetic Logic Unit; all calculations done here</li>
        <li><b>Application Software</b> → designed for specific tasks (payroll, word processing, graphics)</li>
        <li><b>Batch Processing</b> → data processed in a batch</li>
        <li><b>BIOS</b> → Basic Input Output System; stored in ROM; starts computer</li>
        <li><b>Bit</b> → short form of Binary Digit; smallest unit (0 or 1)</li>
        <li><b>Boot Loader</b> → reads main portion of OS from secondary memory</li>
        <li><b>Byte</b> → collection of 8 bits</li>
        <li><b>Cell</b> → box created by intersection of rows and columns in spreadsheet</li>
        <li><b>Cell Pointer</b> → boundary of active cell</li>
        <li><b>Copyright</b> → material/information that is personal property of owner/producer</li>
        <li><b>Counterfeiting</b> → making and distributing illegal copies of software</li>
        <li><b>Cracker</b> → breaks into computer system to steal information for unauthorized use</li>
        <li><b>CU</b> → Control Unit; controls the computer system</li>
        <li><b>Data</b> → raw facts and figures</li>
        <li><b>Database</b> → collection of files in organized form</li>
        <li><b>Data Capture</b> → process of collecting data from a site or source</li>
        <li><b>Data Manipulation</b> → captured data manipulated to produce information</li>
        <li><b>Data Processing</b> → process to get meaningful information from data</li>
        <li><b>DBMS</b> → Database Management System; software to manage database</li>
        <li><b>DHTML</b> → Dynamic Hyper Text Markup Language; creates dynamic web content</li>
        <li><b>Dial Up Networking</b> → connects computer to internet using telephone</li>
        <li><b>DOS</b> → Disk Operating System</li>
      </ul>
      `
    },

    {
      title: "E – O",
      content: `
      <ul>
        <li><b>Ethics</b> → rules and beliefs</li>
        <li><b>Fields</b> → collection of bytes containing data about an item in database</li>
        <li><b>File</b> → collection of related records</li>
        <li><b>GML</b> → General Mark-up Language</li>
        <li><b>Hacker</b> → breaks into computer system to access information stored there</li>
        <li><b>HTML</b> → Hyper Text Markup Language; used to create web pages</li>
        <li><b>IAB</b> → Internet Activities Board (formed 1983); now Internet Architectural Board</li>
        <li><b>IAS</b> → Internet Application Software; also known as Browsers</li>
        <li><b>IETF</b> → Internet Engineer Task Force</li>
        <li><b>IRTF</b> → Internet Research Task Force</li>
        <li><b>ISP</b> → Internet Service Provider</li>
        <li><b>Internet Society</b> → formed 1992 to promote use of Internet</li>
        <li><b>Input Unit</b> → part of computer used to enter data</li>
        <li><b>Linux</b> → Unix-like OS with graphical user interface</li>
        <li><b>MAC OS</b> → OS for Macintosh Computer; developed by Apple</li>
        <li><b>Modem</b> → connects computer systems to internet via telephone or cable lines</li>
        <li><b>MU</b> → Memory Unit; used to store data</li>
        <li><b>Online Processing</b> → used when data coming continuously without delay</li>
        <li><b>Operating Unit</b> → used to take output from computer</li>
        <li><b>Operating System</b> → interface between human user and computer hardware</li>
      </ul>
      `
    },

    {
      title: "P – Z",
      content: `
      <ul>
        <li><b>Piracy</b> → illegal reproduction and distribution of software</li>
        <li><b>Primary Key</b> → field with unique value for each record</li>
        <li><b>Primary Memory</b> → main memory of computer system</li>
        <li><b>Query</b> → used to extract information from a database</li>
        <li><b>Range of Cells</b> → group of neighbouring cells that touch each other</li>
        <li><b>RDBMS</b> → Relational Database Management System</li>
        <li><b>Record</b> → collection of related fields</li>
        <li><b>Secondary Memory</b> → permanent memory of computer</li>
        <li><b>Software</b> → set of programs</li>
        <li><b>SOLARIS</b> → Unix-like OS developed by Sun Microsystems</li>
        <li><b>Sorting</b> → arranging data in order</li>
        <li><b>System Software</b> → performs basic functions necessary to operate computer</li>
        <li><b>Tag</b> → part of HTML; determines how browser displays text on web page</li>
        <li><b>Unix</b> → powerful multiuser OS; command line interface</li>
        <li><b>Virus</b> → harmful computer program; man-made digital parasite</li>
      </ul>
      `
    }

  ]
},

/* =========================
   9. COMPUTER ABBREVIATIONS
========================= */
{
  title: "9. Computer Abbreviations",
  icon: "type",
  tags: ["hot","pyq"],
  text: "cpu ram rom html http lan wan isp modem ups cdac eniac fortran ic vlsi mips vdu",

  sections: [

    {
      title: "Core Hardware & Memory",
      content: `
      <table>
        <tr><th>Short</th><th>Full Form</th></tr>
        <tr><td>CPU</td><td>Central Processing Unit</td></tr>
        <tr><td>ALU</td><td>Arithmetic Logic Unit</td></tr>
        <tr><td>CU</td><td>Control Unit</td></tr>
        <tr><td>MU</td><td>Memory Unit</td></tr>
        <tr><td>RAM</td><td>Random Access Memory</td></tr>
        <tr><td>ROM</td><td>Read Only Memory</td></tr>
        <tr><td>PROM</td><td>Programmable Read Only Memory</td></tr>
        <tr><td>BIOS</td><td>Basic Input-Output System</td></tr>
        <tr><td>IC</td><td>Integrated Circuit</td></tr>
        <tr><td>VLSI</td><td>Very Large Scale Integrated</td></tr>
        <tr><td>MPU</td><td>Micro Processor Unit</td></tr>
        <tr><td>UPS</td><td>Uninterruptable Power Supply</td></tr>
        <tr><td>VDU</td><td>Visual Display Unit</td></tr>
        <tr><td>LDU</td><td>Liquid Display Unit</td></tr>
      </table>
      `
    },

    {
      title: "Networking & Internet",
      content: `
      <table>
        <tr><th>Short</th><th>Full Form</th></tr>
        <tr><td>LAN</td><td>Local Area Network</td></tr>
        <tr><td>WAN</td><td>Wide Area Network</td></tr>
        <tr><td>MAN</td><td>Metropolitan Area Network</td></tr>
        <tr><td>RABMN</td><td>Remote Area Business Message Network</td></tr>
        <tr><td>ISP</td><td>Internet Service Provider</td></tr>
        <tr><td>GAIS</td><td>Gateway Internet Access Service</td></tr>
        <tr><td>HTTP</td><td>Hyper Text Transfer Protocol</td></tr>
        <tr><td>HTML</td><td>Hyper Text Markup Language</td></tr>
        <tr><td>DHTML</td><td>Dynamic Hyper Text Markup Language</td></tr>
        <tr><td>GML</td><td>General Mark-up Language</td></tr>
        <tr><td>WWW</td><td>World Wide Web</td></tr>
        <tr><td>MODEM</td><td>Modulation-Demodulation</td></tr>
        <tr><td>PSTN</td><td>Public Switched Telephone Network</td></tr>
        <tr><td>PSPDN</td><td>Pocket Switched Public Data Network</td></tr>
        <tr><td>CDMA</td><td>Code Division Multiple Access</td></tr>
        <tr><td>E-Mail</td><td>Electronic Mail</td></tr>
        <tr><td>IETF</td><td>Internet Engineer Task Force</td></tr>
        <tr><td>IRTF</td><td>Internet Research Task Force</td></tr>
        <tr><td>NICNET</td><td>National Informatics Centre Network</td></tr>
        <tr><td>ISH</td><td>International Super Highway</td></tr>
      </table>
      `
    },

    {
      title: "Software & Languages",
      content: `
      <table>
        <tr><th>Short</th><th>Full Form</th></tr>
        <tr><td>DOS</td><td>Disc Operating System</td></tr>
        <tr><td>DTS</td><td>Desk Top System</td></tr>
        <tr><td>DTP</td><td>Desk Top Publishing</td></tr>
        <tr><td>FORTRAN</td><td>Formula Translation</td></tr>
        <tr><td>COBOL</td><td>Common Business Oriented Language</td></tr>
        <tr><td>COMAL</td><td>Common Algorithmic Language</td></tr>
        <tr><td>LISP</td><td>List Processing</td></tr>
        <tr><td>SNOBOL</td><td>String Oriented Symbolic Language</td></tr>
        <tr><td>HLL</td><td>High Level Language</td></tr>
        <tr><td>LLL</td><td>Low Level Language</td></tr>
        <tr><td>DBMS</td><td>Database Management System</td></tr>
      </table>
      `
    },

    {
      title: "Devices & Institutions",
      content: `
      <table>
        <tr><th>Short</th><th>Full Form</th></tr>
        <tr><td>ENIAC</td><td>Electronic Numerical Integrator And Calculator</td></tr>
        <tr><td>IBM</td><td>International Business Machine</td></tr>
        <tr><td>CDAC</td><td>Centre for Development of Advanced Parallel Computing</td></tr>
        <tr><td>C-DOT</td><td>Centre for Development of Telematrics</td></tr>
        <tr><td>OMR</td><td>Optical Mark Reader / Recognition</td></tr>
        <tr><td>MICR</td><td>Magnetic Ink Character Recognition / Reader</td></tr>
        <tr><td>CAD</td><td>Computer Aided Design</td></tr>
        <tr><td>CAM</td><td>Computer Aided Manufacturing</td></tr>
        <tr><td>CATScan</td><td>Computerised Axial Tomography Scan</td></tr>
        <tr><td>CD</td><td>Compact Disc</td></tr>
        <tr><td>FAX</td><td>Fascimile Automated Xerox</td></tr>
        <tr><td>FLOPS</td><td>Floating Operations Per Second</td></tr>
        <tr><td>MIPS</td><td>Millions of Instructions Per Second</td></tr>
        <tr><td>MOPS</td><td>Millions of Operations Per Second</td></tr>
        <tr><td>PC-DOT</td><td>Personal Computer Disk Operation System</td></tr>
        <tr><td>E-Commerce</td><td>Electronic Commerce</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   10. GENERAL ABBREVIATIONS
========================= */
{
  title: "10. General Abbreviations",
  icon: "list",
  tags: ["pyq"],
  text: "fdi kyc uid vat sim swift irda mgnrega iaea ywca uidai zsi scramjet ibsa gagan",

  sections: [

    {
      title: "A – F",
      content: `
      <table>
        <tr><th>Short</th><th>Full Form</th></tr>
        <tr><td>A.V.E.S.</td><td>Acute Viral Encephalitic Syndrome</td></tr>
        <tr><td>B.C.T.T.</td><td>Bank Cash Transaction Tax</td></tr>
        <tr><td>B.C.S.B.I.</td><td>Banking Codes and Standard Board of India</td></tr>
        <tr><td>C.I.C.</td><td>Central Information Commission</td></tr>
        <tr><td>CNLU</td><td>Chanakya National Law University</td></tr>
        <tr><td>C.S.T.O.</td><td>Collective Security Treaty Organization</td></tr>
        <tr><td>D.I.I.</td><td>Domestic Institutional Investor</td></tr>
        <tr><td>DTH</td><td>Direct to Home</td></tr>
        <tr><td>E.C.G.C.</td><td>Export Credit Guarantee Corporation</td></tr>
        <tr><td>F.D.I.</td><td>Foreign Direct Investment</td></tr>
        <tr><td>F.I.I.</td><td>Foreign Institutional Investor</td></tr>
      </table>
      `
    },

    {
      title: "G – M",
      content: `
      <table>
        <tr><th>Short</th><th>Full Form</th></tr>
        <tr><td>GAGAN</td><td>GPS Aided Geo-Augmented Navigation</td></tr>
        <tr><td>GANDHI</td><td>Green Action for National Dandi Heritage Initiative</td></tr>
        <tr><td>GUAM</td><td>Georgia, Ukraine, Azerbaijan and Moldova</td></tr>
        <tr><td>H.P.A.I.</td><td>Highly Pathogenic Avian Influenza</td></tr>
        <tr><td>IAEA</td><td>International Atomic Energy Agency</td></tr>
        <tr><td>IBSA</td><td>India, Brazil, South Africa</td></tr>
        <tr><td>IITF</td><td>India International Trade Fair</td></tr>
        <tr><td>I.M.O.</td><td>Instant Money Order</td></tr>
        <tr><td>IRDA</td><td>Insurance Regulatory Authority</td></tr>
        <tr><td>KYC</td><td>Know Your Customer</td></tr>
        <tr><td>M.N.R.E.G.A.</td><td>Mahatma Gandhi National Rural Employment Guarantee Act</td></tr>
        <tr><td>M.R.O.</td><td>Mars Reconnaissance Orbiter</td></tr>
      </table>
      `
    },

    {
      title: "N – R",
      content: `
      <table>
        <tr><th>Short</th><th>Full Form</th></tr>
        <tr><td>N.A.D.T.</td><td>National Authority on Drugs and Therapeutics</td></tr>
        <tr><td>N.C.C.E.</td><td>National Council for Clinical Establishments</td></tr>
        <tr><td>N.C.H.</td><td>National Consumer Helpline</td></tr>
        <tr><td>N.E.I.A.</td><td>National Export Insurance Account</td></tr>
        <tr><td>N.J.C.</td><td>National Judicial Council</td></tr>
        <tr><td>N.M.D.P.</td><td>National Maritime Development Programme</td></tr>
        <tr><td>NOTE</td><td>National Organization for Tobacco Eradication</td></tr>
        <tr><td>O.C.I.</td><td>Overseas Citizen of India</td></tr>
        <tr><td>PETA</td><td>Peoples for Ethical Treatment of Animal</td></tr>
        <tr><td>P.H.F.I.</td><td>Public Health Foundation of India</td></tr>
        <tr><td>PURA</td><td>Providing Urban Amenities in Rural Areas</td></tr>
        <tr><td>QIB</td><td>Qualified Institutional Buyer</td></tr>
        <tr><td>QIP</td><td>Qualified Institutional Placement</td></tr>
        <tr><td>R.L.D.A.</td><td>Railway Land Development Authority</td></tr>
        <tr><td>RTA</td><td>Railway Territorial Army</td></tr>
        <tr><td>RTC</td><td>Round Table Conference</td></tr>
        <tr><td>RTG</td><td>Radio-isotope Thermo-electric Generator</td></tr>
      </table>
      `
    },

    {
      title: "S – Z",
      content: `
      <table>
        <tr><th>Short</th><th>Full Form</th></tr>
        <tr><td>SCRAMJET</td><td>Supersonic Combustion Ramjet</td></tr>
        <tr><td>SIM</td><td>Subscriber Identification Module</td></tr>
        <tr><td>SWIFT</td><td>Society for World-Wide International Financial Transactions</td></tr>
        <tr><td>SWOT</td><td>Strengths, Weaknesses, Opportunities, Threats</td></tr>
        <tr><td>SYL</td><td>Sutlej-Yamuna Link (canal)</td></tr>
        <tr><td>UID</td><td>Unique Identity Number</td></tr>
        <tr><td>UIDAI</td><td>Unique Identification Authority of India</td></tr>
        <tr><td>VAT</td><td>Value Added Tax</td></tr>
        <tr><td>YWCA</td><td>Young Women's Christian Association</td></tr>
        <tr><td>ZSI</td><td>Zoological Survey of India</td></tr>
        <tr><td>ZUPO</td><td>Zimbabwe United People's Organization</td></tr>
      </table>
      `
    }

  ]
},

/* =========================
   11. IMPORTANT FACTS
========================= */
{
  title: "11. Important Facts",
  icon: "star",
  tags: ["hot","pyq"],
  text: "babbage eniac univac fortran prolog kilby linux param deep blue facts laser windows",

  sections: [

    {
      title: "Must Remember — Inventors & Firsts",
      content: `
      <ul>
        <li>Father of Modern Computer → <b>Charles Babbage</b> (1833)</li>
        <li>First programmer → <b>Lady Ada Augusta</b> (student of Babbage)</li>
        <li>First mechanical calculator → <b>Blaise Pascal</b> (1642) — 'Pascalene'</li>
        <li>First Mechanical Computer → <b>Howard Ekin</b> — Mark-I (1937)</li>
        <li>First electronic computer (world) → <b>ENIAC</b> (1946) — Ekart & Moschley</li>
        <li>First Practical Digital Computer → <b>UNIVAC</b></li>
        <li>Stored program + Binary system → <b>John Van Newman</b> → EDVAC (1951)</li>
        <li>IC chips → <b>J.S. Kilby</b></li>
        <li>Linux → <b>Linus Torvalds</b> (Sept 17, 1991)</li>
        <li>Punch Card tabulating machine → <b>Herman Hollerith</b> (1880)</li>
      </ul>
      `
    },

    {
      title: "Must Remember — Languages & OS",
      content: `
      <ul>
        <li>First programming language → <b>FORTRAN</b></li>
        <li>5th generation language → <b>PROLOG</b> (AI)</li>
        <li>Most popular OS → <b>WINDOWS</b></li>
        <li>Open source OS → <b>Linux</b></li>
        <li>Fastest printer → <b>Laser Printer</b></li>
        <li>Computer error → <b>Bug</b></li>
        <li>Computer Literacy Day → <b>December 2</b></li>
        <li>IBM → <b>International Business Machine</b>; American company</li>
      </ul>
      `
    },

    {
      title: "Must Remember — India",
      content: `
      <ul>
        <li>First Indian computer → <b>Siddharth</b> (Electronics Corporation of India)</li>
        <li>First computer installed in India → <b>Main Post Office, Bangalore</b> (Aug 16, 1986)</li>
        <li>Silicon Valley of India → <b>Bangalore (Bengaluru)</b></li>
        <li>C-DAC → <b>Pune, 1988</b></li>
        <li>PARAM-10000 → <b>1 billion calculations/second</b>; by C-DAC</li>
        <li>First fully computerised village → <b>Vellanad</b>, Kerala</li>
        <li>First Indian newspaper online → <b>The Hindu</b></li>
        <li>First Indian magazine online → <b>India Today</b></li>
        <li>First party with website → <b>BJP</b></li>
      </ul>
      `
    },

    {
      title: "Memory Hierarchy",
      content: `
      <div class="fbox">
      Fastest → Slowest:
      Registers → Cache → RAM (Primary) → Secondary Memory (HDD/SSD/CD)
      </div>
      <ul>
        <li>RAM → volatile; temporary; directly accessible to CPU</li>
        <li>ROM → non-volatile; cannot be altered; stores BIOS</li>
        <li>Secondary → non-volatile; permanent; cheaper; slower</li>
        <li>CD → optical medium; read by <b>laser beam</b></li>
      </ul>
      `
    },

    {
      title: "Supercomputer Quick Facts",
      content: `
      <ul>
        <li>First supercomputer (world) → <b>CRAY K-1-S</b> by Cray K Company, USA</li>
        <li><b>Deep Blue</b> (IBM) → defeated chess champion Garry Kasparov; works like 32 computers; 20 crore chess steps/second</li>
        <li>India's supercomputer → <b>PARAM-10000</b>; by C-DAC, Pune</li>
        <li>First Indian supercomputer → <b>FLO SOLVER</b>; by NAL, Bangalore</li>
        <li>Quantum Computer → uses <b>Q-Bit</b> instead of Binary Bits</li>
      </ul>
      `
    }

  ]
}
];