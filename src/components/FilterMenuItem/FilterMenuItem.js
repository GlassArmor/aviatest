import React from "react";

import classes from './FilterMenuItem.module.scss';

const FilterMenuItem = ({title}) => {

    return (
        <li className={classes['filter-menu__item']}>
            <label>
                <input type='checkbox' className={classes['filter-menu__checkbox']} />
                <span className={classes['filter-menu__checkbox--custom']}></span>
                {title}
            </label>
        </li>
    )
};

export default FilterMenuItem;