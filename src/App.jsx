import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./context/ThemeContext";
import "./styles/App.css";

function App() {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        className={`app ${theme} ${isLoaded ? "app-loaded" : "app-loading"}`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
