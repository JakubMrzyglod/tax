import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from 'common/firebase';
import { Auth } from 'modules/auth';
import { UserContextType, UserProviderFC } from 'common/contexts/user/types';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Loading } from 'components/loading';
import { Onboarding } from 'modules/onboarding';

const UserContext = createContext<UserContextType>({} as UserContextType);

const { Provider } = UserContext;

export const UserProvider: UserProviderFC = ({ children }) => {
  const [uid, setUid] = useState<string>();
  const [isOnboarded, setIsOnboarded] = useState<boolean>();

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      setUid(user?.uid ?? '');
      const idTokenResult = await user?.getIdTokenResult(true);
      if (idTokenResult?.claims?.isOnboarded !== isOnboarded) {
        setIsOnboarded(
          idTokenResult?.claims?.isOnboarded as boolean | undefined
        );
      }
    });
  }, []);

  const logout = () => {
    setUid(undefined);
    setIsOnboarded(undefined);
    signOut(auth);
  };

  if (!uid) {
    if (uid === undefined) {
      return <Loading show />;
    } else {
      return <Auth />;
    }
  }

  if (!isOnboarded) {
    const setOnboarded = () => setIsOnboarded(true);
    return <Onboarding {...{ setOnboarded, uid }} />;
  }

  const value = { uid, logout };

  return <Provider {...{ value }}>{children}</Provider>;
};

export const useUserContext = () => useContext(UserContext);
