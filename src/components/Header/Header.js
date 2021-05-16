import React from 'react';
import head from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return <header className={head.header}>
        <img src="https://img.icons8.com/plasticine/452/discord-new-logo.png" />
        <div className={head.loginBlock}>
        	{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
}

export default Header