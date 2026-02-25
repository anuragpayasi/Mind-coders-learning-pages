"use client";
import React from "react";

export default function BoxModel() {
  return (
    <div className="w-full min-h-screen px-8 py-8 bg-white text-gray-900">

      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-6 p-6 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900 shadow-xl tracking-wide text-center border border-gray-300 hover:shadow-2xl transition-all">
        📦 CSS Box Model Explained
      </h1>

      {/* What is Box Model */}
      <h1 className="text-4xl font-bold mt-10">What is the CSS Box Model?</h1>
      <p className="mt-2 text-lg text-gray-800 leading-relaxed">
        Every HTML element is a box made of 5 layers:
        <b> Content → Padding → Border → Outline → Margin</b>.
        Understanding this model helps control layout & spacing.
      </p>

      {/* Box Model Diagram */}
      <h2 className="text-2xl font-bold mt-10 mb-3 text-blue-700">
        Box Model Diagram
      </h2>

      <pre className="bg-[#0b1e39] text-green-300 p-6 rounded-xl text-sm overflow-x-auto whitespace-pre border border-gray-400 shadow-lg hover:shadow-2xl transition">
{String.raw`
┌───────────────────────────────────────────────┐
│                    Margin                     │
│   ┌────────────────────────────────────────┐   │
│   │                 Border                 │   │
│   │   ┌────────────────────────────────┐   │   │
│   │   │             Padding            │   │   │
│   │   │   ┌────────────────────────┐   │   │   │
│   │   │   │        Content         │   │   │   │
│   │   │   └────────────────────────┘   │   │   │
│   │   └────────────────────────────────┘   │   │
│   └────────────────────────────────────────┘   │
└───────────────────────────────────────────────┘
`}
      </pre>

      {/* Outline Diagram */}
      <h2 className="text-2xl font-bold mt-10 mb-3 text-blue-700">
        Outline Layer (Extra Visual Layer)
      </h2>

      <pre className="bg-[#0b1e39] text-green-300 p-6 rounded-xl text-sm overflow-x-auto whitespace-pre border border-gray-400 shadow-lg hover:shadow-2xl transition">
{String.raw`
     ( Outline is drawn outside the Border )

           ┌────────────────────────────┐
           │          Outline           │
┌────────────────────────────────────────────┐
│   ┌────────────────────────────────────┐   │
│   │               Border               │   │
│   │   ┌────────────────────────────┐   │   │
│   │   │           Padding           │   │   │
│   │   │   ┌────────────────────┐   │   │   │
│   │   │   │      Content       │   │   │   │
│   │   │   └────────────────────┘   │   │   │
│   │   └────────────────────────────┘   │   │
│   └────────────────────────────────────┘   │
└────────────────────────────────────────────┘
`}
      </pre>

      {/* Box Model Table */}
      <h2 className="text-2xl font-bold mt-12 mb-3 text-blue-700">
        Box Model Layers Table
      </h2>

      <table className="w-full border border-gray-300 border-collapse bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700 border-b border-gray-300">
          <tr>
            <th className="border border-gray-300 p-3 text-xl">Part</th>
            <th className="border border-gray-300 p-3 text-xl">Meaning</th>
          </tr>
        </thead>

        <tbody>
          {[
            ["Content", "Actual text or media inside the box."],
            ["Padding", "Space between content and border."],
            ["Border", "Outline around padding + content."],
            ["Outline", "Extra line outside border (non-space-taking)."],
            ["Margin", "Space outside border/outline."],
          ].map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 hover:shadow-md transition border-b border-gray-200"
            >
              <td className="border border-gray-300 p-3 font-semibold">
                {row[0]}
              </td>
              <td className="border border-gray-300 p-3">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Example CSS */}
      <h2 className="text-2xl font-bold mt-12 text-blue-700">Example CSS</h2>

      <pre className="bg-[#0b1e39] text-green-300 p-4 rounded-xl text-sm overflow-x-auto whitespace-pre border border-gray-400 shadow-lg hover:shadow-2xl transition mt-4">
{String.raw`
.box {
  width: 200px;
  padding: 20px;
  border: 4px solid #1f3b4d;
  outline: 3px dashed #4fa3e3;
  margin: 30px;
  background: #95cfcf;
  color: #0b2d39;
}
`}
      </pre>

      {/* box-sizing */}
      <h2 className="text-2xl font-bold mt-12 text-blue-700">box-sizing Property</h2>

      <p className="mt-2 text-lg text-gray-800">
        <b>content-box</b> → width excludes padding + border.  
        <br />
        <b>border-box</b> → width includes padding + border (recommended).
      </p>

      <pre className="bg-[#0b1e39] text-green-300 p-4 rounded-xl text-sm overflow-x-auto whitespace-pre border border-gray-400 shadow-lg hover:shadow-2xl transition mt-4">
{String.raw`
* {
  box-sizing: border-box;
}
`}
      </pre>
    </div>
  );
}