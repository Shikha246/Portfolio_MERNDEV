import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import crmImg from "../images/crm.png";
import taskForgeImg from "../images/taskForge.png";
import bookStoreImg from "../images/bookstore.png";
const projects = [
  {
    title: "LeadFlow CRM",
    image: crmImg,
    description:
      "Full stack CRM with lead management and analytics.",
    techStack: [
      "React",
      "Context API",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "React Toastify",
      "React Charts",
    ],
    liveLink: "https://lead-flow-crm-frontend-main.vercel.app/",
    gitHubRepo: "https://github.com/Shikha246/LeadFlow-CRM-frontend.git",
  },

  {
    title: "TaskForge",
    image: taskForgeImg,
    description:
      "Task management platform inspired by Asana.",
    techStack: [
      "React",
      "Context API",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    liveLink: "https://fe-anvaya-crm.vercel.app/",
    gitHubRepo: "https://github.com/Shikha246/FE_AnvayaCRM",
  },

  {
    title: "E-Commerce",
    image: bookStoreImg,
    description:
      "Modern Bookstore shopping platform.",
    techStack: [
      "React",
      "Context API",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "React Toastify",
      "JWT"
    ],
    liveLink: "https://ecommerce-mern-fe-2026.vercel.app/",
    gitHubRepo: "https://github.com/Shikha246/Ecommerce-MERN-FE-2026.git",
  },
];

function Projects() {
  return (
    <section className="container py-5">
      <h2 className="section-title">Projects</h2>

      <div className="row mt-5">

        {projects.map((project, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="project-card py-4"
            >
              <img
                src={project.image}
                alt=""
                className="project-img"
              />

              <div className="p-3">
                <h5>{project.title}</h5>

                <p>{project.description}</p>

<div className="tech-stack mt-3">
  {project.techStack.map((tech, idx) => (
    <span key={idx} className="tech-badge">
      {tech}
    </span>
  ))}
</div>

                <div className="d-flex gap-3">

                  <a target="_blank" href={project.liveLink}>
                    <FaExternalLinkAlt />
                  </a>

                  <a target="_blank" href={project.gitHubRepo}>
                    <FaGithub />
                  </a>

                </div>
              </div>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;