import { LOADING } from "./type"
export function changeLoading(loading = false) {
  console.log("changeLoading")
  return {
    type: LOADING,
    payload: loading
  }
}
