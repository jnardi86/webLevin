import React from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';
import { navItems } from "./navItems"


const NavDesktop = () => {


  return (
    <nav>
      <div className="nav-desktop-body">
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className="linkTo" to={item.link}>{item.label}</Link></li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavDesktop