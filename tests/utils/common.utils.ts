import { doc, DocumentReference, setDoc } from 'firebase/firestore';
import { assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import firebase from 'firebase/compat/app';

type CreateNewItemFnProps<T> = {
  path: string;
  getItemData: () => T;
  firestore: firebase.firestore.Firestore;
};

type CreateNewItemProps<T> = {
  firestore?: firebase.firestore.Firestore;
  withSuccess?: boolean;
  newItemData?: T;
  path?: string;
};

export type CreateNewItemFn<T> = (
  props?: CreateNewItemProps<T>
) => Promise<[DocumentReference<T>, T]>;

export const createNewItemFn =
  <T>({
    firestore: defaultFirestore,
    path: defaultPath,
    getItemData,
  }: CreateNewItemFnProps<T>): CreateNewItemFn<T> =>
  async ({ withSuccess, newItemData, path, firestore } = {}) => {
    newItemData ??= getItemData();
    path ??= defaultPath;
    firestore ??= defaultFirestore;
    const newItemDocRef = doc(firestore, path) as DocumentReference<T>;
    if (withSuccess ?? true) {
      await assertSucceeds(setDoc<T>(newItemDocRef, newItemData));
    } else {
      await assertFails(setDoc<T>(newItemDocRef, newItemData));
    }
    return [newItemDocRef, newItemData];
  };
