import axios from "axios"
import queryString from "query-string"

const axiosClient = axios.create({
  baseURL: "http://localhost:3333/",
  timeout: 20000,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
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
