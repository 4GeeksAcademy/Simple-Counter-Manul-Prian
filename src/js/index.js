//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import Contador from "./component/home";
import "../styles/index.css";
import { ProgressPlugin } from "webpack";
// ESTO ES UN COMPONENTE 
function CuentaAtras(props) {
	return(
		<div className="container">
            <div className="reloj"><i class="far fa-clock"></i></div>
            <div className="numero4">{props.digitSecondsLeft % 10}</div>
            <div className="numero3">0</div>
            <div className="numero2">0</div>
            <div className="numero1">0</div>
        </div>
	);
}

let counter = 1100; //El contador irá bajando desde aquí, es el numero de referencia
let interval = setInterval(function(){
    const secondsLeft = Math.floor(counter / 1000); // 1 - seconds - - thousandths
    const secondsRight = Math.floor(counter /100); // 1 1 seconds - - thousandths
    const thousandthsLeft = Math.floor(counter / 10); // 1 1 seconds 0 - thousandths
    const thousandthsRight = Math.floor(counter / 1); // 1 1 seconds 0 0 thousandths
    counter --; // Contador descendente
    //Si no ponemos un límite el contador seguirá bajando a los números minus. Por lo tanto:
    //cuando el contador llegue a 0 pararemos. clearInterval() se utiliza para detener un intervalo
    if(counter === -1) {
        clearInterval(interval);
}
ReactDOM.render(<div>
    {/* <Video /> */}
    <CuentaAtras digitSecondsLeft={secondsLeft} digitSecondsRight={secondsRight} digitThousandthsLeft={thousandthsLeft} digitThousandthsRight={thousandthsRight} />
    </div>,
    document.querySelector("#app"));
  },1000/60);
