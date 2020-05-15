import React from 'react';
import PropTypes from "prop-types";

import { Icon } from '../UI/Icon';

// icons
import EditIcon from '../../static/icons/edit.svg'
import DeleteIcon from '../../static/icons/delete.svg'

// styles
import css from './Recepie.css';

const Recepie = ({ item, isFake }) => {
    if (isFake) {
        return (
            <li className={css.rootFake} />
        )
    }
    return (
        <li className={css.root}>
            <div className={css.holder}>
                <div className={css.imageHolder}>
                    <img className={css.image} src={item.src} alt=""/>
                </div>
                <div className={css.info}>
                    <div>
                        <a className={css.title} href='#'>
                            {item.name}
                            <Icon glyph={EditIcon} className={css.icon}/>
                            <Icon glyph={DeleteIcon} className={css.icon}/>
                        </a>
                    </div>
                    <ul>
                        {item.ingredients.map((item, i) => (
                            <li className={css.ingredient} key={i}>
                                <b>{item.name}:</b>
                                <span className={css.quantity}>
                                    {item.quantity}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    )
};

Recepie.propTypes = {
    item: PropTypes.object,
    isFake: PropTypes.bool,
};

export default Recepie;