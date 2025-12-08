import { useEffect, useState } from 'react'

import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TicTacToe from './components/TicTacToe'
import CustomNavigation from './components/CustomNavigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CustomNavigation />
        <Outlet />

        <Routes >
          <Route path="" element={<Home />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </div>
    </>
  )
}

export default App
