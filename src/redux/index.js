import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import rootReducers from "./_reducers/index"

const middleware = [thunk]

const reducer = combineReducers({ ...rootReducers })

const store = createStore(reducer, applyMiddleware(...middleware))

export default store
