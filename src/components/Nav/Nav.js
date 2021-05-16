import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './../Friends/Friends';

const Nav = (props) => {
	return (
		<nav className={classes.nav}>
        <div className={classes.item}><NavLink to="/Content" activeClassName={classes.active}>Profile</NavLink></div>
        <div className={classes.item}><NavLink to="/Dialogs" activeClassName={classes.active}>Messages</NavLink></div>
        <div className={classes.item}><NavLink to="/News" activeClassName={classes.active}>News</NavLink></div>
        <div className={classes.item}><NavLink to="/Music" activeClassName={classes.active}>Music</NavLink></div>
        <div className={classes.item}><NavLink to="/Photo" activeClassName={classes.active}>Photo</NavLink></div>
        <div className={classes.item}><NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink></div>
        <div className={classes.item}><NavLink to="/Users" activeClassName={classes.active}>Users</NavLink></div>
        <div className={classes.item}><NavLink to="/Login" activeClassName={classes.active}>Login</NavLink></div>
      	<Friends />
      </nav>
    )
}

export default Nav;