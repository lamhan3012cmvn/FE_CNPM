import { Carousel } from "antd"
import SingleBanner from "./SingleBanner"

const BannerPath = () => {
  return (
    <>
      <section classNameName="banner_part">
        <div classNameName="container">
          <div classNameName="row align-items-center">
            <div classNameName="col-lg-12">
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
