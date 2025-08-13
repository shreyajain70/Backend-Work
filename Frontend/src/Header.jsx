import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/panda-bear-silhouette-logo-concept-ready-use_161396-1304.jpg" alt="Company Logo" />
      </div>

      {/* Center: Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>

      {/* Right: Navigation Buttons */}
      <nav className="nav-buttons">
       <Link to={"/Home"}> <button>Home</button></Link>
        <button>About Us</button>
        <button>Contact Us</button>
      </nav>
    </header>
  );
};

export default Header;
