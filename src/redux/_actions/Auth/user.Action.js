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

export function Test(value) {
  return {
    type: "abc",
    payload: value
  }
}
export function loginUser(dataToSubmit) {
  return async dispatch => {
    try {
      const data = await authAPI.login(dataToSubmit)
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data
      })
      return true
    } catch {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: {}
      })
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

export const registerUser = body => async dispatch => {
  try {
    const data = await authAPI.register(body)
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data
    })
    return true
  } catch (err) {
    console.log(err)
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: {}
    })
    return false
  }
}
