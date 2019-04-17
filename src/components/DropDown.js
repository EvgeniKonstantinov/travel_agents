import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const MenuDrop = () => (
  <Router>
    <ul className="navitation__ul-mobile">
      <li className="navitation__li-mobile">
        <NavLink to="/react" activeClassName="navitation__a-mobile">
          DESTINATIONS
        </NavLink>
      </li>
      <li className="navitation__li-mobile">
        <NavLink to="/react" activeClassName="navitation__a-mobile">
          Style of Travel
        </NavLink>
      </li>
      <li className="navitation__li-mobile">
        <NavLink to="/react" activeClassName="navitation__a-mobile">
          About Us
        </NavLink>
      </li>
    </ul>
  </Router>
);
export { MenuDrop };
