import userReducer from "./Auth/user.Reducers"
import systemReucer from "./System/app.Reducer"
const rootReducers = { user: userReducer, system: systemReucer }
export default rootReducers
