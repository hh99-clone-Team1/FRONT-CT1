import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const email = localStorage.getItem('email');
  const color = localStorage.getItem('userColorNum');
  useEffect(() => {
    setUser({ nickname: email.split('@')[0], color });
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
