import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LoginForm from "../components/login/LoginForm";
import Profile from "../pages/Profile";
import SignupForm from "../components/signup/SignupForm";
import Unauthorized from "../pages/Unauthorized";
import AuthLayout from "../pages/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LoginForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <SignupForm />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
]);

export default router;
