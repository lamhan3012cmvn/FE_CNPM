import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
// import reduxLogger from "redux-logger"
import rootReducers from "./_reducers/index"

// const middleware = [thunk, reduxLogger]
const middleware = [thunk]
const reducer = combineReducers({ ...rootReducers })

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
