import React from "react"
import BtnCartHeader from "../../../common/components/BtnCartHeader"
import { FormatNumberToMoney } from "../../../common/functions"

const totalBill = (products = []) => {
  return products.reduce((t, v) => {
    return (t = t + v.total * v.Products.Price)
  }, 0)
}
const HeaderCardBill = props => {
  const { bill } = props
  const { products } = bill

  return (
    <div className="card-header col-12 card-header_contextBx">
      <div className="row d-flex justify-content-between align-items-center plr-20">
        <p className="m-0">
          <span className="mr-15">Id Bill : {bill._id}</span>
          <span className="mr-15">
            Total Bill : {FormatNumberToMoney(totalBill(products))}
          </span>
        </p>
        <BtnCartHeader idPackage={bill._id} />
      </div>
    </div>
  )
}

export default HeaderCardBill
