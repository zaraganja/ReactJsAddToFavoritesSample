import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css"


//<header   set of navigational links.
//<nav> tag defines a set of navigation links.
// <ul><li> bulleted list
const MainNavigation =()=>{
    return(
        <header className={classes.header} >
            <div className={classes.logo} >React Meetups</div>
            <nav>
            <ul>
                <li>
                    <Link to={"/"} > ALL meetup link </Link>
                </li>
                <li>
                    <Link to={"/new-meetup"} > new-meetup link </Link>
                </li>
                <li>
                    <Link to={"/favorites"} > favorites link </Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;