import React from "react"
import { Link } from "react-router-dom"

const CartInterior = props => {
  const { interior } = props
  console.log(
    `LHA:  ===> file: CartInterior.js ===> line 6 ===> interior`,
    interior
  )

  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/InteriorDesign%2FTheLegend_168%2FThi%E1%BA%BFt%20k%E1%BA%BF%20n%E1%BB%99i%20th%E1%BA%A5t%20chung%20c%C6%B0%20The%20Legend%20(1).jpg?alt=media&token=3bcf6b11-2aa7-465d-8aeb-d61c80e735f9"
  return (
    <>
      <div className="single_product_item">
        <img src={interior.Images[0].img} alt="" style={{ height: "65%" }} />
        <div className="single_product_text">
          <h4>{interior.title}</h4>
          <Link to="#" className="add_cart">
            More<i className="ti-heart"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartInterior
