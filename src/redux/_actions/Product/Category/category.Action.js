import {
  GET_ALL_PRODUCT_BY_CATEGORY_FAIL,
  GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS
} from "./type"
import productApi from "../../../../Apis/Product.Api"
import { changeLoading } from "../../System/app.Action"

const loading = (loading = false) => dispatch => {
  dispatch(changeLoading(loading))
}

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
    dispatch(loading(true))
    const data = await productApi.getAll()
    dispatch(loading())
    dispatch(getAllProductsSuccess(data))
    return true
  } catch (err) {
    console.log(err)
    dispatch(loading())
    dispatch(getAllProductsFail())
    return false
  }
}

export function getAllProductsByCategorySuccess(data) {
  return {
    type: GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS,
    payload: data
  }
}

export function getAllProductsByCategoryFail() {
  return {
    type: GET_ALL_PRODUCT_BY_CATEGORY_FAIL,
    payload: []
  }
}

export const getAllProductByCategoryApi = id => async dispatch => {
  try {
    dispatch(loading(true))
    const data = await productApi.getByCate(id)
    dispatch(loading())
    dispatch(getAllProductsByCategorySuccess(data))
    return true
  } catch (err) {
    console.log(err)
    dispatch(loading())
    dispatch(getAllProductsByCategoryFail())
    return false
  }
}

export function getAllProductDetailSuccess(data) {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: data
  }
}

export function getAllProductDetailFail() {
  return {
    type: GET_PRODUCT_DETAIL_FAIL,
    payload: {}
  }
}

export const getAllProductDetailApi = id => async dispatch => {
  try {
    dispatch(loading(true))
    const data = await productApi.getById(id)
    dispatch(getAllProductDetailSuccess(data))
    dispatch(loading())
  } catch (err) {
    console.log(err)
    dispatch(getAllProductDetailFail())
    dispatch(loading())
  }
}
