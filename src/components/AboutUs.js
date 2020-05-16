import React from "react";
import flag from "../img/italianflag.png";
import owner from "../img/owners.jpg";
import pop from "../img/pop.png";

function About() {
  return (
    <section className="page-section-about" id="history">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="text-center mt-0 aboutHeadline">Our History</h2>
            <div class="horizontal-line"></div>
            <h5 className="text-center mt-0">
              Family Owned and Operated Since 1957
            </h5>
            <br />
            <img src={flag} alt="italianflag" className="butcherLogo" />
            <p className="text-muted mb-0">
              In 1957, a couple of young butchers from 9th St in South Philly
              came to Jersey to start a deli and butcher business of their own,
              this is where G&M Super Market was established.
            </p>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <img
              src={owner}
              alt="brettandjessie"
              width="300px"
              height="450px"
            />
          </div>
          <div className="col-lg-6">
            <img
              src={pop}
              alt="popandgary"
              width="600px"
              height="450px"
              id="poppic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
