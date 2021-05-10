/* eslint-disable no-console */
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Slider from "react-slick"

import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
const SingleProduct = () => {
  const [total, setTotal] = useState(0)
  const settings = {
    customPaging: function (i) {
      return (
        <Link to="#">
          <img src={productDetail.Image} alt="" />
        </Link>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide)
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide)
    }
  }
  const productDetail = useSelector(state => state.product.productDetail)

  return (
    <div className="product_image_area section_padding">
      <div className="container">
        <div className="row s_product_inner justify-content-between">
          <div className="col-lg-6">
            <div className="product_slider_img">
              <Slider {...settings}>
                <div>
                  <img src={productDetail.Image} alt=""></img>
                </div>
                <div>
                  <img src={productDetail.Image} alt=""></img>
                </div>
                <div>
                  <img src={productDetail.Image} alt=""></img>
                </div>
                <div>
                  <img src={productDetail.Image} alt=""></img>
                </div>
              </Slider>
              <h5
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "18px"
                }}
              >
                previous <span>|</span> next
              </h5>
            </div>
          </div>
          <div className="col-lg-6" style={{ padding: "10px 30px" }}>
            <div className="s_product_text">
              <h3>{productDetail.Name}</h3>
              <h2>{productDetail.Price} VND</h2>
              <ul className="list">
                <li>
                  <Link className="active" to="#">
                    <span>Code</span> : &emsp; {productDetail.Code}
                  </Link>
                </li>
                <li>
                  <Link className="active" to="#">
                    <span>Category</span> : &emsp; Household
                  </Link>
                </li>
                <li>
                  <Link to="#" className="active">
                    <span>Availibility</span> : &emsp; In Stock
                  </Link>
                </li>
                <li>
                  <Link className="active" to="#">
                    <span>Material</span> : &emsp; {productDetail.Material}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="active">
                    <span>Quantity</span> : &emsp; {productDetail.Quantity}
                  </Link>
                </li>
              </ul>
              <div className="card_area d-flex justify-content-between align-items-center mt-15 pl-20 pr-20">
                <div className="product_count">
                  <span
                    className="inumber-decrement"
                    onClick={() => setTotal(total - 1 < 0 ? 0 : total - 1)}
                  >
                    <AiOutlineMinus />
                  </span>
                  <input
                    className="input-number"
                    type="text"
                    value={total}
                    min="0"
                    max="10"
                    readOnly
                  ></input>
                  <span
                    className="number-increment"
                    onClick={() => setTotal(total + 1)}
                  >
                    <AiOutlinePlus />
                  </span>
                </div>
                <Link to="#" className="btn_3">
                  add to cart
                </Link>
                <Link to="#" className="like_us">
                  <AiOutlineHeart />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row s_product_inner justify-content-between mt-15">
          <div className="col-12">
            <h3>Description</h3>
            <p className="plr-15">{productDetail.Description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
