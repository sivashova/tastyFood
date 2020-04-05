import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';


const Page = ({ children }) => (
    <div className='mainPage'>
        <Layout>
            {children}
        </Layout>
    </div>
);

Page.propTypes = {
    children: PropTypes.any,
};


export default Page;