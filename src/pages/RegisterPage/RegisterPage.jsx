import RegisterForm from '../../components/RegisterForm/RegisterForm'
import css from './RegisterPage.module.css'

export default function RegisterPage() {
  return (
      <div className={css.page}>
          <p className={css.title}>Please, register your account!</p>
          <RegisterForm/>
    </div>
  )
}
