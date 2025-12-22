import React, { createContext } from 'react'
 const AuthContext = createContext(null);
function AuthProvider({children}) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider