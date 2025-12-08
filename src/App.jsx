import { useEffect, useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TicTacToe from './components/TicTacToe'
import CustomNavigation from './components/CustomNavigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CustomNavigation />

        <Routes >
          {/* <Route path='/web-game/'> */}
            <Route path="" element={<Home />} />
            <Route path="tictactoe" element={<TicTacToe />} />
          {/* </Route> */}
        </Routes>
      </div>
    </> 
  )
}

export default App
