import React from 'react'
import "./Home.css";
import logosolaris from './logo.svg';

const Home = props => (
    <div className="home">
        <img src={logosolaris} alt="Logo Solaris" className="logo" />
        <div className="bienvenido">
            ¡Bienvenido!
        </div>
    </div>
)

export default Home