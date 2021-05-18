/* eslint-disable import/no-anonymous-default-export */

import {
  GET_CART_USER_SUCCESS,
  GET_CART_USER_FAIL
} from "../../_actions/Cart/type"

const initState = {
  cartUser: []
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_CART_USER_SUCCESS:
      return { ...state, cartUser: action.payload }
    case GET_CART_USER_FAIL:
      return { ...state, cartUser: {} }
    default:
      return state
  }
}
