/* eslint-disable import/no-anonymous-default-export */

import {
  GET_ALL_PRODUCT_BY_CATEGORY_FAIL,
  GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS
} from "../../_actions/Product/Category/type"

const initState = {
  products: [],
  productDetail: {},
  total: 0,
  limit: 10,
  page: 2
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT_SUCCESS:
      return { ...state, products: action.payload }
    case GET_ALL_PRODUCT_FAIL:
      return { ...state, products: action.payload }
    case GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS:
      return { ...state, products: action.payload }
    case GET_ALL_PRODUCT_BY_CATEGORY_FAIL:
      return { ...state, products: action.payload }
    case GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: action.payload }
    case GET_PRODUCT_DETAIL_FAIL:
      return { ...state, productDetail: action.payload }
    default:
      return state
  }
}
