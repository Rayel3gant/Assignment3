import { combineReducers } from "@reduxjs/toolkit";
import favReducer from "../redux/slices/favSlice"

const rootReducer=combineReducers({
    fav:favReducer
})

export default rootReducer