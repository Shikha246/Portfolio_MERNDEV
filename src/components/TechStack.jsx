import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaReact />, name: "Context API" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];
function TechStack() {
  return (
    <section className="container py-5">
      <h2 className="section-title">Tech Stack</h2>

      <div className="row mt-5">

        {skills.map((skill, index) => (
          <div
            className="col-md-3 col-6 mb-4"
            key={index}
          >
            <div className="skill-box">
              <span>{skill.icon}</span>
              <p>{skill.name}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default TechStack;