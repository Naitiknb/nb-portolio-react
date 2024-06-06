import React, { useState } from 'react';
import Logo from "../../assets/logo-1.png";
import Github from "../../assets/github-1.svg";
import "../nav/nav.css";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* Left section: Brand logo */}
        <div className="d-flex justify-content-start">
          <a className="navbar-brand" href="#">
            <img className="logo" src={Logo} alt="Logo" width="60" height="60" />
          </a>
        </div>

        <div className="d-md-none d-block">
          <a href="https://github.com/Naitiknb" className="navbar-text">
            <img src={Github} alt="Github" className="github" />
          </a>
        </div>

        {/* Navbar toggler for smaller screens */}
        <button
          className="navbar-toggler text-center"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
          onClick={handleToggle}
        >
          <i className={`bi ${isToggled ? 'bi-x' : 'bi-list'} text-light`} ></i>
        </button>

        {/* Middle section: Navbar links */}
        <div className="collapse navbar-collapse justify-content-center h6" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className='decor' to="/home">
                <p id="nav" className="nav-link text-light text-end fw-bold h4">Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className='decor' to="/project">
                <p id='nav' className="nav-link text-light text-end fw-bold h4">Projects</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className='decor' to="/about">
                <p id='nav' className="nav-link text-light text-end fw-bold h4">Contact Me</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right section: GitHub link */}
        <div className="d-md-block d-none">
          <a href="https://github.com/Naitiknb" className="navbar-text">
            <img src={Github} alt="Github" className="github" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
