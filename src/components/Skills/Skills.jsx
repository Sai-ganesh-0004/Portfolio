import { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const skills = [
    {
      name: "C++",
      type: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg",
    },
    {
      name: "Java",
      type: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg",
    },
    {
      name: "Python",
      type: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
    },
    {
      name: "C",
      type: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
    },
    {
      name: "PHP",
      type: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
    },
    {
      name: "JavaScript",
      type: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      name: "SQL",
      type: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
    {
      name: "HTML",
      type: "Web",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    },
    {
      name: "CSS",
      type: "Web",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      name: "Node JS",
      type: "Web",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    },
    {
      name: "Express.js",
      type: "Web",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    },
    {
      name: "MySQL",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    },
    {
      name: "Git",
      type: "Tool",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      name: "GitHub",
      type: "Tool",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Vscode",
      type: "Tool",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg",
    },
    {
      name: "Postman",
      type: "Tool",
      logo: "https://cdn.worldvectorlogo.com/logos/postman.svg",
    },
    {
      name: "Power Bi",
      type: "Tool",
      logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg",
    },
    {
      name: "AWS",
      type: "Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  const skillTypes = ["All", ...new Set(skills.map((skill) => skill.type))];

  const filteredSkills =
    filter === "All" ? skills : skills.filter((skill) => skill.type === filter);

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-filter">
        {skillTypes.map((type) => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="skills-grid-wrapper">
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ "--i": index }}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-type">{skill.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
