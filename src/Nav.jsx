import React from 'react';
import { Link } from 'react-router';
import './Nav.css';
import img from "./assets/img.jpg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={img} alt="Logo" className="logo-icon" />
        <Link to="/" className="logo-text">
          IMPERIAL <span>GRAND HOTEL</span>
        </Link>
      </div>

      <ul className="nav-links">
        <li className="nav-item dropdown">
          <span className="nav-link">HOME ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/home1">Home 1</Link></li>
            <li><Link to="/home2">Home 2</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">ABOUT</Link>
        </li>

        <li className="nav-item">
          <Link to="/service" className="nav-link">SERVICE</Link>
        </li>

        <li className="nav-item dropdown">
          <span className="nav-link">PAGES ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/page1">Page 1</Link></li>
            <li><Link to="/page2">Page 2</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;