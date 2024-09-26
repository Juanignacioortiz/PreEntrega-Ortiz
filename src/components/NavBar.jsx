import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logo.png'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#mdf">MDF</a></li>
                <li><a href="#grabados">Grabados</a></li>
                <li><a href="#3d">3D</a></li>
                <li><a href="#contacto">Conacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
