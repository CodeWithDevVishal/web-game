import { createSlice } from "@reduxjs/toolkit";

const TicTacToeSlice = createSlice(
    {
        name: "TicTacToe",
        initialState: {
            player: "",
            playerOne: [],
            playertwo: [],
            PayerAi: [],
            moves: [{ value: 1, occupied: false, player: "" }, { value: 2, occupied: false, player: "" }, { value: 3, occupied: false, player: "" }, { value: 4, occupied: false, player: "" }, { value: 5, occupied: false, player: "" }, { value: 6, occupied: false, player: "" }, { value: 7, occupied: false, player: "" }, { value: 8, occupied: false, player: "" }, { value: 9, occupied: false, player: "" },],
            temp: [{ value: 1, occupied: false, player: "" }, { value: 2, occupied: false, player: "" }, { value: 3, occupied: false, player: "" }, { value: 4, occupied: false, player: "" }, { value: 5, occupied: false, player: "" }, { value: 6, occupied: false, player: "" }, { value: 7, occupied: false, player: "" }, { value: 8, occupied: false, player: "" }, { value: 9, occupied: false, player: "" },]

        },
        reducers: {
            setPlayer: (state, { payload }) => {
                state.player = payload
                console.log(state.player);
            },
            setMoves: (state, { payload }) => {
                state.moves = state.moves.map(el => el.value === payload.value ? payload : el)
            },
            reset: (state) => {
                state.moves = state.temp
                state.player = ""
            },
            // ....................................................
            setPlayerOne: (state, { payload }) => {
                state.playerOne = state.playerOne.concat(payload)
            },
            setPlayerTwo: (state, { payload }) => {
                state.playerOne = state.playerOne.concat(payload)
            }

        }
    }
)

export const { setPlayer, setMoves, reset, setPlayerOne, setPlayerTwo } = TicTacToeSlice.actions
export default TicTacToeSlice.reducer