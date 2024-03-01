import { ADD_TO_CART, ADD_TO_SELL, REMOVE_TO_CART } from "../constants"

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}


export const addToSell = (data) => {
    return {
        type: ADD_TO_SELL,
        data: data
    }
}


export const RemoveToCart = (index) => {
    console.warn('actionnnn', index);
    return {
        type: REMOVE_TO_CART,
    }
}