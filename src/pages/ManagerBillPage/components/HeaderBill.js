import React from "react"

const HeaderBill = () => {
  return (
    <div class="row title-colum-tab d-flex align-items-center my-3">
      <span class="col-4">Sản phẩm</span>
      <span class="col-2">Tổng đơn hàng</span>
      <span class="col-2">
        Trạng thái <br /> Đếm ngược
      </span>
      <select
        class="col-2"
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none"
        }}
      >
        <option>Vận chuyển</option>
      </select>
      <span class="col-2">Thao tác</span>
    </div>
  )
}

export default HeaderBill
