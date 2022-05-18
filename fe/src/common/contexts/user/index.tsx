import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from 'common/firebase';
import { Auth } from 'modules/auth';
import { UserContextType, UserProviderFC } from 'common/contexts/user/types';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Loading } from 'components/loading';

const UserContext = createContext<UserContextType>({} as UserContextType);

const { Provider } = UserContext;

export const UserProvider: UserProviderFC = ({ children }) => {
  const [uid, setUid] = useState<string>();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => setUid(user?.uid ?? ''));
  }, []);

  const logout = () => {
    setUid(undefined);
    signOut(auth);
  };

  if (!uid) {
    if (uid === undefined) {
      return <Loading show />;
    } else {
      return <Auth />;
    }
  }

  const value = { uid, logout };

  return <Provider {...{ value }}>{children}</Provider>;
};

export const useUserContext = () => useContext(UserContext);
