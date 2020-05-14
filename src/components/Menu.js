import React from "react";
// import { Link } from "react-router-dom";

// Menu

function Menu() {
  return (
    <section className="page-section-menu" id="menu">
      <h2 className="text-center mt-0 aboutHeadline">Menu</h2>
      <div class="horizontal-line"></div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-2"></div>
          <div className="col-md-2 deli ">
            <button type="button" class="btn btn-lg">
              Our Deli
            </button>
          </div>
          <div className="col-md-3">
            <button type="button" class="btn btn-lg">
              Italian Specialities
            </button>
          </div>
          <div className="col-md-2">
            <button type="button" class="btn btn-lg">
              Our Meats
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
        <br />
        <div className="text-center mt-0 catering">
          Catering Available Upon Request
        </div>
      </div>
    </section>
  );
}

export default Menu;
