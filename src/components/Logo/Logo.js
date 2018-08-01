import React from 'react';

import classes from './Logo.css'; 
import AppLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={AppLogo} alt="MyBurger"/>
    </div>
);

export default logo;

