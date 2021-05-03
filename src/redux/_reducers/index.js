import userReducer from "./Auth/user.Reducers"
import systemReducer from "./System/app.Reducer"
import interiorReducer from "./InteriorDesign/interior.Reducers"

const rootReducers = {
  user: userReducer,
  system: systemReducer,
  interior: interiorReducer
}
export default rootReducers
