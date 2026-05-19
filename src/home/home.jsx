import React, { useEffect, useState } from "react";

import Nav from "../components/nav/nav.jsx";
import Banner from "../components/banner/banner.jsx";
import Proj from "../components/projects/proj.jsx";
import Exp from "../components/experience/exp.jsx";
import Skill from "../components/Skills/skill.jsx";
import Footer from "../components/footer/footer.jsx";
import "../assets/styles/global.css";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e) => {
      if (e.target.closest(".hover-glass")) {
        setActive(true);
      }
    };

    const handleOut = (e) => {
      if (e.target.closest(".hover-glass")) {
        setActive(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${active ? "active" : ""}`}
        style={{ top: position.y, left: position.x }}
      />

      {/* Your Layout */}
      <Nav />
      <Banner />
      <Proj />
      <Exp />

      {/* Add hover-glass support section */}
      <div className="hover-glass">
        <Skill />
      </div>

      <Footer />
    </>
  );
};

export default Home;