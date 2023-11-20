import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';
import { navItems } from "./navItems"
import Hamburger from './Hamburger';


const NavMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerCheckbox, setHamburgerCheckbox] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setHamburgerCheckbox(!hamburgerCheckbox);
    };


    return (
        <nav>
            <div className="nav-mobile-container">
                {/* HEADER */}
                < div className={menuOpen? "nav-mobile-header expanded" : "nav-mobile-header"}>
                    < Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} hamburgerCheckbox={hamburgerCheckbox} setHamburgerCheckbox={setHamburgerCheckbox} />
                </div>


                <div className={menuOpen? "nav-mobile-body visible" : "nav-mobile-body"}>
                    <ul>
                        {navItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    < Link className="linkTo" to={item.link} onClick={handleMenuToggle} >{item.label}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavMobile