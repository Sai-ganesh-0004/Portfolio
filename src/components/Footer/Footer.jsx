import { Link } from 'react-scroll'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="https://via.placeholder.com/40" alt="Logo" className="footer-logo-img" />
          <span className="footer-logo-text">Your Name</span>
        </div>
        
        <div className="footer-links">
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">Home</Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">About</Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">Projects</Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">Contact</Link>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">LinkedIn</a>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {year} Your Name. All rights reserved.</p>
        </div>
      </div>
      
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </footer>
  )
}

export default Footer