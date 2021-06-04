/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "cart/"
const getCartUser = async () => {
  try {
    const res = await axiosClient.get(`${url}getCart`)
    if (res) {
      return {
        success: true,
        data: res.data.products
      }
    }
    return {
      success: false,
      data: {}
    }
  } catch (err) {
    return {
      success: false,
      data: {}
    }
  }
}

const createCartUser = async resData => {
  try {
    const res = await axiosClient.post(`${url}createCart`, resData)
    if (res) {
      return {
        success: true
      }
    }
    return {
      success: false
    }
  } catch (err) {
    return {
      success: false
    }
  }
}

const updateCartUser = async ({ idProduct, total, status }) => {
  try {
    await axiosClient.post(`${url}updateCart`, {
      idProduct,
      total,
      status
    })
    return true
  } catch (err) {
    return null
  }
}

const deleteCartUser = async () => {
  try {
    // const res = await axiosClient.get(`${url}getCategory`)
    return true
  } catch (err) {
    return null
  }
}
const Cart = { getCartUser, createCartUser, updateCartUser, deleteCartUser }

export default Cart
