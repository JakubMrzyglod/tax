import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import firebase from 'firebase/compat/app';
import { datatype } from 'faker';
import { Company, getCompany } from './utils/company.test.utils';
import { CreateNewItemFn, createNewItemFn } from './utils/common.utils';
import { updateDoc } from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

describe('Company rules', () => {
  const token = datatype.uuid();
  const otherToken = datatype.uuid();
  const getPath = (userUid: string = token) => `companies/${userUid}`;

  let env: RulesTestEnvironment;
  let firestore: firebase.firestore.Firestore;
  let otherUserFirestore: firebase.firestore.Firestore;

  let createNewCompany: CreateNewItemFn<Company>;

  beforeAll(async () => {
    env = await initializeTestEnvironment({ projectId: datatype.uuid() });
    firestore = env.authenticatedContext(token).firestore();
    otherUserFirestore = env.authenticatedContext(otherToken).firestore();
    createNewCompany = createNewItemFn({
      firestore,
      path: getPath(),
      getItemData: getCompany,
    });
  });

  beforeEach(async () => {
    await env.clearFirestore();
  });

  afterAll(async () => {
    await env.cleanup();
  });

  it('Should create new item', async () => {
    await createNewCompany();
  });

  it('Should throw for empty object', async () => {
    await createNewCompany({ newItemData: {} as Company, withSuccess: false });
  });

  it('Should throw error for create company for other user id', async () => {
    await createNewCompany({
      path: getPath(datatype.uuid()),
      withSuccess: false,
    });
  });

  describe('Should update only one param', () => {
    const companyData = getCompany();
    const companyDataKeys = Object.keys(companyData) as (keyof Company)[];
    companyDataKeys.map((key) => {
      it(key, async () => {
        const [docRef] = await createNewCompany();
        const newCompanyData = getCompany();
        await assertSucceeds(
          updateDoc<Partial<Company>>(docRef, { [key]: newCompanyData[key] })
        );
      });
    });
  });

  it('Should throw error for update company for other user id', async () => {
    const [{ path }] = await createNewCompany();
    const docRef = doc(otherUserFirestore, path);
    await assertFails(updateDoc(docRef, getCompany()));
  });

  it('Should get my company data', async () => {
    const [docRef] = await createNewCompany();
    await assertSucceeds(getDoc(docRef));
  });

  it('Should throw error for get other company data', async () => {
    const [{ path }] = await createNewCompany();
    const docRef = doc(otherUserFirestore, path);
    await assertFails(getDoc(docRef));
  });

  it('Should throw error for get all companies', async () => {
    await createNewCompany();
    await assertFails(firestore.collection('companies').get());
  });
});
