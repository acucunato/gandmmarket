import React from "react";

// Masthead

function Jumbotron() {
  return (
    <header className="masthead">
      <div className="container-jumbotron h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end headline">G&M Market</div>
          <div className="col-lg-8 align-self-baseline">
            <p className="tagLine">Fresh Cut Meats and Deli</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Jumbotron;
