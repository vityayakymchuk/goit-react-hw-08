import { useDispatch, useSelector } from 'react-redux';
import css from './Welcome.module.css';
import { selectUserName } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';


export default function Welcome() {
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logOut())
    };

    return (
        <div className={css.container}>
            <span className={css.welcome}>Welcome, {userName}</span>
            <button className={css.btn} onClick={handleClick}>LogOut</button>
      </div>
    
  )
}
