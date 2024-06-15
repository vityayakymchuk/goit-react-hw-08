import css from './LoginForm.module.css';
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

export default function LoginForm() {

    const dispatch = useDispatch()

    const mailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values)).unwrap().catch(() => { alert("Log In error!")});
        actions.resetForm();
    };
    
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={mailFieldId} className={css.label}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          id={mailFieldId}
          className={css.input}
        />
        <ErrorMessage
          name="email"
          component="span"
          className={css.errorMessage}
        />

        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordFieldId}
          className={css.input}
        />
        <ErrorMessage
          name="password"
          component="span"
          className={css.errorMessage}
        />

        <button type="submit" className={css.btn}>
          Log in
        </button>
      </Form>
    </Formik>
  );
}
