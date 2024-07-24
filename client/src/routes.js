
// Work Trial
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import UserProfile from "layouts/user-profile";
import UserManagement from "layouts/user-management";

import Login from "auth/login";
import Register from "auth/register";
import ForgotPassword from "auth/forgot-password";
import ResetPassword from "auth/reset-password";

// @mui icons
import Icon from "@mui/material/Icon";
import Slack from "layouts/slack";
import JiraIssues from "layouts/jira";
import Notions from "layouts/notion";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Slack Messages",
    key: "slack",
    icon: <Icon fontSize="small">messages</Icon>,
    route: "/slack",
    component: <Slack />,
  },
  {
    type: "collapse",
    name: "Jira Issues",
    key: "jira",
    icon: <Icon fontSize="small">assignments</Icon>,
    route: "/jira",
    component: <JiraIssues />,
  },
  {
    type: "collapse",
    name: "Notion",
    key: "notion",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/notion",
    component: <Notions />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "examples",
    name: "User Profile",
    key: "user-profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user-profile",
    component: <UserProfile />,
  },
  {
    type: "examples",
    name: "User Management",
    key: "user-management",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/user-management",
    component: <UserProfile />,
    // component: <UserManagement />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
  {
    type: "auth",
    name: "Login",
    key: "login",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/auth/login",
    component: <Login />,
  },
  {
    type: "auth",
    name: "Register",
    key: "register",
    icon: <Icon fontSize="small">reigster</Icon>,
    route: "/auth/register",
    component: <Register />,
  },
  // {
  //   type: "auth",
  //   name: "Forgot Password",
  //   key: "forgot-password",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/auth/forgot-password",
  //   component: <ForgotPassword />,
  // },
  // {
  //   type: "auth",
  //   name: "Reset Password",
  //   key: "reset-password",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/auth/reset-password",
  //   component: <ResetPassword />,
  // },
];

export default routes;
