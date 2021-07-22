import React from "react";
import "./App.scss";
import CasinoSection from "./components/CasinoSection";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <CasinoSection />
    </div>
  );
};

export default App;
