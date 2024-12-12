import React, { useState } from "react";
import "./Feedback.scss";
import axios from "axios";
import feedback1 from "./img/feedback1.png";
import Footer from "../Footer/Footer";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDataToSend = {
      name: userData.name,
      email: userData.email,
      comment: userData.comment,
    };

    console.log(userDataToSend); // Debugging output

    try {
      const response = await axios.post(
        `http://44.196.64.110:9006/api/feedback/create`,
        userDataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User request updated:", response.data);
      alert("Feedback sent successfully!");
    } catch (error) {
      console.error("Error sending query", error.response || error);
      alert("Error sending feedback. Please try again.");
    }
  };

  return (
    <>  <h2 className="mt-5 text-center fs-1 fw-bold">Add Your Review</h2>
      <div className="feedback-container">
      
        <div className="illustration-section">
          <img src={feedback1} alt="Illustration" />
        </div>
        <div className="form-section">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comment</label>
              <textarea
                rows="4"
                id="comments"
                placeholder="Enter Detailed Comment"
                name="comment"
                value={userData.comment}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="feedback-btn">
              <div className="Submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Form;
