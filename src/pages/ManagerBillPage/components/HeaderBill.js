import React from "react"

const HeaderBill = () => {
  return (
    <div className="row title-colum-tab d-flex align-items-center my-3">
      <span className="col-4">Sản phẩm</span>
      <span className="col-2">Tổng đơn hàng</span>
      <span className="col-2">
        Trạng thái <br /> Đếm ngược
      </span>
      <select
        className="col-2"
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none"
        }}
      >
        <option>Vận chuyển</option>
      </select>
      <span className="col-2">Thao tác</span>
    </div>
  )
}

export default HeaderBill
