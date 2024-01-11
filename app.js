import React from "react";
import ReactDOM from "react-dom/client";

// Create a React element for the heading
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello first code of React!"
);
console.log(heading);

// Create a React element for the parent div and its children
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1" },
      [
        React.createElement("h1", {}, "I am child1 element of h1 tag 👩‍✈️"),
        React.createElement("h2", {}, "I am child1 element of h2 tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement("h1", {}, "I am child2 element of h1 tag"),
        React.createElement("h2", {}, "I am child2 element of h2 tag")
      ]
    )
  ]
);

// Use ReactDOM to render the parent element into the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
