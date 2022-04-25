import { Route, Routes } from "react-router-dom";
import AppLayout from "./containers/layout/AppLayout/AppLayout";
import ForgetPasswordSuccess from "./pages/auth/forgetPassword/ForgetPasswordSuccess";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import NotFound from "./pages/notFound/NotFound";
import CustomerSupport from "./pages/CustomerSupport/CustomerSupport";
import PasswordReset from "./pages/auth/forgetPassword/PasswordReset";
import AuthLayout from "./containers/layout/AuthLayout/AuthLayout";
import ForgetPassword from "./pages/auth/forgetPassword/ForgetPassword";
import ServicesHomePage from "./pages/services/ServicesHomePage";
import ProductPage from "./pages/product/ProductPage";
// import CartPage from "./pages/cart/CartPage";
// import ServicePage from "./pages/services/ServicePage";
import { lazy } from "react";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import ProductCategoryPage from "./pages/productCategory/ProductCategoryPage";
import AccountPage from "./pages/accountPage/AccountPage";

// import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
// import Alert from "./components/Alert/Alert"
// const HomePage = lazy(() => import("./pages/home/HomePage"));
// const LoginPage = lazy(() => import("./pages/auth/login/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/auth/register/RegisterPage"));
// const NotFound = lazy(() => import("./pages/notFound/NotFound"));
// const PasswordReset = lazy(() =>
//   import("./pages/auth/forgetPassword/PasswordReset")
// );
// const AuthLayout = lazy(() =>
//   import("./containers/layout/AuthLayout/AuthLayout")
// );
// const ForgetPassword = lazy(() =>
//   import("./pages/auth/forgetPassword/ForgetPassword")
// );
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

          <Route path="cart" element={<CartPage />} />

          {/* Services */}
          <Route path="services" element={<ServicesHomePage />} />
          <Route path="services/:service" element={<ServicePage />} />

          {/* Products */}
          <Route
            path="productCategory/:categoryId/:category"
            element={<ProductCategoryPage />}
          />
          <Route path="products/:productId/:title" element={<ProductPage />} />

          {/* Account Page */}
          <Route path="account" element={<AccountPage />} />

          {/* todo make work */}
          <Route path="resetpassword/" element={<PasswordReset />}>
            {/* <Route path=":ownerId" element={<PasswordReset />} /> */}
          </Route>
          {/* <Route path="/checkout" element={<CheckoutSuccess />} /> */}

          <Route path="/customSupport" element={<CustomerSupport />} />

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
