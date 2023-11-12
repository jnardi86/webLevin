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
            {menuOpen ?
                (
                    <div className="nav-mobile-open fade-in-out">
                        <div className="nav-mobile-container">
                            {/* HEADER */}
                            < div className="nav-mobile-header">
                                < Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} hamburgerCheckbox={hamburgerCheckbox} setHamburgerCheckbox={setHamburgerCheckbox} />
                            </div>
                            {/* BODY */}
                            <div className="nav-mobile-body">
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
                    </div>
                ) : (
                    <div className="nav-mobile-closed">
                        <div className="nav-mobile-container">
                            {/* HEADER */}
                            < div className="nav-mobile-header">
                            < Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} hamburgerCheckbox={hamburgerCheckbox} setHamburgerCheckbox={setHamburgerCheckbox} />
                            </div>
                        </div>
                    </div>
                )
            }
        </nav >
    )
}

export default NavMobile