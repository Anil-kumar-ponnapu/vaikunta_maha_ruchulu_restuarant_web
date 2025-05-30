import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Catering", path: "/catering" },
    { name: "Contact-Us", path: "/contact" },
    
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Get current path

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div
            className="main-container"
            style={{
                backgroundImage: "url('/images/informationCard.jpg')",
                backgroundSize: "cover",        
                backgroundPosition: "center",   
                backgroundRepeat: "no-repeat",   
            }}
        >
            <div className="logo">
                <img src="images/vaikuntlogo.png" className="vaikunta-logo" alt="Vaikunta Logo" />
            </div>

            <div
                className={`hamburger ${menuOpen ? "open" : "close"}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
            >
                {menuOpen ? "×" : "☰"}
            </div>

            <div className={`nav-items ${menuOpen ? "open" : ""}`}>
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
