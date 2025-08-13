import React from "react";
import { Link } from "react-router-dom";

export const AdminDashBoard = () => {
  return (
    <div className="admin-dashboard">
      {/* Title + Top Image Section */}
      <div className="admin-header">
        <h1 className="admin-title">Hi Welcome Manthan...</h1>
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt="User Icon"
          className="header-profile-img"
        />
      </div>

      {/* Profile Section */}
      <div className="admin-profile">
        <img
          src="https://imgs.search.brave.com/k1LF5DWt0l0pX_SALKCHR3-h9ifA6-fjjyyPPF6e4KU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbWFuLXdv/cmtpbmctb24tbGFw/dG9wLWlsbHVzdHJh/dGlvbi1kb3dubG9h/ZC1pbi1zdmctcG5n/LWdpZi1maWxlLWZv/cm1hdHMtLWJ1c2lu/ZXNzbWFuLXdvcmst/YnVzaW5lc3MtZ29h/bHMtcGFjay1pbGx1/c3RyYXRpb25zLTQ2/MDgwOTcucG5nP2Y9/d2VicA"
          alt="Profile"
          className="profile-img"
        />
        <button className="update-profile-btn">Update Profile</button>
      </div>

      {/* Main Section */}
      <div className="admin-main">
        {/* Left Button Section */}
        <div className="admin-actions">
         <Link to={"/PostedProduct"} className="admin-btn">Add Product</Link> 
          <button className="admin-btn">Delete Product</button>
          <button className="admin-btn">Update Product</button>
          <button className="admin-btn">Product Sold</button>
        </div>

        {/* Stats Section */}
        <div className="admin-stats">
          <div className="stat-card">
            <p>Total Income</p>
            <h2>100000</h2>
          </div>
          <div className="stat-card">
            <p>Total Products Sold</p>
            <h2>2500</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
