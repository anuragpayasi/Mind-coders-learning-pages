export default function UnitsTable() {
  const units = [
    {
      unit: "px",
      description:
        "A pixel is the smallest dot on the screen. Using px gives fixed size — it will not change on different screens.",
      example: "width: 100px;",
    },
    
    
  
    

    {
      unit: "%",
      description:
        "This unit is based on the size of the parent element. If you set width: 50%, it means half the width of its parent box.",
      example: "width: 50%;",
    },
    {
      unit: "em",
      description:
        "em depends on the font-size of the parent. Example: If parent font-size is 20px, then 1em = 20px.",
      example: "font-size: 2em;",
    },
    {
      unit: "rem",
      description:
        "rem depends on the font-size of the root (html) element. Example: If HTML font-size is 16px, then 1rem = 16px everywhere More stable and preferred over em.",
      example: "margin: 1rem;",
    },
    {
      unit: "vw",
      description:
        "vw is based on the width of the screen. 1vw = 1% of the browser’s width. Good for responsive designs.",
      example: "font-size: 5vw;",
    },
    {
      unit: "vh",
      description:
        "vh is based on the height of the screen. 1vh = 1% of the browser’s height.",
      example: "height: 100vh;",
    },
    {
      unit: "vmin",
      description:
        "vmin means 1% of the smaller side of the viewport (screen). It is useful when you want your design to scale based on the smallest dimension.",
      example: "font-size: 10vmin;",
    },
    {
      unit: "vmax",
      description:
        "vmax means 1% of the larger side of the viewport. It helps create large, responsive text or elements that scale with the widest side of the screen.",
      example: "font-size: 10vmax;",
    },
    {
      unit: "fr",
      description:
        "fr is used in CSS Grid. It divides space into equal flexible parts. Example: 1fr 2fr → second column gets double space compared to first.",
      example: " grid-template-columns: 1fr 2fr; ",
    },


    {
      unit: "ch",
      description:
        "Size based on the width of the character '0'. Useful for text boxes or code layouts.",
      example: "width: 40ch;",
    },
    {
      unit: "ex",
      description:
        'ex is based on the height of the lowercase letter “x” in the current font. It follows the font’s inner proportions. Rarely used, but very precise.',
      example: "height: 10ex;",
    },
    {
      unit: "svh",
      description:
        "svh means the smallest possible viewport height. It ignores mobile browser bars (like address bar), so layout stays stable. Very useful for mobile-safe sections.",
      example: "height: 100svh;",
    },
    {
      unit: "lvh",
      description:
        "lvh means the largest possible viewport height. Even when the browser UI hides (like scrolling down), the height stays stable. Great for fullscreen web apps.",
      example: "height: 100lvh;",
    },
    {
      unit: "dvh",
      description:
        "dvh changes dynamically when the browser UI appears or disappears. Perfect for modern mobile layouts that adapt during scrolling.",
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