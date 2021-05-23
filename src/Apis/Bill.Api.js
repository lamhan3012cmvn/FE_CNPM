/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"
import notify from "../common/Notify"

const url = "pendingCart/"
const getBillStatusUser = async status => {
  try {
    const params = { status: status }
    const res = await axiosClient.get(`${url}customer/getPendingCart`, {
      params: params
    })
    if (res) {
      return {
        success: true,
        data: res.data
      }
    }
    return {
      success: false,
      data: []
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      data: []
    }
  }
}
const createBill = async () => {
  try {
    const res = await axiosClient.post(`${url}createPendingCart`)
    if (res) notify(res.message)
    if (res) {
      return {
        success: true
      }
    }
    return {
      success: false
    }
  } catch (err) {
    console.log(err)
    // return {
    //   success: false,
    //   data: []
    // }
  }
}

const changeBillStatus = async body => {
  try {
    const res = await axiosClient.post(`${url}changeStatus`, body)
    if (res) notify(res.message)
    if (res) {
      return {
        success: true
      }
    }
    return {
      success: false
    }
  } catch (err) {
    console.log(err)
    // return {
    //   success: false,
    //   data: []
    // }
  }
}
const Cart = { getBillStatusUser, createBill, changeBillStatus }

export default Cart
