import React from "react";
import { Link } from "react-router-dom";
// Menu

function Contact() {
  return (
    <section className="page-section-contact" id="contact">
      <h2 className="text-center mt-0 aboutHeadline wow bounceInDown">
        Contact Us
      </h2>
      <div class="horizontal-line"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center wow flipInX delay-1s">
            <h4 className="hours">Visit Us</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6126.612808423309!2d-75.068301!3d39.844966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ce0c9586a741%3A0xce73eb8e2107a9cf!2sG%20%26%20M%20Super%20Market!5e0!3m2!1sen!2sus!4v1589644066375!5m2!1sen!2sus"
              width="400"
              height="300"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title="maptogm"
              id="map"
            ></iframe>
          </div>
          <div className="col-md-4 text-center wow flipInX delay-2s">
            <ul>
              <h4 className="hours">Glendora</h4>
              <li>Monday 9am-4pm</li>
              <li>Tuesday 9am-4pm</li>
              <li>Wednesday 9am-4pm</li>
              <li>Thursday 9am-4pm</li>
              <li>Friday 9am-4pm</li>
              <li>Saturday 9am-3pm</li>
              <li>Sunday 9am-1pm</li>
              {/* <li className="error">Summer Hours</li> */}
            </ul>
          </div>
          <div className="col-md-4 wow flipInX delay-3s">
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
        {/* WASHINGTON TWP */}
        <br />
        <br />
        <div className="row">
          <div className="col-md-4 text-center wow flipInX delay-1s">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.2599232991115!2d-75.06599548483096!3d39.73381187945041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6d6a7cb9ee91b%3A0x67f2fd24bd085811!2s421%20Hurffville%20-%20Cross%20Keys%20Rd%2C%20Sewell%2C%20NJ%2008080!5e0!3m2!1sen!2sus!4v1620746822773!5m2!1sen!2sus"
              width="400"
              height="300"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              title="maptogm"
              id="map"
            ></iframe>
          </div>
          <div className="col-md-4 text-center wow flipInX delay-2s">
            <ul>
              <h4 className="hours">Washington Township</h4>
              <li>Monday 10am-6pm</li>
              <li>Tuesday 10am-6pm</li>
              <li>Wednesday 10am-6pm</li>
              <li>Thursday 10am-6pm</li>
              <li>Friday 10am-6pm</li>
              <li>Saturday 10am-6pm</li>
              <li>Sunday 9am-3pm</li>
              <br />
              <li>
                <Link to="/gandmmoderndeli">
                  <button type="button" class="btn btn-lg">
                    Washington TWP MENU
                  </button>
                </Link>
              </li>
              {/* <li className="error">Summer Hours</li> */}
            </ul>
          </div>
          <div className="col-md-4 wow flipInX delay-3s">
            <ul>
              <li>
                <i className="fas fa-phone-square fa-2x"></i>
                <a href="tel:+1-856-939-1070">
                  <b>coming soon</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
