import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { AdminPage } from "./components/administrator/AdminPage";
import { LoginPage } from "./components/LoginPage";
//  import logo from "./logo.svg";
import "./App.scss";

class App extends React.Component {
  render() {
    const { user, pass, isAuth } = this.props;
    return (
      <div className="main_body">
        <Router>
          <Header name={user} pass={pass} isAuth={isAuth} />
          <Route exact path="/" component={Body} />
          <Route
            path="/login"
            render={() => <LoginPage name={user} pass={pass} />}
          />
          <Route
            path="/admin"
            render={() => <AdminPage name={user} pass={pass} />}
          />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    pass: store.pass,
    isAuth: store.isAuth
  };
};

export default connect(mapStateToProps)(App);
