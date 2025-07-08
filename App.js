import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading = React.createElement("h1", {}, "Namaste Javascript 🚀");

const NestedHeading = React.createElement("div", {className: "container"}, 
    React.createElement("h1", {className: "heading"}, "Namaste Javascript 🚀")
);
*/


const NestedHeading = () => (
    <h1>Namaste Javascript 🚀</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeading />);