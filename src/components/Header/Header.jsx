import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? `${classes.navLink} ${classes.navLinkActive}`
      : classes.navLink;
  };

  return (
    <header className={classes.appHeader}>
      <div className={classes.headerNav}>
        <NavLink to="/create" className={getNavLinkClass}>
          Create Poll
        </NavLink>
        <NavLink to="/" className={getNavLinkClass}>
          View Polls
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

