import SingleBanner from "../../pages/HomePage/components/SingleBanner"
import AppSlider from "./AppSlider"

const BannerPath = props => {
  const { propsComponents } = props

  const renderSlider = () => <AppSlider propsComponents={propsComponents} />

  return (
    <>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">{propsComponents && renderSlider()}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerPath
