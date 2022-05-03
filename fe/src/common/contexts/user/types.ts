import { FC, ReactNode } from 'react';

export type UserContextType = {
  uid: string | undefined;
  logout: () => void;
};

export type UserProviderFC = FC<{ children: ReactNode }>;
