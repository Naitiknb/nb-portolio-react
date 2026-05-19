import React from "react";
import Nav from "../components/nav/nav.jsx";
import Footer from "../../src/components/footer/footer.jsx";
import Matm from "@/assets/images/projectImages/mAtm.png";
import Mos from "@/assets/images/projectImages/mos.png";
import Rentkaro from "@/assets/images/projectImages/rentkaro.png";
import Royaldivine from "@/assets/images/projectImages/royalDivine.png";
import Labhsteel from "@/assets/images/projectImages/labhSteel.png";
import chetanEnterprises from "@/assets/images/projectImages/chetanEnterprises.png";
import OrgoneNx from "@/assets/images/projectImages/orgoneNx.png";

import "../projects/project.css";
import "@/assets/styles/global.css";

const projectData = [
  {
    id: 1,
    title: "Micro ATM Landing Page",
    image: Matm,
    description: "A responsive fintech landing page for Micro ATM services.",
    tech: ["React", "Bootstrap", "CSS"],
    live: "https://mos-world.com/services/micro-atm",
    code: "#",
  },
  {
    id: 2,
    title: "IRCTC Landing Page",
    image: Mos,
    description: "Travel booking landing page with modern UI design.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://mos-world.com/services/irctc",
    code: "#",
  },
  {
    id: 3,
    title: "Rent Karo",
    image: Rentkaro,
    description: "Rental platform UI for booking properties easily.",
    tech: ["React", "Netlify"],
    live: "https://rent-karo.netlify.app/",
    code: "https://github.com/Naitiknb/rent-karo-.git",
  },
  {
    id: 4,
    title: "Royal Divine Products",
    image: Royaldivine,
    description: "Travel booking landing page with modern UI design.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://www.royaldivineproducts.com/",
    code: "#",
  },
  {
    id: 5,
    title: "Labhsteel",
    image: Labhsteel,
    description: "Rental platform UI for booking properties easily.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://www.labhsteel.com/",
    code: "#",
  },
  {
    id: 6,
    title: "Chetan Enterprises",
    image: chetanEnterprises,
    description: "Rental platform UI for booking properties easily.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://chetanenterprises.in/",
    code: "",
  },
  {
    id: 7,
    title: "OrgoneNx",
    image: OrgoneNx,
    description: "Rental platform UI for booking properties easily.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://uat-ops-admin.orgonenx.com",
    code: "", // 👈 FIXED (no fake link)
  },
];

const Project = () => {
  return (
    <>
      <Nav />

      <div className="container my-5">
        <h1>
          My <span style={{ color: "#770df0" }}>Best</span> Creations
        </h1>

        <h5 className="mb-5">
          Designing and Developing Robust and Stylish Web Applications
        </h5>

        <div className="row g-4">
          {projectData.map((project) => (
            <div className="col-md-4" key={project.id}>
              <div className="project-card">

                <img src={project.image} alt={project.title} />

                <div className="project-body">
                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <div className="d-flex gap-2 flex-wrap">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-dark text-light rounded px-2 py-1 small"
                        style={{ fontSize: "11px", lineHeight: "1" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="buttons">

                    <a href={project.live} target="_blank" rel="noreferrer">
                      <button>
                        <i className="bi bi-box-arrow-in-up-right"></i> Live Demo
                      </button>
                    </a>

                    {/* ✅ FIX: show only if real code exists */}
                    {project.code && project.code !== "#" && (
                      <a href={project.code} target="_blank" rel="noreferrer">
                        <button className="outline">
                          <i className="bi bi-github"></i> View Code
                        </button>
                      </a>
                    )}

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <h2 className="text-center mt-5">More Coming Soon...</h2>
      </div>

      <Footer />
    </>
  );
};

export default Project;