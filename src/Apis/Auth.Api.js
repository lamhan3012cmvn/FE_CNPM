/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"
import Cookie from "js-cookie"
import { toast } from "react-toastify"

const url = "auth/"
const login = async body => {
  try {
    const res = await axiosClient.post(`${url}login`, { ...body })

    Cookie.set("token", res.data.token)
    Cookie.set("tokenExp", res.data.tokenExp)
    // notify("zo day roi nek")
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}
const register = async body => {
  try {
    toast("register")
    const res = await axiosClient.post(`${url}register`, {
      email: body.Email,
      password: body.Password,
      fullName: body.FullName
    })
    console.log("under", res)
    return res
  } catch (err) {
    console.log(err)
    return null
  }
}

const getAuth = async () => {
  try {
    const res = await axiosClient.get(`auth/getAuth`)
    return res
  } catch (err) {
    console.log(err)
    return null
  }
}

const Auth = { getAuth, login, register }

export default Auth
