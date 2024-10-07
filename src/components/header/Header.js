import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import {
  achievementSection,
  bigProjects,
  blogSection,
  greeting,
  openSource,
  talkSection,
  workExperiences
} from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
  const projects = bigProjects.showBigProjects;
  const achievements = achievementSection.showAchievements;
  const blogs = blogSection.showBlogs;
  const talks = talkSection.showTalks;

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href="#logo" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            {exp === true &&
              <li>
                <a href="#experience">Experiencia</a>
              </li>
            }
            {
              openSource.showGithubProfile === "true" &&
              <li>
                <a href="#opensource">GitHub</a>
              </li>
            }
            {projects === true &&
              <li>
                <a href="#projects">Projects</a>
              </li>
            }
            {
              achievements === true &&
              <li>
                <a href="#achievements">Achievements</a>
              </li>
            }
            {
              blogs === true &&
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            }
            {talks === true &&
              <li>
                <a href="#talks">Talks</a>
              </li>
            }
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default Header;
