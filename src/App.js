import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { LoginPage } from "./components/LoginPage";
//  import logo from "./logo.svg";
import "./App.scss";

class App extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="main_body">
        <Router>
          <Header />
          <Route exact path="/" component={Body} />
          <Route path="/login" render={() => <LoginPage name={user} />} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user
  };
};

export default connect(mapStateToProps)(App);
