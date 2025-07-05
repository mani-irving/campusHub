import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem("localUsers", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("localUsers"));
    localUsers
      ? setUsers(localUsers)
      : localStorage.setItem("localUsers", users);
  }, []);

  const addUser = (newIncomingUser) => {
    const existingUser = users.some(
      (eachUser) => eachUser.id === newIncomingUser.studentId
    );
    if (existingUser) return false;

    const newUser = { id: newIncomingUser.studentId, ...newIncomingUser };
    setUsers((prev) => [...prev, newUser]);
    return true;
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((eachUser) => eachUser.id !== id));
  };

  const editUser = (editedUserDetail) => {
    setUsers((prev) =>
      prev.map((eachUser) =>
        eachUser.id === editedUserDetail.id ? editedUserDetail : eachUser
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
