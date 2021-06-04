/* eslint-disable no-console */
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import Slider from "react-slick"

import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useRef, useState } from "react"
import { createCartUserApi } from "../../../redux/_actions/Cart/cart.Action"
import { BsStar, BsStarFill } from "react-icons/bs"

import ReviewItemProduct from "./ReviewItemProduct"
import FromRateProduct from "./FromRateProduct"
import { authRequest } from "../../../redux/_actions/Auth/user.Action"
import { FormatNumberToMoney } from "../../../common/functions"
import { PATH } from "../../../common/constants/path"

const SingleProduct = props => {
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
  const isLogin = useSelector(state => state.user.isLogin)

  const nextSlider = () => {
    refSlider.current.slickNext()
  }
  const prevSlider = () => {
    refSlider.current.slickPrev()
  }
  const history = useHistory()
  const handleAddCart = async () => {
    const res = await dispatch(authRequest())
    if (res && !res.isAuth) {
      history.push("/login")
    }
    dispatch(
      createCartUserApi({
        idProduct: productDetail._id,
        total: total
      })
    )
  }
  const renderOverall = () => {
    return ((productDetail && productDetail.Rate) || []).reduce(
      (t, v) => {
        switch (v.value) {
          case "5":
            t[5] = t[5] + 1
            break
          case "4":
            t[4] = t[4] + 1
            break
          case "3":
            t[3] = t[3] + 1
            break
          case "2":
            t[2] = t[2] + 1
            break
          case "1":
            t[1] = t[1] + 1
            break
          default:
            break
        }
        t[0] = t[0] + +v.value
        return t
      },
      [0, 0, 0, 0, 0, 0]
    )
  }
  const rate = renderOverall()
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
              <h2>{FormatNumberToMoney(~~productDetail.Price || 0)}</h2>
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
                  <button
                    className="inumber-decrement resetBtn"
                    onClick={() => setTotal(total - 1 < 0 ? 0 : total - 1)}
                  >
                    <AiOutlineMinus />
                  </button>
                  <input
                    className="input-number"
                    type="text"
                    value={total}
                    min="0"
                    max="10"
                    readOnly
                  ></input>
                  <button
                    className="number-increment resetBtn"
                    onClick={() => setTotal(total + 1)}
                  >
                    <AiOutlinePlus />
                  </button>
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
            {productDetail.Description ? (
              <p className="plr-15">{productDetail.Description}</p>
            ) : (
              <h4 className="text-center" style={{ color: "#FF0060" }}>
                Empty
              </h4>
            )}
          </div>
        </div>

        <div className="row review">
          <div className="col-lg-6">
            <div className="row total_rate">
              <div className="col-6">
                <div className="box_total">
                  <h5>Overall</h5>
                  <h4>
                    {(
                      rate[0] /
                      ((productDetail.Rate && productDetail.Rate.length) || 1)
                    ).toFixed(2)}
                  </h4>
                  <h6>
                    ({(productDetail.Rate && productDetail.Rate.length) || 0}{" "}
                    Reviews)
                  </h6>
                </div>
              </div>
              <div className="col-6">
                <div className="rating_list">
                  <h3>
                    Based on {productDetail.Rate && productDetail.Rate.length}{" "}
                    Reviews
                  </h3>
                  <ul className="list">
                    <li>
                      <span>5 Star</span>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill /> <span>{rate[5]}</span>
                    </li>
                    <li>
                      <span>4 Star</span>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar /> <span>{rate[4]}</span>
                    </li>
                    <li>
                      <span>3 Star</span>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                      <BsStar /> <span>{rate[3]}</span>
                    </li>
                    <li>
                      <span>2 Star</span>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStar />
                      <BsStar />
                      <BsStar /> <span>{rate[2]}</span>
                    </li>
                    <li>
                      <span>1 Star</span>
                      <BsStarFill />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar /> <span>{rate[1]}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="review_list">
              {productDetail &&
                productDetail.Rate &&
                productDetail.Rate.map((rate, index) => {
                  return <ReviewItemProduct currentRate={rate} key={index} />
                })}
            </div>
          </div>
          {isLogin ? (
            <FromRateProduct idProduct={productDetail._id} />
          ) : (
            <div
              className="col-lg-6 col-md-6 d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: "54px",
                height: "350px"
              }}
            >
              <div className="login_part_text text-center">
                <div className="login_part_text_iner">
                  <h2>Login</h2>
                  <p style={{ padding: "20px 0" }}>
                    Sign in to review your products
                  </p>
                  <Link to={PATH.login} className="btn_3">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
