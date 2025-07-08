import React from "react";
import ReactDOM from "react-dom/client";

let number = 100;
const Heading = () => (
    <h1 id="heading">Namaste</h1>
)

const HeadingMain = () => (
    <div className="container">
        <Heading />
        <h1>{number}</h1>
        <h1 id="heading">React 🚀</h1>
    </div>
);

const HeadingMain2 = () => (
    <div className="container">
        <HeadingMain />
        <h1 id="heading">composition</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingMain2 />);