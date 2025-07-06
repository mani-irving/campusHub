import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { Sun, Moon } from "lucide-react";
import { useUserContext } from "../context/UserContext.jsx";

export default function HamburgerMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkTheme, setDarkTheme } = useTheme();
  const { currentUser, logout } = useUserContext();
  const navigate = useNavigate();

  const themeChangeBtn = () => {
    setDarkTheme(!darkTheme);
  };
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
      <Menu
        className="text-gray-900 dark:text-white hover:text-blue-600"
        size={20}
      />

      <div
        className={`${
          mobileMenu
            ? `text-gray-950 dark:text-gray-200 flex flex-col items-center gap-4 top-14 right-1 absolute p-6 rounded-md transition-all duration-300 min-w-md ${
                scrolled
                  ? "backdrop-blur-md bg-gray-500/30 dark:bg-gray-800/30 shadow-sm border border-gray-200 dark:border-gray-700"
                  : "backdrop-blur-md bg-gray-500/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50"
              }`
            : "hidden"
        }`}
      >
        <div>
          <Link to="/">Home</Link>
        </div>

        {currentUser ? (
          <>
            <div>
              <Link to="/user/">Dashboard</Link>
            </div>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/register">Register</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
        <div>
          <button onClick={themeChangeBtn}>
            {darkTheme ? (
              <Sun size={20} className="hover:text-blue-600" />
            ) : (
              <Moon size={20} className="hover:text-blue-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
