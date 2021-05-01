import React from "react"
import { Link } from "react-router-dom"
import img1 from "../../../img/banner_img.png"
const SingleBanner = () => {
  return (
    <div className="single_banner_slider">
      <div
        className="row"
        style={{
          position: "relative"
        }}
      >
        <div className="banner_img d-none d-lg-block">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SingleBanner
