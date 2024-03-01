import { ADD_TO_CART, ADD_TO_SELL, REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData: [],
};

const initialsellState = {
    sellData: [],
};

export function cardItems(state = initialState, action) {
    // console.log(initialState)
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            }
        default:
            return state;
    }
}

export function sellItems(state = initialsellState, action) {
    switch (action.type) {
        case ADD_TO_SELL:
            return {
                ...state,
                sellData: action.data
            }

        default:
            return state;
    }
}
