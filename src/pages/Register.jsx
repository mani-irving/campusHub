import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Navigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

/**
 * Component for user registration with form validation and password toggle.
 */
export default function Register() {
  const { addUser } = useUserContext();

  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

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
    password: "",
    isActive: false,
  };

  const [formData, setFormData] = useState(defaultFormData);

  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form and handle user registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await addUser(formData);

    if (!success) return alert("User already exists or password is invalid");

    setRegistrationSuccessful(true);
    setFormData(defaultFormData);
    alert("User Registered Successfully");
  };

  if (registrationSuccessful) return <Navigate to="/login" />;

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 pt-20 pb-6">
      <div className="w-full max-w-2xl shadow-lg rounded-xl bg-white dark:bg-zinc-800 px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Student Registration
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/** First Name */}
          <InputField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <InputField
            label="Admission Year"
            name="admissionYear"
            type="number"
            value={formData.admissionYear}
            onChange={handleChange}
          />
          <InputField
            label="Passing Year"
            name="passingYear"
            type="number"
            value={formData.passingYear}
            onChange={handleChange}
          />

          {/** Degree */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Degree / Course
            </label>
            <select
              name="degree"
              required
              value={formData.degree}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none 
                         focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Degree/Course</option>
              <option value="B.tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.com">B.Com</option>
            </select>
          </div>

          <InputField
            label="Student ID"
            name="studentId"
            type="number"
            value={formData.studentId}
            onChange={handleChange}
          />
          <InputField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
          <InputField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

          {/** Academic Year */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Academic Year
            </label>
            <select
              name="academicYear"
              required
              value={formData.academicYear}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none 
                         focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          {/** Password */}
          <div className="col-span-full">
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 pr-10 rounded-md border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-zinc-900 text-gray-900 dark:text-white 
                           placeholder-gray-400 dark:placeholder-gray-500 
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </form>

        {/** Submit Button */}
        <div className="col-span-full flex justify-center mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Register
          </button>
        </div>

        {/** Redirect to login */}
        <p className="text-sm mt-6 text-gray-600 dark:text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
}

/**
 * Reusable input field with label
 */
function InputField({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-zinc-900 text-gray-900 dark:text-white 
                   placeholder-gray-400 dark:placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
