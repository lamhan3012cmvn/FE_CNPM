import React from "react"
import Slider from "react-slick"

const AppSlider = props => {
  const sliderShow = props.show ? props.show : 1
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: sliderShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  }
  const render = () => <Slider {...settings}>{props.children}</Slider>

  return render()
}

export default AppSlider
