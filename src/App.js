import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./containers/layout/AppLayout/AppLayout";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const LoginPage = lazy(() => import("./pages/auth/login/LoginPage"));
const RegisterPage = lazy(() => import("./pages/auth/register/RegisterPage"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const PasswordReset = lazy(() =>
  import("./pages/auth/forgetPassword/PasswordReset")
);
const AuthLayout = lazy(() =>
  import("./containers/layout/AuthLayout/AuthLayout")
);
const ForgetPassword = lazy(() =>
  import("./pages/auth/forgetPassword/ForgetPassword")
);
const ForgetPasswordSuccess = lazy(() =>
  import("./pages/auth/forgetPassword/ForgetPasswordSuccess")
);

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
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
    </Suspense>
  );
}

export default App;
