import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContextProvider } from "../context/UserContext";

export default function MainLayout() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </ThemeProvider>
  );
}
