import React from 'react';

// styles
import css from './Button.css';

export const Button = (props) => (
    <button className={css.root} onClick={props.onClick}>
        {props.children}
    </button>
);
