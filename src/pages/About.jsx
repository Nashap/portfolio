import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
  return (
    <section className="about-page">

      {/* HEADER */}
      <header className="about-header">
        <h1 className="about-title">About</h1>
        <Link to="/" className="home-btn">Home</Link>
      </header>

      {/* CONTENT */}
      <div className="about-content">

        {/* INTRO */}
        <p className="about-intro">
          I am a Computer Science graduate with a strong interest in building
          practical software solutions. My work focuses on creating systems
          that combine problem-solving, clean design, and real-world usability.
        </p>

        {/* HIGHLIGHTS */}
        <div className="about-section">
          <h2>What I Do</h2>
          <ul>
            <li>Build real-time systems using computer vision</li>
            <li>Develop Python-based backend applications</li>
            <li>Create clean and responsive web interfaces</li>
            <li>Work on academic and real-world problem solutions</li>
          </ul>
        </div>

        {/* SKILLS */}
        <div className="about-section">
          <h2>Skills</h2>

          <div className="skill-pills">
            <span>Python</span>
            <span>OpenCV</span>
            <span>MediaPipe</span>
            <span>Flask</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        {/* GOAL */}
        <div className="about-section">
          <h2>Career Goal</h2>
          <p>
            I aim to work as a software engineer where I can continuously
            learn, build meaningful applications, and contribute to
            innovative technology-driven solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
