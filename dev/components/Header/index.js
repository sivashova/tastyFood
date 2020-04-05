import React from 'react';
import Menu from '../Menu';

const Header = () => (
    <header className='header'>
        <h1 className='headerTitle'>Tasty Food</h1>
        <div className='headerSubTitle'>
            Ваш путеводитель в мир кулинарии
        </div>
        <Menu />
    </header>
);

export default Header;