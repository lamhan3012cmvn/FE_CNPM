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
      const res = await authAPI.login(dataToSubmit)
      if (res.success) {
        dispatch(loginUserSuccess(res.data))
        return true
      }
      dispatch(loginUserFail())
      return false
    } catch {
      dispatch(loginUserFail())
      return false
    }
  }
}

export const getUserSuccess = data => {
  return {
    type: GET_USER_SUCCESS,
    payload: data
  }
}

export const getUserFail = () => {
  return {
    type: GET_USER_SUCCESS,
    payload: {}
  }
}

export const authRequest = () => async dispatch => {
  try {
    const res = await authAPI.getAuth()
    if (res.success) dispatch(getUserSuccess(res.data))
    else dispatch(getUserFail())
  } catch {
    loading(dispatch)
    dispatch(getUserFail())
  }
}

export function logoutUser() {
  Cookies.remove("token")
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
