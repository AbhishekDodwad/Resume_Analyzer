import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaLock, FaRocket, FaGoogle, FaGithub } from 'react-icons/fa';
import '../assets/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';

function Login({ isLoggedIn }) {
    // console.log(`${process.env.React_APP_API_URL}/auth/login`)

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    if (isLoggedIn) {
        window.location.href = '/';
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, formData, {
            headers: { 'Content-Type': 'application/json' }
        })

        setResponse(response.data);
        setLoading(false);
        console.log('Server response:', response.data);
        if (response.data.token !== null) {
            <Navbar value={true, response.} />
            setMessage("Login Successful")
            // alert("Login Successful");
            localStorage.setItem("token", response.data.token);
            window.location.href = "/";
        } else {
            setMessage("login Failed")
            alert("Login Failed");
        }
    };

    return (
        <div className='login-container'>
            <div className='login-wrapper'>

                <div className='login-branding'>
                    <div className='brand-content'>
                        <div className='logo'>
                            <FaRocket className='logo-icon' />
                            <span className='logo-text'>HireLens</span>
                        </div>
                        <h1>Welcome Back!</h1>
                        <p>Optimize your resume, ace your interviews, and land your dream job with AI-powered insights.</p>

                        <div className='features-list'>
                            <div className='feature-item'>
                                <div className='feature-icon'>✓</div>
                                <span>ATS Compatibility Scoring</span>
                            </div>
                            <div className='feature-item'>
                                <div className='feature-icon'>✓</div>
                                <span>Skills Gap Analysis</span>
                            </div>
                            <div className='feature-item'>
                                <div className='feature-icon'>✓</div>
                                <span>Personalized Recommendations</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='login-form-section'>
                    <div className='form-container'>
                        <div className='form-header'>
                            <h2>Sign In to Your Account</h2>
                            <p>Enter your credentials to continue your job search optimization</p>
                        </div>

                        <form className='login-form' onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <FaUser className='input-icon' />
                                    Email Address
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Enter your registered email address'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <FaLock className='input-icon' />
                                    Password
                                </label>
                                <div className='password-input-container'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id='password'
                                        name='password'
                                        placeholder='Enter your password'
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
                            </div>
                            {/* 
                            <div className='form-options'>

                                <a href='#forgot' className='forgot-password'>
                                    Forgot password?
                                </a>
                            </div> */}

                            <button type='submit' className='login-btn'>
                                {loading ? "Initializing server resources. This may take a short while. Please wait… " : "Sign In to HireLens"}
                            </button>
                            {loading && <div className='loader'></div>}
                            {response.message && <p className='status-message' style={{ color: message.includes("Failed") ? "red" : "green" }}>{response.message}</p>}
                        </form>

                        <div className='signup-link'>
                            <p>Don't have an account?
                                <Link className='signup-text' to={'/signup'}>Cretae an account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;