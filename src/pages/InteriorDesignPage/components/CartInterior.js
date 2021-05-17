import React from "react"
import { Link } from "react-router-dom"

const CartInterior = props => {
  const { interior } = props
  return (
    <>
      <Link to={`/interiorDesign/${interior._id}`}>
        <div className="single_product_item">
          <img src={interior.Images[0].img} alt="" style={{ height: "65%" }} />
          <div className="single_product_text">
            <h4>{interior.title}</h4>
            <span className="add_cart">More</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CartInterior
