import React from "react";
import "./Butcher.css";
import PagesNav from "../components/PagesNav";
import Footer from "../components/Footer";
import meats from "../menus/meats.json";

function Butcher() {
  return (
    <>
      <PagesNav />
      <div className="hero">
        <div
          style={{ textAlign: "center", height: 300 }}
          className="butcherHeader"
        >
          <h1 style={{ color: "white", textShadow: "1px 1px 17px black" }}>
            Our Meats
          </h1>
          <div className="horizontal-line"></div>
          <h5 style={{ color: "white", textShadow: "1px 1px 17px black" }}>
            Handcut Meats and Homemade Sausage
          </h5>
        </div>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="text-center mt-0 titleText">Menu</h2>
        <div className="horizontal-line"></div>A selection of our handcut meats,
        and homemade sausages.
        <div className="calltoorder">
          Call us to place an order{" "}
          <a href="tel:+1-856-939-1070">(856) 939-1070</a>
        </div>
        <div style={{ color: "#c62828", padding: "10px" }}>
          * prices subject to change due to COVID-19 *
        </div>
      </div>
      <br />
      <div className="recession">
        <div
          className="card mx-auto"
          style={{
            width: "25rem",
            textAlign: "center",
            border: "solid 3px #c62828",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">RECESSION BUSTER!</h5>
            <h6 className="card-subtitle mb-2">$70</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="meatsTable">
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Meats
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price /LB
              </th>
            </tr>
            {meats.map((item) => (
              <tr>
                <td align="left">{item.meat}</td>
                <td align="left">{item.price}</td>
              </tr>
            ))}
          </table>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Butcher;
