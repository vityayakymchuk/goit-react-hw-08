
import Loader from './components/Loader/Loader'
import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import LoginPage from './pages/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing); 

  useEffect(() => { dispatch(refreshUser()) }, [dispatch]);

  return isRefreshing ? <Loader/> : (
    <>
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
          <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/" />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
          </Route>
      </Routes>
 
      
</>

  )
}

export default App;