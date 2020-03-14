import React from 'react';
import PropTypes from "prop-types";

const Recepie = ({ item }) => (
    <li className='recepieItem'>
        <img className='recepieImage' src={item.src} alt=""/>
        <div className='recepieInfo'>
            <a className='recepieTitle' href='#'>
                {item.name}
            </a>
            <ul>
                {item.ingredients.map((item, i) => (
                    <li className='ingredientItem' key={i}>
                        <b>{item.name}:</b>
                        <span className='ingredientQuantity'>
                            {item.quantity}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </li>
);

Recepie.propTypes = {
    item: PropTypes.object,
};

export default Recepie;