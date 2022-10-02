// const { BUY_CAKE } = require("../type")
import { BUY_CAKE } from "../type"

const initialCakeState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - action.payload
        }
        default: return state;
    }
}
export default cakeReducer