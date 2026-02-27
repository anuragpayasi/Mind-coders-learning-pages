export default function UnitsTable() {
  const units = [
    {
      unit: "px",
      description:
        "Pixel — A fixed unit based on the device’s resolution. Sabse common web unit. Responsive nahi hota par precision deta hai. High DPI screens pr scaling ho sakti hai.",
      example: "width: 100px;",
    },
    {
      unit: "cm",
      description:
        "Centimeters — Real-world physical measurement. Mainly print layouts me use hotta hai; screens par consistent nahi hotta.",
      example: "width: 5cm;",
    },
    {
      unit: "mm",
      description:
        "Millimeters — Real physical measurement. CSS print media me useful, lekin screens par accurate nahi hotta.",
      example: "width: 20mm;",
    },
    {
      unit: "in",
      description:
        "Inches — 1 inch = 96 pixels. Mostly printing ke liye use hotta hai. Screens par device DPI ke karan inaccurate ho sakta hai.",
      example: "width: 1in;",
    },
    {
      unit: "pt",
      description:
        "Points — Typography unit (1pt = 1/72 inch). Traditionally print industry me use hotta hai, web me rarely used.",
      example: "font-size: 12pt;",
    },

    {
      unit: "%",
      description:
        "Parent element ke size ka percentage. Layouts ko dynamic aur responsive banane ke liye sabse useful unit.",
      example: "width: 50%;",
    },
    {
      unit: "em",
      description:
        "Current element ke parent font-size par based hotta hai. Nested elements me multiply ho jata hai, isliye kabhi-kabhi unpredictable.",
      example: "font-size: 2em;",
    },
    {
      unit: "rem",
      description:
        "Root (HTML) ke font-size par based hotta hai. Predictable aur best unit for spacing + typography. Responsive design me standard unit.",
      example: "margin: 1rem;",
    },
    {
      unit: "vw",
      description:
        "Viewport width ka 1%. Screen size ke hisaab se scale hotta hai — hero sections ke liye perfect.",
      example: "font-size: 5vw;",
    },
    {
      unit: "vh",
      description:
        "Viewport height ka 1%. Full-screen sections banane me useful.",
      example: "height: 100vh;",
    },
    {
      unit: "vmin",
      description:
        "Viewport ki chhoti side ka 1%. Aspect-ratio based scaling ke liye best.",
      example: "font-size: 10vmin;",
    },
    {
      unit: "vmax",
      description:
        "Viewport ki badi side ka 1%. Large responsive typography me helpful.",
      example: "font-size: 10vmax;",
    },

    {
      unit: "ch",
      description:
        '"0" character ki width ke based hotta hai. Readability-focused layouts, text boxes, forms me perfect.',
      example: "width: 40ch;",
    },
    {
      unit: "ex",
      description:
        'Lowercase "x" ki height. Fonts ke inner proportions ko follow karta hai. Rare but precise.',
      example: "height: 10ex;",
    },
    {
      unit: "svh",
      description:
        "Smallest viewport height — mobile browsers ke dynamic UI ko ignore kar deta hai. Stable layouts ke liye ideal.",
      example: "height: 100svh;",
    },
    {
      unit: "lvh",
      description:
        "Largest viewport height — address bar hidden होने पर bhi stable. Fullscreen web-apps me helpful.",
      example: "height: 100lvh;",
    },
    {
      unit: "dvh",
      description:
        "Dynamic viewport height — scroll hone ke sath change hotta hai. Modern mobile-friendly layouts ke liye best.",
      example: "height: 100dvh;",
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen text-black rounded-xl shadow-md overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-6 p-6 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900 shadow-lg tracking-wide text-center">
        CSS Units
      </h1>

      {/* WRAPPER to prevent screen overflow */}
      <div className="w-full overflow-x-hidden">

        {/* DESKTOP/TABLET TABLE */}
        <div className="overflow-x-auto md:overflow-visible">
          <table className="w-full border border-gray-300 rounded-lg hidden md:table min-w-[800px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 w-[25%] border-b border-gray-300">Unit</th>
                <th className="text-left p-3 w-[50%] border-b border-gray-300">Description</th>
                <th className="text-left p-3 w-[25%] border-b border-gray-300">Example</th>
              </tr>
            </thead>

            <tbody>
              {units.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b border-gray-300">
                  <td className="p-3">{row.unit}</td>
                  <td className="p-3">{row.description}</td>
                  <td className="p-7">
                    <pre className="bg-[#0b1e39] text-green-300 p-3 rounded-lg text-sm whitespace-pre">
                      {row.example}
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-4">
          {units.map((row, index) => (
            <div key={index} className="border border-gray-300 rounded-xl p-4 shadow-sm">
              <p className="font-bold text-lg mb-1">{row.unit}</p>
              <p className="text-sm mb-3">{row.description}</p>
              <pre className="bg-[#0b1e39] text-green-300 p-3 rounded-lg text-sm whitespace-pre">
                {row.example}
              </pre>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}