import React from 'react'
import "../button.css"
const SimpleBtn = ({title}) => {
  return (
    <div>
      <button id='btn'>{title}</button>
    </div>
  )
}

export default SimpleBtn
