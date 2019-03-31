import React from "react";
import Slider from "react-slick";
import "../scss/SimpleSlider.scss";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <aside className="rightBlock hide_molile">
        <Slider {...settings}>
          <div className="backgroundSlider slide1">
            <div className="sliderDescription">
              <h3 className="sliderDescription__h3">destinations</h3>
              <h2 className="sliderDescription__h2">north america</h2>
            </div>
          </div>
          <div className="backgroundSlider slide2">
            <div className="sliderDescription">
              <h3 className="sliderDescription__h3">destinations</h3>
              <h2 className="sliderDescription__h2">north america</h2>
            </div>
          </div>
          <div className="backgroundSlider slide3">
            <div className="sliderDescription">
              <h3 className="sliderDescription__h3">destinations</h3>
              <h2 className="sliderDescription__h2">north america</h2>
            </div>
          </div>
          <div className="backgroundSlider slide4">
            <div className="sliderDescription">
              <h3 className="sliderDescription__h3">destinations</h3>
              <h2 className="sliderDescription__h2">north america</h2>
            </div>
          </div>
        </Slider>
      </aside>
    );
  }
}
export { SimpleSlider };
