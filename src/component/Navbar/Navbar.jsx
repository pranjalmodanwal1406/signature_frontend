import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import signature_logo from "./logo/signature_logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
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
    <>
      <Navbar collapseOnSelect expand="lg" className="" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home" className="navbar-logo">
            <Link to="/Landing_page">
              {" "}
              <img src={signature_logo} alt="Signature Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto border-0 dropdown gap-1">
              <Nav.Link href="#features" className="hover-effect">
                <span>Solution</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>By Platform</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Gmail Signature</Link>
                        </li>
                        <li>
                          <Link>Google Workspace</Link>
                        </li>
                        <li>
                          <Link>Outlook Signature</Link>
                        </li>
                        <li>
                          <Link>Exchange Signature</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>By Industry</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Education Facilities</Link>
                        </li>
                        <li>
                          <Link>Real Estate Agent</Link>
                        </li>
                        <li>
                          <Link>Saas Companies</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>By Profession</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>CEO & Excecutives</Link>
                        </li>
                        <li>
                          <Link>Doctors</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#features" className="hover-effect">
                <span>Create</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>Get inspired</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Email Signature examples</Link>
                        </li>
                        <li>
                          <Link>Email Signature Templates</Link>
                        </li>
                        <li>
                          <Link>Email Signature Design</Link>
                        </li>
                        <li>
                          <Link>Email Sign Off</Link>
                        </li>
                        <li>
                          <Link>Email Signature Banner</Link>
                        </li>
                        <li>
                          <Link>Handwriteen Signatures</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Templates</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Disclaimer Template</Link>
                        </li>
                        <li>
                          <Link>Cool Signature Templates</Link>
                        </li>
                        <li>
                          <Link>Minimalist Templates</Link>
                        </li>
                        <li>
                          <Link>Animated Templates</Link>
                        </li>
                        <li>
                          <Link>Banner Templates</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Tools</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Email Signature generator</Link>
                        </li>
                        <li>
                          <Link>Email Signature manager</Link>
                        </li>
                        <li>
                          <Link>Signature generator</Link>
                        </li>
                        <li>
                          <Link>Banner Maker</Link>
                        </li>
                        <li>
                          <Link>Email discliamer generator</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#features" className="hover-effect">
                <span>Resources</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>Guide</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>How to add signature in outlook</Link>
                        </li>
                        <li>
                          <Link>Add Signature</Link>
                        </li>
                        <li>
                          <Link>See All Guides</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Blogs</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Email Marketing Updates</Link>
                        </li>
                        <li>
                          <Link>Digital Marketing Updates</Link>
                        </li>
                        <li>
                          <Link>Tech & IT</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#features" className="hover-effect">
                <span>Company</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>Support</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Product Updates</Link>
                        </li>
                        <li>
                          <Link>Our Feature</Link>
                        </li>
                        <li>
                          <Link>Help Center</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>About Us</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Pricing</Link>
                        </li>
                        <li>
                          <Link>About Us</Link>
                        </li>
                        <li>
                          <Link>Career</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Legal</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link>Terms of Service</Link>
                        </li>
                        <li>
                          <Link>Privacy Policy</Link>
                        </li>
                        <li>
                          <Link>Trust Center</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#features" className="hover-effect">
                <span>Pricing</span>
              </Nav.Link>
            </Nav>
            <Nav>
              <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
                <Link to="/signup" className="signup-button">
                  Sign Up
                </Link>
                <span className="signin-text">English</span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
