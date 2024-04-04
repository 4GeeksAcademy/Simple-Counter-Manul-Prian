//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Contador from "./component/home";
import "../styles/index.css";

let counter = 0;
setInterval(function ()  {
    const four = Math.floor(counter / 1000);
    const three = Math.floor((counter / 100) % 10);
    const two = Math.floor((counter / 10) % 10);
    const one = Math.floor(counter % 10);
    console.log(four, three, two, one);
    ReactDom.render(
        <contador digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
        document.getElementById("app")
    );
    counter++;    
}, 1000);
