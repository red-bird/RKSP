import React from "react";
import classes from './Header.module.css';
import Spinner from "../spinner/Spinner";
import logo from './../../../img/logo.svg'

const Header = () => {
    return (
        <header className={classes.header}>
            <Spinner className={classes.headerItem} img={logo} style={classes.img}/>
            <p className={classes.headerItem}>Меню</p>
            <p className={classes.headerItem}>Корзина</p>
        </header>
    );
};

export default Header;
