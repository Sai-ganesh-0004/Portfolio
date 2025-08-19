import { useState, useEffect } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Projects.css";

const Projects = () => {
  const scrollRef = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Crime Data Analysis & SafeCommute Web Application",
      shortDescription: "Full-stack web app analyzing Indian crime data with interactive safety mapping",
      description:
        "A comprehensive full-stack web application that analyzes Indian district-wise crime data to calculate safety scores and display them on an interactive map. Users can search, use live location, or pin districts to view safety ratings (Risky, Moderate, Very Safe) with visual highlights. The project integrates machine learning for crime trend prediction using time series analysis and generates category-wise crime heatmaps. Built with React + Vite frontend and Node.js + Express backend, offering a clean, responsive, and data-driven safety assistant.",
      technologies: ["React", "Vite", "Node.js", "Express", "Machine Learning", "Time Series Analysis", "Interactive Maps"],
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg",
      github: "https://github.com",
      demo: "https://demo-link.com",
      category: "Full Stack",
      status: "Completed",
      features: [
        "Interactive Crime Map",
        "Safety Score Calculation",
        "ML Crime Prediction",
        "Live Location Search",
        "District Pinning",
        "Category-wise Heatmaps"
      ],
    },
    {
      id: 2,
      title: "BiteBeacon",
      shortDescription: "Scalable food truck tracking platform with real-time location services",
      description:
        "Built a scalable full-stack web application using React (Vite), Node.js, Express, and MongoDB Atlas featuring multi-role dashboards and real-time food truck tracking via Google Maps API. Developed 10+ secure RESTful APIs with JWT authentication and role-based access control (RBAC), enabling full CRUD operations across services. Integrated geolocation, filtering, and responsive UI to display 20+ trucks with <200ms latency across web and mobile platforms.",
      technologies: ["React", "Vite", "Node.js", "Express", "MongoDB Atlas", "Google Maps API", "JWT", "RBAC"],
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
      github: "https://github.com",
      demo: "https://demo-link.com",
      category: "Full Stack",
      status: "Completed",
      features: [
        "Text-to-Image Generation",
        "Style Transfer",
        "Batch Processing",
        "Custom Parameters",
        "API Integration",
      ],
    },
    {
      id: 3,
      title: "Task Management App",
      shortDescription: "Collaborative productivity platform for teams",
      description:
        "A sophisticated task management application designed for modern teams, featuring real-time collaboration, advanced project tracking, customizable workflows, time tracking, team analytics, file sharing capabilities, and seamless integration with popular productivity tools. The platform supports multiple project views including Kanban boards, Gantt charts, and calendar views.",
      technologies: [
        "React",
        "Firebase",
        "Material UI",
        "Redux",
        "Node.js",
        "Socket.io",
      ],
      image:
        "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
      github: "https://github.com",
      demo: "https://demo-link.com",
      category: "Web App",
      status: "Completed",
      features: [
        "Multi-role Dashboards",
        "Real-time Tracking",
        "Google Maps Integration",
        "10+ RESTful APIs",
        "JWT Authentication",
        "RBAC System"
      ],
    },
    {
      id: 3,
      title: "AeroSynapse",
      shortDescription: "ML-powered flight delay prediction system with 84% accuracy",
      description:
        "Developed a comprehensive full-stack Flight Delay Prediction Web Application using React, Node.js, and Machine Learning, achieving 84% accuracy on a dataset of over 100,000 records. Integrated the ML model via REST API with real-time form inputs and responsive UI for both desktop and mobile platforms. Engineered an end-to-end data pipeline including preprocessing, encoding, and training using RandomForest on 5+ features from live airport datasets. Optimized deployment with joblib for model and transformer persistence.",
      technologies: ["React", "Node.js", "Machine Learning", "RandomForest", "joblib", "REST API", "Data Pipeline"],
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg",
      github: "https://github.com",
      demo: "https://demo-link.com",
      category: "AI/ML",
      status: "Completed",
      features: [
        "84% Prediction Accuracy",
        "100,000+ Records Dataset",
        "Real-time Predictions",
        "End-to-end Pipeline",
        "RandomForest Model",
        "Optimized Deployment"
      ],
    },
    {
      id: 4,
      title: "AcciScope",
      shortDescription: "AWS-powered US accident analysis platform with 1.5M+ records",
      description:
        "Comprehensive accident analysis project that processes the US Accident dataset containing 1.5M+ records using AWS services to uncover accident trends and risk factors. Data is efficiently stored in Amazon S3, processed with AWS Glue and Lambda, and loaded into Redshift for scalable querying. Provides insights including accident severity by time, weather conditions, seasonal patterns, and state-level hotspots. Features interactive dashboards in Amazon QuickSight with clear visualizations for data-driven decision-making.",
      technologies: ["AWS S3", "AWS Glue", "AWS Lambda", "Amazon Redshift", "Amazon QuickSight", "Data Analytics"],
      image: "https://images.pexels.com/photos/7405074/pexels-photo-7405074.jpeg",
      github: "https://github.com",
      demo: "https://demo-link.com",
      category: "Data Analytics",
      status: "Completed",
      features: [
        "1.5M+ Records Processing",
        "AWS Cloud Architecture",
        "Real-time Analytics",
        "Interactive Dashboards",
        "Trend Analysis",
        "State-level Hotspots"
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  return (
    <section id="projects" className="section projects-section" ref={scrollRef}>
      <div className="projects-header">
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-subtitle reveal">
          Showcasing innovative solutions and technical expertise across diverse
          domains
        </p>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="card-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <div className="image-overlay">
                  <div className="project-category">{project.category}</div>
                  <div className="project-status">
                    <span
                      className={`status-dot ${project.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    ></span>
                    {project.status}
                  </div>
                </div>
                <div className="hover-overlay">
                  <div className="hover-content">
                    <div className="tech-preview">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <button className="view-details-btn">
                      <span>View Details</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 7h10v10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.shortDescription}
                </p>

                <div className="project-footer">
                  <div className="tech-count">
                    <span>{project.technologies.length} Technologies</span>
                  </div>
                  <div className="project-actions">
                    <button
                      className="action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </button>
                    <button
                      className="action-btn primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, "_blank");
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className={`modal-overlay ${isModalOpen ? "active" : ""}`}
          onClick={closeModal}
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-image-overlay">
                  <div className="modal-badges">
                    <span className="modal-category">
                      {selectedProject.category}
                    </span>
                    <span
                      className={`modal-status ${selectedProject.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      <span className="status-indicator"></span>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-details">
                <div className="modal-header">
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-description">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="modal-features">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-button secondary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-button primary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
