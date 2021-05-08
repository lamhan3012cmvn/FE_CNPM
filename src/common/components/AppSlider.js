import React from "react"
import Slider from "react-slick"
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear"
}
const AppSlider = props => {
  const render = () => <Slider {...settings}>{props.children}</Slider>

  return render()
}

export default AppSlider
