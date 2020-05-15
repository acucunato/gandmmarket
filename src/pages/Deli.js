import React from "react";
import "./Deli.css";
import PagesNav from "../components/PagesNav";
import Footer from "../components/Footer";
import items from "../menus/deli.json";

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
            {items.map((item) => (
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
                Hoagies & Hoagie Trays
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price
              </th>
            </tr>
            {/* new row */}
            <td>hoagies</td>
            <td>price</td>
            {/* {items.map((item) => (
              <tr>
                <td align="left">{item.lunchmeat}</td>
                <td align="left">{item.price}</td>
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
