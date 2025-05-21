import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact-Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
   <div className="main-container">
    <div className="logo">Vaikunta Ruchulu</div>

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
            <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                {item.name}
            </NavLink>
        ))}
    </div>
</div>

    </>
  );
}
