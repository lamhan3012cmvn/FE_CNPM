/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "category/"
const getAll = async () => {
  try {
    const res = await axiosClient.get(`${url}getCategory`)
    return res.data
  } catch (err) {
    return null
  }
}
const Product = { getAll }

export default Product
