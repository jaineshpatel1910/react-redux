import cakeReducer from './cakeReducer'
import iceCreamReducer from './iceCreamReducer'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer