/* eslint-disable no-console */
import authAPI from "../../../Apis/Auth.Api"
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  LOGOUT_USER
} from "./type"
import { changeLoading } from "../System/app.Action"
import Cookies from "js-cookie"

const loading = (dispatch, loading = false) => {
  dispatch(changeLoading(loading))
}

export function loginUserSuccess(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data
  }
}

export function loginUserFail() {
  return {
    type: LOGIN_USER_FAIL,
    payload: {}
  }
}

export function loginUser(dataToSubmit) {
  return async dispatch => {
    try {
      const data = await authAPI.login(dataToSubmit)
      dispatch(loginUserSuccess(data))
      return true
    } catch {
      dispatch(loginUserFail())
      return false
    }
  }
}

export const authRequest = () => async dispatch => {
  try {
    const data = await authAPI.getAuth()
    return {
      type: GET_USER_SUCCESS,
      payload: data
    }
  } catch {
    loading(dispatch)
    return {
      type: GET_USER_FAIL,
      payload: {}
    }
  }
}

export function logoutUser() {
  Cookies.remove("token")
  Cookies.remove("tokenExp")
  return {
    type: LOGOUT_USER,
    payload: {}
  }
}

export const registerUserSuccess = data => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: data
  }
}

export const registerUserFail = () => {
  return {
    type: REGISTER_USER_FAIL,
    payload: {}
  }
}

export const registerUser = body => async dispatch => {
  try {
    const res = await authAPI.register(body)
    if (!res.success) {
      dispatch(registerUserFail())
    } else {
      dispatch(registerUserSuccess(res.data))
    }
    return res.success
  } catch (err) {
    console.log(err)
    dispatch(registerUserFail())
    return false
  }
}

export const verifyUser = body => async dispatch => {
  try {
    const res = await authAPI.verify(body)
    if (!res.success) {
      dispatch(registerUserFail())
    } else {
      dispatch(registerUserSuccess(res.data))
    }
    return res.success
  } catch (err) {
    console.log(err)
    dispatch(registerUserFail())
    return false
  }
}
