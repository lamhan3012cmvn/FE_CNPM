/* eslint-disable no-console */
import { Link } from "react-router-dom"
import Slider from "react-slick"
import product_1 from "../../img/product/single-product/product_1.png"
const SingleProduct = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <Link to="#">
          <img src={product_1} alt="" />
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
  return (
    <div className="product_image_area section_padding">
      <div className="container">
        <div className="row s_product_inner justify-content-between">
          <div className="col-lg-7 col-xl-7">
            <div className="product_slider_img">
              <Slider {...settings}>
                <div>
                  <img src={product_1} alt=""></img>
                </div>
                <div>
                  <img src={product_1} alt=""></img>
                </div>
                <div>
                  <img src={product_1} alt=""></img>
                </div>
                <div>
                  <img src={product_1} alt=""></img>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="s_product_text">
              <h5>
                previous <span>|</span> next
              </h5>
              <h3>Faded SkyBlu Denim Jeans</h3>
              <h2>$149.99</h2>
              <ul className="list">
                <li>
                  <Link className="active" to="#">
                    <span>Category</span> : Household
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span>Availibility</span> : In Stock
                  </Link>
                </li>
              </ul>
              <p>
                First replenish living. Creepeth image image. Creeping can't,
                won't called. Two fruitful let days signs sea together all land
                fly subdue
              </p>
              <div className="card_area d-flex justify-content-between align-items-center">
                <div className="product_count">
                  <span className="inumber-decrement">
                    <i className="ti-minus"></i>
                  </span>
                  <input
                    className="input-number"
                    type="text"
                    value="1"
                    min="0"
                    max="10"
                  ></input>
                  <span className="number-increment">
                    <i className="ti-plus"></i>
                  </span>
                </div>
                <Link to="#" className="btn_3">
                  add to cart
                </Link>
                <Link to="#" className="like_us">
                  <i className="ti-heart"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
