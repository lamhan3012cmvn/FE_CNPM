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
    <div class="product_image_area section_padding">
      <div class="container">
        <div class="row s_product_inner justify-content-between">
          <div class="col-lg-7 col-xl-7">
            <div class="product_slider_img">
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
          <div class="col-lg-5 col-xl-4">
            <div class="s_product_text">
              <h5>
                previous <span>|</span> next
              </h5>
              <h3>Faded SkyBlu Denim Jeans</h3>
              <h2>$149.99</h2>
              <ul class="list">
                <li>
                  <Link class="active" to="#">
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
              <div class="card_area d-flex justify-content-between align-items-center">
                <div class="product_count">
                  <span class="inumber-decrement">
                    <i class="ti-minus"></i>
                  </span>
                  <input
                    class="input-number"
                    type="text"
                    value="1"
                    min="0"
                    max="10"
                  ></input>
                  <span class="number-increment">
                    <i class="ti-plus"></i>
                  </span>
                </div>
                <Link to="#" class="btn_3">
                  add to cart
                </Link>
                <Link to="#" class="like_us">
                  <i class="ti-heart"></i>
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
