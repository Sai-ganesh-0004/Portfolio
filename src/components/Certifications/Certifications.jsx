import { useState, useRef } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Certifications.css";

const Certifications = () => {
  const scrollRef = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  const certifications = [
    {
      id: 1,
      title: "AWS AI ML",
      issuer: "Amazon Web Services",
      date: "June 2025",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      pdfLink: "#",
    },
    {
      id: 2,
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM | Coursera",
      date: "March 2024",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      pdfLink: "#",
    },
    {
      id: 3,
      title: "Python for Data Science, AI and Development",
      issuer: "IBM | Coursera",
      date: "February 2024",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      pdfLink: "#",
    },
    {
      id: 4,
      title: "Data Engineering Virtual Internship",
      issuer: "AWS | AICTE",
      date: "June 2024",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      pdfLink: "#",
    },
    {
      id: 5,
      title: "Frontend Web Developer",
      issuer: "Infosys",
      date: "2024",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      pdfLink: "#",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartOffset.current = dragOffset;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - dragStartX.current;
    setDragOffset(dragStartOffset.current + deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (dragOffset > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      dragOffset < -threshold &&
      currentIndex < certifications.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = dragOffset;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - dragStartX.current;
    setDragOffset(dragStartOffset.current + deltaX);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const navigatePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const navigateNext = () => {
    if (currentIndex < certifications.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section
      id="certifications"
      className="section certifications-section"
      ref={scrollRef}
    >
      <h2 className="section-title reveal">Certifications</h2>

      <div className="certifications-container">
        <button
          className={`nav-button nav-button-left ${
            currentIndex === 0 ? "disabled" : ""
          }`}
          onClick={navigatePrevious}
          disabled={currentIndex === 0}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="card-stack-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {certifications.map((cert, index) => {
            const isActive = index === currentIndex;
            const isBehind = index < currentIndex;
            const isAhead = index > currentIndex;
            const distance = Math.abs(index - currentIndex);

            let zIndex = certifications.length - distance;
            let translateX = 0;
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let rotate = 0;

            if (isActive) {
              translateX = dragOffset;
              scale = 1;
              zIndex = certifications.length + 1;
              opacity = 1;
            } else if (isBehind) {
              translateX = -80 - (distance - 1) * 30 + dragOffset * 0.2;
              translateY = distance * 10;
              scale = 1 - distance * 0.08;
              opacity = Math.max(0.3, 1 - distance * 0.2);
              rotate = -4 - distance * 2;
            } else if (isAhead) {
              translateX = 80 + (distance - 1) * 30 + dragOffset * 0.2;
              translateY = distance * 10;
              scale = 1 - distance * 0.08;
              opacity = Math.max(0.3, 1 - distance * 0.2);
              rotate = 4 + distance * 2;
            }

            return (
              <div
                key={cert.id}
                className={`cert-card-stack ${isActive ? "active" : ""} ${
                  isDragging ? "dragging" : ""
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateY(${
                    rotate * 0.5
                  }deg) rotateZ(${rotate}deg)`,
                  zIndex,
                  opacity,
                  transition: isDragging
                    ? "none"
                    : "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  filter: isActive ? "none" : `blur(${distance * 0.3}px)`,
                }}
              >
                <div className="cert-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-overlay"></div>
                </div>

                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <a
                    href={cert.pdfLink}
                    className="cert-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className={`nav-button nav-button-right ${
            currentIndex === certifications.length - 1 ? "disabled" : ""
          }`}
          onClick={navigateNext}
          disabled={currentIndex === certifications.length - 1}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="card-indicators">
        {certifications.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
