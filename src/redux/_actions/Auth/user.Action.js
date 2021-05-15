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

const loading = (loading = false) => dispatch => {
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
      dispatch(loading(true))
      const res = await authAPI.login(dataToSubmit)
      if (res.success) {
        dispatch(loading(true))
        dispatch(loginUserSuccess(res.data))
        return true
      }
      dispatch(loading())
      dispatch(loginUserFail())
      return false
    } catch {
      dispatch(loading())
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
    type: GET_USER_FAIL,
    payload: {}
  }
}

export const authRequest = () => async dispatch => {
  try {
    dispatch(loading(true))
    const res = await authAPI.getAuth()
    if (res.success) {
      dispatch(loading())
      dispatch(getUserSuccess(res.data))
      return { ...res.data, isAuth: true }
    } else {
      dispatch(loading())
      dispatch(getUserFail())
      return { isAuth: false }
    }
  } catch {
    dispatch(loading())
    dispatch(getUserFail())
    return { isAuth: false }
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
    dispatch(loading(true))
    const res = await authAPI.register(body)
    if (!res.success) {
      dispatch(loading())
      dispatch(registerUserFail())
    } else {
      dispatch(loading())
      dispatch(registerUserSuccess(res.data))
    }
    return res.success
  } catch (err) {
    console.log(err)
    dispatch(loading())
    dispatch(registerUserFail())
    return false
  }
}

export const verifyUser = body => async dispatch => {
  try {
    dispatch(loading(true))
    const res = await authAPI.verify(body)
    if (!res.success) {
      dispatch(loading())
      dispatch(registerUserFail())
    } else {
      dispatch(loading())
      dispatch(registerUserSuccess(res.data))
    }
    return res.success
  } catch (err) {
    console.log(err)
    dispatch(loading())
    dispatch(registerUserFail())
    return false
  }
}
