import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== isScrolled) {
        setIsScrolled(isTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const navbarClasses = ["navbar", "navbar-expand-md", "navbar-dark"];
  if (isScrolled) {
    navbarClasses.push("navbar-custom");
  } else {
    navbarClasses.push("top-nav-collapse");
  }

  return (
    <header>
      {/* Preloader */}
      {/* <div className="spinner-wrapper">
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </div> */}
      {/* end of preloader */}


      {/* Navbar */}
      <nav className={`navbar navbar-expand-md navbar-dark navbar-custom fixed-top ${navbarClasses.join(" ")}`}>
        {/* Text Logo - Use this if you don't have a graphic logo */}
        {/* <a className="navbar-brand logo-text page-scroll" href="index.html">Aria</a> */}

        {/* Image Logo */}
        <a className="navbar-brand logo-image" href="#header"><img src="./images/logo.svg" alt="alternative" /></a>

        {/* Mobile Menu Toggle Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        {/* end of mobile menu toggle button */}

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#intro">INTRO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#places">Find Places</a>
            </li>

            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">CONTACT</a>
            </li>
          </ul>
          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon"></span>
                <i className="fab fa-stack-1x">TH</i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <span className="hexagon"></span>
                <i className="fab fa-stack-1x">EN</i>
              </a>
            </span>
          </span>
        </div>
      </nav> {/* end of navbar */}
      {/* end of navbar */}
      
    </header>
  );
}

export default Header;
