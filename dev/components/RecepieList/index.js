import React from 'react';
import PropTypes from 'prop-types';
import Recepie from '../Recepie';


const RecepieList = ({ list }) => (
    <ul className='recepieList'>
        {list.map((item, i) => <Recepie item={item} key={i} />)}
    </ul>
);

RecepieList.propTypes = {
    list: PropTypes.array,
};

export default RecepieList;