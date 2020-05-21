import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import WOW from "wow.js";

//Navigation

function Nav() {
  const [change, setChange] = useState(false);
  const changePosition = 550;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "rgba(0.5, 0.5, 0.5, 0.5)" : "transparent",
    transition: "600ms ease",
    right: 0,
    left: 0,
    top: 0,
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-3 wow fadeIn delay-1s"
        id="mainNav"
        style={style}
      >
        <div className="container">
          <Link to="/">
            <a className="navbar-brand" href="#page-top">
              G&M Market
            </a>
          </Link>
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
                <a className="nav-link" href="#history">
                  Our History
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
