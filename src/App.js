import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import "./App.scss";
import CasinoSection from "./components/CasinoSection";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
