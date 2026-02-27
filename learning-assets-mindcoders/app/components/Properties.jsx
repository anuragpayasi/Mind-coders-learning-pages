"use client";
import React from "react";

/* ----------------- MOBILE + DESKTOP RESPONSIVE TABLE ----------------- */

function Table({ title, data }) {
  return (
    <div className="mt-16 w-full">

      <h2 className="text-3xl font-bold mb-5 text-[#5A4AE3] tracking-wide">
        {title}
      </h2>

      {/* WRAPPER to remove any scroll */}
      <div className="w-full overflow-x-hidden">

        {/* DESKTOP TABLE */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full bg-white border border-gray-300 rounded-xl shadow min-w-[900px]">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-lg border-b border-gray-300 w-[25%]">
                  Property
                </th>
                <th className="p-4 text-lg border-b border-gray-300 w-[50%]">
                  Description
                </th>
                <th className="p-4 text-lg border-b border-gray-300 w-[25%]">
                  Example
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-100 transition border-b border-gray-300"
                >
                  <td className="p-4 font-mono text-gray-900 align-top">
                    {item.name}
                  </td>
                  <td className="p-4 align-top">{item.desc}</td>
                  <td className="p-4 align-top">
                    <pre className="bg-gray-900 text-green-300 p-3 rounded-lg text-sm whitespace-pre-wrap">
                      {item.example}
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl p-4 shadow bg-white"
            >
              <p className="font-bold text-xl mb-2">{item.name}</p>
              <p className="text-gray-700 mb-3">{item.desc}</p>

              <pre className="bg-gray-900 text-green-300 p-3 rounded-lg text-sm whitespace-pre-wrap">
                {item.example}
              </pre>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ----------------- DATA (UNCHANGED) ----------------- */

const textProps = [
  { name: "color", desc: "Sets the text color.", example: `p { color: red; }` },
  { name: "text-align", desc: "Aligns text (left, center, right).", example: `p { text-align: center; }` },
  { name: "text-decoration", desc: "Underline or remove decoration.", example: `a { text-decoration: underline; }` },
  { name: "text-transform", desc: "Makes text uppercase/lowercase.", example: `p { text-transform: uppercase; }` },
  { name: "text-shadow", desc: "Adds shadow behind text.", example: `p { text-shadow: 2px 2px gray; }` },
  { name: "letter-spacing", desc: "Controls space between letters.", example: `p { letter-spacing: 3px; }` },
  { name: "word-spacing", desc: "Controls space between words.", example: `p { word-spacing: 10px; }` },
  { name: "line-height", desc: "Controls line height.", example: `p { line-height: 1.8; }` },
  { name: "white-space", desc: "Controls wrapping and spacing.", example: `p { white-space: nowrap; }` },
];

const fontProps = [
  { name: "font-family", desc: "Sets the text font.", example: `p { font-family: Arial; }` },
  { name: "font-size", desc: "Sets text size.", example: `p { font-size: 20px; }` },
  { name: "font-weight", desc: "Controls boldness.", example: `p { font-weight: bold; }` },
  { name: "font-style", desc: "Italic or normal.", example: `p { font-style: italic; }` },
  { name: "font-variant", desc: "Small caps effect.", example: `p { font-variant: small-caps; }` },
  { name: "font-stretch", desc: "Stretches font wider/narrow.", example: `p { font-stretch: expanded; }` },
  { name: "font-optical-sizing", desc: "Auto adjusts font display.", example: `p { font-optical-sizing: auto; }` },
];

const bgProps = [
  { name: "background", desc: "Sets all background properties.", example: `div { background: red; }` },
  { name: "background-color", desc: "Background color.", example: `div { background-color: yellow; }` },
  { name: "background-image", desc: "Sets a background image.", example: `div { background-image: url(img.jpg); }` },
  { name: "background-size", desc: "Cover or contain image.", example: `div { background-size: cover; }` },
  { name: "background-repeat", desc: "Repeat or stop BG repeat.", example: `div { background-repeat: no-repeat; }` },
];

const borderProps = [
  { name: "border", desc: "Shorthand for all border styles.", example: `div { border: 2px solid black; }` },
  { name: "border-radius", desc: "Rounds the corners.", example: `div { border-radius: 10px; }` },
  { name: "border-color", desc: "Sets border color.", example: `div { border-color: red; }` },
];

const marginPadding = [
  { name: "margin", desc: "Outer space of element.", example: `div { margin: 20px; }` },
  { name: "padding", desc: "Inner space inside border.", example: `div { padding: 20px; }` },
  { name: "margin-left", desc: "Left side margin.", example: `div { margin-left: 10px; }` },
];

const sizeProps = [
  { name: "width", desc: "Sets element width.", example: `div { width: 200px; }` },
  { name: "height", desc: "Sets element height.", example: `div { height: 200px; }` },
  { name: "max-width", desc: "Maximum allowed width.", example: `div { max-width: 500px; }` },
  { name: "min-width", desc: "Minimum allowed width.", example: `div { min-width: 200px; }` },
  { name: "max-height", desc: "Maximum height limit.", example: `div { max-height: 400px; }` },
  { name: "min-height", desc: "Minimum height required.", example: `div { min-height: 150px; }` },
  { name: "box-sizing", desc: "Border-box or content-box.", example: `div { box-sizing: border-box; }` },
];

const displayProps = [
  { name: "display", desc: "Block, inline, flex, grid.", example: `div { display: flex; }` },
  { name: "visibility", desc: "Show or hide element.", example: `div { visibility: hidden; }` },
  { name: "opacity", desc: "Controls transparency.", example: `div { opacity: 0.5; }` },
];

const positionProps = [
  { name: "position", desc: "Controls element positioning.", example: `div { position: absolute; }` },
  { name: "top", desc: "Distance from top.", example: `div { top: 10px; }` },
  { name: "z-index", desc: "Controls layer order.", example: `div { z-index: 10; }` },
];

const flexProps = [
  { name: "display: flex", desc: "Turns container into flexbox.", example: `div { display: flex; }` },
  { name: "justify-content", desc: "Aligns items horizontally.", example: `div { justify-content: center; }` },
  { name: "align-items", desc: "Aligns items vertically.", example: `div { align-items: center; }` },
];

const gridProps = [
  { name: "display: grid", desc: "Enables CSS Grid.", example: `div { display: grid; }` },
  { name: "grid-template-columns", desc: "Defines number of columns.", example: `div { grid-template-columns: 1fr 1fr; }` },
  { name: "gap", desc: "Space between grid items.", example: `div { gap: 20px; }` },
];

const listProps = [
  { name: "list-style", desc: "Bullet type or none.", example: `ul { list-style: none; }` },
];

const tableProps = [
  { name: "border-collapse", desc: "Merges table cell borders.", example: `table { border-collapse: collapse; }` },
];

const cursorProps = [
  { name: "cursor", desc: "Changes mouse style.", example: `button { cursor: pointer; }` },
];

const transitionProps = [
  { name: "transition", desc: "Smooth property animation.", example: `div { transition: 0.3s; }` },
];

const transformProps = [
  { name: "transform", desc: "Moves, scales, rotates element.", example: `div { transform: rotate(45deg); }` },
];

const animationProps = [
  { name: "animation", desc: "Runs CSS animations.", example: `div { animation: fade 2s infinite; }` },
];

const filterProps = [
  { name: "filter", desc: "Applies blur or brightness.", example: `img { filter: blur(5px); }` },
];

const variableProps = [
  { name: "--custom-variable", desc: "Creates a CSS variable.", example: `:root { --main: blue; }` },
  { name: "var()", desc: "Uses a CSS variable.", example: `p { color: var(--main); }` },
];

/* ----------------- MAIN PAGE ----------------- */

export default function CSSPropertiesTable() {
  return (
    <div className="w-full min-h-screen px-6 md:px-12 py-10 bg-white text-black">

      <h1 className="text-4xl font-bold mb-8 p-6 rounded-xl bg-gray-100 text-black shadow text-center">
        🎨 Complete CSS Properties Guide
      </h1>

      <Table title="📌 Text Properties" data={textProps} />
      <Table title="📌 Font Properties" data={fontProps} />
      <Table title="📌 Background Properties" data={bgProps} />
      <Table title="📌 Border Properties" data={borderProps} />
      <Table title="📌 Margin & Padding" data={marginPadding} />
      <Table title="📌 Size & Box Model" data={sizeProps} />
      <Table title="📌 Display & Visibility" data={displayProps} />
      <Table title="📌 Positioning" data={positionProps} />
      <Table title="📌 Flexbox Properties" data={flexProps} />
      <Table title="📌 Grid Properties" data={gridProps} />
      <Table title="📌 List Properties" data={listProps} />
      <Table title="📌 Table Properties" data={tableProps} />
      <Table title="📌 Cursor & User Interaction" data={cursorProps} />
      <Table title="📌 Transition Properties" data={transitionProps} />
      <Table title="📌 Transform Properties" data={transformProps} />
      <Table title="📌 Animation Properties" data={animationProps} />
      <Table title="📌 Filter & Effects" data={filterProps} />
      <Table title="📌 CSS Variables" data={variableProps} />
    </div>
  );
}