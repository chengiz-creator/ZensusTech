import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <Link to="/" className="logo">
          ZensusTech
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>

          <NavLink 
            to="/services" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavLink>

          <NavLink 
            to="/industries" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Industries
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
