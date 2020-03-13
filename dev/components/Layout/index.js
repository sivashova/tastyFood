import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
    <div className='layout'>
        {children}
    </div>
);

Layout.PropTypes = {
    children: PropTypes.any,
};

export default Layout;