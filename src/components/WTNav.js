import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import WOW from "wow.js";

function Nav() {
  const [change, setChange] = useState(false);
  const changePosition = 200;

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
  //Navigation

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-3 wow fadeIn delay-1s"
        id="mainNav"
        style={style}
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <Link to="/" style={{ color: "white" }}>
              Back to G&M Market Glendora
            </Link>
          </a>
          <div className="collapse navbar-collapse" id="navbarResponsive"></div>

          {/* <li className="nav-item dropdown">
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
          </li> */}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
