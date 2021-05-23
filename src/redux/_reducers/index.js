import userReducer from "./Auth/user.Reducers"
import systemReducer from "./System/app.Reducer"
import interiorReducer from "./InteriorDesign/interior.Reducers"
import productReducer from "./Product/index"
import cartReducer from "./Cart/Cart.Reducer"
import billManager from "./BillManager/BillManager.Reducer"

const rootReducers = {
  user: userReducer,
  system: systemReducer,
  interior: interiorReducer,
  filter: productReducer.filter,
  product: productReducer.category,
  cart: cartReducer,
  billManager: billManager
}
export default rootReducers
