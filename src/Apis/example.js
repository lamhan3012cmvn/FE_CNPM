import axiosClient from "./clientAxios"
class Example {
  constructor(url) {
    this.url = url
  }
  getAll(params) {
    return axiosClient.get(this.url, { params })
  }
}
const ex = new Example("example")

export default ex
