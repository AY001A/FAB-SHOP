import { Route, Routes } from "react-router-dom";
import AppLayout from "./containers/layout/AppLayout/AppLayout";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import NotFound from "./pages/notFound/NotFound";
// import PasswordReset from "./pages/auth/forgetPassword/PasswordReset";
import AuthLayout from "./containers/layout/AuthLayout/AuthLayout";
// import ForgetPassword from "./pages/auth/forgetPassword/ForgetPassword";
// import CartPage from "./pages/cart/CartPage";
// import ServicePage from "./pages/services/ServicePage";
import { lazy } from "react";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

import SearchPage from "./pages/search/SearchPage";

import ServiceSuccess from "./pages/checkout/ServiceSuccess";

import PolicyPage from "./pages/policyPage/PolicyPage";
import Helppage from "./pages/help/Helppage";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";

import ProfilePage from "./pages/profile/ProfilePage";

const OrderPage = lazy(() => import("./pages/orderPage/OrderPage"));
const CustomerSupport = lazy(() =>
  import("./pages/CustomerSupport/CustomerSupport")
);
const ProductPage = lazy(() => import("./pages/product/ProductPage"));
const ForgetPasswordSuccess = lazy(() =>
  import("./pages/auth/forgetPassword/ForgetPasswordSuccess")
);
const ServicesHomePage = lazy(() =>
  import("./pages/services/ServicesHomePage")
);
const ProductCategoryPage = lazy(() =>
  import("./pages/productCategory/ProductCategoryPage")
);
const CheckoutSummary = lazy(() => import("./pages/payment/Payment"));
const DeliveryPageForm = lazy(() =>
  import("./pages/deliveryPage/DeliveryPageForm")
);
const AccountPage = lazy(() => import("./pages/accountPage/AccountPage"));
const CheckoutSuccess = lazy(() => import("./pages/checkout/SuccessPage"));
// import Alert from "./components/Alert/Alert"
// const HomePage = lazy(() => import("./pages/home/HomePage"));
// const LoginPage = lazy(() => import("./pages/auth/login/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/auth/register/RegisterPage"));
// const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const PasswordReset = lazy(() =>
  import("./pages/auth/forgetPassword/PasswordReset")
);

const ForgetPassword = lazy(() =>
  import("./pages/auth/forgetPassword/ForgetPassword")
);
const ServicePage = lazy(() => import("./pages/services/ServicePage"));
const CartPage = lazy(() => import("./pages/cart/CartPage"));

function App() {
  return (
    // <Suspense fallback={<div>loading...</div>}>
    <ScrollToTop>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route
            path="forget-password/success"
            element={<ForgetPasswordSuccess />}
          />
          <Route path="policy" element={<PolicyPage />} />
          <Route path="help" element={<Helppage />} />
          <Route path="contactus" element={<ContactUs />} />

          <Route path="aboutus" element={<AboutUs />} />


          {/* Cart page  */}

          <Route path="cart">
            <Route index element={<CartPage />} />
            <Route path="proceed">
              <Route index element={<DeliveryPageForm />} />
              <Route path="checkout" element={<CheckoutSummary />} />
              <Route path="success" element={<CheckoutSuccess />} />
            </Route>
          </Route>

          {/* Services */}
          <Route path="services">
            <Route index element={<ServicesHomePage />} />
            <Route path=":serviceId/:service" element={<ServicePage />} />
          </Route>

          {/* <Route path="bookedservice" element={<ServiceSuccess />} /> */}

          <Route path="search/:keyword" element={<SearchPage />} />

          {/* Products */}
          <Route
            path="productCategory/:categoryId/:category"
            element={<ProductCategoryPage />}
          />
          <Route path="products/:productId/:title" element={<ProductPage />} />

          {/* Account Page */}
          <Route path="account" element={<AccountPage />} />

          {/* <Route path="profile" element={<ProfilePage />} /> */}
          <Route path="profile" element={<AccountPage />} />
          <Route path="orders" element={<OrderPage />} />

          {/* todo make work */}
          <Route path="resetpassword/" element={<PasswordReset />}>
            {/* <Route path=":ownerId" element={<PasswordReset />} /> */}
          </Route>
          {/* <Route path="/checkout" element={<CheckoutSuccess />} /> */}

          <Route path="/help" element={<CustomerSupport />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        {/* <Route path="/Alert" element={<Alert/>} /> */}
        {/* </Route> */}

        {/* authentication */}
        <Route
          path="/login"
          element={<AuthLayout Children={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<AuthLayout Children={<RegisterPage />} />}
        />
      </Routes>
    </ScrollToTop>
    // </Suspense>
  );
}

export default App;
