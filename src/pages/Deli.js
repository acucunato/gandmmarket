import React from "react";
import "./Deli.css";
import PagesNav from "../components/PagesNav";
import Footer from "../components/Footer";
import deli from "../menus/deli.json";
import hoagies from "../menus/hoagies.json";

function Deli() {
  return (
    <>
      <PagesNav />
      <div className="hero">
        <div
          style={{ textAlign: "center", height: 300 }}
          className="deliHeader"
        >
          <h1 style={{ color: "white", textShadow: "1px 1px 17px black" }}>
            Our Deli
          </h1>
          <div class="horizontal-line"></div>
          <h5 style={{ color: "white", textShadow: "1px 1px 17px black" }}>
            Lunchmeat and Hoagies
          </h5>
        </div>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="text-center mt-0 titleText">Menu</h2>
        <div class="horizontal-line"></div>
        Serving brands such as Dietz & Watson, Thumann; along with homemade deli
        meats such as Roast Beef and Roast Pork.
        <div className="calltoorder">
          Call us to place an order{" "}
          <a href="tel:+1-856-939-1070">(856) 939-1070</a>
        </div>
      </div>
      <br />
      <div className="deliTable">
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Lunchmeat
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price /LB
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Lunchmeat
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price /LB
              </th>
            </tr>
            {/* new row */}
            {deli.map((item) => (
              <tr>
                <td align="left">{item.lunchmeat}</td>
                <td align="left">{item.price}</td>
                <td align="left">{item.lunchmeat2}</td>
                <td align="left">{item.price2}</td>
              </tr>
            ))}
          </table>
        </table>
      </div>
      {/* hoagie table */}
      <div className="hoagieTable">
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Hoagies & Party Trays
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price
              </th>
            </tr>
            {hoagies.map((item) => (
              <tr>
                <td align="left">{item.hoagie}</td>
                <td align="left">{item.hPrice}</td>
              </tr>
            ))}
          </table>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Deli;
