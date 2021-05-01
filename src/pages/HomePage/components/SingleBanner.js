import { Link } from "react-router-dom"
const SingleBanner = props => {
  const { bannerImg } = props
  return (
    <div className="single_banner_slider">
      <div
        className="row"
        style={{
          position: "relative"
        }}
      >
        <div className="col-lg-5 col-md-8">
          <div className="banner_text">
            <div className="banner_text_iner">
              <h1>Cloth & Wood Sofa</h1>
              <p>
                Incididunt ut labore et dolore magna aliqua quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra
              </p>
              <Link to="#" className="btn_2">
                buy now
              </Link>
            </div>
          </div>
        </div>
        <div className="banner_img d-none d-lg-block">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SingleBanner
