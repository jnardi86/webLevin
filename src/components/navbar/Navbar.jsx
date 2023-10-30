import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <nav>
            <label for="check">
                <input type="checkbox" id="check" />
                <span></span>
                <span></span>
                <span></span>
            </label>


            <ul className="">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/services">Servicios</Link>
                </li>
                <li>
                    <Link to="/about">Sobre mi</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar