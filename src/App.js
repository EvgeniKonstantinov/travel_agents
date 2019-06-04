import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { AdminPage } from "./components/administrator/AdminPage";
import { LoginPage } from "./components/LoginPage";
//  import logo from "./logo.svg";
import "./App.scss";
import { NewsPage } from "./components/News/NewsPage";

class App extends React.Component {
  render() {
    const { user, pass, isAuth, dataNews } = this.props;
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
          <Route
            path="/news"
            dataNews={dataNews}
            render={() => <NewsPage dataNews={dataNews} />}
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
    isAuth: store.isAuth,
    dataNews: store.dataNews
  };
};

export default connect(mapStateToProps)(App);
