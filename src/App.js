import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Deli from "./pages/Deli";
import Butcher from "./pages/Butcher";
import ItalianSpecialities from "./pages/ItalianSpecialities";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route exact path={["/"]}>
            <HomePage />
          </Route>
          <Route exact path={["/deli"]}>
            <Deli />
          </Route>
          <Route exact path={["/butcher"]}>
            <Butcher />
          </Route>
          <Route exact path={["/italian-specialities"]}>
            <ItalianSpecialities />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
