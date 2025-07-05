import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export default function Register() {
  const { addUser } = useUserContext();
  const [registrationSuccesful, setRegistrationSuccessful] = useState(false);
  const defaultFormData = {
    firstName: "",
    lastName: "",
    admissionYear: "",
    passingYear: "",
    degree: "",
    studentId: "",
    dob: "",
    department: "",
    academicYear: "",
    isActive: false,
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admissionYear: "",
    passingYear: "",
    degree: "",
    studentId: "",
    dob: "",
    department: "",
    academicYear: "",
    isActive: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send formData to backend or handle auth logic
    const success = addUser(formData);

    if (!success) {
      return alert("User Already exists");
    }
    setRegistrationSuccessful(success);
    console.log("Registering user:", formData);
    setFormData(defaultFormData);
    alert("User Registered Successfully");
  };
  if (registrationSuccesful) return <Navigate to="/login" />;
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 pt-20">
      <div className="max-w-2xl w-full text-center shadow-lg rounded-xl bg-white dark:bg-zinc-800 px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Student Registration 📝
        </h2>

        <form
          onSubmit={handleSubmit}
          className=" flex-col gap-4 text-center md:grid md:grid-cols-2 md:gap-6 md:text-left"
        >
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              onChange={handleChange}
              value={formData.firstName}
              className="input-style rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              onChange={handleChange}
              value={formData.lastName}
              className="input-style rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Admission Year
            </label>
            <input
              type="number"
              name="admissionYear"
              required
              onChange={handleChange}
              value={formData.admissionYear}
              className="input-style rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Passing Out Year
            </label>
            <input
              type="number"
              name="passingYear"
              required
              onChange={handleChange}
              value={formData.passingYear}
              className="input-style rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Degree / Course
            </label>
            <select
              name="degree"
              required
              onChange={handleChange}
              value={formData.degree}
              className="input-style rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Degree/Course</option>
              <option value="B.tech">B.tech</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.com">B.com</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Student ID
            </label>
            <input
              type="number"
              name="studentId"
              required
              onChange={handleChange}
              value={formData.studentId}
              className="input-style  rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              required
              onChange={handleChange}
              value={formData.dob}
              className="input-style rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              required
              onChange={handleChange}
              value={formData.department}
              className="input-style rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Academic Year
            </label>
            <select
              name="academicYear"
              required
              value={formData.academicYear}
              onChange={handleChange}
              className="input-style rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>
        </form>

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          Register
        </button>

        <p className="text-sm mt-6 text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </section>
  );
}
