import React from "react";
import "./Deli.css";
import PagesNav from "../components/PagesNav";
import Footer from "../components/Footer";

// import Footer from "../components/Footer";

function Deli() {
  return (
    <>
      <PagesNav />
      <div className="hero">
        <div
          style={{ textAlign: "center", height: 300 }}
          className="deliHeader"
        >
          <h1 style={{ color: "white" }}>Our Deli</h1>
          <div class="horizontal-line"></div>
          <h5 style={{ color: "white" }}>Lunchmeat and Hoagies</h5>
        </div>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="text-center mt-0 titleText">Menu</h2>
        <div class="horizontal-line"></div>
        Some text here saying like using the best of deli meats, maybe brands
        and stuff
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
                Price
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Hoagies & Hoagie Trays
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price
              </th>
            </tr>
            {/* new row */}
            <tr>
              <td align="left">Turkey</td>
              <td align="left">$4/lb</td>
              <td align="left">Turkey Hoagie</td>
              <td align="left">$5</td>
            </tr>
            {/* {items.map((item) => (
              <tr key={item.id}>
                <td align="left">{item.charityName}</td>
                <td align="left">{item.item}</td>
                <td align="left">{item.qty}</td>
              </tr>
            ))} */}
          </table>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Deli;
