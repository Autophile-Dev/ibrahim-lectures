import React from 'react'
import './button.css';

const Button = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className='button-component'>
            {title} h1
        </button>
    )
}

export default Button

