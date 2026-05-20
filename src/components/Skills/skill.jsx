import "../Skills/skill.css";
import Html from "../../assets/technologies/html.png";
import Css from "../../assets/technologies/css.png";
import Js from "../../assets/technologies/javascript.png";
import React from "../../assets/technologies/react.png";
import Bootstrap from "../../assets/technologies/bootstrap.png";
import Tailwind from "../../assets/technologies/tailwind.png";
import Node from "../../assets/technologies/node.png";
import Express from "../../assets/technologies/express.png";
import Firebase from "../../assets/technologies/firebase.png";
import Sql from "../../assets/technologies/sql.png";
import Git from "../../assets/technologies/git.png";
import Php from "../../assets/technologies/php.png";
import Next from "../../assets/technologies/nextjs.png";
import Ts from "../../assets/technologies/typescript.png";
import Figma from "../../assets/technologies/figma.png";
import "../../assets/styles/global.css";

const technologies = [
  { name: "HTML", image: Html },
  { name: "CSS", image: Css },
  { name: "JavaScript", image: Js },
  { name: "TypeScript", image: Ts },
  { name: "React JS", image: React },
  { name: "Next.js", image: Next },
  { name: "Node JS", image: Node },
  { name: "Express JS", image: Express },
  { name: "SQL", image: Sql },
  { name: "Firebase", image: Firebase },
  { name: "Git", image: Git },
  { name: "Tailwind CSS", image: Tailwind },
  { name: "Bootstrap", image: Bootstrap },
  { name: "PHP", image: Php },
  { name: "Figma", image: Figma },
];


export default function Skills() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="mb-5 text-start">
        <h1 className="fw-bold display-4">
          Technologies & Tools<span style={{ color: "#770df0" }}>.</span>
        </h1>

        <p className="text-secondary fs-5">
          Building responsive, scalable web applications and modern websites using cutting-edge technologies and tools.
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {technologies.map((tech, index) => (
          <div className="col-custom" key={index}>
            <div className="tech-card hover-glass">
              <img src={tech.image} alt={tech.name} />
              <h6>{tech.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
