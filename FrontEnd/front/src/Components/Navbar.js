import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Assests/Img1.png'

const Navbar = () => (
  <div className="nav-bar-container">
    <div className="nav-left">
       <img src={Logo} alt="Logo" className="Logo" /> 
    </div>
    
    <div className="nav-center">
      <h1 className="main-title">RESEARCH GRANT MANAGEMENT SYSTEM</h1>
    </div>
    
    <div className="nav-right">
      <button className="nav-button profile-button">
        <Link to="/profile">Profile</Link>
      </button>
      <button className="nav-button logout-button">
        <Link to="/signout">Sign Out</Link>
      </button>
    </div>
  </div>
);

export default Navbar;


