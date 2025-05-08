import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../logo/logo.jpg'; 

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Synnova Logo" />
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/customers">Customers</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
            </div>
        </header>
    );
};

export default Header;