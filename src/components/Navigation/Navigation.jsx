import css from './Navigation.module.css'
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from '../../redux/contacts/selectors';

export default function Navigation() {

          const navLink = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
          };
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
  return (
      <nav className={css.nav}>
          <NavLink className={navLink} to="/">Home</NavLink>
          {isLoggedIn && (<NavLink className={navLink} to="/contacts">Contacts</NavLink>)}
    </nav>
  )
}
