import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

// Reducers
import { cartReducer } from "./reducers/cartReducers"
import {
  getProductsReducer,
  getProductsDetailReducer
} from "./reducers/productReducers"
import { loginReducer, registerReducer } from "./reducers/authReducers"

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductsDetailReducer,
  users: loginReducer,
  register: registerReducer
})

const middleware = [thunk]

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : []

const INITIAL_STATE = {
  cart: {
    cartItem: cartFromLocalStorage
  },
  users: {
    loggedIn: false
  }
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
