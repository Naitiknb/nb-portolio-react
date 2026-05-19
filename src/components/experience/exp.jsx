import React from "react";
import "../experience/exp.css";
import Ace360 from "../../assets/ace360.svg";
import NuWebWavetechnologies from "../../assets/images/nuwebwave.png";
import Vkart from "../../assets/images/vkart.png";

const experienceData = [
  {
    id: 1,
    company: "Ace-360",
    logo: Ace360,
    role: "Front-end Developer",
    duration: "Feb 2024 - March 2024",
    desc: [
      "Built UI using HTML, CSS, JavaScript, Bootstrap, jQuery, WordPress.",
      "Focused on responsive design and cross-browser compatibility.",
    ],
  },
  {
    id: 2,
    company: "NuWebWavetechnologies",
    logo: NuWebWavetechnologies,
    role: "Front-end Developer",
    duration: "Sep 2024 - March 2025",
    desc: [
      "Worked on modern UI development and API integration.",
      "Improved performance and user experience of web apps.",
    ],
  },
  {
    id: 3,
    company: "Vkart Info Solutions",
    logo: Vkart,
    role: "Next JS Developer",
    duration: "April 2025 - Present",
    desc: [
      "Developed scalable React/Next.js applications.",
      "Built reusable components and optimized performance.",
    ],
  },
];

const Exp = () => {
  return (
    <div className="container my-5 timeline">
      <h1>
        Experience<span style={{ color: "#770df0", fontSize: "70px" }}>.</span>
      </h1>

      <div className="timeline-line"></div>

      {experienceData.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            className={`timeline-item ${isLeft ? "left" : "right"}`}
            key={item.id}
          >
            {/* LEFT → DATE */}
            <div className="timeline-left-date">
              <span>{item.duration}</span>
            </div>

            {/* CENTER DOT */}
            <div className="timeline-dot"></div>

            {/* RIGHT → CARD */}
            <div className="timeline-right-content">
              <div className="exp-card">

                <div className="company-header">
                  <img src={item.logo} alt={item.company} />
                  <div>
                    <h4>{item.company}</h4>
                    <h5>{item.role}</h5>
                  </div>
                </div>

                <ul>
                  {item.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Exp;