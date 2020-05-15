import React from "react";
import { Link } from "react-router-dom";

// Menu

function Menu() {
  return (
    <section className="page-section-menu" id="menu">
      <h2 className="text-center mt-0 aboutHeadline">Menu</h2>
      <div class="horizontal-line"></div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-2"></div>
          <div className="col-md-2 deli">
            <Link to="/deli">
              <button type="button" class="btn btn-lg">
                Our Deli
              </button>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/italian-specialities">
              <button type="button" class="btn btn-lg">
                Italian Specialities
              </button>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/butcher">
              <button type="button" class="btn btn-lg">
                Our Meats
              </button>
            </Link>
          </div>
          <div className="col-md-4"></div>
        </div>
        <br />
        <div className="text-center mt-0 catering">
          Catering Available Upon Request •{" "}
          <a href="tel:+1-856-939-1070">(856) 939-1070</a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
