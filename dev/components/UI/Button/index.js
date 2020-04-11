import React from 'react';

export const Button = (props) => (
    <button className='button'>
        <span className='buttonText'>
            {props.children}
        </span>
    </button>
);