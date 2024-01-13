import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React🎉🎉🎯🎯"
);
console.log(heading);

//JSX -HTML LIKE 0R XML LIKE
//jsx is syntax not react element.react element is an object
//jsx code is transpiled before it reaches the js engine and transpiling is done by parcel.parcel act as manager.parcel has its packages .for transpiling the code parcel give responsbility to babel.
//babel is javascript compiler and its a library
//JSX transpiled into(with help of babel) => React.createElement-Js Object => HTMLElement(render)

const jsxheading = <h1>Namaste react using JSX ❤️</h1>; //react element using jsx
console.log(jsxheading);

//React component........there are two type of component
//1.class based component-OLD WAY
//2.function based component-NEW WAY:-ITS AN normal javascript function and always start with capital letter and it returns JSX CODE(react element)


//js element 
const  title= <h1>this is Anshul kumar </h1>

const Title = () => {
  return <h1 className="title">Namaste React🎉🎉🎯🎯</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title></Title>
      <Title /> 
      {Title()} //function calling inside jsx 
      {title}
      <h1>this is react functional component 🌲🌳🌴🍂🍁🪺🥑🎇🎇</h1>
    </div>
  );//this is component composition
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);

//to render component
root.render(<HeadingComponent />);
