import React from "react"

const BodyCardBill = () => {
  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/cnpm-e5af3.appspot.com/o/Product%2FBanAnGo%2Fban-an-go-gina-71309003-3.jpg?alt=media&token=115f7d4a-8036-46c3-892f-f8f1594b5114"
  return (
    <div className="card-body row">
      <div className="col-4 d-flex justify-content-between">
        <div className="d-flex justify-content-center align-items-center">
          <img src={img1} alt="avatar" />
          <span>Nước hoa nam</span>
        </div>
        <span>x1</span>
      </div>
      <div className="col-2">
        <span>đ300.000</span>
        <p>Thanh toán khi nhận hàng</p>
      </div>
      <div className="col-2">
        <span>Đã giao</span>
        <p>Hãy đánh giá người mua trước 18-11-2020 nhé shop</p>
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
}

export default BodyCardBill
