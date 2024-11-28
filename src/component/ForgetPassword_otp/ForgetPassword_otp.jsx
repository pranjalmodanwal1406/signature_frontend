import React, { useState, useRef } from 'react';
import './ForgetPassword_otp.scss';
import SignIn from './images/SignIn.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

function ForgetPassword() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < 3) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpCode = otp.join('');

        try {
            const response = await axios.post('http://44.196.64.110:9006/api/auth/verifyOTP', {
                otp: otpCode
            });

            if (response.data.success) {
                localStorage.setItem('resetToken', response.data.token); // Save the token in local storage
                alert('OTP Verified Successfully!');
                // Redirect to the new password page
                navigate('/forgetpassword_newpassword'); // Redirect to the new password page
            } else {
                alert('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error during OTP verification:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className='Sign_In'>
            <div className="SignIn_img">
                <p className='text_above_img'>For Your <br /> Professional <br /> E-mail <br /> Signature</p>
                <img src={SignIn} alt="Sign In" />
            </div>

            <div className="right">
                <p className='Login_text'>Recovery Password</p>
                <p className='OTP_text'>Enter OTP</p>
                <form onSubmit={handleSubmit}>
                    <div className="otp-inputs">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleBackspace(e, index)}
                                maxLength="1"
                                ref={inputRefs[index]}
                                className="otp-input"
                            />
                        ))}
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                    <div className="links">
                        <Link to="/signin">Login?</Link>
                    </div>
                </form>
            </div>

            {/* Design Background with Ellipses */}
            <div className="ForgetPassword_otp_design">
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
