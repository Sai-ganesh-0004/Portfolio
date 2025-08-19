import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Experience.css";

const Experience = () => {
  const scrollRef = useScrollAnimation();

  const experiences = [
    {
      id: 1,
      role: "Team Lead",
      company: "Bluestock Fintech",
      companyLogo: "🏦",
      period: "Jan 2024 - Aug 2024",
      location: "Remote",
      type: "Full-time",
      description:
        "Led backend and database development for a production-grade IPO web application using Django, Django REST Framework, and PostgreSQL, delivering 15+ API endpoints to serve real-time IPO data across Bluestock and client platforms.",
      achievements: [
        "Delivered 15+ API endpoints for real-time IPO data serving",
        "Designed scalable relational schemas for company, IPO, and document modules",
        "Implemented secure CRUD operations improving data access speed by 40%",
        "Enabled multi-platform integration across Bluestock and client platforms",
        "Led backend development team for production-grade application",
      ],
      skills: ["Django", "PostgreSQL", "REST API", "Python", "Database Design", "Team Leadership"],
      current: true,
    },
    {
      id: 2,
      role: "Data Engineering Virtual Intern",
      company: "AICTE AWS Program",
      companyLogo: "☁️",
      period: "Jun 2023 - Sep 2023",
      location: "Virtual",
      type: "Internship",
      description:
        "Completed comprehensive data engineering virtual internship focusing on AWS cloud services and big data processing. Developed and implemented traffic data analysis systems using modern data engineering practices.",
      achievements: [
        "Developed comprehensive Traffic Data Analysis system",
        "Implemented data pipelines using AWS services",
        "Processed and analyzed large-scale traffic datasets",
        "Created automated data processing workflows",
        "Gained expertise in cloud-based data engineering solutions",
      ],
      skills: ["AWS", "Data Engineering", "Python", "Data Analysis", "Big Data", "Traffic Analytics"],
      current: false,
    },
    {
      id: 3,
      role: "AI/ML Virtual Intern",
      company: "AICTE AWS Program",
      companyLogo: "🤖",
      period: "Mar 2023 - Jun 2023",
      location: "Virtual",
      type: "Internship",
      description:
        "Participated in AI/ML virtual internship program focusing on machine learning and artificial intelligence applications. Developed speech-to-text conversion systems supporting multiple languages.",
      achievements: [
        "Developed Speech-to-Text conversion system for multiple languages",
        "Implemented natural language processing algorithms",
        "Built multilingual voice recognition capabilities",
        "Optimized model performance for real-time processing",
        "Gained hands-on experience with AWS AI/ML services",
      ],
      skills: ["Machine Learning", "NLP", "Speech Recognition", "Python", "AWS AI/ML", "TensorFlow"],
      current: false,
    },
  ];

  return (
    <section
      id="experience"
      className="section experience-section"
      ref={scrollRef}
    >
      <div className="experience-header">
        <h2 className="section-title reveal">Professional Experience</h2>
        <p className="section-subtitle reveal">
          A journey through my professional growth and achievements
        </p>
      </div>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`experience-card reveal ${exp.current ? "current" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {exp.current && (
              <div className="current-badge">
                <span className="badge-dot"></span>
                Currently Working
              </div>
            )}

            <div className="card-header">
              <div className="company-info">
                <div className="company-logo">{exp.companyLogo}</div>
                <div className="company-details">
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="company-name">{exp.company}</div>
                </div>
              </div>

              <div className="job-meta">
                <div className="period">{exp.period}</div>
                <div className="job-details">
                  <span className="location">{exp.location}</span>
                  <span className="separator">•</span>
                  <span className="job-type">{exp.type}</span>
                </div>
              </div>
            </div>

            <div className="card-content">
              <p className="job-description">{exp.description}</p>

              <div className="achievements-section">
                <h4 className="achievements-title">Key Achievements</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skills-section">
                <h4 className="skills-title">Technologies & Skills</h4>
                <div className="skills-grid">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="experience-duration">
                {exp.current
                  ? "Ongoing Experience"
                  : `${Math.ceil(Math.random() * 24)} months experience`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-stats reveal">
        <div className="stat-item">
          <div className="stat-number">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">Technologies Mastered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
