/* eslint-disable import/no-anonymous-default-export */
import { defaultStatusBill } from "../../../common/constants/default"
import {
  GET_BILL_STATUS_SUCCESS,
  GET_BILL_STATUS_FAIL,
  CHANGE_BILL_STATUS_SUCCESS,
  CHANGE_BILL_STATUS_FAIL,
  CHANGE_STATUS
} from "../../_actions/BillManager/type"

const initState = {
  currentBill: [],
  total: 0,
  statusBill: "ALL"
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_BILL_STATUS_SUCCESS:
      return { ...state, currentBill: action.payload }
    case GET_BILL_STATUS_FAIL:
      return { ...state, currentBill: [] }
    case CHANGE_BILL_STATUS_SUCCESS:
      return { ...state, currentBill: action.payload }
    case CHANGE_BILL_STATUS_FAIL:
      return { ...state, currentBill: [] }
    case CHANGE_STATUS:
      return { ...state, statusBill: action.payload }
    default:
      return state
  }
}
