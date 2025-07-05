import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Globe, Sun, Moon } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="w-full border-t dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800
     bg-zinc-100 text-zinc-900 border-zinc-200 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto flex flex-col justify-between items-center py-8 px-4 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div>
            <span className="text-red-600 font-semibold italic">Campus</span>
            <span className="font-light">Hub</span>
          </div>

          <span className="text-sm md:ml-4">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        <nav className="flex flex-wrap gap-6 my-2">
          <Link
            to="/clubs"
            className="font-medium hover:underline text-indigo-600 dark:text-indigo-300"
          >
            Clubs
          </Link>
          <Link
            to="/events"
            className="font-medium hover:underline dark:text-indigo-300 text-indigo-600"
          >
            Events
          </Link>
          <Link
            to="/about"
            className="font-medium hover:underline dark:text-indigo-300 text-indigo-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-medium hover:underline dark:text-indigo-300 text-indigo-600"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://yourcollegewebsite.edu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="College Website"
            className="hover:text-green-600 transition-colors"
          >
            <Globe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
