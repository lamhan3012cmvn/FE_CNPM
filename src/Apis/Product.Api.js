/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"

const url = "product/"
const getAll = async (page = 1, limit = 12, search = "", idCategory = "") => {
  try {
    const res = await axiosClient.get(`${url}getAllProducts`, {
      params: {
        page: page,
        limit: limit,
        search: search,
        idCategory: idCategory
      }
    })
    return (
      res.data || {
        products: [],
        pages: 0,
        total: 0
      }
    )
  } catch (err) {
    console.log(err)
    return null
  }
}
const getAllHome = async () => {
  try {
    const res = await axiosClient.get(`${url}getAllProductsHome`)
    return (
      { products: res.data, pages: 0, total: 0 } || {
        products: [],
        pages: 0,
        total: 0
      }
    )
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

const getFilter = async () => {
  try {
    const res = await axiosClient.get(`${url}filter`)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}

const rateProduct = async data => {
  try {
    const res = await axiosClient.post(`${url}rateProduct`, {
      idProduct: data.idProduct,
      value: data.value,
      content: data.content
    })
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}

const Product = { getAll, getAllHome, getById, getFilter, rateProduct }

export default Product
