import axios from "axios";
import { createContext, useState, useLayoutEffect, FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext({} as any);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState({});

  useLayoutEffect(() => {
    axios
      .get("http://127.0.0.1:8000/user/getuser", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
