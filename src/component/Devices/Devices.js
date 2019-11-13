import React from 'react'
import "./Devices.css";
import corriente from './corriente+.svg';
import voltaje from './voltaje.svg';
import direccion from './direccion.svg';
import temp from './temp.svg';
import humedad from './humedad.svg';
import lluvia from './lluvia.svg';
import luz from './luz.svg';
import presion from './presion.svg';
import velocidad from './velocidad.svg';
import dispositivos from './dispositivos.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const Devices = (props)=>(
    <div>
        <div className="otherContainer">
            <div className="dispositivos">DISPOSITIVOS</div>
            <img src={dispositivos} alt="dispositivos" className="icon" />
        </div>
        <div className="bigContainer">
            <div className="mediumContainer ladrillo">
                <h1 className="titulo">Ladrillo Solar</h1>
                <div className="otherContainer">
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/current`}>Corriente</Link>
                        <img src={corriente} alt="corriente" className="icon" />
                    </div>
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/voltage`}>Voltage</Link>
                        <img src={voltaje} alt="voltaje" className="icon" />
                    </div>
                </div>
            </div>
            <div className="mediumContainer casa">
                <h1 className="titulo">Casa Solar</h1>
                <div className="otherContainer">
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/tempHouse`}>Temperatura</Link>
                        <img src={temp} alt="temperatura" className="icon" />
                    </div>
                </div>     
            </div>      
            <div className="mediumContainer estacion">
                <h1 className="titulo">Estación Metereológica</h1>
                <div className="otherContainer">
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/tempStation`}>Temperatura</Link>
                        <img src={temp} alt="temperatura" className="icon" />
                    </div>                
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/humidity`}>Humedad</Link>
                        <img src={humedad} alt="corriente" className="icon" />
                    </div>                
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/light`}>Luminosidad</Link>
                        <img src={luz} alt="corriente" className="icon" />
                    </div>                
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/pressure`}>Presión</Link>
                        <img src={presion} alt="presion" className="icon" />
                    </div>                
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/rain`}>Lluvia</Link>
                        <img src={lluvia} alt="lluvia" className="icon" />
                    </div>                
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/direction`}>Dirección del viento</Link>
                        <img src={direccion} alt="direccion" className="icon" />
                    </div>
                    <div className="smallContainer">
                        <Link className="titulopequeño" style={{ textDecoration: 'none'}} to={`/speed`}>Velocidad del viento</Link>
                        <img src={velocidad} alt="velocidad" className="icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

  export default Devices;