import React, { Suspense } from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/navbar/Header";
import Spinner from "../../../components/spinner/Spinner";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-wrapper">
        <main>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
