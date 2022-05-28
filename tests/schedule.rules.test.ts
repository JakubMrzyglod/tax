import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import firebase from 'firebase/compat/app';
import { datatype } from 'faker';
import { CreateNewItemFn, createNewItemFn } from './utils/common.utils';
import { updateDoc } from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { getGroup, Group } from './utils/schedule.test.utils';

describe('Schdules rules', () => {
  const token = datatype.uuid();
  const otherToken = datatype.uuid();
  const defaultScheduleId = datatype.uuid();
  const getPath = (userUid = token, scheduleId = defaultScheduleId) =>
    `companies/${userUid}/schedules/${scheduleId}`;

  let env: RulesTestEnvironment;
  let firestore: firebase.firestore.Firestore;
  let otherUserFirestore: firebase.firestore.Firestore;

  let createNewGroup: CreateNewItemFn<Group>;

  beforeAll(async () => {
    env = await initializeTestEnvironment({ projectId: datatype.uuid() });
    firestore = env.authenticatedContext(token).firestore();
    otherUserFirestore = env.authenticatedContext(otherToken).firestore();
    createNewGroup = createNewItemFn({
      firestore,
      path: getPath(),
      getItemData: getGroup,
    });
  });

  beforeEach(async () => {
    await env.clearFirestore();
  });

  afterAll(async () => {
    await env.cleanup();
  });

  it('Should create new item', async () => {
    await createNewGroup();
  });

  it('Should throw for empty object', async () => {
    await createNewGroup({ newItemData: {} as Group, withSuccess: false });
  });

  it('Should throw error for create group for other user id', async () => {
    await createNewGroup({
      path: getPath(datatype.uuid()),
      withSuccess: false,
    });
  });

  describe('Should update only one param', () => {
    const companyData = getGroup();
    const companyDataKeys = Object.keys(companyData) as (keyof Group)[];
    companyDataKeys.map((key) => {
      it(key, async () => {
        const [docRef] = await createNewGroup();
        const newCompanyData = getGroup();
        await assertSucceeds(
          updateDoc<Partial<Group>>(docRef, { [key]: newCompanyData[key] })
        );
      });
    });
  });

  it('Should throw error for update group for other user id', async () => {
    const [{ path }] = await createNewGroup();
    const docRef = doc(otherUserFirestore, path);
    await assertFails(updateDoc(docRef, getGroup()));
  });

  it('Should get my group data', async () => {
    const [docRef] = await createNewGroup();
    await assertSucceeds(getDoc(docRef));
  });

  it('Should throw error for get other group data', async () => {
    const [{ path }] = await createNewGroup();
    const docRef = doc(otherUserFirestore, path);
    await assertFails(getDoc(docRef));
  });

  it('Should throw error for get all groups', async () => {
    await createNewGroup();
    await assertFails(
      firestore.collection(`companies/${otherToken}/groups`).get()
    );
  });

  it('Should throw error for get all groups', async () => {
    await createNewGroup();
    await assertSucceeds(
      firestore.collection(`companies/${token}/groups`).get()
    );
  });
});
