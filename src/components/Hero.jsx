import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function HeroSection() {
  const navigate = useNavigate();
  const { currentUser } = useUserContext();

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-zinc-900 dark:to-zinc-800 px-4 pt-24 pb-6">
      <div className="flex- flex-col justify-between items-center text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 ">
          Elevate Your Campus <br /> Experience
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-md md:text-lg max-w-xl mx-auto mb-8">
          Join student communities, explore events and resources, and elevate
          your college journey with our vibrant campus network.
        </p>

        <button
          onClick={() =>
            currentUser ? navigate("/user/") : navigate("/register")
          }
          className="px-6 py-3 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
