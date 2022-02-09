import { Route, Routes } from "react-router-dom";
import AppLayout from "./containers/layout/AppLayout/AppLayout";
import AuthLayout from "./containers/layout/AuthLayout/AuthLayout";
import LoginPage from "./pages/auth/login/LoginPage";
import PasswordReset from "./pages/auth/passwordReset/PasswordReset";
import RegisterPage from "./pages/auth/register/RegisterPage";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/notFound/NotFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="passwordreset" element={<PasswordReset />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
