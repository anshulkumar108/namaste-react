/* <div id="parent">
    <div id="child1">
        <h1>i am child element of parent tag</h1>
    </div>
     <div id="child2">
        <h1>i am child element of parent tag</h1>
    </div>
</div> 

ReactElement(javascript object)=>HTML(Browser Understand)

*/



// # to insert only one tag
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello first code of react!"
);
console.log(heading);

// #if we to create parent and child relation between div .TO add sibling we to create array of third argument

const parent=React.createElement("div",{id:"parent"},[
    React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"i am child1 element of h1 tag"),
        React.createElement("h2",{},"i am child1 element of h2 tag")]
    ), 
     React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"i am child2 element of h1 tag"),
        React.createElement("h2",{},"i am child2 element of h2 tag")]
    )
]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
