import React from "react"
import { useSelector } from "react-redux"
import HeaderBill from "./HeaderBill"
import ListCardBill from "./ListCardBill"

const BodyManager = () => {
  const Bills = useSelector(state => state.billManager.currentBill)
  return (
    <div className="content-tab  mt-5">
      <div className="tab-item">
        <div className="row d-flex justify-content-between">
          <h3 className="soLuong font-weight-bold">{Bills.length} Đơn hàng</h3>
          <span className="btnChonNgay">Chọn ngày/In phiếu hàng loạt</span>
        </div>
        <HeaderBill />
        <ListCardBill Bills={Bills} />
      </div>
    </div>
  )
}

export default BodyManager
