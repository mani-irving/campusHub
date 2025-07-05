import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { Link } from "react-router-dom";
import { HomeIcon as Home } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu.jsx";
import { useUserContext } from "../context/UserContext.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { darkTheme, setDarkTheme } = useTheme();
  const { currentUser } = useUserContext();

  const themeChangeBtn = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`max-w-6xl mx-auto mt-6 px-4 py-2 flex justify-between items-center rounded-2xl
                 transition-all duration-300 
                 ${
                   scrolled
                     ? "backdrop-blur-md max-w-5xl bg-white/30 dark:bg-gray-800/30 shadow-sm border border-gray-200 dark:border-gray-700"
                     : " bg-white/70 dark:bg-gray-900/70 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md"
                 }`}
      >
        {/* logo */}
        <Link
          to="/"
          className="text-2xl font-light tracking-light text-gray-900 dark:text-white"
        >
          <span className="text-red-600 font-semibold italic">campus</span>
          <span className="font-light">Hub</span>
        </Link>

        {/* Nav Links */}

        <HamburgerMenu />

        <div className="hidden md:flex gap-4 items-center text-gray-600 dark:text-gray-300">
          <Link to="/" className="hover:text-blue-600">
            <Home size={20} />
          </Link>

          {currentUser ? (
            <>
              <Link
                to="/user/"
                className="text-sm px-3 py-1 rounded-md 
             bg-[#e7d8c9] hover:bg-[#d6c2b2] text-gray-800 
             dark:bg-[#2e2a27] dark:hover:bg-[#3c3733] dark:text-gray-100 
             transition"
              >
                Dashboard
              </Link>

              <Link
                to="/user/logout"
                className="text-sm px-3 py-1 rounded-md bg-red-500 hover:bg-red-400 text-white transition"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="text-sm px-3 py-1 rounded-md 
             bg-[#e7d8c9] hover:bg-[#d6c2b2] text-gray-800 
             dark:bg-[#2e2a27] dark:hover:bg-[#3c3733] dark:text-gray-100 
             transition"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="text-sm px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition"
              >
                Login
              </Link>
            </>
          )}

          <button onClick={themeChangeBtn}>{darkTheme ? "☀️" : "🌙"}</button>
        </div>
      </div>
    </nav>
  );
}
