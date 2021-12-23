import React from "react";

import Ticket from '../Ticket';
import ListTabs from "../ListTabs";

import classes from './TicketList.module.scss';

const TicketList = () => {
    return (
        <div className={classes['ticket-list__wrapper']}>
            <ListTabs />
            <div className={classes['ticket-list']}>
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
            <button type='button' className={classes['ticket-list__showmore']}>
                Показать еще 5 билетов!
            </button>
        </div>
    );
};

export default TicketList;