import React from 'react'
import { Link } from 'react-router-dom';
import '../../navbar/navbar.css';
import { navItems } from "./navItems"


const NavDesktop = () => {
  return (
    <div>
      <ul className="">
        {navItems.map((item, index) => {
          return (
            <li>
              <Link to={item.link}>{item.label}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavDesktop