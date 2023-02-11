import { createContext, useState } from "react";

export const createContextAPI = createContext();

export const ContextProvider = ({ children }) => {
    const [name,setName]=useState({})
  const [text, setText] = useState({
    username: "",
    email: "",
  });

  return (
    <createContextAPI.Provider value={{ text, setText,name,setName }}>
      {children}
    </createContextAPI.Provider>
  );
};
