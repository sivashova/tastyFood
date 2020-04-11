import React from 'react';
import PropTypes from 'prop-types';
import Recepie from '../Recepie';
import { Button } from '../UI/Button';


const RecepieList = ({ list }) => (
    <>
        <ul className='recepieList'>
            {list.map((item, i) => <Recepie item={item} key={item.name} />)}
            <li className='recepieItemFake' />
        </ul>
        <div className='recepieButton'>
            <Button>
                Показать еще
            </Button>
        </div>
    </>
);

RecepieList.propTypes = {
    list: PropTypes.array,
};

export default RecepieList;