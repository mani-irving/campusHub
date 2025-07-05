import React, { createContext, useContext, useState, useEffect } from "react";
import bcrypt from "bcryptjs";

/**
 * @typedef {Object} User
 * @property {string} id - Unique user ID (studentId)
 * @property {string} password - Hashed password
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} admissionYear
 * @property {string} passingYear
 * @property {string} degree
 * @property {string} dob
 * @property {string} department
 * @property {string} academicYear
 * @property {boolean} isActive
 */

/** Create a user context */
const UserContext = createContext();

/**
 * Custom hook to access UserContext
 * @returns {object} UserContext value
 */
export const useUserContext = () => useContext(UserContext);

/**
 * Provider to wrap around app components that need user state
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const localData = localStorage.getItem("localUsers");
    return localData ? JSON.parse(localData) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  /** Sync users to localStorage */
  useEffect(() => {
    localStorage.setItem("localUsers", JSON.stringify(users));
  }, [users]);

  /** Sync currentUser to localStorage */
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  /**
   * Encrypt a password
   * @param {string} password
   * @returns {Promise<string>} Encrypted password
   */
  const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };

  /**
   * Compare input password with stored hashed password
   * @param {string} hashedPassword
   * @param {string} plainPassword
   * @returns {Promise<boolean>}
   */
  const comparePassword = async (hashedPassword, plainPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
  };

  /**
   * Register new user (with password encryption)
   * @param {User & { password: string }} newUserData
   * @returns {Promise<boolean>} true if success, false if duplicate or invalid
   */
  const addUser = async (newUserData) => {
    const exists = users.some((user) => user.id === newUserData.studentId);
    if (exists || !newUserData.password.trim()) return false;

    const hashedPassword = await encryptPassword(newUserData.password);

    const newUser = {
      ...newUserData,
      id: newUserData.studentId,
      password: hashedPassword,
    };

    setUsers((prev) => [...prev, newUser]);
    return true;
  };

  /**
   * Attempt to log in a user
   * @param {{ studentId: string, password: string }} credentials
   * @returns {Promise<boolean>} true if login successful
   */
  const loginUser = async ({ studentId, password }) => {
    const user = users.find((u) => u.id === studentId);
    if (!user) return false;

    const match = await comparePassword(user.password, password);
    if (!match) return false;

    setCurrentUser(user);
    return true;
  };

  /**
   * Log out the current user
   */
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  /**
   * Edit an existing user
   * @param {User} updatedUser
   */
  const editUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  /**
   * Delete a user by their ID
   * @param {string} id
   */
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  /**
   * Confirm user password (for delete/edit confirmation)
   * @param {string} studentId
   * @param {string} inputPassword
   * @returns {Promise<boolean>}
   */
  const verifyPassword = async (studentId, inputPassword) => {
    const user = users.find((u) => u.id === studentId);
    if (!user) return false;
    return await comparePassword(user.password, inputPassword);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        addUser,
        loginUser,
        logout,
        editUser,
        deleteUser,
        verifyPassword, //  For sensitive actions like delete
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
