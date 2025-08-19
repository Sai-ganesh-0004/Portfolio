import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Hero.css";

const titles = [
  "Software Developer",
  "Data Science & ML Engineer",
  "Full Stack Developer",
];

const Hero = () => {
  const scrollRef = useScrollAnimation();
  const [displayText, setDisplayText] = useState("");
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = titles[currentTitle];

    const handleTyping = () => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return fullText.substring(0, prev.length - 1);
        } else {
          return fullText.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }

      setTypingSpeed(isDeleting ? 50 : 100);
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle, typingSpeed]);

  return (
    <section id="hero" className="hero-section" ref={scrollRef}>
      <div className="hero-background" />

      <div className="hero-content reveal">
        <div className="profile-side">
          <div className="profile-image">
            <div className="floating-card">
              <img
                src="/WhatsApp Image 2025-08-19 at 09.01.08_060872a1.jpg"
                alt="Sai Ganesh - Software Developer"
                className="animated-profile"
              />
            </div>
            <div className="profile-caption">
              Aspiring Innovator & Lifelong Learner
            </div>
          </div>
        </div>

        <div className="text-side">
          <div className="hero-text">
            <h1 className="intro-text">Hi, I'm</h1>
            <h1 className="name-text delay-100">SAI GANESH</h1>

            <div className="title-slider delay-200">
              <span className="typewriter">{displayText}</span>
            </div>

            <p className="hero-quote delay-300">
              "Turning ideas into elegant solutions through code."
            </p>

            <div className="hero-buttons delay-400">
              <a
                href="/resumeamz__2_.pdf"
                className="btn btn-primary"
                download="Sai_Ganesh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Resume
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-secondary"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator delay-500">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;
