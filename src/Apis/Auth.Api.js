/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"
import Cookie from "js-cookie"

const login = async body => {
  try {
    const res = await axiosClient.post(`auth/login`, { ...body })

    Cookie.set("token", res.data.token)
    Cookie.set("tokenExp", res.data.tokenExp)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}

const getAuth = async () => {
  try {
    const res = await axiosClient.get(`auth/getAuth`)
    console.log(`LHA:  ===> file: Auth.Api.js ===> line 16 ===> res`, res)
    if (res.status === 200) {
      return res
    }
    return null
  } catch (err) {
    console.log(err)
    return null
  }
}

const Auth = { getAuth, login }

export default Auth
