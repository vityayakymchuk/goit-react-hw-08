import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from '../../redux/auth/operations';
import { useId } from "react";
import * as Yup from "yup";

export default function RegisterForm() {

  const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});


  const nameFieldId = useId();
  const mailFieldId = useId();
  const passwordFieldId = useId();

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
            .unwrap().catch(() => { alert("Registration error!")});
        actions.resetForm();
    }

  return (
      <Formik
      validationSchema={FeedbackSchema}
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label htmlFor={nameFieldId} className={css.label}>
          Username</label>
          <Field className={css.input} type="text" name="name" id={nameFieldId}/>
        <ErrorMessage
          name="name"
          component="span"
          className={css.errorMessage}
        />
        <label htmlFor={mailFieldId} className={css.label}>
          Email</label>
          <Field className={css.input} type="email" name="email"  id={mailFieldId}/>
        <ErrorMessage
          name="email"
          component="span"
          className={css.errorMessage}
        />
              <label htmlFor={passwordFieldId} className={css.label}>
          Password</label>
          <Field className={css.input} type="password" name="password"  id={passwordFieldId}/>
        <ErrorMessage
          name="password"
          component="span"
          className={css.errorMessage}
        />
        <button className={css.btn} type="submit">Register</button>
      </Form>
    </Formik>
  )
}
