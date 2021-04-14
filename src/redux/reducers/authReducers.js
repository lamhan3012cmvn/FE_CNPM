import * as actionTypes from "../constants/authConstants"

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loading: true
      }
    case actionTypes.LOGIN_SUCCESS: {
      return action.payload
    }
    case actionTypes.LOGIN_FAIL:
      return {
        error: action.payload
      }
    case actionTypes.LOGOUT_REQUEST:
      return {
        loading: true
      }
    case actionTypes.LOGOUT_SUCCESS:
      return action.payload

    default:
      return state
  }
}

export const registerReducer = (state = { message: {} }, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        loading: true
      }
    case actionTypes.REGISTER_SUCCESS:
      return {
        message: action.payload,
        loading: false
      }
    case actionTypes.REGISTER_FAIL:
      return {
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
