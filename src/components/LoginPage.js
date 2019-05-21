import React from "react";
import "../scss/Login.scss";

class LoginPage extends React.Component {
  state = {
    login: "",
    pass_enter: ""
  };

  LoginCheck = () => {
    // https://reqres.in/api/users

    const { login, pass_enter } = this.state;
    const { name, pass } = this.props;
    if (name != login) {
      alert("Неверный логин");
    } else if (pass != pass_enter) {
      alert("Неверный пароль");
    } else {
      alert("Добро пожаловать на темную сторону!");
    }
    // alert(login + "\n" + pass + "\n" + name + "\n" + pass_enter);
  };

  onChangeHandler = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
  };
  render() {
    const { login, pass_enter } = this.state;
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

export { LoginPage };
