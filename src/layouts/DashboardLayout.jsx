import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import RightPanel from "../components/RightPanel";

export default function DashboardLayout() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 pt-24 min-h-screen px-4">
      <div className="md:block md:col-span-1">
        <RightPanel />
      </div>
      <div className="md:col-span-3">
        <Outlet />
      </div>
    </div>
  );
}
