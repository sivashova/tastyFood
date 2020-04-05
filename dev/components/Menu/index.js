import React from 'react';

import { MENU_ITEMS } from './constants';

const Menu = () => (
    <ul className='menu'>
        {MENU_ITEMS.map((item, index) => (
            <li
                key={index}
                className='menuItem'
            >
                <a href='#' className='menuLink'>
                    {item}
                </a>
                <span className='menuDivider'>|</span>
            </li>
        ))}
    </ul>
);

export default Menu;