import React from "react";

import FilterMenuItem from "../FilterMenuItem";

import classes from './FilterMenu.module.scss';

const FilterMenu = () => {

    return (
        <div className={classes['filter-menu']}>
            <h3 className={classes['filter-menu__header']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
            <ul className={classes['filter-menu__list']}>
                <FilterMenuItem title={'Все'} />
                <FilterMenuItem title={'Без пересадок'} />
                <FilterMenuItem title={'1 пересадка'} />
                <FilterMenuItem title={'2 пересадки'} />
                <FilterMenuItem title={'3 пересадки'} />
            </ul>
        </div>
    )
};

export default FilterMenu;