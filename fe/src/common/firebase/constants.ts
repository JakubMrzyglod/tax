import { db } from 'common/firebase';
import { doc } from 'firebase/firestore';

export enum Collection {
  COMPANIES = 'companies',
}

const FS_PATH = {
  [Collection.COMPANIES]: (id?: string) =>
    `${Collection.COMPANIES}${addIdIfExists(id)}`,
};

export const FS_DOC = {
  [Collection.COMPANIES]: (id: string) => doc(db, FS_PATH.companies(id)),
};

const addIdIfExists = (id?: string) => (id ? `/${id}` : '');
