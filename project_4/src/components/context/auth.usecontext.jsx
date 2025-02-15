import { createContext, useState } from 'react';

export const authContext = createContext ({
    isAuthenticated: false,
    user: {
        email: "",
        name: "",
    }
});

export const AuthWrapper = (props) => {
    const [auth, setAuth] = useState ({
        isAuthenticated: false,
        user: {
            email: "",
            name: "",
    }
    })
    return (
      <authContext.Provider value={{
        auth, setAuth
      }}>
        {props.children}
      </authContext.Provider>
    )
  }