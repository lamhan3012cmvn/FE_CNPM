import {
  GET_CART_USER_SUCCESS,
  GET_CART_USER_FAIL,
  CREATE_CART_USER_FAIL,
  CREATE_CART_USER_SUCCESS,
  DELETE_CART_USER_SUCCESS,
  DELETE_CART_USER_FAIL,
  UPDATE_CART_USER_SUCCESS,
  UPDATE_CART_USER_FAIL
} from "./type"

import { changeLoading } from "../System/app.Action"

import Cart from "../../../Apis/Cart.Api"

const loading = (loading = false) => dispatch => {
  dispatch(changeLoading(loading))
}

export function getCartUserSuccess(data) {
  return {
    type: GET_CART_USER_SUCCESS,
    payload: data
  }
}

export function getCartUserFail() {
  return {
    type: GET_CART_USER_FAIL,
    payload: []
  }
}

export const getCartUserApi = () => async dispatch => {
  try {
    dispatch(loading(true))
    const res = await Cart.getCartUser()
    if (res.success) {
      dispatch(getCartUserSuccess(res.data))
    } else dispatch(getCartUserFail())
    dispatch(loading())
  } catch (err) {
    console.log(err)
    dispatch(getCartUserFail())
    dispatch(loading())
  }
}

export function createCartUserSuccess(data) {
  return {
    type: CREATE_CART_USER_SUCCESS,
    payload: data
  }
}

export function createCartUserFail() {
  return {
    type: CREATE_CART_USER_FAIL,
    payload: {}
  }
}

export const createCartUserApi = resData => async dispatch => {
  try {
    dispatch(loading(true))
    const res = await Cart.createCartUser(resData)
    if (res.success) {
      dispatch(getCartUserApi())
      dispatch(createCartUserSuccess())
    } else dispatch(createCartUserFail())
    dispatch(loading())
  } catch (err) {
    console.log(err)
    dispatch(createCartUserFail())
    dispatch(loading())
  }
}

export function deleteCartUserSuccess() {
  return {
    type: DELETE_CART_USER_SUCCESS,
    payload: {}
  }
}

export function deleteCartUserFail() {
  return {
    type: DELETE_CART_USER_FAIL,
    payload: {}
  }
}

export const deleteCartUserApi = () => async dispatch => {
  try {
    dispatch(loading(true))
    const data = await Cart.deleteCartUser()
    if (data) {
      dispatch(getCartUserApi())
      dispatch(deleteCartUserSuccess())
    } else dispatch(deleteCartUserFail())
    dispatch(loading())
  } catch (err) {
    console.log(err)
    dispatch(deleteCartUserFail())
    dispatch(loading())
  }
}

export function updateCartUserSuccess() {
  return {
    type: UPDATE_CART_USER_SUCCESS,
    payload: {}
  }
}

export function updateCartUserFail() {
  return {
    type: UPDATE_CART_USER_FAIL,
    payload: {}
  }
}

export const updateCartUserApi = async data => {
  try {
    await Cart.updateCartUser(data)
  } catch (err) {
    console.log(err)
  }
}
