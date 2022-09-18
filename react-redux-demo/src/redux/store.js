import { createStore } from "redux"
import cakeReducer from "./reducers/cakeReducer"
import rootReducer from "./reducers/rootReducer"

const store = createStore(rootReducer)

export default store