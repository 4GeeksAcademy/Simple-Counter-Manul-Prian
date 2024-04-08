//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import Contador from "./component/home";
import "../styles/index.css";

// ESTO ES UN COMPONENTE 
function Countdown(props) {
    return (
        <>
        <div className="texto">
            <h1><strong>COMIENZA EL CAMBIO</strong></h1>
            <p>¿Cuánto crees que tardarás en alcanzar tus metas? Inicia el contador y deténlo cuando lo consigas. ¡No hay tiempo que perder!</p>
        </div>
        <div className="container">
            <div className="reloj"><i className="far fa-clock"></i></div>
            <div className="numero4">{Math.floor(props.weeks)}</div>
            <div className="numero3">{Math.floor(props.hours)}</div>
            <div className="numero2">{Math.floor(props.minutes)}</div>
            <div className="numero1">{Math.floor(props.seconds)}</div>
            <div className="button-container">
                <button onClick={props.startStopCountdown}>
                    {props.isRunning ? 'Detener' : 'Iniciar'}
                </button>
            </div>
        </div>
        </>
    );
}

class CountdownApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: null, // Tiempo de inicio en milisegundos
            isRunning: false
        };
        this.interval = null;
    }

    calculateTime = () => {
        if (!this.state.startTime) return { weeks: 0, hours: 0, minutes: 0, seconds: 0 };

        const currentTime = Date.now();
        const elapsedTime = currentTime - this.state.startTime;
        const seconds = Math.floor(elapsedTime / 1000) % 60;
        const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
        const weeks = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 7));

        return { weeks, hours, minutes, seconds };
    }

    startStopCountdown = () => {
        if (!this.state.isRunning) {
            // Reproducir música al iniciar el contador
            const audio = new Audio('/workspaces/Simple-Counter-Manul-Prian/src/audio.mp3');

            audio.play();

            const newStartTime = Date.now();
            this.setState({ startTime: newStartTime, isRunning: true });
            this.interval = setInterval(() => {
                this.forceUpdate(); // Actualizar la interfaz de usuario cada segundo
            }, 1000);
        } else {
            clearInterval(this.interval);
            this.setState({ startTime: null, isRunning: false });
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { weeks, hours, minutes, seconds } = this.calculateTime();

        return (
            <>
            <Countdown
                weeks={weeks}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                startStopCountdown={this.startStopCountdown}
                isRunning={this.state.isRunning}
            />
            {/* Elemento de audio */}
            <audio autoPlay>
                <source src="/workspaces/Simple-Counter-Manul-Prian/src/audio.mp3" type="audio/mpeg" />
            </audio>
            </>
        );
    }
}

ReactDOM.render(
    <CountdownApp />,
    document.getElementById("app")
);
