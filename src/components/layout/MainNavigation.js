import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css"


//<header   set of navigational links.
//<nav> tag defines a set of navigation links.
// <ul><li> bulleted list
// class is for bootstrap
const MainNavigation =()=>{
    return(
        <header 
        className={classes.header} 
        >
            <div className={classes.logo} >W3YZ</div>
            <nav>
            <ul class="nav">
                <li class="nav-item">
                    <Link to={"/"} > ALL meetup link </Link>
                </li>
                <li class="nav-item">
                    <Link to={"/new-meetup"} > new-meetup link </Link>
                </li>
                <li class="nav-item">
                    <Link to={"/favorites"} > favorites link </Link>
                </li>
                <li class="nav-item">
                    <Link to={"/W3YZ"}> W3YZ</Link>
                </li>
            </ul>
            </nav>
          
                <nav>
                    <ul>
                        <li>
                            <Link> Login</Link>
                        </li>
                        <button type="button" class="btn btn-success">
                            get started
                        </button>
                    </ul>
                </nav>
            
        </header>
    )
}

export default MainNavigation;