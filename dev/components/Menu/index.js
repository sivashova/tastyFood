import React from 'react';

import { MENU_ITEMS } from './constants';

// styles
import css from './Menu.css';

const Menu = () => (
    <ul className={css.root}>
        {MENU_ITEMS.map((item, index) => (
            <li
                key={index}
                className={css.item}
            >
                <a href='#' className={css.link}>
                    {item}
                </a>
                <span className={css.divider}>|</span>
            </li>
        ))}
    </ul>
);

export default Menu;