import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import signature_logo from "./logo/signature_logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTabClick = (tabName) => {
    setActiveTab(activeTab === tabName ? "" : tabName);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tabs = ["Features", "Create", "Resources", "Company"];

  useEffect(() => {
    // Fetch the blog data from the API
    axios
      .get("http://44.196.64.110:9006/api/blog/getBlog")
      .then((response) => {
        // Access the 'data' field from the response and check if it's an array
        const blogData = response.data?.data; // response.data is the object that contains the 'data' array
        if (Array.isArray(blogData)) {
          setBlogData(blogData); // Set the blog data if it's an array
        } else {
          console.error("Invalid data format received:", response.data); // Log an error if the data format is invalid
        }
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  }, []);

  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setShowOffcanvas(false); // Close Offcanvas on navigation
    };

    handleRouteChange(); // Trigger the effect on route change
  }, [location]);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="" sticky="top">
        <Container fluid>
          <Navbar.Brand className="navbar-logo">
            <Link to="/Landing_page">
              {" "}
              <img src={signature_logo} alt="Signature Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleOffcanvasToggle} />
          <Navbar id="responsive-navbar-nav" className="d-none d-lg-flex w-100">
            <Nav className="me-auto border-0 dropdown gap-1">
              <Nav.Link className="hover-effect">
                <span>Solution</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>By Platform</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Gmail Signature">Gmail Signature</Link>
                        </li>
                        <li>
                          <Link to="/Google Workspace">Google Workspace</Link>
                        </li>
                        <li>
                          <Link to="/Outlook Signature">Outlook Signature</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>By Industry</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Product_updates">
                            Education Facilities
                          </Link>
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
              <Nav.Link className="hover-effect">
                <span>Create</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>Get inspired</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Listing_updates">
                            Email Signature examples
                          </Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">
                            Email Signature Templates
                          </Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">
                            Email Signature Design
                          </Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">Email Sign Off</Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">
                            Email Signature Banner
                          </Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">
                            Handwriteen Signatures
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Templates</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Listing_updates">Disclaimer Template</Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">
                            Cool Signature Templates
                          </Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">
                            Minimalist Templates
                          </Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">Animated Templates</Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">Banner Templates</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Tools</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/Listing_updates">
                            Email Signature generator
                          </Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">
                            Email Signature manager
                          </Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">Signature generator</Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">Banner Maker</Link>
                        </li>
                        <li>
                          <Link to="/Listing_updates">
                            Email discliamer generator
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link className="hover-effect">
                <span>Resources</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>Guide</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/guide/How to add signature in outlook">
                            How to add signature in outlook
                          </Link>
                        </li>
                        <li>
                          <Link to="/guide/How to add a signature in Gmail ">
                            How to add a signature in Gmail{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>
                        <Link to={`/blog`}>Blogs</Link>
                      </h3>
                      <ul className="list-unstyled ">
                        {blogData.map((blog) => (
                          <li key={blog._id}>
                            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link className="hover-effect">
                <span>Company</span>
                <div className="hoverer">
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <h3>Support</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/company/Our Feature">Our Feature</Link>
                        </li>
                        <li>
                          <Link to="/company/Help Center">Help Center</Link>
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
                          <Link to="/feedback">Feedback</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h3>Legal</h3>
                      <ul className="list-unstyled ">
                        <li>
                          <Link to="/company/Terms of service">
                            Terms of Service
                          </Link>
                        </li>
                        <li>
                          <Link to="/company/Privacy Policy">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/company/Trust Center">Trust Center</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                <NavDropdown.Item className="hover-effect">
                  <span>By Platform</span>
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Gmail Signature">Gmail Signature</Link>
                    </li>
                    <li>
                      <Link to="/Google Workspace">Google Workspace</Link>
                    </li>
                    <li>
                      <Link to="/Outlook Signature">Outlook Signature</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item className="hover-effect">
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
                <NavDropdown.Item className="hover-effect">
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
                <NavDropdown.Item className="hover-effect">
                  <span>Templates</span>

                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Listing_updates">
                        Email Signature examples
                      </Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">
                        Email Signature Templates
                      </Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">Email Signature Design</Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">Email Sign Off</Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">Email Signature Banner</Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">Handwriteen Signatures</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item className="hover-effect">
                  <span>Tools</span>
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Listing_updates">
                        Email Signature generator
                      </Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">Email Signature manager</Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">Signature generator</Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">Banner Maker</Link>
                    </li>
                    <li>
                      <Link to="/Listing_updates">
                        Email discliamer generator
                      </Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="offcanvas-resources-dropdown">
                <NavDropdown.Item className="hover-effect">
                  <span>Guides</span>{" "}
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/guide/How to add signature in outlook">
                        How to add signature in outlook
                      </Link>
                    </li>
                    <li>
                      <Link to="/guide/How to add a signature in Gmail ">
                        How to add a signature in Gmail{" "}
                      </Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item className="hover-effect">
                  <span>
                    <Link to={`/blog`}>Blogs</Link>
                  </span>
                  <ul className="list-unstyled ">
                    {blogData.map((blog) => (
                      <li key={blog._id}>
                        <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                      </li>
                    ))}
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="offcanvas-resources-dropdown">
                <NavDropdown.Item className="hover-effect">
                  <span>Support</span>{" "}
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/company/Our Feature">Our Feature</Link>
                    </li>
                    <li>
                      <Link to="/company/Help Center">Help Center</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item className="hover-effect">
                  <span>About us</span>{" "}
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/Pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/About">About Us</Link>
                    </li>
                    <li>
                      <Link to="/feedback">Feedback</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Item className="hover-effect">
                  <span>Legal</span>
                  <ul className="list-unstyled ">
                    <li>
                      <Link to="/company/Terms of service">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/company/Privacy Policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/company/Trust Center">Trust Center</Link>
                    </li>
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>

              <div className="navbar-right d-flex">
                <Link to="/signup" className="btn signup-button w-100">
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
