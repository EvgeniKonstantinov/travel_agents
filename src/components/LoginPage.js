import React from "react";
import "../scss/Login.scss";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="form_login">
          <p>Меня зовут: {this.props.name}</p>
          <form className="register-form_login">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>
          <form className="login-form_login">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export { LoginPage };
