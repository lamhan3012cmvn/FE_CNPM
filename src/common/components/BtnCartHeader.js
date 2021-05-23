import React from "react"
import { useDispatch } from "react-redux"
import { getChangeBillStatusApi } from "../../redux/_actions/BillManager/billManager.Action"
import { defaultStatusBill } from "../constants/default"

const BtnCartHeader = props => {
  const { idPackage } = props
  const dispatch = useDispatch()
  const handleClick = status => {
    dispatch(getChangeBillStatusApi(status, idPackage))
  }
  return (
    <p className="m-0">
      <button
        className="btn btn_cardHeader mr-15"
        onClick={() => handleClick(defaultStatusBill.cancelled)}
      >
        Cancel order
      </button>
      <button
        className="btn btn_cardHeader mr-15"
        onClick={() => handleClick(defaultStatusBill.delivered)}
      >
        Receive
      </button>
    </p>
  )
}

export default BtnCartHeader
