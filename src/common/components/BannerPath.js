import SingleBanner from "../../pages/HomePage/components/SingleBanner"
import AppSlider from "./AppSlider"

const BannerPath = props => {
  const { propsBanner = [] } = props

  const renderSlider = () => (
    <AppSlider>
      {propsBanner.map((element, i) => {
        return <SingleBanner bannerImg={element.img} key={i} />
      })}
    </AppSlider>
  )

  return (
    <>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">{renderSlider()}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerPath
