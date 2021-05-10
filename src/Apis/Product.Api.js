/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "product/"
const getAll = async (page = 1, limit = 12) => {
  try {
    const res = await axiosClient.get(`${url}getAllProducts`, {
      params: {
        page: page,
        limit: limit
      }
    })
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

const getFilter = async () => {
  try {
    const res = await axiosClient.get(`${url}filter`)
    console.log(`LHA:  ===> file: Product.Api.js ===> line 29 ===> res`, res)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}

const Product = { getAll, getById, getFilter }

export default Product
