// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from 'react-redux';
import { store } from './store';
import AuthLayout from "./layouts/auth.tsx";
import DashboardLayout from "./layouts/dashboard.tsx";
import UserLogin from "./pages/user-login.tsx";
import UserRegister from "./pages/user-register.tsx";
import Accounts from "./pages/accounts.tsx";
import Inventory from "./pages/inventory.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Accounts />} />
          <Route path="/inventory" element={<Inventory />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/register" element={<UserRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
