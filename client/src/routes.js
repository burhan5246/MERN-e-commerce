import React from "react";
import { AllUsers, AddUser, EditUser } from "./views/user";
//const Dashboard = React.lazy(() => import("./views/Dashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/all-user", exact: true, name: "All Users", component: AllUsers },
  { path: "/add-user", exact: true, name: "Add User", component: AddUser },
  {
    path: "/edit-user/:id",
    exact: true,
    name: "Edit User",
    component: EditUser
  }
];

export default routes;
