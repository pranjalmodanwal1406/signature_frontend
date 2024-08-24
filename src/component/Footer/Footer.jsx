import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="last">
    <footer className="footer text-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* <img src={Vector} alt="Logo" className="footer-logo mb-3" /> */}
            <address>
              Contact Us<br />
              Call:+123 456 789<br />
              XYZ City, XYZ State,<br />
              USA Pin:00000<br />
              <br />
              Email: example@mail.com <br />
            </address>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5>Explore</h5>
            <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="/services">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="/appDev-service">Resume</a></li>
              <li><a href="/web-service">PHD</a></li>
              <li><a href="/software-service">Business</a></li>
              <li><a href="/game-service">Designer</a></li>
              <li><a href="/design-service">Photography</a></li>
              <li><a href="/iot-service">Music</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5>Subscribe</h5>
            <p><i className="bi bi-telephone"></i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur maxime dolore voluptatem dolorum nemo! Totam.</p>
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
}

export default Footer;
