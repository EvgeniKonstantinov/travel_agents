import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkUser } from "../actions";
import "../scss/Login.scss";

class LoginPageComponent extends React.Component {
  state = {
    login: "",
    pass_enter: ""
  };

  LoginCheck = () => {
    const { login, pass_enter } = this.state;
    this.props.action.checkUser({ email: login, password: pass_enter });
    if (this.props.isAuth == false) {
      console.log("No register");
    }
  };

  onChangeHandler = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
  };
  render() {
    const { login, pass_enter } = this.state;
    if (this.props.isAuth === true) {
      return (
        <div>
          <h1>redirect</h1>
          (<Redirect to="/admin" />
          );
        </div>
      );
    } else {
      return (
        <div className="login-page">
          <div className="form_login">
            <p>Меня зовут: {this.props.name}</p>
            <p>Pass: {this.props.pass}</p>
            <form className="register-form_login">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
            <div className="login-form_login">
              <input
                id="login"
                onChange={this.onChangeHandler}
                value={login}
                type="text"
                placeholder="username"
              />
              <input
                id="pass_enter"
                value={pass_enter}
                onChange={this.onChangeHandler}
                type="password"
                placeholder="password"
              />
              <button onClick={this.LoginCheck}>login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = store => ({ isAuth: store.isAuth, user: store.user });
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ checkUser }, dispatch)
});

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageComponent);

export { LoginPage };
