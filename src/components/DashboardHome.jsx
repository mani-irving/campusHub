import React from "react";
import { useUserContext } from "../context/UserContext";

export default function DashboardHome() {
  const { currentUser } = useUserContext();

  if (!currentUser) return null;

  const firstName = currentUser.firstName || "User";

  return (
    <div className="w-full h-full px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
        Welcome, {firstName} 👋
      </h1>

      <p className="text-gray-600 dark:text-gray-400 text-md mb-6 max-w-2xl">
        We're glad to have you on board. This is your personalized dashboard
        where you'll see:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>📌 Clubs you’ve joined</li>
        <li>📅 Upcoming events and registrations</li>
        <li>📝 Quick access to your campus tools</li>
        <li>⚙️ Manage your profile and settings</li>
      </ul>

      <div className="mt-8">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Explore Clubs
        </button>
      </div>
    </div>
  );
}
