import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import Navigation from "./components/Navigation/Navigation"


const Index = () => {
  return <div className="helloworld">Hello Oscar</div>;
};

const App = () => {
    return (
        <div>
            <Navigation/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));
