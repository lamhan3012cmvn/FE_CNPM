import { GET_ALL_PRODUCT_FAIL, GET_ALL_PRODUCT_SUCCESS } from "./type"
import productApi from "../../../../Apis/Product.Api"

export function getAllProductsSuccess(data) {
  return {
    type: GET_ALL_PRODUCT_SUCCESS,
    payload: data
  }
}

export function getAllProductsFail() {
  return {
    type: GET_ALL_PRODUCT_FAIL,
    payload: []
  }
}

export const getAllProductApi = () => async dispatch => {
  try {
    const data = await productApi.getAll()
    dispatch(getAllProductsSuccess(data))
    return true
  } catch (err) {
    console.log(err)
    dispatch(getAllProductsFail())
    return false
  }
}
