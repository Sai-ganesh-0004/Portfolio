import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const scrollRef = useScrollAnimation();

  const aboutData = {
    description:
      "I'm a passionate software developer with a strong foundation in full stack development and data science. I love solving complex problems and building elegant, user-friendly applications. With a keen eye for detail and a commitment to clean, efficient code, I strive to create solutions that make a positive impact.",
    education: "Gayatri Vidya Parishad College of Engineering",
    graduationYear: "2026",
    cgpa: "9.03",
    experience: "3",
    projects: "7+",
    certifications: "5+",
    github: "https://github.com/Sai-ganesh-0004",
    linkedin: "https://www.linkedin.com/in/sai-ganesh0004/",
  };

  return (
    <section id="about" className="section about-section" ref={scrollRef}>
      <h2 className="section-title reveal">About Me</h2>

      <div className="about-content-horizontal">
        {/* Left: About Text + Social Icons */}
        <div className="about-text-wrapper">
          <div className="about-text reveal">
            <p>{aboutData.description}</p>
          </div>
          <div className="social-icons">
            <a
              href={aboutData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={aboutData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="about-stats">
          <div className="stats-grid">
            <div className="stat-card reveal delay-100">
              <div className="stat-icon">🎓</div>
              <h3>Education</h3>
              <p>{aboutData.education}</p>
            </div>
            <div className="stat-card reveal delay-200">
              <div className="stat-icon">📆</div>
              <h3>Graduation</h3>
              <p>{aboutData.graduationYear}</p>
            </div>
            <div className="stat-card reveal delay-300">
              <div className="stat-icon">📊</div>
              <h3>CGPA</h3>
              <p>{aboutData.cgpa}</p>
            </div>
            <div className="stat-card reveal delay-100">
              <div className="stat-icon">💻</div>
              <h3>Experience</h3>
              <p>{aboutData.experience} Years</p>
            </div>
            <div className="stat-card reveal delay-200">
              <div className="stat-icon">📁</div>
              <h3>Projects</h3>
              <p>{aboutData.projects}</p>
            </div>
            <div className="stat-card reveal delay-300">
              <div className="stat-icon">🏆</div>
              <h3>Certifications</h3>
              <p>{aboutData.certifications}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
