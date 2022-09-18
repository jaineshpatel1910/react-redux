import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamHookContainer = () => {

    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams)
    console.log("🚀 ~ file: IceCreamHookContainer.js ~ line 8 ~ IceCreamHookContainer ~ numberOfIceCreams", numberOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Number of IceCreams - {numberOfIceCreams}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy ice cream</button>
        </div>
    )
}

export default IceCreamHookContainer