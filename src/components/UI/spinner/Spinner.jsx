import React from 'react';
import classes from './Spinner.module.css';

const Spinner = (props) => {
    return (
        <div>
            <img src={props.img} className={`${classes.spinner} ${props.style}`} alt="logo" />
        </div>
    );
};

export default Spinner;