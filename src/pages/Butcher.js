import React from "react";
import "./Butcher.css";
import PagesNav from "../components/PagesNav";
import Footer from "../components/Footer";
import sausage from "../menus/sausage.json";
import beef from "../menus/beef.json";
import chicken from "../menus/chicken.json";
import pork from "../menus/pork.json";
import seafood from "../menus/seafood.json";

function Butcher() {
  return (
    <>
      <PagesNav />
      <div className="hero">
        <div
          style={{ textAlign: "center", height: 300 }}
          className="butcherHeader"
        >
          <h1
            className="wow fadeInUp"
            style={{ color: "white", textShadow: "1px 1px 17px black" }}
          >
            Our Meats
          </h1>
          <div className="horizontal-line"></div>
          <h5
            className="wow fadeInDown"
            style={{ color: "white", textShadow: "1px 1px 17px black" }}
          >
            Handcut Meats and Homemade Sausage
          </h5>
        </div>
      </div>
      <div
        className="container wow fadeIn delay-1s"
        style={{ textAlign: "center" }}
      >
        <h2 className="text-center mt-0 titleText">Menu</h2>
        <div className="horizontal-line"></div>A selection of our handcut meats,
        and homemade sausages.
        <div className="calltoorder">
          Call us to place an order{" "}
          <a href="tel:+1-856-939-1070">(856) 939-1070</a>
        </div>
      </div>
      <br />
      <div className="recession wow jackInTheBox delay-2s">
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
            <h6 className="card-subtitle mb-2">$50</h6>
            <h6
              className="card-subtitle mb-2"
              style={{ color: "#c62828", textTransform: "uppercase" }}
            >
              Feed a family of 5 for a week!
            </h6>
            <p className="card-text">
              <p>2LB of Ground Beef or Ground Mix</p>
              <p>2LB of Beef Cubes</p>
              <p>2LB of Pork Chops or Pork Cutlets</p>
              <p>2LB of Chicken Breasts or Chicken Cutlets</p>
              <p>2LB of Choice of ANY Sausage</p>
            </p>
          </div>
        </div>
      </div>
      <div className="meatsTable wow fadeIn delay-1s">
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Homemade Sausage
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price/LB
              </th>
            </tr>
            {sausage.map((item) => (
              <tr>
                <td align="left">{item.meat}</td>
                <td align="left">{item.price}</td>
              </tr>
            ))}
          </table>
        </table>
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Beef
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price/LB
              </th>
            </tr>
            {beef.map((item) => (
              <tr>
                <td align="left">{item.meat}</td>
                <td align="left">{item.price}</td>
              </tr>
            ))}
          </table>
        </table>
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Chicken
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price/LB
              </th>
            </tr>
            {chicken.map((item) => (
              <tr>
                <td align="left">{item.meat}</td>
                <td align="left">{item.price}</td>
              </tr>
            ))}
          </table>
        </table>
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Pork
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price/LB
              </th>
            </tr>
            {pork.map((item) => (
              <tr>
                <td align="left">{item.meat}</td>
                <td align="left">{item.price}</td>
              </tr>
            ))}
          </table>
        </table>
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Seafood
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price
              </th>
            </tr>
            {seafood.map((item) => (
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
