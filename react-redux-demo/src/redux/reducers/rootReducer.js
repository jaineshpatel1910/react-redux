import cakeReducer from './cakeReducer'
import iceCreamReducer from './iceCreamReducer'
import userReducer from './userReducer'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer