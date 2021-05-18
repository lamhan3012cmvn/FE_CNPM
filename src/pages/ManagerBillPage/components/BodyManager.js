import React from "react"
import HeaderBill from "./HeaderBill"
import ListCardBill from "./ListCardBill"

const BodyManager = () => {
  return (
    <div className="content-tab  mt-5">
      <div className="tab-item">
        <div className="row d-flex justify-content-between">
          <h3 className="soLuong font-weight-bold">119 Đơn hàng</h3>
          <span className="btnChonNgay">Chọn ngày/In phiếu hàng loạt</span>
        </div>
        <HeaderBill />
        <ListCardBill />
      </div>
    </div>
  )
}

export default BodyManager
