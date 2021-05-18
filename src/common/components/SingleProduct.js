/* eslint-disable no-console */
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Slider from "react-slick"

import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useRef, useState } from "react"
import { createCartUserApi } from "../../redux/_actions/Cart/cart.Action"
const SingleProduct = () => {
  const dispatch = useDispatch()

  const refSlider = useRef(null)
  const [total, setTotal] = useState(1)
  const settings = {
    customPaging: function (i) {
      return <img src={productDetail.Image[i]} alt="" />
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const productDetail = useSelector(state => state.product.productDetail)

  const nextSlider = () => {
    refSlider.current.slickNext()
  }
  const prevSlider = () => {
    refSlider.current.slickPrev()
  }
  const handleAddCart = () => {
    dispatch(
      createCartUserApi({
        idProduct: productDetail._id,
        total: total
      })
    )
  }

  return (
    <div className="product_image_area section_padding">
      <div className="container">
        <div className="row s_product_inner justify-content-between">
          <div className="col-lg-6">
            <div className="product_slider_img">
              <Slider {...settings} ref={refSlider}>
                {Object.keys(productDetail).length !== 0 &&
                  productDetail.Image.map((img, index) => {
                    return (
                      <div key={index}>
                        <img src={img} alt=""></img>
                      </div>
                    )
                  })}
              </Slider>
              <h5
                style={{
                  textAlign: "center",
                  marginTop: "80px",
                  fontSize: "18px"
                }}
              >
                <span onClick={prevSlider} style={{ cursor: "pointer" }}>
                  previous &emsp;&emsp;
                </span>
                <span>|</span>
                <span onClick={nextSlider} style={{ cursor: "pointer" }}>
                  &emsp;&emsp; next
                </span>
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
                <button className="btn_3" onClick={handleAddCart}>
                  add to cart
                </button>
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
