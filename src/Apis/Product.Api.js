/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "product/"
const getAll = async () => {
  try {
    const res = await axiosClient.get(`${url}getAllProducts`)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}
const getById = async id => {
  try {
    const res = await axiosClient.get(`${url}getProduct/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}

const Product = { getAll, getById }

export default Product
