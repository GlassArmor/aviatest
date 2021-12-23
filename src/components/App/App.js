import React from "react";

import FilterMenu from "../FilterMenu";
import Logo from "../Logo";
import TicketList from "../TicketList/TicketList";

import classes from './App.module.scss';

const App = () => {


    return (
        <div className={classes['app-wrapper']}>
            <div className={classes['app-wrapper__logo']}>
                <Logo />
            </div>
            <div className={classes['app-wrapper__inner']}>
                <FilterMenu />
                <TicketList />
            </div>  
        </div>
    );
};

export default App;