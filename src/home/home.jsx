import React from "react";

import Nav from "../components/nav/nav.jsx";
import Banner from "../components/banner/banner.jsx";
import Proj from "../components/projects/proj.jsx";
import Exp from "../components/experience/exp.jsx";
import Skill from "../components/Skills/skill.jsx";
import Footer from "../components/footer/footer.jsx";
import "../assets/styles/global.css";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Proj />
      <Exp />

      <div className="hover-glass">
        <Skill />
      </div>

      <Footer />
    </>
  );
};

export default Home;