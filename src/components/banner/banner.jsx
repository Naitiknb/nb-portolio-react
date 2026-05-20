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
    <div className='banner-wrapper'>
      <div className='container'>
        <div className='row align-items-center min-vh-100'>

          {/* LEFT SIDE */}
          <div className='banner-txt col-12 col-md-6 py-5'>

            <h1 id='ban'>
              Hello, I'm <br />
              <span className='name-text'>Naitik</span>
            </h1>

            <div className='mt-2'>
              <span id='web'>
                Web {text}
              </span>
            </div>

            <p className='banner-desc mt-4'>
              Hi there! I'm <span id='text'>Naitik Bohra</span>, a passionate web developer specializing in crafting immersive digital experiences.
              I love building modern, responsive, and user-friendly web applications using React, Next.js, and Node.js.
            </p>

            <div className='d-flex gap-3 mt-4 flex-wrap'>
              <Link to="/about">
                <button type="button" className='hire-me btn'>
                  GET IN TOUCH
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </button>
              </Link>


              <a
                href="/Naitik_Bohra_Resume.pdf"
                download
                className="text-decoration-none"
              >
                <button
                  type="button"
                  className="btn download-btn"
                >
                  Download CV
                  <i className="bi bi-download ms-2"></i>
                </button>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className='col-12 col-md-6 position-relative' id='avatar-h'>

            {/* Glow Effect */}
            <div className='avatar-glow'></div>

            {/* 3D Avatar */}
            <div className='computer-wrapper'>
              <ComputersCanvas />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
