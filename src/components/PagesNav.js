import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <Link to="/" style={{ color: "white" }}>
              G&M Market
            </Link>
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive"></div>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#menu-dropdown"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "white" }}
            >
              Menu
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/deli">
                <a className="dropdown-item" href="#deli">
                  Deli
                </a>
              </Link>
              <Link to="/butcher">
                <a className="dropdown-item" href="#meats">
                  Meats
                </a>
              </Link>
              <Link to="/italian-specialities">
                <a className="dropdown-item" href="#italianspecialities">
                  Italian Specialities
                </a>
              </Link>
            </div>
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
