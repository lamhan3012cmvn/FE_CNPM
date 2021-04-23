import SingleBanner from "./SingleBanner"
import img1 from "../../../img/banner_img.png"
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
const BannerPath = () => {
  return (
    <>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <Slider {...settings}>
                <SingleBanner bannerImg={img1} />
                <SingleBanner bannerImg={img1} />
                <SingleBanner bannerImg={img1} />
                <SingleBanner bannerImg={img1} />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerPath
