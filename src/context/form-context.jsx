import { useState, createContext } from "react";

const formContext = createContext();

export const FormContextProvider = (children) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const getUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
};
