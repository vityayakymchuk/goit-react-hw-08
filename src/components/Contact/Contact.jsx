import css from './Contact.module.css'
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
      <div className={css.listItem}>
          <div className={css.contact}>
            <span><FaUser />   {contact.name}</span>
            <span><FaPhone />   {contact.number}</span>
          </div>
          <button type='button' className={css.btn} onClick={handleDelete}>Delete</button></div>
  )
}