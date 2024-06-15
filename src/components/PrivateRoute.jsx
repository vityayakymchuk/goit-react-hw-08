import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/contacts/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component }) {

    const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component :  <Navigate to='/login' />;
}
