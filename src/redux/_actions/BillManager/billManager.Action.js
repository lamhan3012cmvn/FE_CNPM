import {
  GET_BILL_STATUS_SUCCESS,
  GET_BILL_STATUS_FAIL,
  CREATE_BILL_STATUS_FAIL,
  CREATE_BILL_STATUS_SUCCESS,
  CHANGE_STATUS,
  CHANGE_BILL_STATUS_FAIL,
  CHANGE_BILL_STATUS_SUCCESS
} from "./type"

// import { changeLoading } from "../System/app.Action"

import BillApi from "../../../Apis/Bill.Api"
import { getCartUserApi } from "../Cart/cart.Action"
import { defaultStatusBill } from "../../../common/constants/default"

// const loading = (loading = false) => dispatch => {
//   dispatch(changeLoading(loading))
// }

export function getBillStatusSuccess(data) {
  return {
    type: GET_BILL_STATUS_SUCCESS,
    payload: data
  }
}

export function getBillStatusFail() {
  return {
    type: GET_BILL_STATUS_FAIL,
    payload: []
  }
}

export const getBillStatusApi = status => async dispatch => {
  try {
    // dispatch(loading(true))
    const res = await BillApi.getBillStatusUser(status)
    if (res.success) {
      dispatch(getBillStatusSuccess(res.data))
    } else dispatch(getBillStatusFail())
    // dispatch(loading())
  } catch (err) {
    console.log(err)
    dispatch(getBillStatusFail())
    // dispatch(loading())
  }
}

export function createBillSuccess(data) {
  return {
    type: CREATE_BILL_STATUS_SUCCESS,
    payload: data
  }
}

export function createBillFail() {
  return {
    type: CREATE_BILL_STATUS_FAIL,
    payload: {}
  }
}

// export const createBillApi = () => async dispatch => {
//   try {
//     // dispatch(loading(true))
//     const res = await BillApi.createBill()
//     if (res.success) {
//       dispatch(getBillStatusApi())
//       dispatch(createBillSuccess())
//     } else dispatch(createBillFail())
//     // dispatch(loading())
//   } catch (err) {
//     dispatch(createBillFail())
//     // dispatch(loading())
//   }
// }

export const createBillApi = () => async dispatch => {
  try {
    // dispatch(loading(true))
    const resApi = await BillApi.createBill()
    if (resApi.success) dispatch(getCartUserApi())
  } catch (err) {
    // dispatch(loading())
  }
}

export const changeStatus = status => {
  return {
    type: CHANGE_STATUS,
    payload: status
  }
}

export function getChangeBillStatusSuccess(data) {
  return {
    type: CHANGE_BILL_STATUS_SUCCESS,
    payload: data
  }
}

export function getChangeBillStatusFail() {
  return {
    type: CHANGE_BILL_STATUS_FAIL,
    payload: []
  }
}

export const getChangeBillStatusApi = (status, idPackage) => async dispatch => {
  try {
    // dispatch(loading(true))
    const resApi = await BillApi.changeBillStatus({ status, idPackage })
    if (resApi.success) dispatch(getBillStatusApi(defaultStatusBill.onGoing))
    // dispatch(loading())
  } catch (err) {
    console.log(err)
    // dispatch(loading())
  }
}
