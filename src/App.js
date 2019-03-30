import React from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
//  import logo from "./logo.svg";
import "./App.scss";

const App = () => {
  return (
    <div className="main_body">
      <Header />
      <Body />
    </div>
  );
};

export default App;
