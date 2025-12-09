import React, { useEffect, useState } from 'react'
import "./TicTacToe.css"
import { useDispatch, useSelector } from 'react-redux'
import { reset, setMoves, setPlayer } from '../slice/TicTacToeSlice'
function TicTacToe() {
  const dispatch = useDispatch()
  const moves = useSelector(state => state.TicTacToe.moves)
  const player = useSelector(state => state.TicTacToe.player)

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="">
      <div className="choosePlayer">
        <button className='' onClick={() => dispatch(setPlayer("X"))} disabled={player !==""}>X</button>
        <button className='' onClick={() => dispatch(setPlayer("O"))} disabled={player !==""}>O</button>
        <button className='' onClick={() => { dispatch(reset()) }}>Reset</button>
      </div>

      {player !== "" ? (
        <div className='ttt'>
          <div className="container" >
            {
              moves.map(el => (
                <button className="block" key={el.value} onClick={() => dispatch(setMoves({ value: el.value, occupied: true, player: player }))} disabled={el.occupied}>{el.player}</button>
              ))
            }
          </div>
        </div>
      ) : (
        <h1>pleas choose a sysmbol</h1>
      )}

    </div>

  )
}

export default TicTacToe
