import React, { Component } from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Cart } from "../img/cart.svg";
import { ReactComponent as Account } from "../img/account.svg";
import { ReactComponent as Call } from "../img/call-icon.svg";
import "../App.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="left_block">
        <div className="logo_block">
          <Logo />
        </div>
      </div>
      <div className="right_block">
        <nav>
          <ul>
            <li>DESTINATIONS</li>
            <li>Style of Travel</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="button_block">
          <div className="button">
            <Call />
          </div>
          <div className="button">
            <Account />
          </div>
          <div className="button blue">
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
