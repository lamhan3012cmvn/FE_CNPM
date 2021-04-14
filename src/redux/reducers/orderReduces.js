import * as actionTypes from "../constants/oderConstants"

export const oderReducers = (state = { oderItem: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_ODER:
      const item = action.payload
      const existItem = state.cartItem.find(x => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map(x => {
            if (x.product === item.product) {
              return x
            }
          })
        }
      } else {
        return {
          ...state,
          oderItem: [...state.oderItem, item]
        }
      }
    case actionTypes.REMOVE_FROM_ODER:
      return {
        cartItem: state.cartItem.filter(x => x.product !== action.payload)
      }
    default:
      return state
  }
}
