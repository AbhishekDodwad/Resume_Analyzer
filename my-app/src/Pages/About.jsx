import React from 'react';
import '../assets/About.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function About() {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                {/* Hero / Introduction */}
                <section className="about-hero">
                    <h1>About HireLens</h1>
                    <p>
                        Ever wondered why some resumes never get noticed? <strong>HireLens</strong> is here to help!
                        By analyzing both your resume and the job description, we give you a clear ATS score
                        and practical suggestions so your resume gets the attention it deserves.
                    </p>
                </section>

                {/* Why This Tool Exists */}
                <section className="about-why">
                    <h2>Why We Built HireLens</h2>
                    <p>
                        Most qualified candidates get filtered out by Applicant Tracking Systems simply
                        because their resumes aren’t optimized with the right keywords, formatting, or layout.
                        <strong>HireLens</strong> was created to give every professional a fair chance to shine.
                    </p>
                </section>

                {/* Key Features */}
                <section className="about-features">
                    <h2>What HireLens Offers</h2>
                    <ul>
                        <li>
                            <strong>Resume + JD Analysis:</strong> Match your resume against any job description for precise feedback.
                        </li>
                        <li>
                            <strong>Instant ATS Score:</strong> Know immediately how your resume performs with ATS software.
                        </li>
                        <li>
                            <strong>Actionable Suggestions:</strong> Get clear tips to improve keywords, formatting, and structure.
                        </li>
                        <li>
                            <strong>Save Time:</strong> No more guessing what recruiters want—apply confidently every time.
                        </li>
                    </ul>
                </section>

                {/* Vision / Mission */}
                <section className="about-mission">
                    <h2>Our Mission</h2>
                    <p>
                        At <strong>HireLens</strong>, we believe every professional deserves to have their resume noticed.
                        Our mission is to empower job seekers by removing uncertainty, providing actionable insights,
                        and helping them present their best selves to employers.
                    </p>
                </section>

                {/* CTA */}
                <section className="about-cta">
                    <p>
                        Ready to see how your resume stacks up? Upload your resume along with the job description and
                        let <strong>HireLens</strong> guide you toward success!
                    </p>
                    <button className="cta-button">Analyze My Resume</button>
                </section>
            </div>
            <Footer />
        </div >
    );
}

export default About;
