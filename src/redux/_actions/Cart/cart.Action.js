import {
  GET_CART_USER_SUCCESS,
  GET_CART_USER_FAIL,
  CREATE_CART_USER_FAIL,
  CREATE_CART_USER_SUCCESS
} from "./type"

import { changeLoading } from "../../System/app.Action"

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
    payload: {}
  }
}

export const getCartUserApi = () => async dispatch => {
  try {
    dispatch(loading(true))
    const data = await Cart.getCartUser()
    console.log(
      `LHA:  ===> file: category.Action.js ===> line 92 ===> data`,
      data
    )
    if (data) dispatch(getCartUserSuccess(data))
    else dispatch(getCartUserFail())
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

export const createCartUserApi = () => async dispatch => {
  try {
    dispatch(loading(true))
    const data = await Cart.getCartUser()
    console.log(
      `LHA:  ===> file: category.Action.js ===> line 92 ===> data`,
      data
    )
    if (data) dispatch(createCartUserSuccess(data))
    else dispatch(createCartUserFail())
    dispatch(loading())
  } catch (err) {
    console.log(err)
    dispatch(createCartUserFail())
    dispatch(loading())
  }
}
