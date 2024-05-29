import React from 'react'

const PrimaryBtn = ({fronticon,titel ,backicon}) => {
  return (
    <div>
        <button>{fronticon}{titel}{backicon} </button>
    </div>
  )
}

export default PrimaryBtn
