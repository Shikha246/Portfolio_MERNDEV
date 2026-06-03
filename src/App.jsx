import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="app">

      <Navbar />

      <section id="about">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <TechStack />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;