import React, { useState } from "react";
import "./SignUp.scss";
import SignIn from "./images/SignIn.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin   } from "@react-oauth/google";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://44.196.64.110:9006/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, confirmPassword }),
        }
      );

      const data = await response.json();

      if (data.sucess) {
        setSuccessMessage("User registered successfully");
        navigate("/SignIn"); // Updated
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleLoginGoogle = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      console.log(credential);

      // Send the credential to the backend
      const res = await axios.post(
        "http://44.196.64.110:9006/api/passport/google-login",
        {
          token: credential,
          withCredentials: true,
        }
      );

      setUser(res.data.user);
      setToken(res.data.token);
      //   setToastMessage("Google login successful!");
      //   setToastType("success");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Google login failed:", error);
      //   setToastMessage("Google login failed!");
      //   setToastType("error");
    }
  };

  return (
    <>
      <GoogleOAuthProvider clientId="643005025731-d0kiljlbqnqqllto4s4ik3kqno87rfqb.apps.googleusercontent.com">
        <div className="Sign_In">
          <div className="right">
            <p className="Login_text">Sign Up</p>
            <form onSubmit={handleSignUp}>
              {errorMessage && <p className="error">{errorMessage}</p>}
              {successMessage && <p className="success">{successMessage}</p>}
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Confirm_password">Confirm Password:</label>
                <input
                  type="password"
                  id="Confirm_password"
                  name="Confirm_password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit">Submit</button>
              </div>
              <div className="login-with">
                <span style={{ color: "black" }}>Sign Up With</span>
                <div className="social-icons">
                  {/* <FaFacebook className="icon facebook" />
                  <FaGoogle className="icon google" /> */}
                  <div 
                //   className="icon google"
                  >
                  <GoogleLogin
                   text="signin"
                  
                    onSuccess={handleLoginGoogle}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  </div>
                
                </div>
              </div>
              <div className="links">
                <button className="create-account-btn">
                  Create an account
                </button>
              </div>
              <div className="links">
                <Link to="/SignIn">Login?</Link>
              </div>
            </form>
          </div>

          <div className="SignIn_img">
            <p className="text_above_img">
              For Your <br /> Professional <br /> Email <br /> Signature
            </p>
            <img src={SignIn} alt="Sign In" />
          </div>

          {/* Design Background with Ellipses */}
          <div className="signup_design">
            <div className="ellipse55"></div>
            <div className="ellipse62"></div>
            <div className="ellipse59"></div>
            <div className="ellipse72"></div>
            <div className="ellipse60"></div>
            <div className="ellipse61"></div>
            <div className="ellipse56"></div>
            <div className="ellipse57"></div>
            <div className="ellipse64"></div>
            <div className="ellipse58"></div>
            <div className="ellipse71"></div>
            <div className="ellipse63"></div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
}

export default SignUp;
