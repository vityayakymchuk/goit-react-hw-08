import css from './Contact.module.css'
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {openModal, setContactName} from '../../redux/contacts/slice'

export default function Contact({ contact }) {
    const dispatch = useDispatch();
      
  const handleModal = (e) => {
    dispatch(setContactName(contact.name));
    dispatch(openModal());
    e.stopPropagation();
 };

 
  return (
      <div className={css.listItem}>
          <div className={css.contact}>
            <span><FaUser />   {contact.name}</span>
            <span><FaPhone />   {contact.number}</span>
          </div>
      <button type='button' className={css.btn} onClick={handleModal}>Delete</button>
    </div>
  )
}