import React from 'react'
import './button.css';
import { Link } from 'react-router-dom';

const Button = ({ title, onClick }) => {
    return (
        <>
            <Link to={'/user'}>Shift to Users</Link>
            <hr />
            <button onClick={onClick} className='button-component'>
                {title}
            </button>
        </>
    )
}

export default Button

