import * as actionTypes from "../constants/cartConstants"

export const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload
      return {
        ...state,
        loading: false,
        cartItem: item.details.map(x => {
          return x
        }),
        total: item.total
      }

    case actionTypes.SUB_QTY_FROM_CART:
      const it = action.payload

      const product = state.cartItem.find(x => x.id === it.product)
      console.log("it", product)
      return {
        ...state,
        cartItem: state.cartItem.map(x => {
          if (x.id === product.id) {
            x.quantity = it.quantity

            return x
          } else {
            return x
          }
        }),
        total: it.total
      }
    case actionTypes.PLUS_QTY_FROM_CART:
      const its = action.payload

      const products = state.cartItem.find(x => x.id === its.product)

      return {
        ...state,
        cartItem: state.cartItem.map(x => {
          if (x.id === products.id) {
            x.quantity = its.quantity
            return x
          } else {
            return x
          }
        }),
        total: its.total
      }
    case actionTypes.REMOVE_FROM_CART:
      const itrmv = action.payload
      console.log(state)
      return {
        ...state,
        cartItem: state.cartItem.filter(x => x.id !== itrmv.id),
        total: itrmv.total
      }
    default:
      return state
  }
}
