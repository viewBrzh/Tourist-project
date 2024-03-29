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
      <nav
        className={`navbar navbar-expand-md navbar-dark navbar-custom fixed-top ${navbarClasses.join(
          " "
        )}`}
      >
        <Link className="navbar-brand logo-image" to="/">
          <img src="../images/logo.png" alt="alternative" />
        </Link>

        <button
          type="button"
          className="navbar-toggler ms-auto me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link" style={{ textDecoration: "none" }}>
                HOME <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/manage" className="nav-link">
                MANAGE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
