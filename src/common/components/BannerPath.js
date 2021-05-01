import SingleBanner from "../../pages/HomePage/components/SingleBanner"
import Slider from "react-slick"
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear"
}
const BannerPath = props => {
  const { propsComponents } = props

  const renderSlider = () => (
    <Slider {...settings}>
      {propsComponents.map(e => {
        return e.component
      })}
    </Slider>
  )

  return (
    <>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {propsComponents && renderSlider()}
              {/* <Slider {...settings}>
                <SingleBanner bannerImg={img1} />
                <SingleBanner bannerImg={img1} />
                <SingleBanner bannerImg={img1} />
                <SingleBanner bannerImg={img1} />
              </Slider> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerPath
