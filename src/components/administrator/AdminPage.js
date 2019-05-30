import React from "react";

import { Route, Redirect, Link } from "react-router-dom";

import { connect } from "react-redux";
import { AdminMainPage } from "./AdminMainPage";
import { AdminNewsManager } from "./AdminNewsManager";

import "../../scss/AdminPage.scss";

class AdminPages extends React.Component {
  render() {
    if (this.props.isAuth !== true) {
      return (
        <div>
          <h1>redirect</h1>
          (<Redirect to="/login" />
          );
        </div>
      );
    } else {
      return (
        <div className="admin_block">
          <nav className="admin_nav">
            <li className="admin_nav_li">
              <Link to="/admin/">Главная</Link>
            </li>

            <li className="admin_nav_li">
              <Link to="/admin/news">Новости</Link>
            </li>
            <li className="admin_nav_li">Горящие туры</li>
          </nav>
          <main className="admin_main">
            <Route exact path="/admin" component={AdminMainPage} />
            <Route exact path="/admin/news" component={AdminNewsManager} />
          </main>
        </div>
      );
    }
  }
}
const mapStateToProps = store => ({ user: store.user, isAuth: store.isAuth });

const AdminPage = connect(mapStateToProps)(AdminPages);

export { AdminPage };
