import React, { useState } from "react";
import Nav from "../components/nav/nav.jsx";
import Footer from "../../src/components/footer/footer.jsx";

import Matm from "@/assets/images/projectImages/mAtm.png";
import Mos from "@/assets/images/projectImages/mos.png";
import Rentkaro from "@/assets/images/projectImages/rentkaro.png";
import Royaldivine from "@/assets/images/projectImages/royalDivine.png";
import Labhsteel from "@/assets/images/projectImages/labhSteel.png";
import chetanEnterprises from "@/assets/images/projectImages/chetanEnterprises.png";
import OrgoneNx from "@/assets/images/projectImages/orgoneNx.png";
import Portfolio from "@/assets/images/projectImages/portfolio.png";

import "../projects/project.css";
import "@/assets/styles/global.css";

const projectData = [
  {
    id: 1,
    title: "Micro ATM Landing Page",
    image: Matm,
    description:
      "Responsive fintech landing page for Micro ATM services with modern UI and optimized performance.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "PHP"],
    live: "https://mos-world.com/services/micro-atm",
    code: "#",
  },
  {
    id: 2,
    title: "IRCTC Landing Page",
    image: Mos,
    description:
      "Travel booking landing page with responsive design and smooth user experience.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "PHP"],
    live: "https://mos-world.com/services/irctc",
    code: "#",
  },
  {
    id: 3,
    title: "Rent Karo",
    image: Rentkaro,
    description:
      "Full-stack rental platform with authentication, CRUD operations, and RESTful APIs.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://rent-karo.netlify.app/",
    code: "https://github.com/Naitiknb/rent-karo-.git",
  },
  {
    id: 4,
    title: "Royal Divine Products",
    image: Royaldivine,
    description:
      "Business product website with responsive design and SEO optimization.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
    live: "https://www.royaldivineproducts.com/",
    code: "#",
  },
  {
    id: 5,
    title: "Labhsteel",
    image: Labhsteel,
    description:
      "Corporate business website focused on responsive UI and performance optimization.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
    live: "https://www.labhsteel.com/",
    code: "#",
  },
  {
    id: 6,
    title: "Chetan Enterprises",
    image: chetanEnterprises,
    description:
      "Responsive business website with secure PHP Mailer contact form and SEO improvements.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
    live: "https://chetanenterprises.in/",
    code: "",
  },
  {
    id: 7,
    title: "OrgoneNx Dashboard",
    image: OrgoneNx,
    description:
      "Admin dashboard interface with dynamic modules and responsive layouts.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Node JS", "PostgreSQL"],
    live: "https://uat-ops-admin.orgonenx.com",
    code: "",
  },
  {
    id: 8,
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "Personal portfolio website showcasing projects, skills, and experience with interactive UI.",
    tech: ["React.js", "Tailwind CSS", "Three.js", "Firebase"],
    live: "https://naitiknb6-portfolio.netlify.app",
    code: "https://github.com/Naitiknb",
  },
];

const Project = ({ limit, showLayout = true }) => {
  const [selectedTech, setSelectedTech] = useState("All");

  // Unique Technologies
  const allTechs = [
    "All",
    ...new Set(projectData.flatMap((project) => project.tech)),
  ];


  const filteredProjects =
    selectedTech === "All"
      ? projectData
      : projectData.filter((project) =>
        project.tech.includes(selectedTech)
      );

  // Show limited cards if limit prop exists
  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <>
      {showLayout && <Nav />}

      <div className="container my-5">
        {/* Heading */}
        <div className="mb-5">
          <h1 className="fw-bold text-start">
            My <span style={{ color: "#770df0" }}>Best</span> Creations
            <span
              style={{
                color: "#770df0",
                fontSize: "70px",
                lineHeight: "0",
              }}
            >
              .
            </span>
          </h1>

          <h5 className="mt-3 text-white">
            Explore my web development projects showcasing skills in
            React.js, Next.js, Node.js, MongoDB, and responsive UI design.
          </h5>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap gap-2 mb-5">
          {allTechs.map((tech, i) => (
            <button
              key={i}
              onClick={() => setSelectedTech(tech)}
              className="px-3 py-2 rounded-pill border-0"
              style={{
                backgroundColor:
                  selectedTech === tech ? "#770df0" : "#f1f1f1",
                color: selectedTech === tech ? "#fff" : "#000",
                fontSize: "13px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "0.3s ease",
              }}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="row g-4">
          {displayedProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="project-card h-100 shadow-sm rounded-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-100"
                />

                <div className="project-body p-2">
                  <h4 className="fw-bold">{project.title}</h4>

                  <p className="text-white small">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-pill text-white"
                        style={{
                          backgroundColor: "#1e1e1e",
                          fontSize: "11px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-2 flex-wrap">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className="border-0 px-3 py-2 rounded-pill text-white"
                        style={{
                          backgroundColor: "#770df0",
                          fontSize: "13px",
                        }}
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i>
                        Live Demo
                      </button>
                    </a>

                    {project.code && project.code !== "#" && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          className="px-3 py-2 rounded-pill"
                          style={{
                            border: "1px solid white",
                            background: "transparent",
                            color: "white",
                            fontSize: "13px",
                          }}
                        >
                          <i className="bi bi-github me-1"></i>
                          View Code
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        {showLayout && (
          <div className="text-center mt-5">
            <h3 style={{ color: "#770df0" }}>
              More Projects Coming Soon 🚀
            </h3>
          </div>
        )}
      </div>

      {showLayout && <Footer />}
    </>
  );
};

export default Project;
