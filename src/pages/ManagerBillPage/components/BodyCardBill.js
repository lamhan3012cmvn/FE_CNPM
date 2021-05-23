import React from "react"
import { useSelector } from "react-redux"
import { FormatNumberToMoney } from "../../../common/functions"
import { getStatus } from "../../../common/functions"
import { objStatus } from "../../../common/constants/default"

const BodyCardBill = props => {
  const { bill } = props
  const { products } = bill
  return (
    <div>
      {products.map(product => {
        return (
          <div className="card-body row" key={product._id}>
            <div className="col-4 d-flex justify-content-between">
              <div className="d-flex justify-content-center align-items-center">
                <img src={product.Products.Image[0]} alt="avatar" />
                <span>{product.Products.Name}</span>
              </div>
              <span>x{product.total}</span>
            </div>
            <div className="col-2">
              <span>
                {FormatNumberToMoney(product.total * product.Products.Price)}
              </span>
              <p>Thanh toán khi nhận hàng</p>
            </div>
            <div className="col-2">
              <span>{getStatus(objStatus, bill.status)}</span>
              <p>Hãy đánh giá sản phẩm</p>
            </div>
            <div className="col-2">
              <span>J&T Express</span>
            </div>
            <div className="col-2">
              <span className="text-primary" style={{ cursor: "pointer" }}>
                Đánh giá
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BodyCardBill
