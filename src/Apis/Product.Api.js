/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "product/"
const getAll = async () => {
  try {
    const res = await axiosClient.get(`${url}getAllProducts`)
    console.log(`LHA:  ===> file: Product.Api.js ===> line 8 ===> res`, res)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}
const getById = async id => {
  try {
    const res = await axiosClient.get(`${url}getProduct/${id}`)
    console.log(`LHA:  ===> file: Product.Api.js ===> line 18 ===> res`, res)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}

const Product = { getAll, getById }

export default Product
