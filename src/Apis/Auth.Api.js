/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"
import Cookie from "js-cookie"
import notify from "../common/Notify/index.js"

const login = async body => {
  try {
    const res = await axiosClient.post(`auth/login`, { ...body })

    Cookie.set("token", res.data.token)
    Cookie.set("tokenExp", res.data.tokenExp)
    // notify("zo day roi nek")
    return res.data
  } catch (err) {
    console.log(err)
    return {}
  }
}

const getAuth = async () => {
  try {
    const res = await axiosClient.get(`auth/getAuth`)
    console.log(`LHA:  ===> file: Auth.Api.js ===> line 16 ===> res`, res)

    return res
  } catch (err) {
    console.log(err)
    return null
  }
}

const Auth = { getAuth, login }

export default Auth
