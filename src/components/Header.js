import React from "react";
import { MenuDrop } from "./DropDown";
import Dropdown from "rc-dropdown";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "rc-dropdown/assets/index.css";
import { ReactComponent as Humb } from "../img/humb.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Cart } from "../img/cart.svg";
import User_logo from "../img/user-male.png";
import { ReactComponent as Account } from "../img/account.svg";
import { ReactComponent as Call } from "../img/call-icon.svg";

import "../scss/Header.scss";

class Headers extends React.Component {
  render() {
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
                <Link exact to="/" className="navitation__a">
                  DESTINATIONS
                </Link>
              </li>
              <li className="navitation__li">
                <Link to="/" className="navitation__a">
                  Style of Travel
                </Link>
              </li>
              <li className="navitation__li">
                <Link to="/" className="navitation__a">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__buttonBlock">
            <div className="header__button hide_molile">
              <Call />
            </div>
            <div className="header__button hide_molile">
              <Link exact to="/login" className="navitation__a">
                {this.props.isAuth === true ? (
                  <img className="logo_user" src={User_logo} alt="" />
                ) : (
                  <Account />
                )}
              </Link>
            </div>
            <div className="header__button header__button-mobile blue">
              <Cart />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = store => ({ user: store.user, isAuth: store.isAuth });

const Header = connect(mapStateToProps)(Headers);
export { Header };
