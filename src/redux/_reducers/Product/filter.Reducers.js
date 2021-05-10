/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_FILTER_FAIL,
  GET_ALL_FILTER_SUCCESS
} from "../../_actions/Product/Filter/type"

const initState = {
  rooms: []
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_ALL_FILTER_SUCCESS:
      return { ...state, rooms: action.payload }
    case GET_ALL_FILTER_FAIL:
      return { ...state, rooms: {} }
    default:
      return state
  }
}
