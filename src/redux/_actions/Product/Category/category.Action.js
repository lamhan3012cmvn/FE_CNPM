import {
  CHANGE_PAGE,
  GET_ALL_PRODUCT_BY_CATEGORY_FAIL,
  GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  SEARCH_PRODUCT,
  RESET_FILTER,
  CATEGORY_PRODUCT,
  CHANGE_LIMIT,
  GET_ALL_PRODUCT_HOME_SUCCESS,
  GET_ALL_PRODUCT_HOME_FAIL
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

export const getAllProductApi = reqData => async dispatch => {
  try {
    dispatch(loading(true))
    const res = await productApi.getAll(
      reqData.page,
      reqData.limit,
      reqData.search,
      reqData.idCategory
    )
    dispatch(loading())
    dispatch(getAllProductsSuccess(res))
    return true
  } catch (err) {
    console.log(err)
    dispatch(loading())
    dispatch(getAllProductsFail())
    return false
  }
}

export function getAllProductsHomeSuccess(data) {
  return {
    type: GET_ALL_PRODUCT_HOME_SUCCESS,
    payload: data
  }
}

export function getAllProductsHomeFail() {
  return {
    type: GET_ALL_PRODUCT_HOME_FAIL,
    payload: []
  }
}

export const getAllProductsHomeApi = () => async dispatch => {
  try {
    const res = await productApi.getAllHome()
    dispatch(getAllProductsHomeSuccess(res))
  } catch (err) {
    dispatch(getAllProductsHomeFail())
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

export function getProductDetailSuccess(data) {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: data
  }
}

export function getProductDetailFail() {
  return {
    type: GET_PRODUCT_DETAIL_FAIL,
    payload: {}
  }
}

export const getProductDetailApi = id => async dispatch => {
  try {
    dispatch(loading(true))
    const data = await productApi.getById(id)

    if (data) dispatch(getProductDetailSuccess(data))
    else dispatch(getProductDetailFail())
    dispatch(loading())
  } catch (err) {
    console.log(err)
    dispatch(getProductDetailFail())
    dispatch(loading())
  }
}
export const searchProduct = str => {
  return {
    type: SEARCH_PRODUCT,
    payload: str
  }
}

export const resetFilter = () => {
  return {
    type: RESET_FILTER,
    payload: {}
  }
}
export const filterCategory = id => {
  return {
    type: CATEGORY_PRODUCT,
    payload: id
  }
}

// CHANGE_LIMIT
export function changePage(nextPage) {
  return {
    type: CHANGE_PAGE,
    payload: nextPage
  }
}

export function changeLimit(limit) {
  return {
    type: CHANGE_LIMIT,
    payload: limit
  }
}

export const rateProduct = (idProduct, value, content) => async dispatch => {
  try {
    // dispatch(loading(true))
    const res = await productApi.rateProduct({ idProduct, value, content })
    console.log(
      `LHA:  ===> file: category.Action.js ===> line 175 ===> res`,
      res
    )
    if (res) {
      dispatch(getProductDetailApi(idProduct))
    }
    // dispatch(loading())
    // dispatch(getAllProductsSuccess(res))
    return true
  } catch (err) {
    console.log(err)
    dispatch(loading())
    dispatch(getAllProductsFail())
    return false
  }
}
