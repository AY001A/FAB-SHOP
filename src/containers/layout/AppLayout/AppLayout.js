import React, { Suspense } from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/navbar/Header";
import { ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import AuthVerify from "../../../components/AuthVerify";
import { logout } from "../../../services/slices/authSlice";
import { useDispatch } from "react-redux";

const AppLayout = () => {
  const dispatch = useDispatch();
  return (
    
    <div className="wrapper" >
      <Header  />
      <div className="main-wrapper">
        <main>
          <ToastContainer
            position="top-center"
            hideProgressBar={true}
            autoClose={2000}
          />

          <Suspense
            fallback={
              <div className="text-center w-100 m-5 p-4 ">
                <Spinner className="text-primary" animation="border" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        {/* <AuthVerify logOut={logout} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
