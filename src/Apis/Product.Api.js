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
// const getByCate = async (id, page = 1, limit = 12) => {
//   try {
//     const res = await axiosClient.get(`${url}getProductsByCategory`, {
//       params: {
//         page: page,
//         limit: limit,
//         idCategory: id
//       }
//     })
//     return res.data
//   } catch (err) {
//     console.log(err)
//     return null
//   }
// }
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

const Product = { getAll, getById, getFilter }

export default Product
