import React from 'react'

const Square = (props) => {
  let {value} = props
  console.log(props);
  return (
    <div>{value}</div>

  )
}

export default Square