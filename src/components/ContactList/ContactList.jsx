import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from '../../redux/contacts/slice';
import { selectIsModal } from '../../redux/contacts/selectors';
import Modal from '../Modal/Modal';


export default function ContactList() {

  const isModal = useSelector(selectIsModal);

  const visibleContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
          {isModal && <Modal contact={contact} />}
        </li>
      ))}
    </ul>
  );
}