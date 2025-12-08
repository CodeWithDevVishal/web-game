import React from 'react'
import TicTacToe from '../components/TicTacToe'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homettt'>
       <br/>
       <Link to="tictactoe">Link tictactoe</Link>
    </div>
  )
}

export default Home
