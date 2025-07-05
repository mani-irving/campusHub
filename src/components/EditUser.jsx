import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export default function EditUser() {
  const { currentUser, editUser } = useUserContext();

  const [formData, setFormData] = useState({ ...currentUser });
  const [isEditing, setIsEditing] = useState(false);

  if (!currentUser) return <Navigate to="/login" />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(formData);
    setIsEditing(false);
  };

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Edit Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium dark:text-white">
            Student ID (readonly)
          </label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            readOnly
            className="w-full px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-200 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium dark:text-white">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium dark:text-white">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white"
          />
        </div>

        {isEditing ? (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md"
          >
            Enable Edit
          </button>
        )}
      </form>
    </section>
  );
}
