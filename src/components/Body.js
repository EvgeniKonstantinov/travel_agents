import React, { Component } from "react";
import { ReactComponent as Duration } from "../img/duration.svg";
import { ReactComponent as When } from "../img/when.svg";
import { ReactComponent as Location } from "../img/location.svg";
import "../App.scss";

const Body = () => {
  return (
    <section className="body">
      <div className="left_block blue">
        <div>
          <h1>
            Travel <span className="h1_gradient">Agents</span> Portal
          </h1>
          <p className="discription">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </p>
          <button className="button_login">create an account</button>
          <p className="login_now">
            Have an Account Already? <a href="#">Login Now</a>
          </p>
        </div>
      </div>
      <div className="right_block">
        <div className="slider_description">
          <h3>destinations</h3>
          <h2>north america</h2>
        </div>
      </div>
      <div className="form">
        <label for="location">
          <Location />
          <input type="text" name="location" placeholder="New York" />
        </label>
        <label for="when">
          <When />
          <input type="text" name="when" placeholder="New York" />
        </label>
        <label for="duration">
          <Duration />
          <input type="text" name="duration" placeholder="New York" />
        </label>

        <button>reg</button>
      </div>
    </section>
  );
};
export { Body };
