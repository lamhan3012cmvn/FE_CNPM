import ProductItem from "../../../common/components/ProductItem"
import Slider from "react-slick"
import TitleList from "../../../common/components/TitleList"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllProductApi } from "../../../redux/_actions/Product/Category/category.Action"
import AppSlider from "../../../common/components/AppSlider"
const settings = {
  dots: false,
  infinite: false,
  centerPadding: "60px",
  slidesToShow: 4,
  speed: 700,
  rows: 2,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2500,
  initialSlide: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
const ProductList = ({ title, products }) => {
  return (
    <>
      <section className="product_list section_padding">
        <div className="container">
          <TitleList title={title} content="shop" />
          <div className="row">
            <div className="col-lg-12">
              <Slider {...settings}>
                {products.map((e, i) => (
                  <div key={i}>
                    <ProductItem product={e} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductList
