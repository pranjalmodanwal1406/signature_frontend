import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import vector from "./signature_logo.png";

const Footer = () => {
  return (
    <div className="last">
      <footer className="footer text-dark">
        <div className="container py-5">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-8 mb-4 mb-lg-0">
              <img src={vector} alt="Logo" className="footer-logo mb-3" />

              <address>
                <br />
                Call:+123 456 789
                <br />
                XYZ City, XYZ State,
                <br />
                USA Pin:00000
                <br />
                <br />
                Email: example@mail.com <br />
              </address>
              <div className="footer-social">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaWhatsapp />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5>Explore</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About Us</Link>
                </li>
                <li>
                  <Link to="/Page">Templates</Link>
                </li>
                <li>
                  <Link to="/Blog">Blog</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5>Categories</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Resume</Link>
                </li>
                <li>
                  <Link to="/">PHD</Link>
                </li>
                <li>
                  <Link to="/">Business</Link>
                </li>
                <li>
                  <Link to="/">Designer</Link>
                </li>
                <li>
                  <Link to="/">Photography</Link>
                </li>
                <li>
                  <Link to="/">Music</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h5>Subscribe</h5>
              <p>
                <i className="bi bi-telephone"></i>Lorem Ipsum has been them an
                industry printer took a galley make book.
              </p>
              <div className="subscribe-form">
                <input type="email" placeholder="Enter your email" />
                <button className="subscribe-button">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
