/* eslint-disable import/no-anonymous-default-export */
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER
} from "../../_actions/Auth/type"

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER_FAIL:
      return { ...state, loginSuccess: action.payload }
    case LOGIN_USER_SUCCESS:
      return { ...state, loginSuccess: action.payload }
    case AUTH_USER:
      return { ...state, userData: action.payload }
    case LOGOUT_USER:
      return { ...state }
    default:
      return state
  }
}
