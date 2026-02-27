"use client";
import React from "react";

export default function GridPropertiesTable() {

  const gridData = [
    {
      name: "display: grid",
      description: "This turns your container into a grid. After this, you can create rows and columns inside it. Without this, grid properties will not work.",
      example: "display: grid;"
    },
    {
      name: "grid-template-columns",
      description: "This sets how many columns you want and how wide each column should be.",
      example: "grid-template-columns: repeat(3, 1fr);"
    },
    {
      name: "grid-template-rows",
      description: "This sets how many rows you want and their height. You can make rows bigger, smaller, or flexible.",
      example: "grid-template-rows: 200px auto;"
    },
    {
      name: "gap",
      description: "This adds space between grid items. It works like “distance between boxes” inside the grid.",
      example: "gap: 20px;"
    },
    {
      name: "row-gap",
      description: "Adds space only between rows.",
      example: "row-gap: 10px;"
    },
    {
      name: "column-gap",
      description: "Adds space only between columns.",
      example: "column-gap: 15px;"
    },
    {
      name: "grid-auto-rows",
      description: "Sets default size for newly created rows.",
      example: "grid-auto-rows: 150px;"
    },
    {
      name: "grid-auto-columns",
      description: "Default width for new columns.",
      example: "grid-auto-columns: 200px;"
    },
    {
      name: "grid-auto-flow",
      description: "Controls the flow direction of auto-placed items.",
      example: "grid-auto-flow: row;"
    },
    {
      name: "justify-items",
      description: "Aligns items horizontally in their cell.",
      example: "justify-items: center;"
    },
    {
      name: "align-items",
      description: "Aligns items vertically inside their cell.",
      example: "align-items: center;"
    },
    {
      name: "place-items",
      description: "Shorthand for align-items + justify-items.",
      example: "place-items: center;"
    },
    {
      name: "justify-content",
      description: "Moves the whole grid horizontally.",
      example: "justify-content: space-between;"
    },
    {
      name: "align-content",
      description: "Moves the whole grid vertically.",
      example: "align-content: center;"
    },
    {
      name: "grid-area",
      description: "Places an individual item inside a named area.",
      example: "grid-area: header;"
    },
    {
      name: "grid-template-areas",
      description: "Creates layout with named grid areas.",
      example: `grid-template-areas:
"header header"
"sidebar main"
"footer footer";`
    },
    {
      name: "place-content",
      description: "Shorthand for align-content + justify-content.",
      example: "place-content: center;"
    }
  ];

  return (
    <div className="p-6 bg-white min-h-screen text-black rounded-xl shadow-md overflow-x-hidden">

      <h1 className="text-4xl font-bold mb-6 p-6 rounded-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900 shadow-lg tracking-wide text-center">
        CSS Grid Layout — Properties Guide
      </h1>

      <h2 className="text-4xl font-bold  p-2">What is Grid ?</h2>
      <p className="text-xl  mb-6 p-2">CSS Grid is a layout system that helps you create rows and columns on a webpage. It makes it easy to design complex layouts without using floats or positioning. With Grid, you can place items exactly where you want in a clean and organized way. It is perfect for building modern, responsive webpage layouts.</p>
      

      <div className="w-full overflow-x-hidden">
  


        {/* DESKTOP TABLE */}
        <div className="overflow-x-auto md:overflow-visible">
          <table className="w-full border border-gray-300 rounded-lg hidden md:table min-w-[800px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 w-[25%] border-b border-gray-300">Property</th>
                <th className="text-left p-3 w-[50%] border-b border-gray-300">Description</th>
                <th className="text-left p-3 w-[25%] border-b border-gray-300">Example</th>
              </tr>
            </thead>

            <tbody>
              {gridData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b border-gray-300">
                  <td className="p-3">{row.name}</td>
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
          {gridData.map((row, index) => (
            <div key={index} className="border border-gray-300 rounded-xl p-4 shadow-sm">
              <p className="font-bold text-lg mb-1">{row.name}</p>
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