import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import signature_logo from "./logo/signature_logo.png";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(activeTab === tabName ? "" : tabName);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tabs = ["Features", "Create", "Resources", "Company"];

  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={signature_logo} alt="Signature Logo" />
        </div>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          ☰
        </button>
        <div className={`navbar-middle me-auto ${isMenuOpen ? "open" : ""}`}>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`navbar-tab ${activeTab === tab ? "active" : ""}`}
              onMouseEnter={() => handleTabClick(tab)}
              onMouseLeave={() => handleTabClick("")}
            >
              {tab}
              <span
                className={`arrow ${activeTab === tab ? "up" : "down"}`}
              ></span>
              {activeTab === tab && (
                <div className="dropdown-menu">
                  <a href="Landing_page">Home</a>
                  <a href="Page">Template</a>
                  <a href="About">About</a>
                  <a href="Pricing">Pricing</a>
                  <a href="Industry">Industry</a>
                  <a href="Profession">Profession</a>
                  <a href="Guide">Guide</a>
                  <a href="Blog">Blog</a>
                  <a href="Blog_specification">Blog specification</a>
                  <a href="Product_updates">Product updates</a>
                  <a href="Contact">Contact</a>
                  <a href="Legal">Legal</a>
                </div>
              )}
            </div>
          ))}
          <div className="navbar-tab">Pricing</div>
        </div>
        <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
          <Link to="/signup" className="signup-button">
            Sign Up
          </Link>
          <span className="signin-text">English</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
