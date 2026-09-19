import LoginRedirect from "@/components/auth/LoginRedirect";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ children }) {
  return (
    <LoginRedirect>
      {children}
      <ToastContainer />
    </LoginRedirect>
  );
}
