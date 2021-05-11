import React from "react";
import "./WTHomePage.css";
import WTNav from "../components/WTNav";
import Footer from "../components/Footer";
import wtdeli from "../menus/wtdeli.json";
import wthotsandwich from "../menus/wthotsandwich.json";
import wtcoldsandwich from "../menus/wtcoldsandwich.json";

function WTHomePage() {
  return (
    <>
      <WTNav />
      <div className="hero">
        <div style={{ textAlign: "center", height: 400 }} className="WTHeader">
          <br />
          <h1
            className="wow fadeInUp"
            style={{ color: "white", textShadow: "1px 1px 17px black" }}
          >
            G&M Modern Deli and Meats
          </h1>
          <div className="horizontal-line"></div>
          <h5
            className="wow fadeInDown"
            style={{ color: "white", textShadow: "1px 1px 17px black" }}
          >
            a new look and feel for an old school favorite
          </h5>
        </div>
      </div>
      {/* CONTENT */}
      <div
        className="container wow fadeIn delay-1s"
        style={{ textAlign: "center" }}
      >
        <h2 className="text-center mt-0 titleText">A Modern Twist</h2>
        <div class="horizontal-line"></div>
        We're taking our old school 60 year old business and making it over with
        a modern twist. Offering hot and cold ready-to-go sandwiches and
        hoagies, a small selection of only the best hand cut meats and deli and
        creating a taste of our original location with a bit of a spin.
      </div>
      <br />
      <h2 className="text-center mt-0 titleText wow fadeIn delay-1s">Menu</h2>
      <div class="horizontal-line wow fadeIn delay-1s"></div>
      <div className="text-center wow fadeIn delay-1s">
        All sandwiches are made fresh in house upon ordering.
        <div className="calltoorder">
          Call us to place an order{" "}
          <a href="tel:+1-856-939-1070">(856) 939-1070</a>
        </div>
        <br />
      </div>
      {/* HOT SANWICHES */}
      <div className="deliTable wow fadeIn delay-1s">
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th
                align="left"
                style={{ textTransform: "uppercase", fontSize: "20px" }}
              >
                Hot sandwiches
                <div
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "normal",
                    fontSize: "16px",
                  }}
                >
                  6" $7.00 • 12" $10.00 • 24" $18.00
                </div>
              </th>
            </tr>
            {/* new row */}
            {wthotsandwich.map((item) => (
              <tr>
                <td align="left">
                  <div
                    style={{ textTransform: "uppercase", fontWeight: "bold" }}
                  >
                    {item.item}
                  </div>
                  <div className="small muted">{item.description}</div>
                </td>
              </tr>
            ))}
          </table>
        </table>
      </div>
      <br />
      {/* COLD SANDWICHES */}
      <div className="deliTable wow fadeIn delay-1s">
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th
                align="left"
                style={{ textTransform: "uppercase", fontSize: "20px" }}
              >
                cold sandwiches
                <div
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "normal",
                    fontSize: "16px",
                  }}
                >
                  6" $6.00 • 12" $9.00 • 24" $17.00
                </div>
              </th>
            </tr>
            {/* new row */}
            {wtcoldsandwich.map((item) => (
              <tr>
                <td align="left">
                  <div
                    style={{ textTransform: "uppercase", fontWeight: "bold" }}
                  >
                    {item.item}
                  </div>
                  <div className="small muted">{item.description}</div>
                </td>
              </tr>
            ))}
          </table>
        </table>
      </div>

      {/* FROM THE DELI AND BUTCHER */}
      <br />
      <div className="deliTable wow fadeIn delay-1s">
        <table className="table-responsive">
          <table className="table table-hover">
            <tr>
              <th align="left" style={{ textTransform: "uppercase" }}>
                From the deli
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price/LB
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                From the butcher block
              </th>
              <th align="left" style={{ textTransform: "uppercase" }}>
                Price/LB
              </th>
            </tr>
            {/* new row */}
            {wtdeli.map((item) => (
              <tr>
                <td align="left">{item.item}</td>
                <td align="left">{item.price}</td>
                <td align="left">{item.meat}</td>
                <td align="left">{item.price2}</td>
              </tr>
            ))}
          </table>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default WTHomePage;
