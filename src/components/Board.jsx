import React from 'react'
import Square from './Square'

const Board = (props) => {
  let {square} = props
  console.log(props);
    
  return (
    <div className="grid grid-cols-3 grid-rows-3 relative">
    <Square value={square[0]}/>
    <Square value={square[1]}/>
    <Square value={square[2]}/>
    <Square value={square[3]}/>
    <Square value={square[4]}/>
    <Square value={square[5]}/>
    <Square value={square[6]}/>
    <Square value={square[7]}/>
    <Square value={square[8]}/>



    </div>
  )
}

export default Board