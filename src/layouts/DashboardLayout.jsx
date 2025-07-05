import React from "react";
import { Outlet } from "react-router-dom";
import UserInfoCard from "../components/UserInfoCard";
import { ThemeProvider } from "../context/ThemeContext";
import { UserContextProvider } from "../context/UserContext";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <Navbar />
        <div className="w-screen bg-zinc-100 dark:bg-zinc-900 min-h-screen ">
          <div className="max-w-6xl mx-auto pt-24 px-4 grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {/* Left Panel - User Card */}
            <div className="hidden md:block md:col-span-1">
              <UserInfoCard />
            </div>

            {/* Right Panel - Dynamic via Routing */}
            <div className="md:col-span-3">
              <Outlet />
            </div>
          </div>
        </div>
      </UserContextProvider>
    </ThemeProvider>
  );
}
