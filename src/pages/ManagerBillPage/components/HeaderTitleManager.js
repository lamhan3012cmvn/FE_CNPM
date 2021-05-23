import React from "react"
import { useDispatch } from "react-redux"
import { defaultStatusBill } from "../../../common/constants/default"
import { changeStatus } from "../../../redux/_actions/BillManager/billManager.Action"

const HeaderTitleManager = () => {
  const dispatch = useDispatch()
  const changeActive = (e, status) => {
    const current = document.querySelector("label.active")
    current.className = current.className.replace("active", "")
    e.target.className += " active"
    dispatch(changeStatus(status))
  }
  return (
    <div className="wrap-name-column">
      <label
        onClick={e => changeActive(e, defaultStatusBill.all)}
        className="active"
      >
        Tất cả
      </label>
      <label
        onClick={e => changeActive(e, defaultStatusBill.waitForConfirmation)}
        className=""
      >
        Chờ xác nhận
      </label>
      <label
        onClick={e => changeActive(e, defaultStatusBill.onGoing)}
        className=""
      >
        Đang giao
      </label>
      <label
        onClick={e => changeActive(e, defaultStatusBill.delivered)}
        className=""
      >
        Đã giao
      </label>
      <label
        onClick={e => changeActive(e, defaultStatusBill.cancelled)}
        className=""
      >
        Đã hủy
      </label>
      {/* <label onClick={changeActive} className="">
        Trả hàng/Hoàn tiền
      </label> */}
    </div>
  )
}

export default HeaderTitleManager
