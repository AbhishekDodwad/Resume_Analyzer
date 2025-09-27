import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Brand Section */}
            <div className="footer-brand">
                <h2>HireLens</h2>
                <p>Helping your resume get noticed.</p>
            </div>

            {/* Navigation Links */}
            <div className="footer-links">
                <NavLink to="/" className="footer-link">Home</NavLink>
                <NavLink to="/about" className="footer-link">About</NavLink>
                <NavLink to="/contact" className="footer-link">Contact</NavLink>
                <NavLink to="/login" className="footer-link">Login</NavLink>
                <NavLink to="/signup" className="footer-link">Sign Up</NavLink>
            </div>

            {/* Contact Section */}
            <div className="footer-contact">
                <p>Email: <a href="mailto:dodwadabhishek@gmail.com">dodwadabhishek@gmail.com</a></p>
                <p>© {new Date().getFullYear()} HireLens. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
