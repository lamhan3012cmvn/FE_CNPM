import axiosClient from "./clientAxios.js"
import Cookie from "js-cookie"
class Auth {
  constructor(url) {
    this.url = url
  }
  getAll(params) {
    return axiosClient.get(this.url, { params })
  }
  async login(body) {
    const res = await axiosClient.post(`${this.url}/login`, { ...body })
    Cookie.set("token", res.data.token)
    Cookie.set("tokenExp", res.data.tokenExp)
    return res.data._id
  }
  async getAuth() {
    const res = await axiosClient.get(`${this.url}/getAuth`)
    console.log(`LHA:  ===> file: Auth.Api.js ===> line 22 ===> res`, res)
    return res
  }
}
const auth = new Auth("auth")

export default auth
