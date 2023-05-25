'use client';

import { createContext } from "react";
// import { useSession } from 'next-auth/react';

const AuthContext = createContext(null);


function AuthProvider({ children }) {
  // const { data: session } = useSession();
  const session = {
    isLogin: true,
    user: {
      name: 'admin',
    }
  }
  return (
    <AuthContext.Provider value={session}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider,
}