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

export function loginUser(dataToSubmit) {
  return async dispatch => {
    try {
      loading(dispatch, true)
      const data = await authAPI.login(dataToSubmit)
      console.log(
        `LHA:  ===> file: user.Action.js ===> line 19 ===> data`,
        data
      )
      loading(dispatch)
      return {
        type: LOGIN_USER_SUCCESS,
        payload: { userId: data }
      }
    } catch {
      loading(dispatch)
      return {
        type: LOGIN_USER_FAIL,
        payload: null
      }
    }
  }
}

export const authRequest = () => async dispatch => {
  try {
    // loading(dispatch, true)
    console.log("authReq")
    const data = await authAPI.getAuth()
    console.log(`LHA:  ===> file: user.Action.js ===> line 38 ===> data`, data)
    // loading(dispatch)
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
