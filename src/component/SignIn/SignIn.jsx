import React, { useState } from 'react';
import './SignIn.scss';
import SignIn from './images/SignIn.png';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await fetch('http://13.200.240.28:9006/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                if (data) {
                    setSuccessMessage('Login successful!');
                    // Save the token to local storage or context
                    localStorage.setItem('token', data.token);
                    // Redirect to the desired page on a different port
                    window.location.replace('http://44.196.192.232:3008');
                } else {
                    setErrorMessage(data.message || 'Login failed. Please check your credentials.');
                }
            } else {
                setErrorMessage(data.message || 'Server error. Please try again later.');
            }
        } catch (error) {
            console.error('Login error:', error); // Logs detailed error to the console
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className='Sign_In'>
            <div className="SignIn_img">
                <p className='text_above_img'>
                    For Your <br />
                    Professional <br />
                    E-mail <br />
                    Signature
                </p>
                <img src={SignIn} alt="Sign In" />
            </div>

            <div className="right">
                <p className='Login_text'>Login</p>
                {errorMessage && <p className='error_message'>{errorMessage}</p>}
                {successMessage && <p className='success_message'>{successMessage}</p>}
                <form onSubmit={handleSignIn}>
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
                        <button type="submit">Login</button>
                    </div>
                    <div className="login-with">
                        <span style={{ color: 'black' }}>Login With</span>
                        <div className="social-icons">
                            <FaFacebook className="icon facebook" />
                            <FaGoogle className="icon google" />
                        </div>
                    </div>
                    <div className="links">
                        <button className="create-account-btn">Create an account</button>
                        <Link to="/ForgetPassword">Forget Password?</Link>
                    </div>
                </form>
            </div>

            {/* Design Background with Ellipses */}
            <div className="signin_design">
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
                <div className="group9079">
                    <div className="ellipse65"></div>
                    <div className="ellipse67"></div>
                    <div className="ellipse68"></div>
                    <div className="ellipse69"></div>
                    <div className="ellipse70"></div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
