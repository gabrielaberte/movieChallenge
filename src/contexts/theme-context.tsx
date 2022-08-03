/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState } from "react";

export const AuthContext = React.createContext<any>({});

export function AuthProvider(props: any): any {
  const [theme, setTheme] = useState<boolean>(true);

  return (
    <AuthContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth(): any {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Sem contexto");
  }

  return context;
}
