import React from "react";
import "../../scss/AdminPage.scss";

class AdminMainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="admin_main_title">
          <h1>Welcome to Admin Page {this.props.isAuth} </h1>
        </div>
        <div className="admin_main_content">content</div>
      </div>
    );
  }
}
export { AdminMainPage };
