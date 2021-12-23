import React from "react";

import classes from './FilterMenuItem.module.scss';

const FilterMenuItem = ({title}) => {

    return (
        <li className={classes['filter-menu__item']}>
            {title}
        </li>
    )
};

export default FilterMenuItem;