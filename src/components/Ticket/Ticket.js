import React from "react";

import classes from './Ticket.module.scss';

import logo from './logoS7.svg';

const Ticket = () => {
    return (
        <div className={classes['ticket']}>
            <div className={classes['ticket__head']}>
                <div className={classes['ticket__price']}>13400 Р</div>
                <img className={classes['ticket__logo']} src={logo} alt='Логотип авиакомпании' />
            </div>
            <div className={classes['ticket__line']}>
                <div className={classes['ticket__info']}>
                    <div className={classes['ticket__info--name']}>
                        MOW – HKT
                    </div>
                    <div className={classes['ticket__info--value']}>
                        10:45 – 08:00
                    </div>
                </div>
                <div className={classes['ticket__info']}>
                    <div className={classes['ticket__info--name']}>
                        В пути
                    </div>
                    <div className={classes['ticket__info--value']}>
                        21ч 15м
                    </div>
                </div>
                <div className={classes['ticket__info']}>
                    <div className={classes['ticket__info--name']}>
                        2 пересадки
                    </div>
                    <div className={classes['ticket__info--value']}>
                        HKG, JNB
                    </div>
                </div>
            </div>
            <div className={classes['ticket__line']}>
                <div className={classes['ticket__info']}>
                    <div className={classes['ticket__info--name']}>
                        MOW – HKT
                    </div>
                    <div className={classes['ticket__info--value']}>
                        11:20 – 00:50
                    </div>
                </div>
                <div className={classes['ticket__info']}>
                    <div className={classes['ticket__info--name']}>
                        В пути
                    </div>
                    <div className={classes['ticket__info--value']}>
                        13ч 30м
                    </div>
                </div>
                <div className={classes['ticket__info']}>
                    <div className={classes['ticket__info--name']}>
                        1 пересадка
                    </div>
                    <div className={classes['ticket__info--value']}>
                        HKG
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Ticket;