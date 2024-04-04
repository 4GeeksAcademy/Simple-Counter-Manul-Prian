//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import Contador from "./component/home";
import "../styles/index.css";

// ESTO ES UN COMPONENTE 
function CuentaAtras(props) {
	return(
        <>
        <div className="texto">
         <h1><strong>APROVECHA TU MOMENTO</strong></h1>
        <p>Este es el tiempo que tienes para descansar, antes de que se despierte tu hijo. ¡Cada segundo cuenta!</p>   
        </div>
        
		<div className="container">
            <div className="reloj"><i class="far fa-clock"></i></div>
            <div className="numero4">{props.digitSecondsLeft % 10}</div>
            <div className="numero3">{props.digitSecondsRight % 10}</div>
            <div className="numero2">{props.digitThousandthsLeft % 10}</div>
            <div className="numero1">{props.digitThousandthsRight % 10}</div>
        </div>
        </>
	);
}

let counter = 10000; //El contador irá bajando desde aquí, es el numero de referencia
let interval = setInterval(function(){
    const secondsLeft = Math.floor(counter / 10000); // 1 - seconds - - thousandths
    const secondsRight = Math.floor(counter /1000); // 1 1 seconds - - thousandths
    const thousandthsLeft = Math.floor(counter / 100); // 1 1 seconds 0 - thousandths
    const thousandthsRight = Math.floor(counter / 10); // 1 1 seconds 0 0 thousandths
    counter --; // Contador descendente
    //Si no ponemos un límite el contador seguirá bajando a los números minus. Por lo tanto:
    //cuando el contador llegue a 0 pararemos. clearInterval() se utiliza para detener un intervalo
    if(counter === -1) {
        clearInterval(interval);
}
ReactDOM.render(<CuentaAtras digitSecondsLeft={secondsLeft} digitSecondsRight={secondsRight} digitThousandthsLeft={thousandthsLeft} digitThousandthsRight={thousandthsRight} />
    ,
    document.querySelector("#app"));
  },1000/60);
