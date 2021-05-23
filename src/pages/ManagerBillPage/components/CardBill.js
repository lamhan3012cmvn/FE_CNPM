import React from "react"
import BodyCardBill from "./BodyCardBill"
import HeaderCardBill from "./HeaderCardBill"

const CardBill = props => {
  const { bill } = props
  return (
    <div
      className="card mb-3 col-12 px-0"
      style={{ width: "100%", border: "1px solid #FF0060" }}
    >
      <HeaderCardBill bill={bill} />

      <BodyCardBill bill={bill} />
    </div>
  )
}

export default CardBill
