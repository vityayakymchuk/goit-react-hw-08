import css from './ContactForm.module.css';
import { Formik, Field, Form } from "formik";
import { useId } from 'react';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {

    const dispatch = useDispatch();

      const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        toast.success("Contact added successfully!");
       actions.resetForm();
  };

   
    
const nameId = useId();
const phoneId = useId(); 
    
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^[0-9\+\-\(\)]{3,}$/, 'Invalid phone number').required('Phone number is required'),
    });



  return (
    <Formik
        initialValues={{ name: "", number: "" }}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
              <Field id={nameId} className={css.input} name="name" type="text" />
               <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={phoneId}>Number</label>
              <Field id={phoneId} className={css.input} name="number" type="tel" />
               <ErrorMessage className={css.error} name="number" component="span" />
               <Toaster
   position="top-center"
  reverseOrder={false}
/>
              <button className={css.btn} type="submit" >Add contact</button>
        </Form>
      </Formik>
  )
}