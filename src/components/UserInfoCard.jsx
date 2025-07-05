import React from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { UserCircle, Pencil, Trash2 } from "lucide-react";

export default function UserInfoCard() {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  if (!currentUser) return <div>No user found</div>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md flex flex-col items-center gap-8 text-center">
      <UserCircle size={80} className="text-gray-500 dark:text-gray-300" />

      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {currentUser.firstName} {currentUser.lastName}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ID: {currentUser.studentId}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Dept: {currentUser.department}
        </p>
      </div>
      <div className="flex gap-4 mt-2">
        <button
          onClick={() => navigate("/user/edit")}
          className="hover:text-blue-500 text-gray-700 dark:text-gray-300"
        >
          <Pencil size={20} />
        </button>
        <button
          onClick={() => navigate("/user/delete")}
          className="hover:text-red-500 text-gray-700 dark:text-gray-300"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
