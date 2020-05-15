import React from "react";
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
              <li className="error">Hours subject to change due to COVID-19</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <h4 className="hours">Stay In Touch</h4>
              <li>
                <i className="fas fa-phone-square fa-2x"></i>
                <a href="tel:+1-856-939-1070">
                  <b>(856) 939-1070</b>
                </a>
              </li>
              <li>
                <i className="fab fa-facebook-square fa-2x"></i>
                <a
                  href="https://www.facebook.com/gandmdeli/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>G&M Deli</b>
                </a>
              </li>
              <li>
                <i className="fab fa-instagram-square fa-2x"></i>
                <a
                  href="https://www.instagram.com/gandmdeli/?igshid=mwtphcimjeu0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>@gandmdeli</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
