import {cardItems} from "./reducer";
import {sellItems} from "./reducer";
import { combineReducers } from 'redux'

export default combineReducers({
    cardItems,
    sellItems
});