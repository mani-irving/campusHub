import React, { useState, useEffect, useRef } from "react";
import { Menu, Sun, Moon, CircleUserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useUserContext } from "../context/UserContext.jsx";

export default function HamburgerMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenu(false);
        setProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sharedMenuClasses = `absolute top-14 right-2 p-6 min-w-[200px] rounded-md transition-all duration-300 z-50 flex flex-col items-start gap-3 text-gray-950 dark:text-gray-200 
    ${
      scrolled
        ? "backdrop-blur-md bg-gray-500/30 dark:bg-gray-800/30 shadow-md border border-gray-200 dark:border-gray-700"
        : "backdrop-blur-md bg-gray-600/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50"
    }`;

  return (
    <div className="relative flex gap-4 items-center md:hidden" ref={menuRef}>
      {/* Hamburger Icon */}
      <button
        onClick={() => {
          setMobileMenu(!mobileMenu);
          setProfileMenu(false); // Close profile if open
        }}
      >
        <Menu
          size={20}
          className="text-gray-900 dark:text-white hover:text-blue-600"
        />
      </button>

      {/* Hamburger Menu */}
      {mobileMenu && (
        <div className={sharedMenuClasses}>
          <Link to="/">Home</Link>
          {currentUser ? (
            <>
              <Link to="/user/">Dashboard</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
          <button onClick={themeChangeBtn}>
            {darkTheme ? (
              <Sun size={20} className="hover:text-blue-600" />
            ) : (
              <Moon size={20} className="hover:text-blue-600" />
            )}
          </button>
        </div>
      )}

      {/* Profile Icon */}
      {currentUser && (
        <button
          onClick={() => {
            setProfileMenu(!profileMenu);
            setMobileMenu(false); // Close hamburger if open
          }}
        >
          <CircleUserRound
            size={20}
            className="text-gray-900 dark:text-gray-200 hover:text-blue-500"
          />
        </button>
      )}

      {/* Profile Dropdown */}
      {currentUser && profileMenu && (
        <div className={sharedMenuClasses}>
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm">ID: {currentUser.studentId}</span>
            <span className="text-sm">Name: {currentUser.firstName}</span>
          </div>
          <Link to="/user/edit">Edit</Link>
          <Link to="/user/delete">Delete</Link>
        </div>
      )}
    </div>
  );
}
