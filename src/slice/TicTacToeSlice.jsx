import { createSlice } from "@reduxjs/toolkit";

const TicTacToeSlice = createSlice(
    {
        name:"TicTacToe",
        initialState:{
            playerOne:[],
            playertwo:[],
            PayerAi:[],

        },
        reducers:{
            setPlayerOne:(state,{payload})=>{
                state.playerOne = state.playerOne.concat(payload)
            }
        }
    }
)

export default TicTacToeSlice