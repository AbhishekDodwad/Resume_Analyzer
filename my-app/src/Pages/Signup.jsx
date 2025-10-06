import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaLock, FaEnvelope, FaRocket, FaGoogle, FaGithub, FaCheck } from 'react-icons/fa';
import '../assets/Signup.css';
import axios from 'axios';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [responseLoading, setResponseLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseLoading(true)
        setMessage("")
        console.log('Signup attempt:', formData);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, formData, {
                headers: { 'Content-Type': 'application/json' }
            }
            );
            setResponseLoading(false)
            if (response.data == "User Registered Successfully") {
                setMessage("Sign up Successful !! you can now login");
                setResponseLoading(false);
                //  alert("Signup Successful");
                window.location.href = "/login";
            } else {

                setMessage("Network Error!!")
                alert("Signup Failed");
            }

            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error during signup:', error);
            setResponseLoading(false);
            setMessage(" Network Error!");
            alert("Signup Failed");
        }
    };



    const passwordRequirements = [
        { text: 'At least 8 characters', met: formData.password.length >= 8 },
        { text: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
        { text: 'One lowercase letter', met: /[a-z]/.test(formData.password) },
        { text: 'One number', met: /[0-9]/.test(formData.password) },
        { text: 'One special character', met: /[!@#$%^&*]/.test(formData.password) }
    ];
    return (
        <div className='signup-container'>
            <div className='signup-wrapper'>
                {/* Branding Section */}
                <div className='signup-branding'>
                    <div className='brand-content'>
                        <div className='logo'>
                            <FaRocket className='logo-icon' />
                            <span className='logo-text'>HireLens</span>
                        </div>
                        <h1>Join HireLens Today!</h1>
                        <p>Create your account and start optimizing your resume for your dream job with AI-powered insights.</p>
                    </div>
                </div>

                {/* Form Section */}
                <div className='signup-form-section'>
                    <div className='form-container'>
                        <div className='form-header'>
                            <h2>Create Your Account</h2>
                            <p>Join thousands of job seekers who found their dream jobs</p>
                        </div>

                        <form className='signup-form' onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='fullName'>
                                    <FaUser className='input-icon' /> Full Name
                                </label>
                                <input
                                    type='text'
                                    id='userName'
                                    name='userName'
                                    placeholder='Enter your full name'
                                    value={formData.userName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <FaEnvelope className='input-icon' /> Email Address
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Enter your email address'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <FaLock className='input-icon' /> Password
                                </label>
                                <div className='password-input-container'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id='password'
                                        name='password'
                                        placeholder='Create a strong password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type='button'
                                        className='password-toggle'
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                                {formData.password && (
                                    <div className='password-strength'>
                                        <div className='strength-bar'>
                                            <div
                                                className={`strength-fill ${passwordRequirements.filter(req => req.met).length >= 4 ? 'strong' :
                                                    passwordRequirements.filter(req => req.met).length >= 2 ? 'medium' : 'weak'
                                                    }`}
                                                style={{ width: `${(passwordRequirements.filter(req => req.met).length / passwordRequirements.length) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className='password-requirements'>
                                            {passwordRequirements.map((req, index) => (
                                                <div key={index} className={`requirement ${req.met ? 'met' : ''}`}>
                                                    <FaCheck className='requirement-icon' />
                                                    <span>{req.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className='form-group'>
                                <label htmlFor='confirmPassword'>
                                    <FaLock className='input-icon' /> Confirm Password
                                </label>
                                <div className='password-input-container'>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        placeholder='Confirm your password'
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type='button'
                                        className='password-toggle'
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                                    <span className='error-message'>Passwords do not match</span>
                                )}
                            </div>
                            <button
                                type='submit'
                                className='signup-btn'
                                disabled={(formData.confirmPassword && formData.password !== formData.confirmPassword)}
                            >
                                {responseLoading ? 'Initializing server resources. This may take a short while. Please wait…' : 'Create Account'}
                            </button>

                            {responseLoading && <div className='loader'></div>}
                            {message && <p className='status-message'>{message}</p>}
                        </form>

                        <div className='login-link'>
                            <p>Already have an account?
                                <a href='/' className='login-text'> Sign in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;