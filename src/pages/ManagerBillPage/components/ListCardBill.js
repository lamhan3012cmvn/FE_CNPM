import React from "react"
import CardBill from "./CardBill"

const ListCardBill = props => {
  const { Bills } = props

  return (
    <div className="wrap-cart row">
      {Bills.map(bill => {
        return <CardBill bill={bill} key={bill._id} />
      })}
    </div>
  )
}

export default ListCardBill
