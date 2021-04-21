import axios from "axios"
import queryString from "query-string"

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  headers: { "content-type": "application/json" },
  paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async config => {
  //Handle token here ...
  return config
})
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
