import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",

    subArray: [
      { name: "Catering", path: "/catering" },

    ]
  },
  {
    name: "Contact-Us", path: "/contact",

  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [show, setShow] = useState(false)

  const [subArray, setSubArray] = useState(false)


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
        <Link to={"/"}>
          <img
            src="images/vaikuntlogo.png"
            className="vaikunta-logo"
            alt="Vaikunta Logo"
          />
        </Link>
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
          <div key={index}>
            <div>
              <Link to={item.path}

                onClick={(e) => {
                  if (item.subArray) {
                    e.preventDefault()
                    setSubArray(subArray == index ? null : index)
                    
                  } else {
                    setMenuOpen(false);
                    setSubArray(null);
                  }
                }}

              >
                <span
                  className="nav-link"
                  onClick={() => setShow(!show)}

                >
                  {item.name} {" "}
                  {item.subArray && (
                    <span>
                      {subArray === index ? <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 14-4-4-4 4" />
                      </svg>
                        : <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4" />
                        </svg>
                      }
                    </span>

                  )}
                </span>
              </Link>
            </div>
            <div className="nav-item-with-submenu">


              {subArray == index && item.subArray && item.subArray.length > 0 && (
                <div className="sub-items">
                  {item.subArray.map((subItem, index) => (
                    <div key={index}>

                      <Link
                        to={subItem.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setSubArray(null);
                        }}


                        className={`sub-link ${location.pathname === subItem.path ? "active" : ""}`}
                      >
                        {subItem.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>


          </div>
        ))}

      </div>
    </div>
  );
}
