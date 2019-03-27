import React, { Component } from "react";
import "../App.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="left_blockl">
        <img src="" alt="Logo Img" />
      </div>
      <div className="right_block">
        <nav>
          <ul>
            <li>Page1</li>
            <li>Page2</li>
            <li>Page3</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
