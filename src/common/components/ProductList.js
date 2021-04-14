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
      <section className="product_list section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                <h2>
                  awesome <span>shop</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product_list_slider owl-carousel">
                <div className="single_product_list_slider">
                  <Slider {...settings}>
                    <div>
                      <div className="row align-items-center justify-content-between">
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
                      <div className="row align-items-center justify-content-between">
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
                      <div className="row align-items-center justify-content-between">
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
                      <div className="row align-items-center justify-content-between">
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
