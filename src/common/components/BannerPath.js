import { Carousel } from "antd"
import SingleBanner from "./SingleBanner"

const BannerPath = () => {
  return (
    <>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <Carousel autoplay autoplaySpeed={1500}>
                <SingleBanner />
                <SingleBanner />
                <SingleBanner />
                <SingleBanner />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerPath
