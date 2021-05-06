import userReducer from "./Auth/user.Reducers"
import systemReducer from "./System/app.Reducer"
import interiorReducer from "./InteriorDesign/interior.Reducers"
import productReducer from "./Product/index"

const rootReducers = {
  user: userReducer,
  system: systemReducer,
  interior: interiorReducer,
  filter: productReducer.filter
}
export default rootReducers
