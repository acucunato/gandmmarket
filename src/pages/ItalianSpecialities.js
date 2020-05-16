import React from "react";
import "./ItalianSpecialities.css";
import PagesNav from "../components/PagesNav";
import Footer from "../components/Footer";
import homemade from "../menus/homemade.json";
import sides from "../menus/sides.json";
import pastas from "../menus/pasta.json";

function Deli() {
  return (
    <>
      <PagesNav />
      <div className="hero">
        <div
          style={{ textAlign: "center", height: 300 }}
          className="italianHeader"
        >
          <h1 style={{ color: "white", textShadow: "1px 1px 17px black" }}>
            Italian Specialities
          </h1>
          <div class="horizontal-line"></div>
          <h5 style={{ color: "white", textShadow: "1px 1px 17px black" }}>
            Selection of homemade & italian Specialities
          </h5>
        </div>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="text-center mt-0 titleText">Menu</h2>
        <div class="horizontal-line"></div>A variety of homemade cuisines,
        prepared fresh in store, from recipes passed down since 1957.
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
                Homemade Italian Eats
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price
              </th>
            </tr>
            {homemade.map((item) => (
              <tr key={item.id}>
                <td align="left">{item.item}</td>
                <td align="left">{item.price}</td>
              </tr>
            ))}
          </table>
        </table>
        {/* pastas */}
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Scarmuzza Pasta
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price
              </th>
            </tr>
            {pastas.map((item) => (
              <tr key={item.id}>
                <td align="left">{item.pasta}</td>
                <td align="left">{item.price}</td>
              </tr>
            ))}
          </table>
        </table>
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Other Italian Specialities
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price
              </th>
            </tr>
            {sides.map((item) => (
              <tr key={item.id}>
                <td align="left">{item.item}</td>
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

export default Deli;
