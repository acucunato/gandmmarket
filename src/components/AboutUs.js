import React from "react";
import apron from "../img/1957.jpeg";
import owner from "../img/brett&jesse.jpeg";
import pop from "../img/pop&gar.jpeg";
import storefront from "../img/storefront.jpeg";
// import sign from "../img/sign.jpeg";
import groundmeat from "../img/groundmeat.jpeg";
import cuttingmeat from "../img/cuttingmeat.jpeg";
import insidestore from "../img/insidestore.jpeg";
import slicer from "../img/slicer.jpeg";

function About() {
  return (
    <section className="page-section-about " id="history">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="text-center mt-0 aboutHeadline wow bounceInDown">
              Our History
            </h2>
            <div class="horizontal-line"></div>
            <h5 className="text-center mt-0 wow bounceInUp">
              Family Owned and Operated Since 1957
            </h5>
            <br />
            <img
              src={apron}
              alt="italianflag"
              className="butcherLogo wow fadeIn delay-1s"
            />
            <p
              className="text-muted mb-0 wow fadeIn delay-1s"
              style={{ textIndent: "25px" }}
            >
              In 1957, two butchers from 9th St in South Philly, Fred Guido and
              Hank Mariotti, came to Jersey to open a business of their own, and
              G&M Super Market was established.
              <p style={{ textIndent: "25px" }}>
                In 1979 Hank enlisted the help of his son Gary, creating a true
                family-run business. Gary and Hank worked together for over 40
                years, cultivating an old-school, traditional, small-town
                Italian deli and butcher shop. During this time, G&M became
                known for having the “best homemade roast beef and roast pork”
                along with handcrafted, homemade Italian specialities and the
                best quality hand cut meats. G&M was recognized for awards such
                as Best of South Jersey, the Heritage Award of Gloucester Twp,
                and the Courier Post and also featured in the Philadelphia
                Inquirer.
              </p>
              <p style={{ textIndent: "25px" }}>
                As the family grew, it became a tradition to work at the shop
                learning the tricks of the trade. Hank’s grandson and Gary’s
                nephew, Brett joined the business in 2008, acquiring the same
                knowledge and skill and has since taken over the family business
                creating a third generation run establishment.
              </p>
              <p style={{ textIndent: "25px" }}>
                With Brett and his brother Jesse as his right hand, G&M will
                continue to bring hand cut meats, the best deli selection, and
                Italian delicacies into your home.
              </p>
            </p>
            <h5 className="text-center mt-0 wow jackInTheBox delay-2s">
              "Good Meat isn't Cheap, Cheap Meat isn't Good!"
            </h5>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-lg-4 photos text-center wow fadeIn delay-2s">
            <img
              src={owner}
              alt="brettandjessie"
              width="300px"
              height="450px"
            />
          </div>
          <div className="col-lg-4 photos text-center wow fadeIn delay-2s">
            <img
              src={pop}
              alt="popandgary"
              width="350px"
              height="450px"
              id="popgary"
            />
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-lg-5 photos text-center wow fadeIn delay-2s">
            <img
              src={slicer}
              alt="popandgary"
              width="400px"
              height="350px"
              id="poppic"
            />
          </div>
          <div className="col-lg-5 photos text-center wow fadeIn delay-2s">
            <img
              src={storefront}
              alt="storefront"
              width="400px"
              height="350px"
              id="poppic"
            />
          </div>
          <div className="col-lg-2 photos text-center wow fadeIn delay-2s">
            <img
              src={groundmeat}
              alt="popandgary"
              width="250px"
              height="350px"
              id="popgary"
            />
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-lg-6 photos text-center wow fadeIn delay-2s">
            <img
              src={insidestore}
              alt="storefront"
              width="500px"
              height="350px"
              id="poppic"
            />
          </div>
          <div className="col-lg-6 photos text-center wow fadeIn delay-2s">
            <img
              src={cuttingmeat}
              alt="popandgary"
              width="500px"
              height="350px"
              id="poppic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
