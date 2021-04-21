import axiosClient from "./clientAxios.js"
class Auth {
  constructor(url) {
    this.url = url
  }
  getAll(params) {
    return axiosClient.get(this.url, { params })
  }
  login(body) {
    const res = axiosClient.post(`${this.url}/login`, { ...body })
    return res
  }
}
const auth = new Auth("auth")

export default auth
