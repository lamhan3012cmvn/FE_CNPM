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
  const { propsComponents } = props
  const render = () => (
    <Slider {...settings}>
      {propsComponents.map(e => {
        return e.component
      })}
    </Slider>
  )

  return propsComponents && render()
}

export default AppSlider
