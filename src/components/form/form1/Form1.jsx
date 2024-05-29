import React from 'react'

const Form1 = ({placeholder ,label ,hintmsg}) => {
  return (
    <>
     <form action="#">
        <input type="text" placeholder={placeholder} />
        <label htmlFor="">{label}</label>
        <p>{hintmsg}</p>
        </form> 
    </>
  )
}

export default Form1
