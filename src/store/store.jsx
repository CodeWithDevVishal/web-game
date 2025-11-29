import { configureStore } from "@reduxjs/toolkit"
import TicTacToeSlice from "../slice/TicTacToeSlice"

const store = configureStore({
    reducer:{
        TicTacToe:TicTacToeSlice,
    },
    devTools:true
})

export default store