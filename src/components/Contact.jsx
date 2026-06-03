import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="container py-5">
      <h2 className="section-title">Connect</h2>

      <div className="row mt-4">

        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href="mailto:ramrakhyani.shikha@gmail.com"
            className="contact-card text-decoration-none text-white d-block h-100"
          >
            <FaEnvelope />
            <h5 className="mt-3">Email</h5>
            <p>ramrakhyani.shikha@gmail.com</p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href="https://github.com/Shikha246"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card text-decoration-none text-white d-block h-100"
          >
            <FaGithub />
            <h5 className="mt-3">GitHub</h5>
            <p>github.com/Shikha246</p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <a
            href="https://linkedin.com/in/shikha-ramrakhyani-9a5a2654/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card text-decoration-none text-white d-block h-100"
          >
            <FaLinkedin />
            <h5 className="mt-3">LinkedIn</h5>
            <p>linkedin.com/in/shikha-ramrakhyani-9a5a2654/</p>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;