"use client";
import React from "react";

const basicSelectors = [
  { name: "*", description: "Selects all elements.", code: `* {\n  margin: 0;\n}` },
  { name: ".class", description: "Selects elements with a class.", code: `.box {\n  background: yellow;\n}` },
  { name: "#id", description: "Selects an element by ID.", code: `#title {\n  color: red;\n}` },
  { name: "element", description: "Selects HTML elements.", code: `p {\n  font-size: 16px;\n}` },
  { name: "element element", description: "Descendant selector.", code: `div p {\n  color: blue;\n}` },
  { name: "element > element", description: "Direct child selector.", code: `div > span {\n  color: red;\n}` },
  { name: "element + element", description: "Adjacent sibling selector.", code: `h1 + p {\n  margin-top: 0;\n}` },
  { name: "element ~ element", description: "General sibling selector.", code: `h1 ~ p {\n  color: gray;\n}` },
  { name: "[attribute]", description: "Attribute exists selector.", code: `[data-id] {\n  border: 1px solid black;\n}` },
  { name: "[attribute=value]", description: "Attribute exact value selector.", code: `[type="text"] {\n  padding: 5px;\n}` }
];

const pseudoElements = [
  { name: "::before", description: "Content before element.", code: `h1::before {\n  content: "👉";\n}` },
  { name: "::after", description: "Content after element.", code: `h1::after {\n  content: "🔥";\n}` },
  { name: "::first-letter", description: "Styles first letter.", code: `p::first-letter {\n  font-size: 2rem;\n}` },
  { name: "::first-line", description: "Styles first line.", code: `p::first-line {\n  font-weight: bold;\n}` },
  { name: "::selection", description: "Styles selected text.", code: `::selection {\n  background: yellow;\n}` }
];

const pseudoClasses = [
  { name: ":hover", description: "When mouse hovers.", code: `.btn:hover {\n  background: orange;\n}` },
  { name: ":active", description: "Active state.", code: `.btn:active {\n  transform: scale(0.95);\n}` },
  { name: ":focus", description: "When input is focused.", code: `input:focus {\n  border-color: blue;\n}` },
  { name: ":first-child", description: "First child of parent.", code: `p:first-child {\n  color: red;\n}` },
  { name: ":last-child", description: "Last child of parent.", code: `p:last-child {\n  color: green;\n}` },
  { name: ":nth-child(n)", description: "Nth child selector.", code: `li:nth-child(2) {\n  color: purple;\n}` },
  { name: ":not(selector)", description: "Negation selector.", code: `p:not(.highlight) {\n  opacity: 0.7;\n}` },
  { name: ":checked", description: "Checked inputs.", code: `input:checked {\n  outline: 2px solid blue;\n}` },
  { name: ":disabled", description: "Disabled inputs.", code: `input:disabled {\n  background: #eee;\n}` },
  { name: ":valid", description: "Valid input.", code: `input:valid {\n  border-color: green;\n}` }
];

function Table({ title, data }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">{title}</h2>

      <table className="w-full border border-gray-300 border-collapse bg-white text-gray-900">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border border-gray-300 p-3 text-xl">Selector</th>
            <th className="border border-gray-300 p-3 text-xl">Description</th>
            <th className="border border-gray-300 p-3 text-xl">Code Snippet</th>
          </tr>
        </thead>

        <tbody>
          {data.map((s, i) => (
            <tr key={i} className="hover:bg-gray-100 transition">
              <td className="border border-gray-300 p-3 font-mono text-gray-900">{s.name}</td>
              <td className="border border-gray-300 p-3">{s.description}</td>
              <td className="border border-gray-300 p-3">
                <pre className="bg-[#0b1e39] text-green-300 p-3 rounded text-sm overflow-x-auto whitespace-pre">
{`${s.code}`}
                </pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SelectorTable() {
  return (
    <div className="w-full min-h-screen px-8 py-8 bg-white text-gray-900">

      <h1 className="text-4xl font-bold mb-6 p-6 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900 shadow-lg tracking-wide text-center">
        CSS Selectors, Pseudo Classes & Pseudo Elements
      </h1>

      <h1 className="text-4xl font-bold mt-12 ">What are Selectors in CSS?</h1>
      <p className="mt-2 text-lg text-gray-800">
        CSS selectors are rules that help you choose which HTML elements you want to style. They tell the browser, “apply this CSS to these elements.” Using selectors, you can change colors, size, spacing, and much more. Selectors make it easy to target specific parts of your webpage. For more details, you can take reference from the table below
      </p>

      <Table title="Basic Selectors" data={basicSelectors} />

      <h1 className="text-4xl font-bold mt-12 ">What are Pseudo Elements in CSS?</h1>
      <p className="mt-2 text-gray-800">
    Pseudo-elements in CSS are used to style specific parts of an element without adding extra HTML. They let you target things like the first letter, first line, or even add content before or after an element. Pseudo-elements start with two colons (::). For more details, you can take reference from the table below.
      </p>

      <Table title="Pseudo Elements" data={pseudoElements} />

      <h1 className="text-4xl font-bold mt-12 ">What are Pseudo Classes in CSS?</h1>
      <p className="mt-2 text-gray-800">
        Pseudo-classes in CSS are used to style elements in a special state. They help you apply styles when a user interacts with an element — like when a link is hovered, clicked, or visited. Pseudo-classes start with a single colon (:). For more details, you can take reference from the table below.
      </p>

      <Table title="Pseudo Classes" data={pseudoClasses} />

      {/* SPECIFICITY */}
      <h1 className="text-4xl font-bold mt-16 ">What is Specificity in CSS?</h1>

      <p className="mt-2 text-lg text-gray-800">
 Specificity in CSS decides which style will be applied when two or more rules target the same element. It gives a “strength score” to selectors — the higher the score, the more powerful the rule. ID selectors have the highest power, classes have medium, and element selectors have the lowest. The browser uses this to choose the final style.
      </p>

      <h2 className="text-2xl font-bold mt-8 ">Simple Explanation</h2>

      <ul className="list-disc ml-6 mt-3 text-lg leading-relaxed text-gray-800">
        <li>Inline styles have the highest priority.</li>
        <li>ID selectors are stronger than class selectors.</li>
        <li>Class selectors are stronger than element selectors.</li>
        <li>The universal selector (*) has the lowest power.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10">Specificity Ranking Table</h2>

      <table className="w-full border border-gray-300 border-collapse mt-4 bg-white text-gray-900">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border p-3 border-gray-300 text-xl">Selector Type</th>
            <th className="border p-3 border-gray-300 text-xl">Example</th>
            <th className="border p-3 border-gray-300 text-xl">Strength</th>
          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border p-3 border-gray-300">Inline Style</td>
            <td className="border p-3 border-gray-300 font-bold">Highest</td>
            <td className="border p-3 border-gray-300 font-mono bg-[#0b1e39] text-green-300">style="color: red"</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="border p-3 border-gray-300">ID Selector</td>
            <td className="border p-3 border-gray-300 font-bold">High</td>
            <td className="border p-3 border-gray-300 font-mono bg-[#0b1e39] text-green-300">#title</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="border p-3 border-gray-300">Class / Attribute</td>
            <td className="border p-3 border-gray-300 font-bold">Medium</td>
            <td className="border p-3 border-gray-300 font-mono bg-[#0b1e39] text-green-300">.btn , [type="text"]</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="border p-3 border-gray-300">Element Selector</td>
            <td className="border p-3 border-gray-300 font-bold">Low</td>
            <td className="border p-3 border-gray-300 font-mono bg-[#0b1e39] text-green-300">p , div</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="border p-3 border-gray-300">Universal Selector</td>
            <td className="border p-3 border-gray-300 font-bold">Lowest</td>
            <td className="border p-3 border-gray-300 font-mono bg-[#0b1e39] text-green-300">*</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-3xl font-bold mt-12  ">Example</h2>

      <pre className="bg-[#0b1e39] text-green-300 p-3 rounded text-sm overflow-x-auto whitespace-pre mt-10">
{`/* Element Selector (Weakest) */
p {
  color: blue;
}

/* Class Selector (Stronger) */
.text {
  color: green;
}

/* ID Selector (Strongest) */
#title {
  color: red;
}`}
      </pre>

      <p className="mt-3 text-xl mt-5 text-gray-800">
        If all these rules apply, the text becomes <b className="text-red-600">red</b> because ID wins.
      </p>
    </div>
  );
}
