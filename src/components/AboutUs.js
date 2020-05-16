import React from "react";
import flag from "../img/italianflag.png";

function About() {
  return (
    <section className="page-section-about" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="text-center mt-0 aboutHeadline">About Us</h2>
            <div class="horizontal-line"></div>
            <h5 className="text-center mt-0">
              Family Owned and Operated Since 1957
            </h5>
            <br />
            <img src={flag} alt="italianflag" className="butcherLogo" />
            <p className="text-muted mb-0">
              Lorem ipsum dolor sit amet, eam error virtute at, eum ut
              cotidieque accommodare, no sed rebum equidem interpretaris.
              Omnesque ponderum ex vim, pri an partiendo signiferumque. Ne alia
              quaeque civibus cum, ipsum delicata est ex. His iisque appellantur
              ne. Eum ei partiendo concludaturque, his ea debitis reprimique.
              Probatus incorrupte mei ea, cum et elit ridens saperet. Id
              ponderum interesset sit. No persius fabellas quo, splendide
              definiebas ea pri. Cu nobis dolorem nam, ei eius omittam usu. Eum
              purto mutat placerat ne, at idque nostrum sea, ne pro tota quidam.
              Duo gloriatur voluptaria eu, sit ad vitae insolens patrioque,
              error molestiae omittantur duo ei. Eam an viris utinam. Ei illum
              semper melius vim, alia vero accusamus eu per, mel an mundi viris
              blandit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
