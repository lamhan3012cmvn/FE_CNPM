import React from "react"
import ProductItem from "./ProductItem"
import { Carousel } from "antd"
import Slider from "react-slick"
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  cssEase: "linear"
}
const ProductList = () => {
  return (
    <>
      <section class="product_list section_padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="section_tittle text-center">
                <h2>
                  awesome <span>shop</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="product_list_slider owl-carousel">
                <div class="single_product_list_slider">
                  <Slider {...settings}>
                    <div>
                      <div class="row align-items-center justify-content-between">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                      </div>
                    </div>
                    <div>
                      <div class="row align-items-center justify-content-between">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                      </div>
                    </div>
                    <div>
                      <div class="row align-items-center justify-content-between">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                      </div>
                    </div>
                    <div>
                      <div class="row align-items-center justify-content-between">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                      </div>
                    </div>
                  </Slider>
                  {/* <div class="row align-items-center justify-content-between">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                  </div>
                  <div class="row align-items-center justify-content-between">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductList
