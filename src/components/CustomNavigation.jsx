import React from 'react'
import { Link } from 'react-router-dom'

function CustomNavigation() {
  return (
    <div>
      <nav>
        <Link to="/web-game/">Home</Link>
      </nav>
    </div>
  )
}

export default CustomNavigation