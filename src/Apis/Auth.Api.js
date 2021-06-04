/* eslint-disable no-console */
import axiosClient from "./clientAxios.js"
import Cookie from "js-cookie"
import { toast } from "react-toastify"
import notify from "../common/Notify/index.js"

const url = "auth/"
const login = async body => {
  try {
    const res = await axiosClient.post(`${url}login`, { ...body })

    if (!res) {
      notify("Dang nhap that bai")
      return { data: {}, success: false }
    } else {
      Cookie.set("token", res.data.token)
      notify("Dang nhap thanh cong")
      return { data: {}, success: true }
    }
  } catch (err) {
    return {
      success: false
    }
  }
}
const register = async body => {
  try {
    const res = await axiosClient.post(`${url}register`, {
      email: body.Email,
      password: body.Password,
      fullName: body.FullName
    })
    toast(
      res ? "Đăng ký thành cồng vui lòng xác thực mật khẩu" : "Đăng ký thất bại"
    )
    return res ? { data: res || {}, success: true } : { success: false }
  } catch (err) {
    return {
      success: false
    }
  }
}

const verify = async body => {
  try {
    const res = await axiosClient.post(`${url}verify`, {
      email: body.Email,
      password: body.Password,
      otp: body.Otp
    })
    toast(
      res
        ? "Xac thuc tai khoan thanh cong chao mung ban da den website"
        : "Xac thuc tai khoan that bai"
    )
    return res ? { data: res || {}, success: true } : { success: false }
  } catch (err) {
    return {
      success: false
    }
  }
}

const getAuth = async () => {
  try {
    const res = await axiosClient.get(`auth/getAuth`)
    return res ? { data: res.data, success: true } : { success: false }
  } catch (err) {
    return null
  }
}

const updateProfile = async data => {
  try {
    const res = await axiosClient.post(`auth/updateProfile`, data)
    toast(res ? "Update profile success" : "Update profile Fail")
    return res ? { success: true } : { success: false }
  } catch (err) {
    return null
  }
}

const Auth = { getAuth, login, register, verify, updateProfile }

export default Auth
