import React from "react";
import { SimpleSlider } from "./SimpleSlider";
import { ReactComponent as Duration } from "../img/duration.svg";
import { ReactComponent as When } from "../img/when.svg";
import { ReactComponent as Location } from "../img/location.svg";
import { ReactComponent as Arrow } from "../img/arrow_right.svg";
import "../scss/Body.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Body extends React.Component {
  state = {
    visilbe: false
  };
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  changeLocation = e => {
    e.preventDefault();
    this.setState({ visilbe: true });
  };
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ visilbe: false });
    }
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  render() {
    const { visilbe } = this.state;
    return (
      <main className="body">
        <section className="leftBlock blue no_blue">
          <div className="leftBlock__content leftBlock__content-body ">
            <h1>
              Travel <span className="h1__span-gradient">Agents</span> Portal
            </h1>
            <p className="leftBlock__discription ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem
            </p>
            <button className="leftBlock__button-login">
              create an account
            </button>
            <p className="leftBlock__loginNow">
              Have an Account Already?{" "}
              <a className="leftBlock__loginNow-a" href="/">
                Login Now
              </a>
            </p>
          </div>
        </section>
        <SimpleSlider />
        <section className="section__form">
          <div className="form form_mobile">
            <div
              className="form__content form__content-mobile"
              ref={this.setWrapperRef}
            >
              <div className="form__block form__block-location">
                <label className="form__lable" htmlFor="location">
                  <Location className="form__svg" />
                  <input
                    className="form__input form__input-location"
                    type="text"
                    name="location"
                    placeholder="Where do you want to go?"
                    onClick={this.changeLocation}
                  />
                </label>
              </div>

              <div
                className={
                  visilbe
                    ? "form__block form__block-when"
                    : "form__block form__block-when hide_molile"
                }
              >
                <label className="form__lable" htmlFor="when">
                  <When className="form__svg" />
                  <input
                    className="form__input"
                    type="text"
                    name="when"
                    placeholder="When"
                  />
                </label>
              </div>

              <div
                className={
                  visilbe
                    ? "form__block form__block-duration"
                    : "form__block form__block-duration hide_molile"
                }
              >
                <label className="form__lable" htmlFor="duration">
                  <Duration className="form__svg" />
                  <input
                    className="form__input"
                    type="text"
                    name="duration"
                    placeholder="Duration"
                  />
                </label>
              </div>
              <button
                className={
                  visilbe ? "form__button " : "form__button hide_molile"
                }
              >
                <Arrow />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export { Body };
