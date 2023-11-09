import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';

const NavMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <label htmlFor="check">
                <input type="checkbox" id="check" />
                <span></span>
                <span></span>
                <span></span>
            </label>

            <ul className="">
                <li>
                    <Link to="/">Inicio TestFeature</Link>
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

export default NavMobile