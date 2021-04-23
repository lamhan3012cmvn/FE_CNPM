import userReducer from "./Auth/user.Reducers"
import systemReducer from "./System/app.Reducer"

const rootReducers = { user: userReducer, system: systemReducer }
export default rootReducers
