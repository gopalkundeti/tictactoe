import React, { useState } from 'react'
import Board from './Board'

const Tictac = () => {
    const [square,setSquare] = useState(Array(9).fill(null))
  return (
    <>
    <div>Tailwind</div>
    <Board square={square}/>
    </>
  )
}

export default Tictac