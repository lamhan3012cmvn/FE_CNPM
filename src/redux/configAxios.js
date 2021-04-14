import axios from "axios"
import queryString from "query-string"
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:4000",
  headers: { "content-type": "application/json" },
  paramsSerializer: params => queryString.stringify(params)
})

instance.interceptors.request.use(async config => {
  return config
})

export default instance
