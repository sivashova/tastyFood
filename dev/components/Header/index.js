import React from 'react';
import Menu from '../Menu';

//styles
import css from './Header.css';

const Header = () => (
    <header className={css.root}>
        <h1 className={css.title}>Tasty Food</h1>
        <div className={css.subTitle}>
            Ваш путеводитель в мир кулинарии
        </div>
        <Menu />
    </header>
);

export default Header;