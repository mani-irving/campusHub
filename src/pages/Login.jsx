import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here (API call or context update)
    console.log("Login form submitted:", formData);
  };

  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center shadow-lg rounded-xl bg-white dark:bg-zinc-800 px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
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
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-6 text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </section>
  );
}
