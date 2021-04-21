import authAPI from "../../../Apis/Auth.Api"
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  USER_SERVER
} from "./type"
import { changeLoading } from "../System/app.Action"

const loading = (dispatch, loading = false) => {
  dispatch(changeLoading(loading))
}

export function loginUser(dataToSubmit) {
  return async dispatch => {
    try {
      loading(dispatch, true)

      const data = await auth.login(dataToSubmit)
      console.log(
        `LHA:  ===> file: user.Action.js ===> line 14 ===> data`,
        data
      )
      loading(dispatch)
      return {
        type: LOGIN_USER,
        payload: data
      }
    } catch {
      loading(dispatch)
      return {
        type: LOGIN_USER,
        payload: {}
      }
    }
  }
}

export const authRequest = () => async dispatch => {
  try {
    loading(dispatch, true)
    const data = await authAPI.login()
    console.log(`LHA:  ===> file: user.Action.js ===> line 14 ===> data`, data)
    loading(dispatch)
    return {
      type: AUTH_USER,
      payload: data
    }
  } catch {
    loading(dispatch)
    return {
      type: AUTH_USER,
      payload: {}
    }
  }
}

export function auth() {
  // const request = axios
  //   .get(`${USER_SERVER}/auth`)
  //   .then(response => response.data)

  return {
    type: AUTH_USER,
    payload: {}
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
