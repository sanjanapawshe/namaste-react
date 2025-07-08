import React from "react";
import ReactDOM from "react-dom/client";

// // Normal React Element
// const heading = React.createElement("h1", {}, "Hello World");
// console.log(heading);

// // Creating JSX Element
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const jsxHeading = <h1 className="heading">Hello World</h1>;

// Functional Component
const HeadingComponent = () => (
    <h1>Hello World</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);



