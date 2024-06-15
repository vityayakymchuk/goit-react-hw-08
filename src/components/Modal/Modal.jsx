import { useDispatch, useSelector } from 'react-redux';
import css from './Modal.module.css'
import { deleteContact } from '../../redux/contacts/operations';
import {closeModal} from '../../redux/contacts/slice'
import { selectContactName } from '../../redux/contacts/selectors';
import { setContactName } from '../../redux/contacts/slice';
import toast, { Toaster } from 'react-hot-toast';


export default function Modal({ contact }) {
    const dispatch = useDispatch();
    const contactName = useSelector(selectContactName);
    
    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
        dispatch(closeModal());
        dispatch(setContactName(null))
        toast.success("Contact was deleted successfully!");
    };

    const modalClose = () => {
        dispatch(closeModal())
        dispatch(setContactName(null))
 };

  return (
      <div className={css.modal}>
          <Toaster
   position="top-center"
  reverseOrder={false}/>
          <span className={css.ask}>Are you realy want to delete "{contactName}"?</span>
          <div className={css.btns}>
              <button className={css.btn} type='button' onClick={handleDelete}>Yes</button>
              <button className={css.btn} type='button' onClick={modalClose}>No</button>
              
          </div>
          
    </div>
  )
}
