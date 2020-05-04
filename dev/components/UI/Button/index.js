import React from 'react';

export const Button = (props) => (
    <button className='button' onClick={props.onClick}>
        <span className='buttonText'>
            {props.children}
        </span>
    </button>
);
