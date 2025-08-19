import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const scrollRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // EmailJS configuration
      const serviceId = 'service_your_service_id'; // Replace with your EmailJS service ID
      const templateId = 'template_your_template_id'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key

      // Email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: '20saiganesh04@gmail.com', // Your email address
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset the submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setError("Failed to send message. Please try again or contact directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "20saiganesh04@gmail.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Visakapatanam, India",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 8208244717",
    },
  ];

  return (
    <section id="contact" className="section contact-section" ref={scrollRef}>
      <h2 className="section-title reveal">Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info reveal">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me through any of these channels:</p>

          <div className="info-items">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="info-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <h4>{info.label}</h4>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="social-link github"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-form-container reveal delay-200">
          <div className="form-header">
            <h3>Send Me a Message</h3>
            <p>I'll get back to you as soon as possible.</p>
          </div>

          {error && (
            <div className="form-error">
              <div className="error-icon">❌</div>
              <p>{error}</p>
            </div>
          )}

          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✅</div>
              <h3>Thank You!</h3>
              <p>
                Your message has been sent successfully. I'll get back to you
                soon!
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <span className="btn-arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
