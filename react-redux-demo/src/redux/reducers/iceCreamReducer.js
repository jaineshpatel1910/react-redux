import { BUY_ICECREAM } from "../type";

const initialIceCreamState = {
    numberOfIceCreams: 7
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }
        default: return state
    }
}
export default iceCreamReducer