import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import UserJoinedClubs from "./components/UserJoinedClubs.jsx";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";
import DashboardHome from "./components/DashboardHome.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/user/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="clubs" element={<UserJoinedClubs />} />
        <Route path="edit" element={<EditUser />} />
        <Route path="delete" element={<DeleteUser />} />
      </Route>
    </Routes>
  );
}
