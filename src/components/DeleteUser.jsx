import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function DeleteUser() {
  const { currentUser, deleteUser, verifyPassword, logout } = useUserContext();
  const [confirmation, setConfirmation] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (!currentUser) return <Navigate to="/login" />;

  const handleDelete = async (e) => {
    e.preventDefault();

    if (confirmation !== "DELETE") {
      setError("Type DELETE to confirm.");
      return;
    }

    const isPasswordCorrect = await verifyPassword(currentUser.id, password);
    if (!isPasswordCorrect) {
      setError("Incorrect password.");
      return;
    }

    deleteUser(currentUser.id);
    logout(); // Clear currentUser
    navigate("/register");
  };

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-red-600">Delete Account</h2>

      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        This action cannot be undone. Please type <b>DELETE</b> and enter your
        password.
      </p>

      <form onSubmit={handleDelete} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">
            Type DELETE
          </label>
          <input
            type="text"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full font-semibold transition"
        >
          Delete Account
        </button>
      </form>
    </section>
  );
}
