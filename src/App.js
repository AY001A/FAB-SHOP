import { Route, Routes } from "react-router-dom";
import AppLayout from "./containers/layout/AppLayout/AppLayout";
import AuthLayout from "./containers/layout/AuthLayout/AuthLayout";
import ForgetPassword from "./pages/auth/forgetPassword/ForgetPassword";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import HomePage from "./pages/home/HomePage";
import ForgetPasswordSuccess from "./pages/auth/forgetPassword/ForgetPasswordSuccess";
import NotFound from "./pages/notFound/NotFound";
import PasswordReset from "./pages/auth/forgetPassword/PasswordReset";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route
          path="forget-password/success"
          element={<ForgetPasswordSuccess />}
        />
        <Route path="resetpassword/" element={<PasswordReset />}>
          {/* <Route path=":ownerId" element={<PasswordReset />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
