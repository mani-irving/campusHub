import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function Login() {
  const { loginUser } = useUserContext();
  const navigate = useNavigate();
  const { currentUser } = useUserContext();

  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here (API call or context update)
    const success = await loginUser(formData);
    if (success) {
      navigate("/user/");
    } else {
      alert("Invalid credentials");
    }
    console.log("Login form submitted:", formData);
  };

  if (currentUser) return <Navigate to="/user/" />;
  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center shadow-lg rounded-xl bg-white dark:bg-zinc-800 px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Student ID
            <input
              type="text"
              pattern="\d*"
              inputMode="numeric"
              name="studentId"
              required
              value={formData.studentId}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Password
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <button
            type="submit"
            onSubmit={handleSubmit}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-6 text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
}
