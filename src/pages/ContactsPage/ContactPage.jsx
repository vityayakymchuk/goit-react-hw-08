import css from './ContactPage.module.css';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import Loader from '../../components/Loader/Loader'

export default function ContactPage() {

        const dispatch = useDispatch()

  useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);
  const isLoading = useSelector(state => state.contacts.loading);
  const isError = useSelector(state => state.contacts.error);



  return (
      <div className={css.contactPage}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader isLoading={isLoading} />}
      {isError && <ErrorMessage/>}
      <ContactList />
      </div>
  )
}
