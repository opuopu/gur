import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Wallet from "../pages/Wallet";
import Setting from "../pages/Setting";
import Notification from "../pages/Notification";
import ChangePasswordFrom from "../pages/ChangePasswordForm";
import Otp from "../pages/Otp";
import UpdatePassword from "../pages/UpdatePassword";
import Profile from "../pages/Profile";
import PrivacyPolicy from "../pages/PrivaryPolicy";
import TermsAndCondition from "../pages/TermsAndCondition";
import AboutUs from "../pages/AboutUs";
import VerifyOtp from "../pages/VerifyOtp";
import NewPassword from "../pages/NewPassword";
import Contest from "../pages/Contest";
import CreateContext from "../pages/Contest/CreateContest";
import ContestDetails from "../pages/Contest/ContestDetails";
import EditContext from "../pages/Contest/EditContest";
import Winner from "../pages/Winner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard",

        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/change-password",
        element: <ChangePasswordFrom />,
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "/update-password",
        element: <UpdatePassword />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsAndCondition />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contest",
        element: <Contest />,
      },
      {
        path: "/create-contest",
        element: <CreateContext />,
      },
      {
        path: "/contest-details/:id",
        element: <ContestDetails />,
      },
      {
        path: "/edit-contest/:id",
        element: <EditContext />,
      },
      {
        path: "/contest-winner/:id",
        element: <Winner />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
]);
export default router;
