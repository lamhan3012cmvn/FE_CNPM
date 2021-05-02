import React from "react"
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
        <div className="banner_img d-none d-lg-block">
          <img src={bannerImg} alt="" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
  )
}

export default SingleBanner
