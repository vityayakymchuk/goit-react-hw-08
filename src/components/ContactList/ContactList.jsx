import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from '../../redux/contactsSlice';




export default function ContactList() {

  const visibleContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
        <Contact contact={contact}/>
        </li>
      ))}
    </ul>
  );
}