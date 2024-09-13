import React from "react";
import "./Contact.scss";
import Contact1 from "./images/Contact1.png";
import Footer from "../Footer/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <div className="Contact">
                <div className="section1">
                    <div className="text1">Signatouch</div>
                    <div className="contact_img_1">
                        <img src={Contact1} alt="Contact_img" />
                    </div>
                    <div className="text2">Contact Us</div>
                </div>

                {/* section 2 */}
                <div className="section2">
                    <div className="left">
                        <h3>How can we help?</h3>
                        <p>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
                        <ul className="list-unstyled">
                            <li><FaMapMarkerAlt className="icon" /><a href="#">New South Virginia</a></li>
                            <li><FaPhone className="icon" /><a href="tel:+100000000000">+1 000 000 0000 00</a></li>
                            <li><FaEnvelope className="icon" /><a href="mailto:Contact@signatouch.com">Contact@signatouch.com</a></li>

                        </ul>
                    </div>

                    <div className="right">
                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input className="first_name" type="text" id="firstName" name="firstName" placeholder="First Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input className="last_name" type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Your message...." required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
