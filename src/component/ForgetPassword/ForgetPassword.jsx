import React, { useState } from 'react';
import axios from 'axios';
import './ForgetPassword.scss';
import SignIn from './images/SignIn.png';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to your backend server to trigger OTP email
            const response = await axios.post('http://44.196.64.110:9006/api/auth/send-email', { email });

            if (response.data.success) {
                // Redirect to OTP verification page if email is sent successfully
                navigate('/forgetpassword_otp');
            } else {
                setMessage('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className='Sign_In'>
            <div className="SignIn_img">
                <p className='text_above_img'>For Your <br /> Professional <br /> E-mail <br /> Signature</p>
                <img src={SignIn} alt="Sign In" />
            </div>

            <div className="right">
                <p className='Login_text'>Forget Password</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Enter</button>
                    </div>
                    {message && <p className="message">{message}</p>}
                </form>
            </div>

            {/* Design Background with Ellipses */}
            <div className="ForgetPassword_design">
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

export default ForgetPassword;
