import RouterLayout from "./Component/RouterLayout/RouterLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./Component/Chat/Chat";
import RegisterPatient from "./Component/Register/RegisterPatient";
import Login from "./Component/Login/Login";
import React from "react";
import RegisterDoctor from "./Component/Register/RegisterDoctor";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [{ index: true, element: <Chat /> }],
    },
    {
      path: "/register/patient",
      element: <RouterLayout />,
      children: [{ index: true, element: <RegisterPatient /> }],
    },
    {
      path: "/register/doctor",
      element: <RouterLayout />,
      children: [{ index: true, element: <RegisterDoctor /> }],
    },
    {
      path: "/login",
      element: <RouterLayout />,
      children: [{ index: true, element: <Login /> }],
    },
  ]);
  return <RouterProvider router={routers} />;
}
