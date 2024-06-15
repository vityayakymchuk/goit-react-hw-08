import css from './AuthNav.module.css';
import clsx from 'clsx';
import { NavLink } from "react-router-dom";

export default function AuthNav() {

     const navLink = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
          };
  return (
      <nav className={css.nav}>
           <NavLink className={navLink} to="/register">Register</NavLink>
          <NavLink className={navLink} to="/login">Log in</NavLink>
    </nav>
  )
}
