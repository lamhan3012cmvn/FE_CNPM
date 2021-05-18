import React from "react"

const HeaderTitleManager = () => {
  const changeActive = e => {
    const current = document.querySelector("label.active")
    current.className = current.className.replace("active", "")
    e.target.className += " active"
  }
  return (
    <div className="wrap-name-column">
      <label onClick={changeActive} className="active">
        Tất cả
      </label>
      <label onClick={changeActive} className="">
        Chờ xác nhận
      </label>
      <label onClick={changeActive} className="">
        Chờ lấy hàng
      </label>
      <label onClick={changeActive} className="">
        Đang giao
      </label>
      <label onClick={changeActive} className="">
        Đã giao
      </label>
      <label onClick={changeActive} className="">
        Đã hủy
      </label>
      <label onClick={changeActive} className="">
        Trả hàng/Hoàn tiền
      </label>
    </div>
  )
}

export default HeaderTitleManager
