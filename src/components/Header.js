import React from "react";
import { MenuDrop } from "./DropDown";
import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import { ReactComponent as Humb } from "../img/humb.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Cart } from "../img/cart.svg";

import { ReactComponent as Account } from "../img/account.svg";
import { ReactComponent as Call } from "../img/call-icon.svg";

import "../scss/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logoBlock">
        <div className="mobile_nav leftBlock__content">
          <Dropdown
            trigger={["click"]}
            overlay={MenuDrop}
            animation="slide-up"
            // onVisibleChange={onVisibleChange}
          >
            <button className="header__button-mobMenu only_mobile">
              <Humb className="mobile_nav__svg" />
            </button>
          </Dropdown>
        </div>
        <div className="header__logo">
          <Logo className="header__logo-svg" />
        </div>
      </div>
      <div className="rightBlock">
        <nav className="navitation hide_molile">
          <ul className="navitation__ul">
            <li className="navitation__li">
              <a className="navitation__a" href="/">
                DESTINATIONS
              </a>
            </li>
            <li className="navitation__li">
              <a className="navitation__a" href="/">
                Style of Travel
              </a>
            </li>
            <li className="navitation__li">
              <a className="navitation__a" href="/">
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__buttonBlock">
          <div className="header__button hide_molile">
            <Call />
          </div>
          <div className="header__button hide_molile">
            <Account />
          </div>
          <div className="header__button header__button-mobile blue">
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
