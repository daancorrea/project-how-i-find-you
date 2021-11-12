import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = async (dataInfo) => {
    localStorage.setItem("desafiolabs:userData", JSON.stringify(dataInfo));
    setUserData(dataInfo);
  };

  const clientInfo = () => {
    const clientData = localStorage.getItem("desafiolabs:userData");
    if (clientData) {
      setUserData(JSON.parse(clientData));
    }
  };

  return (
    <UserContext.Provider value={{ putUserData, userData, clientInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with UserContext");
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
