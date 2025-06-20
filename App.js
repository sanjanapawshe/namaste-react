/*
// Print heading using React
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);
*/

/*
// Print nested elements using React
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {}, "I'm h2")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// Print nested elements using React
const parent = React.createElement("div", {id: "parent"}, 
    [    
        React.createElement("div", {id: "child-one"}, 
            [
                React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {}, "I'm h2")
            ]
        ),
        React.createElement("div", {id: "child-two"}, 
            [
                React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {}, "I'm h2")
            ]
        )
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
