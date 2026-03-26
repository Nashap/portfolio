import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-inner">

          {/* LEFT PHOTO */}
          <div className="hero-photo">
            <img
              src="/profile.png"
              alt="Nasha P"
              className="profile-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="hero-content">

            {/* TOP ACTION BUTTONS */}
            <div className="top-actions">
              <Link to="/about" className="btn small">About</Link>
              <a href="/resume.pdf" className="btn small" download>
                Resume
              </a>
            </div>

            {/* NAME & ROLE */}
            <h1 className="hero-title">NASHA P</h1>
            <p className="hero-sub">Software Engineer</p>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM SECTION ================= */}
      <section className="home-bottom">

        {/* NAV BUTTONS */}
        <div className="bottom-links">
          <Link to="/skills" className="btn light">Skills</Link>
          <Link to="/projects" className="btn light">Projects</Link>
          <Link to="/reach" className="btn light">Reach out</Link>
        </div>

        {/* CONNECT TEXT */}
        <p className="connect-text">CONNECT WITH ME</p>

        {/* SOCIAL ICONS */}
        <div className="social-icons">
          <a
            href="https://github.com/Nashap"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:nashaanoshad@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/nasha-p-a0823229b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/nasha.noushad_?igsh=MWx0cXQ4cHV2dmVodA=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
    </>
  );
}
