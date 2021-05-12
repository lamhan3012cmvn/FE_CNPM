/* eslint-disable import/no-anonymous-default-export */
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  AUTH_USER,
  LOGOUT_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from "../../_actions/Auth/type"

const initState = {
  user: {},
  isLogin: false
}
export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN_USER_FAIL:
      return { ...state, user: action.payload, isLogin: false }
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, isLogin: true }
    case AUTH_USER:
      return { ...state, user: action.payload, isLogin: true }
    case LOGOUT_USER:
      return { ...state, user: action.payload, isLogin: false }
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload }
    case REGISTER_USER_FAIL:
      return { ...state, user: action.payload }
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, isLogin: true }
    case GET_USER_FAIL:
      return { ...state, user: {}, isLogin: false }
    default:
      return state
  }
}
