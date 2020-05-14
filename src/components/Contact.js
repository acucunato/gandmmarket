import React from "react";
// import { Link } from "react-router-dom";

// Menu

function Menu() {
  return (
    <section className="page-section-contact" id="contact">
      <h2 className="text-center mt-0 aboutHeadline">Contact Us</h2>
      <div class="horizontal-line"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <ul>
              <h4 className="hours">Our Hours</h4>
              <li>Monday 9am-4:30pm</li>
              <li>Tuesday 9am-4:30pm</li>
              <li>Wednesday 9am-4:30pm</li>
              <li>Thursday 9am-4:30pm</li>
              <li>Friday 9am-4:30pm</li>
              <li>Saturday 9am-3:30pm</li>
              <li>Sunday 9am-1:30pm</li>
              <li className="error">COVID-19 may affect these hours.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <h4 className="hours text-center">Stay In Touch</h4>
              <li>
                <i className="fas fa-phone-square fa-3x"></i>
                <b>(856) 939-1070</b>
              </li>
              <li>
                <i className="fab fa-facebook-square fa-3x"></i>
                <b>G&M Deli</b>
              </li>
              <li>
                <i className="fab fa-instagram-square fa-3x"></i>
                <b>@gandmdeli</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
