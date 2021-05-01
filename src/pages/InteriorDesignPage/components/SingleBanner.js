import React from "react"
const SingleBanner = props => {
  const { bannerImg } = props
  console.log(
    `LHA:  ===> file: SingleBanner.js ===> line 4 ===> bannerImg`,
    bannerImg
  )
  console.log(
    `LHA:  ===> file: SingleBanner.js ===> line 4 ===> bannerImg`,
    bannerImg
  )
  return (
    <div className="single_banner_slider">
      <div
        className="row"
        style={{
          position: "relative"
        }}
      >
        <div className="banner_img d-none d-lg-block">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SingleBanner
