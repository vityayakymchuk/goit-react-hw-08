import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
     
    </div>
  );
};

export default Layout;