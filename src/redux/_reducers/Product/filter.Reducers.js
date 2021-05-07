/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_ROOM_FAIL,
  GET_ALL_ROOM_SUCCESS
} from "../../_actions/Product/Filter/type"

const initState = {
  category: [],
  room: []
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_ALL_ROOM_SUCCESS:
      return { ...state, room: action.payload }
    case GET_ALL_ROOM_FAIL:
      return { ...state, room: action.payload }
    case GET_ALL_CATEGORY_SUCCESS:
      return { ...state, category: action.payload }
    case GET_ALL_CATEGORY_FAIL:
      return { ...state, category: action.payload }
    default:
      return state
  }
}
