import ProductItem from "../../../common/components/ProductItem"
import Slider from "react-slick"
import TitleList from "../../../common/components/TitleList"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllProductApi } from "../../../redux/_actions/Product/Category/category.Action"
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
  const products = useSelector(state => state.product.products)
  const page = 1
  const limit = 24
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductApi({ page, limit }))
  }, [])

  return (
    <>
      <section className="product_list section_padding">
        <div className="container">
          <TitleList title="awesome" content="shop" />
          <div className="row">
            <div className="col-lg-12">
              <div className="product_list_slider owl-carousel">
                <div className="single_product_list_slider">
                  <Slider {...settings}>
                    <div>
                      <div className="row align-items-center justify-content-between">
                        {products &&
                          products.map((e, i) => (
                            <div className="col-lg-3 col-sm-6" key={i}>
                              <ProductItem product={e} />
                            </div>
                          ))}
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
