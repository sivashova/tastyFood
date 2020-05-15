import React from 'react';
import PropTypes from 'prop-types';

// styles
import css from './Layout.css';

const Layout = ({ children }) => (
    <div className={css.root}>
        {children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;