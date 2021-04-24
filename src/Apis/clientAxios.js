/* eslint-disable no-console */
import axios from "axios"
import queryString from "query-string"
import Cookie from "js-cookie"
const axiosClient = axios.create({
  baseURL: "http://localhost:3333/",
  timeout: 10000,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(
  config => {
    console.log(
      `LHA:  ===> file: clientAxios.js ===> line 17 ===> config`,
      config
    )
    //Handle token here ...
    const token = Cookie.get("token")
    config.headers.authorization = `Bearer ${token}`

    return config
  },
  err => {
    console.log(err)
  }
)
axiosClient.interceptors.response.use(
  res => {
    if (res && res.data) return res.data
    return res
  },
  err => {
    //Handle err
    // eslint-disable-next-line no-console
    console.log(err)
  }
)

export default axiosClient
