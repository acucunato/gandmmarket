import React, { useState, useEffect } from "react";

//Navigation

function Nav() {
  const [header, setHeader] = useState("nav");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("nav");
    } else if (window.scrollY > 100) {
      return setHeader("nav2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={header}>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            G&M Market
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#menu-dropdown"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#deli">
                    Deli
                  </a>
                  <a className="dropdown-item" href="#meats">
                    Meats
                  </a>
                  <a className="dropdown-item" href="#italianspecialities">
                    Italian Specialities
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
