import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import signature_logo from "./logo/signature_logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

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

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

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
          <Navbar.Toggle onClick={handleOffcanvasToggle} />
          <Navbar id="responsive-navbar-nav" className="d-none d-lg-flex w-100">
            <Nav className="me-auto border-0 dropdown gap-1">
              <Nav.Link href="#features" className="hover-effect">
                <span>Solution</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>By Platform</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Product_updates">Gmail Signature</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Google Workspace</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Outlook Signature</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Exchange Signature</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>By Industry</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Product_updates">Education Facilities</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Real Estate Agent</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Saas Companies</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>By Profession</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Product_updates">CEO & Excecutives</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Doctors</Link>
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
                          <Link to="/Product_updates">Email Signature examples</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Email Signature Templates</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Email Signature Design</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Email Sign Off</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Email Signature Banner</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Handwriteen Signatures</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Templates</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Product_updates">Disclaimer Template</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Cool Signature Templates</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Minimalist Templates</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Animated Templates</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Banner Templates</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Tools</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Product_updates">Email Signature generator</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Email Signature manager</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Signature generator</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Banner Maker</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Email discliamer generator</Link>
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
                          <Link to="/Product_updates">How to add signature in outlook</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Add Signature</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">See All Guides</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Blogs</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Product_updates">Email Marketing Updates</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Digital Marketing Updates</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Tech & IT</Link>
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
                          <Link to="/Product_updates">Product Updates</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Our Feature</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Help Center</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>About Us</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link to="/About">About Us</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Career</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Legal</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Product_updates">Terms of Service</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/Product_updates">Trust Center</Link>
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
          </Navbar>
        </Container>
        <Offcanvas
          show={showOffcanvas}
          onHide={handleOffcanvasClose}
          placement="start"
          className="bg-light"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <NavDropdown title="Solution" id="offcanvas-solution-dropdown">
                <NavDropdown.Item href="#platform" className="hover-effect">
                  <span>By Platform</span>
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">Gmail Signature</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Google Workspace</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Outlook Signature</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Exchange Signature</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item href="#industry" className="hover-effect">
                  <span>By Industry</span>
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">Education Facilities</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Real Estate Agent</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Saas Companies</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item href="#industry" className="hover-effect">
                  <span>By Profession</span>
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">CEO & Excecutives</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Doctors</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Create" id="offcanvas-create-dropdown">
                <NavDropdown.Item href="#templates" className="hover-effect">
                  <span>Templates</span>

                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">Email Signature examples</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Email Signature Templates</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Email Signature Design</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Email Sign Off</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Email Signature Banner</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Handwriteen Signatures</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item href="#tools" className="hover-effect">
                  <span>Tools</span>
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">Email Signature generator</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Email Signature manager</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Signature generator</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Banner Maker</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Email discliamer generator</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="offcanvas-resources-dropdown">
                <NavDropdown.Item href="#guides" className="hover-effect">
                  <span>Guides</span>{" "}
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">How to add signature in outlook</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Add Signature</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">See All Guides</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item href="#blogs" className="hover-effect">
                  <span>Blogs</span>{" "}
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">Email Marketing Updates</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Digital Marketing Updates</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Tech & IT</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="offcanvas-resources-dropdown">
                <NavDropdown.Item href="#company" className="hover-effect">
                  <span>Support</span>{" "}
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">Product Updates</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Our Feature</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Help Center</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item href="#about" className="hover-effect">
                  <span>About us</span>{" "}
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/About">About Us</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Career</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item href="#legal" className="hover-effect">
                  <span>Legal</span>
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Product_updates">Terms of Service</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/Product_updates">Trust Center</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <div className="navbar-right d-flex">
                <Link
                  to="/signup"
                  className="btn signup-button w-100"
                >
                  Sign Up
                </Link>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default Header;
