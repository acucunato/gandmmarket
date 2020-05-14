import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import AboutUs from "../components/AboutUs";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <AboutUs />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
