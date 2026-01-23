import { useState } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "react-toastify/ReactToastify.css";
import SecurityLayout from "./layouts/SecurityLayout";
import DriverHomePage from "./pages/DriverHomePage";
import AdminHomePage from "./pages/AdminHomePage";
import DriverLayout from "./layouts/DriverLayout";
import AdminLayout from "./layouts/AdminLayout";
import { ToastContainer } from "react-toastify";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SecurityLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="driver" element={<DriverLayout />}>
          <Route index element={<DriverHomePage />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
        </Route>
      </>,
    ),
  );
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
