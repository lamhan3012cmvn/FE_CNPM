/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "product/"
const getFilter = async () => {
  try {
    const res = await axiosClient.get(`${url}getAllProducts`)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}

const Product = { getFilter }

export default Product
