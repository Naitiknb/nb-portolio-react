import React from 'react';
import '../../components/banner/banner.css'; 
import { useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import ComputersCanvas from "../canvas/ComputerCanvas";

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className='container '>
      <div className='row '>
        <div className='banner-txt col-xs-12 col-md-6 py-5 mt-5'>
          <h1 id='ban'>Hello, I'm Naitik</h1>
          <span className='col-xs-2' id='web' style={{ color: 'white', fontWeight: 'bold' }}>
            Web {text}
          </span>
          <div className='hire-btn'>
            <Link to="/about">
              <button type="button" className='hire-me mx-3 my-4 btn btn '>GET IN TOUCH</button>
            </Link>
            <p>"Hi there! I'm <span id='text'>Naitik Bohra</span>, a passionate web developer specializing in crafting immersive digital experiences. With a knack for design and a love for coding, I transform ideas into stunning websites that captivate and engage. Let's build something amazing together!"</p>
          </div>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-4' id='avatar-h'>
          <ComputersCanvas />
        </div>
      </div>
    </div>
  );
};

export default Banner;
