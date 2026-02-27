"use client";
import React from "react";

export default function KeyframesTable() {
  const data = [
    {
      term: "@keyframes",
      explanation:
        "Defines the animation steps. It tells the browser how the element should change over time.",
      example: `@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}`,
    },
    {
      term: "from",
      explanation:
        "Same as 0%. Represents the starting point of the animation.",
      example: `from { opacity: 0; }`,
    },
    {
      term: "to",
      explanation:
        "Same as 100%. Represents the ending point of the animation.",
      example: `to { opacity: 1; }`,
    },
    {
      term: "0% / 100%",
      explanation:
        "Used to define the exact start and end states of an animation.",
      example: `0% { transform: scale(0.5); }
100% { transform: scale(1); }`,
    },
    {
      term: "50%",
      explanation:
        "Middle point. Helps create smooth transitions and animations.",
      example: `50% { transform: translateX(50px); }`,
    },
    {
      term: "animation-name",
      explanation:
        "Connects the element to the keyframes animation.",
      example: `animation-name: fadeIn;`,
    },
    {
      term: "animation-duration",
      explanation:
        "Controls how long the animation runs. Example: 1s, 2.5s.",
      example: `animation-duration: 2s;`,
    },
    {
      term: "animation-timing-function",
      explanation:
        "Controls the animation speed curve. (ease, linear, ease-in, etc.)",
      example: `animation-timing-function: ease-in-out;`,
    },
    {
      term: "animation-iteration-count",
      explanation:
        "How many times the animation repeats. (1, 3, infinite)",
      example: `animation-iteration-count: infinite;`,
    },
    {
      term: "animation-direction",
      explanation:
        "Controls play direction. (normal, reverse, alternate)",
      example: `animation-direction: alternate;`,
    },
    {
      term: "animation-delay",
      explanation:
        "Animation starts after a specific time.",
      example: `animation-delay: 1s;`,
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen text-black rounded-xl shadow-md overflow-x-hidden">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 p-6 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900 shadow-lg tracking-wide text-center">
        CSS Keyframes & Animation Guide
      </h1>

      {/* Short Info Section */}
      <div className="mb-8 bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-3">What Are CSS Keyframes?</h2>
        <p className="text-gray-800 leading-relaxed">
          Keyframes in CSS are used to create animations. They define how an 
          element should move, fade, rotate, or change style over time. You set 
          the starting, middle, and ending points, and the browser smoothly plays 
          these steps like a timeline.
        </p>

        <p className="text-gray-800 mt-3 leading-relaxed">
          Keyframes alone do not run automatically — they must be connected to 
          an element using animation properties like <b>animation-name</b>, 
          <b> animation-duration</b>, and <b>animation-iteration-count</b>.
        </p>
      </div>

      {/* WRAPPER TO AVOID SCROLL */}
      <div className="w-full overflow-x-hidden">

        {/* DESKTOP TABLE */}
        <div className="overflow-x-auto md:overflow-visible">
          <table className="w-full border border-gray-300 rounded-lg hidden md:table min-w-[800px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 w-[25%] border-b border-gray-300">Name</th>
                <th className="text-left p-3 w-[50%] border-b border-gray-300">Explanation</th>
                <th className="text-left p-3 w-[25%] border-b border-gray-300">Example</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-100 border-b border-gray-300">
                  <td className="p-3 font-bold">{row.term}</td>
                  <td className="p-3">{row.explanation}</td>
                  <td className="p-3">
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
          {data.map((row, i) => (
            <div key={i} className="border border-gray-300 rounded-xl p-4 shadow-sm">
              <p className="font-bold text-lg mb-1">{row.term}</p>
              <p className="text-sm mb-3">{row.explanation}</p>
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