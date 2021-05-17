/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "cart/"
const getCartUser = async () => {
  try {
    // const res = await axiosClient.get(`${url}getCategory`)
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}

const createCartUser = async () => {
  try {
    // const res = await axiosClient.get(`${url}getCategory`)
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}

const updateCartUser = async () => {
  try {
    // const res = await axiosClient.get(`${url}getCategory`)
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}

const deleteCartUser = async () => {
  try {
    // const res = await axiosClient.get(`${url}getCategory`)
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}
const Cart = { getCartUser, createCartUser, updateCartUser, deleteCartUser }

export default Cart
