import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Navbar.css';
import Logo from '../assets/logo.png'

function Navbar() {
    return (

        <ul className="navbar">

            <div className="nav-left">
                <div className='logo'> <img src={Logo} alt="" /></div>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink>
                </li>
            </div>


            <div className="nav-right">
                <li className="login">
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className="signup">
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
            </div>
        </ul>

    );
}

export default Navbar;
