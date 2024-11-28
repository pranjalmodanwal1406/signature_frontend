import React, { useState, useEffect } from 'react';
import './ForgetPassword_newPassword.scss';
import SignIn from './images/SignIn.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgetPassword_newPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the token is available in local storage
        const token = localStorage.getItem('resetToken');
        if (!token) {
            navigate('/forgetpassword'); // Redirect to OTP page if no token is found
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const token = localStorage.getItem('resetToken');
            if (!token) {
                setError('Token is missing.');
                return;
            }

            const response = await axios.post('http://44.196.64.110:9006/api/auth/resetPassword', {
                token,
                newPassword: password
            });

            if (response.data.success) {
                alert('Password reset successful!');
                localStorage.removeItem('resetToken'); // Remove the token after successful reset
                navigate('/signin'); // Redirect to the login page
            } else {
                setError('Failed to reset password. Please try again.');
            }
        } catch (error) {
            console.error('Error during password reset:', error);
            setError('Something went wrong. Please try again.');
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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="password">New Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="New Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>

            {/* Design Background with Ellipses */}
            <div className="ForgetPassword_newPassword_design">
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

export default ForgetPassword_newPassword;
