import React from "react";
// Menu

function Menu() {
  return (
    <section className="page-section-contact" id="contact">
      <h2 className="text-center mt-0 aboutHeadline">Contact Us</h2>
      <div class="horizontal-line"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <h4 className="hours">Visit Us</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.306422980181!2d-75.0704953492347!3d39.84496557933468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ce0cbfdf2df9%3A0x132ebbb5b8596900!2s126%20E%20Evesham%20Rd%2C%20Glendora%2C%20NJ%2008029!5e0!3m2!1sen!2sus!4v1589559422709!5m2!1sen!2sus"
              width="300"
              height="300"
              frameborder="0"
              style={{ border: "0" }}
              aria-hidden="false"
              tabindex="0"
              title="maptogm"
            ></iframe>
          </div>
          <div className="col-md-4 text-center">
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
          <div className="col-md-4">
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
