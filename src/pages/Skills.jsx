import React from "react";
import { Link } from "react-router-dom";
import "./skills.css";

export default function Skills() {
  return (
    <section className="skills-page">

      {/* HOME BUTTON */}
      <Link to="/" className="home-btn">
        Home
      </Link>

      <div className="skills-container">

        {/* LEFT TITLE */}
        <div className="skills-left">
          <h1>
            SKILLS<br />
          </h1>
        </div>

        {/* RIGHT CONTENT */}
        <div className="skills-right">
          <p className="skills-heading">TECHNICAL SKILLS</p>

          <div className="skill-block">
            <span className="skill-name">Python, HTML, CSS</span>
            <div className="bar">
              <div className="bar-fill w-70"></div>
            </div>
          </div>

          <div className="skill-block">
            <span className="skill-name">React</span>
            <div className="bar">
              <div className="bar-fill w-55"></div>
            </div>
          </div>

          <div className="skill-block">
            <span className="skill-name">
              Java, JavaScript, SQL, Django, Flask
            </span>
            <div className="bar">
              <div className="bar-fill w-35"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
