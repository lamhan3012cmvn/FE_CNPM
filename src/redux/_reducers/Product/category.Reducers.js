/* eslint-disable import/no-anonymous-default-export */

import {
  GET_ALL_PRODUCT_BY_CATEGORY_FAIL,
  GET_ALL_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  CHANGE_PAGE,
  SEARCH_PRODUCT,
  RESET_FILTER,
  CATEGORY_PRODUCT,
  CHANGE_LIMIT,
  GET_ALL_PRODUCT_HOME_SUCCESS,
  GET_ALL_PRODUCT_HOME_FAIL
} from "../../_actions/Product/Category/type"

const initState = {
  productHome: [],
  products: [],
  productDetail: {},
  total: 0,
  limit: 12,
  page: 1,
  strSearch: "",
  pages: 0,
  idCategory: ""
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT_HOME_SUCCESS:
      return { ...state, productHome: action.payload.products }
    case GET_ALL_PRODUCT_HOME_FAIL:
      return { ...state, productHome: [] }
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        total: action.payload.total,
        pages: action.payload.pages
      }
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
    case SEARCH_PRODUCT:
      return {
        ...state,
        strSearch: action.payload,
        page: 1,
        limit: 12,
        idCategory: ""
      }
    case RESET_FILTER:
      return { ...state, strSearch: "", page: 1, limit: 12, idCategory: "" }
    case CHANGE_PAGE:
      return { ...state, page: action.payload }
    case CATEGORY_PRODUCT:
      return {
        ...state,
        strSearch: "",
        page: 1,
        limit: 12,
        idCategory: action.payload
      }
    case CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload
      }
    default:
      return state
  }
}
