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
      setUserData({
        name: "",
        email: "",
        comment: "",
      });
    } catch (error) {
      console.error("Error sending query", error.response || error);
      alert("Error sending feedback. Please try again.");
    }
  };

  return (
    <>
      {" "}
      {/* <h2 className="mt-5 text-center fs-1 fw-bold">Add Your Review</h2> */}
      <div
        className=""
        style={{
          background: "linear-gradient(180deg, #5363F2 65%, #3EB2F0 100%)",
        }}
      >
        <div className="feedback-container w-100 container ">
          <div className="row w-100 my-5">
            <div className="col-lg-8 mx-auto">
              <div className="card w-100 rounded-5 shadow-lg mw-100">
                <div className="card-body">
                  {/* <div className="illustration-section">
                  <img src={feedback1} alt="Illustration" />
                </div> */}
                  <div className="form-section flex-column">
                    <h2 className="text-center fs-3 w-100 mb-4 mt-3">
                      Share Your Opinion with us
                    </h2>
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
                      <div className="feedback-btn justify-content-center">
                        <div className="Submit">
                          <button type="submit">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
