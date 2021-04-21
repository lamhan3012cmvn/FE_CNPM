/* eslint-disable import/no-anonymous-default-export */
import { LOADING } from "../../_actions/System/type"

const initState = {
  loading: false
}
export default function (state = initState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}
