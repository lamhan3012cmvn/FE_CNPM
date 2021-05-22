/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "cart/"
const getCartUser = async () => {
  try {
    const res = await axiosClient.get(`${url}getCart`)
    console.log(`LHA:  ===> file: Cart.Api.js ===> line 8 ===> res`, res)
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
    console.log(err)
    return {
      success: false,
      data: {}
    }
  }
}

const createCartUser = async resData => {
  try {
    console.log(
      `LHA:  ===> file: Cart.Api.js ===> line 29 ===> resData`,
      resData
    )
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
    console.log(err)
    return {
      success: false
    }
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
