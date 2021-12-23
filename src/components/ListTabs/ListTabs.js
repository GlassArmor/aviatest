import React from "react";

import classes from './ListTabs.module.scss';

const FilterButtons = () => {

    return (
        <div className={classes['list-tabs']}>
            <button type='button' className={`${classes['list-tabs__item--active']} ${classes['list-tabs__item']}`}>
                Самый дешевый
            </button>
            <button type='button' className={classes['list-tabs__item']}>
                Самый быстрый
            </button>
            <button type='button' className={classes['list-tabs__item']}>
                Оптимальный
            </button>
        </div>
    );
};

export default FilterButtons;