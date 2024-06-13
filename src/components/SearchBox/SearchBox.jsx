import css from './SearchBox.module.css'
import { useId } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {

    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    
      const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };
    const id = useId();
  return (
      <div>
          <p className={css.name}>Find contacts by name</p>
          <input id={id} className={css.input} type="text" value={filter} onChange={handleFilter} />
    </div>
  )
}   