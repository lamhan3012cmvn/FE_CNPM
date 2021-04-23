import { LOADING } from "./type"
export function changeLoading(loading = false) {
  return {
    type: LOADING,
    payload: loading
  }
}
