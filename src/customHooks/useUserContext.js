import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ nickname: '', userId: 0 });
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('accessToken').split(' ')[1];
  useEffect(() => {
    setUser({ nickname: email.split('@')[0], userId: jwtDecode(token).userId });
  }, [email]);

  return (
    <UserContext.Provider
      value={useMemo(() => ({
        user,
      }))}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
