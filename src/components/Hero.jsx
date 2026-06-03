import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="container text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-2 fw-bold"
        >
          Shikha Ramrakhyani
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hero-subtitle"
        >
          Full Stack MERN Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="hero-desc mx-auto"
        >
          Passionate developer crafting scalable and modern web applications
          using React, Node.js, Express and MongoDB.
        </motion.p>

        {/* Buttons */}
        <div className="mt-4 d-flex justify-content-center gap-3">

          {/* Contact Button */}
          <a
            href="#contact"
            className="btn btn-success"
          >
            Contact Me
          </a>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_0oRSlLmGWLEIdfCWtdOEZ-3X6_k92z3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            Resume
          </a>

        </div>

        {/* Social Icons */}
        <div className="social-icons mt-4 d-flex justify-content-center gap-4">

          <a
            href="https://github.com/Shikha246"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shikha-ramrakhyani-9a5a2654/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;