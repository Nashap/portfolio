import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

export default function Projects() {
  return (
    <section className="projects-page timeline">

      {/* HEADER */}
      <header className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <Link to="/" className="home-btn">Home</Link>
      </header>

      {/* TIMELINE */}
      <div className="timeline-container">

        {/* PROJECT 1 */}
        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <h2>Gesture & Voice Controlled Virtual Mouse System</h2>
          <p>
            A real-time human–computer interaction system that enables
            touch-free mouse control using hand gestures and voice commands.
          </p>

          <div className="tech-boxes">
            <span>Python</span>
            <span>OpenCV</span>
            <span>MediaPipe</span>
            <span>PyAutoGUI</span>
            <span>Speech Recognition</span>
          </div>

          <a
            href="https://github.com/Nashap/gesture_presentation"
            target="_blank"
            rel="noreferrer"
            className="project-action"
          >
            Repository ↗
          </a>
        </div>

        {/* PROJECT 2 */}
        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <h2>Student Result Management System</h2>
          <p>
            A web-based academic application that automates grade calculation
            and generates downloadable PDF result cards.
          </p>

          <div className="tech-boxes">
            <span>Python</span>
            <span>Flask</span>
            <span>ReportLab</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <a
            href="https://github.com/Nashap/Student_Result"
            target="_blank"
            rel="noreferrer"
            className="project-action"
          >
            Repository ↗
          </a>
        </div>

      </div>
    </section>
  );
}
