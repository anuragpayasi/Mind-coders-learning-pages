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
        "Centimeters — Real-world physical measurement. Mainly print layouts me use hota hai; screens par consistent nahi hota.",
      example: "width: 5cm;",
    },
    {
      unit: "mm",
      description:
        "Millimeters — Real physical measurement. CSS print media me useful, lekin screens par accurate nahi hota.",
      example: "width: 20mm;",
    },
    {
      unit: "in",
      description:
        "Inches — 1 inch = 96 pixels. Mostly printing ke liye use hota hai. Screens par device DPI ke karan inaccurate ho sakta hai.",
      example: "width: 1in;",
    },
    {
      unit: "pt",
      description:
        "Points — Typography unit (1pt = 1/72 inch). Traditionally print industry me use hota hai, web me rarely used.",
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
        "Current element ke parent font-size par based hota hai. Nested elements me multiply ho jata hai, isliye kabhi-kabhi unpredictable.",
      example: "font-size: 2em;",
    },
    {
      unit: "rem",
      description:
        "Root (HTML) ke font-size par based hota hai. Predictable aur best unit for spacing + typography. Responsive design me standard unit.",
      example: "margin: 1rem;",
    },
    {
      unit: "vw",
      description:
        "Viewport width ka 1%. Screen size ke hisaab se scale hota hai — hero sections ke liye perfect.",
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
        '"0" character ki width ke based hota hai. Readability-focused layouts, text boxes, forms me perfect.',
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
        "Dynamic viewport height — scroll hone ke sath change hota hai. Modern mobile-friendly layouts ke liye best.",
      example: "height: 100dvh;",
    },
  ];

  return (
    <div className="p-6 bg-white text-black rounded-xl shadow-md">
      <h1 className="text-4xl font-bold mb-6 p-6 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900 shadow-lg tracking-wide text-center">
        CSS Units
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg lg:table table-auto">
          <thead className="bg-gray-100 hidden lg:table-header-group">
            <tr>
              <th className="text-left p-3 border-b border-gray-300 border-r w-[25%]">Unit</th>
              <th className="text-left p-3 border-b border-gray-300 border-r w-[50%]">Description</th>
              <th className="text-left p-3 border-b border-gray-300 w-[25%]">Example</th>
            </tr>
          </thead>

          <tbody>
            {units.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 lg:table-row flex flex-col lg:flex-row p-3 lg:p-0 hover:bg-gray-100"
              >
                {/* Unit */}
                <td className="p-3 border-r border-gray-300 lg:w-[25%] font-semibold">
                  {row.unit}
                </td>

                {/* Description */}
                <td className="p-3 border-r border-gray-300 lg:w-[50%]">
                  {row.description}
                </td>

                {/* Example (mobile me niche dikhega) */}
                <td className="p-3 lg:w-[25%]">
                  <pre className="bg-[#0b1e39] text-green-300 p-3 rounded-lg text-sm whitespace-pre-wrap break-words">
                    {row.example}
                  </pre>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}