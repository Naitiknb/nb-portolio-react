import React from 'react'
import Nav from "../components/nav/nav.jsx"
import Banner from '../components/banner/banner.jsx'
import Proj from '../components/projects/proj.jsx'
import Exp from "../components/experience/exp.jsx"
import Skill from '../components/Skills/skill.jsx'
import Story from '../components/mystory/story.jsx'
import Footer from '../components/footer/footer.jsx'


const home = () => {
  return (
  <>
  <React.StrictMode>
    <Nav />
    <Banner />
    <Proj />
    <Exp />
    <Skill />
    <Story />
    <Footer />
    </React.StrictMode>
    </>
  )
}

export default home