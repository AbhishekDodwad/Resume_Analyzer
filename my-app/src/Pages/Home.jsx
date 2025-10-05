import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import '../assets/Home.css'
import { FaUpload, FaFileAlt, FaClipboardCheck, FaStar, FaChartBar, FaLightbulb, FaShieldAlt, FaRocket, FaCheck, FaTimes, FaLightbulb as FaBulb } from 'react-icons/fa';
import Footer from '../Components/Footer';
import axios from 'axios';

function Home({ isLoggedIn }) {
    const [jdText, setJdText] = useState("");
    const [resumeFile, setResumeFile] = useState(null);
    const [jdFile, setJdFile] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("token"));

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         setIsLoggedIn(true);
    //     } else {
    //         setIsLoggedIn(false);
    //     }
    // }, [])
    // useEffect(() => {
    //     // listen for login/logout changes
    //     const handleStorageChange = () => {
    //         setIsLoggedIn(!!localStorage.getItem("token"));
    //     };

    //     window.addEventListener("storage", handleStorageChange);
    //     return () => window.removeEventListener("storage", handleStorageChange);
    // }, []);

    function handleChange(event) {
        const text = event.target.value;
        setJdText(text);
    }

    function handleFileChange(event) {
        const jdFile = event.target.files[0];
        setJdFile(jdFile);
    }

    function handelResumeFileChange(event) {
        setResumeFile(event.target.files[0]);
    }

    async function handelSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("resume", resumeFile);
        formData.append("jdFile", jdFile);
        formData.append("jdText", jdText);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/analyze`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
            console.log("Response:", response.data);
            setResult(response.data);
            //console.log("Response:", response.data);
        } catch (error) {
            console.error("Error during submission:", error);
            alert("Error analyzing resume. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const getScoreColor = (score) => {
        if (score >= 80) return '#4CAF50';
        if (score >= 60) return '#FF9800';
        return '#F44336';
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className="home-container">

                <section className="hero-section">
                    <div className="hero-content">
                        <h1>
                            <FaClipboardCheck className="hero-icon" />
                            Optimize Your Resume for Every Job
                        </h1>
                        <h2>
                            Get instant ATS compatibility scores and actionable insights to land more interviews
                        </h2>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <FaStar className="stat-icon" />
                                <span>95% Success Rate</span>
                            </div>
                            <div className="stat-item">
                                <FaChartBar className="stat-icon" />
                                <span>3x More Interviews</span>
                            </div>
                            <div className="stat-item">
                                <FaLightbulb className="stat-icon" />
                                <span>AI-Powered Analysis</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="how-it-works">
                    <div className="section-header">
                        <h3>How It Works</h3>
                        <p>Transform your resume in three simple steps</p>
                    </div>
                    <div className="steps-container">
                        <div className="step">
                            <div className="step-number">1</div>
                            <FaUpload className="step-icon" />
                            <h4>Upload & Analyze</h4>
                            <p>Upload your resume and job description. Our AI scans both documents instantly.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <FaChartBar className="step-icon" />
                            <h4>Get Detailed Analysis</h4>
                            <p>Receive comprehensive feedback on skills matching, keyword optimization, and ATS compatibility.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <FaLightbulb className="step-icon" />
                            <h4>Implement & Succeed</h4>
                            <p>Use our actionable suggestions to optimize your resume and land more interviews.</p>
                        </div>
                    </div>
                </section>

                <section className="features-section">
                    <div className="section-header">
                        <h3>Why Choose HireLens?</h3>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <FaShieldAlt className="feature-icon" />
                            <h4>ATS-Friendly Analysis</h4>
                            <p>Ensure your resume passes through Applicant Tracking Systems with flying colors.</p>
                        </div>
                        <div className="feature-card">
                            <FaChartBar className="feature-icon" />
                            <h4>Skills Matching</h4>
                            <p>Identify matched and missing skills compared to the job description requirements.</p>
                        </div>
                        <div className="feature-card">
                            <FaLightbulb className="feature-icon" />
                            <h4>Actionable Insights</h4>
                            <p>Get specific recommendations to improve your resume's impact and relevance.</p>
                        </div>
                    </div>
                </section>


                <div className="restricted-section">
                    <div className={`ristricted-section ${!isLoggedIn ? "blurred" : ""}`}>
                        <section className="upload-section">
                            <div className="section-header">
                                <h3>Start Optimizing Your Resume</h3>
                                <p>Upload your documents and get instant feedback</p>
                            </div>
                            <div className="upload-container">
                                <form className="upload-form" onSubmit={handelSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="resume">
                                            <FaFileAlt className="label-icon" />
                                            Upload Your Resume:
                                        </label>
                                        <input onChange={handelResumeFileChange} type="file" name="resume" id="resume" accept=".pdf,.doc,.docx" required />
                                        <small>Supported formats: PDF, DOC, DOCX (Max 5MB)</small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="jobDescription">
                                            <FaFileAlt className="label-icon" />
                                            Upload Job Description:
                                        </label>
                                        <input onChange={handleFileChange} type="file" name="jobDescription" id="jobDescription" accept=".pdf,.doc,.docx,.txt" />
                                        <small>Or paste the job description below</small>
                                    </div>

                                    <div className="divider">
                                        <span>OR</span>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="jdText">
                                            <FaFileAlt className="label-icon" />
                                            Paste Job Description:
                                        </label>
                                        <textarea
                                            value={jdText}
                                            onChange={handleChange}
                                            name="jdText"
                                            id="jdText"
                                            placeholder="Paste the job description here..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="cta-button" disabled={loading}>
                                        <FaRocket style={{ marginRight: "8px" }} />
                                        {loading ? 'Analyzing...' : 'Analyze My Resume'}
                                    </button>
                                </form>

                            </div>

                        </section>
                    </div>
                    {!isLoggedIn && (
                        <div className="overlay-message">
                            Please login to analyze your resume
                        </div>
                    )}

                </div>

                {result && (
                    <section className="results-section">
                        <div className="section-header">
                            <h3>Analysis Results</h3>
                            <p>Here's how your resume matches with the job description</p>
                        </div>

                        <div className="results-container">
                            <div className="ats-score-card">
                                <div className="score-circle" style={{ borderColor: getScoreColor(result.atsScore) }}>
                                    <span className="score-value" style={{ color: getScoreColor(result.atsScore) }}>
                                        {result.atsScore}%
                                    </span>
                                    <span className="score-label">ATS Score</span>
                                </div>
                                <div className="score-interpretation">
                                    <h4>ATS Compatibility</h4>
                                    <p>
                                        {result.atsScore >= 80
                                            ? "Excellent! Your resume is well-optimized for ATS systems."
                                            : result.atsScore >= 60
                                                ? "Good, but there's room for improvement in ATS optimization."
                                                : "Needs significant improvement to pass through ATS systems."
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="skills-analysis">
                                <div className="skills-column">
                                    <div className="skills-header matched-header">
                                        <FaCheck className="skills-icon" />
                                        <h4>Matched Skills ({result.matchedSkills.length})</h4>
                                    </div>
                                    <div className="skills-list">
                                        {result.matchedSkills.map((skill, index) => (
                                            <div key={index} className="skill-item matched-skill">
                                                <FaCheck className="skill-bullet" />
                                                <span>{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="skills-column">
                                    <div className="skills-header missing-header">
                                        <FaTimes className="skills-icon" />
                                        <h4>Missing Skills ({result.missingSkills.length})</h4>
                                    </div>
                                    <div className="skills-list">
                                        {result.missingSkills.map((skill, index) => (
                                            <div key={index} className="skill-item missing-skill">
                                                <FaTimes className="skill-bullet" />
                                                <span>{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="improvements-section">
                                <div className="improvements-header">
                                    <FaBulb className="improvements-icon" />
                                    <h4>Improvement Suggestions</h4>
                                </div>
                                <div className="improvements-list">
                                    {result.improvements.map((suggestion, index) => (
                                        <div key={index} className="improvement-item">
                                            <div className="improvement-number">{index + 1}</div>
                                            <p>{suggestion}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <section className="results-preview">
                    <div className="section-header">
                        <h3>What You'll Get</h3>
                        <p>Comprehensive analysis and actionable insights</p>
                    </div>
                    <div className="results-grid">
                        <div className="result-item">
                            <div className="result-score matched">85%</div>
                            <h4>Skills Match</h4>
                            <p>See which skills from the job description you already have</p>
                        </div>
                        <div className="result-item">
                            <div className="result-score missing">15%</div>
                            <h4>Missing Skills</h4>
                            <p>Identify skills you need to develop or highlight better</p>
                        </div>
                        <div className="result-item">
                            <div className="result-score improvement">92%</div>
                            <h4>ATS Score</h4>
                            <p>Optimize for Applicant Tracking System compatibility</p>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
}

export default Home;