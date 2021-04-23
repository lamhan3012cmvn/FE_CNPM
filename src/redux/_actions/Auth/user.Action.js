import authAPI from "../../../Apis/Auth.Api"
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS
} from "./type"
import { changeLoading } from "../System/app.Action"

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
    } catch {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: null
      })
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

// export function logoutUser() {
//   const request = axios
//     .get(`${USER_SERVER}/logout`)
//     .then(response => response.data)

//   return {
//     type: LOGOUT_USER,
//     payload: request
//   }
// }
