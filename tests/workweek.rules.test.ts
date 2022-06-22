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
import { Workweeks } from '../types/schedules';
import { getWorkweeks } from './utils/workweek.utils';

describe('Interval rules', () => {
  const token = datatype.uuid();
  const otherToken = datatype.uuid();
  const defaultScheduleId = datatype.uuid();
  const defaultWorkweeksId = datatype.uuid();

  const getPath = (
    userUid = token,
    scheduleId = defaultScheduleId,
    workweeksId = defaultWorkweeksId
  ) => `companies/${userUid}/schedules/${scheduleId}/workweeks/${workweeksId}`;

  let env: RulesTestEnvironment;
  let firestore: firebase.firestore.Firestore;
  let otherUserFirestore: firebase.firestore.Firestore;

  let createNewWorkweeks: CreateNewItemFn<Workweeks>;

  beforeAll(async () => {
    env = await initializeTestEnvironment({ projectId: datatype.uuid() });
    firestore = env.authenticatedContext(token).firestore();
    otherUserFirestore = env.authenticatedContext(otherToken).firestore();
    createNewWorkweeks = createNewItemFn({
      firestore,
      path: getPath(),
      getItemData: getWorkweeks,
    });
  });

  beforeEach(async () => {
    await env.clearFirestore();
  });

  afterAll(async () => {
    await env.cleanup();
  });

  it('Should create new item', async () => {
    await createNewWorkweeks();
  });

  it('Should update item', async () => {
    const [docRef] = await createNewWorkweeks();
    const newData = getWorkweeks();
    await assertSucceeds(updateDoc(docRef, newData));
  });

  it('Should throw error for create item for other user id', async () => {
    await createNewWorkweeks({
      path: getPath(datatype.uuid()),
      withSuccess: false,
    });
  });

  it('Should throw error for update item for other user id', async () => {
    const [{ path }] = await createNewWorkweeks();
    const docRef = doc(otherUserFirestore, path);
    await assertFails(updateDoc(docRef, getWorkweeks()));
  });

  it('Should get my item data', async () => {
    const [docRef] = await createNewWorkweeks();
    await assertSucceeds(getDoc(docRef));
  });

  it('Should throw error for get other item data', async () => {
    const [{ path }] = await createNewWorkweeks();
    const docRef = doc(otherUserFirestore, path);
    await assertFails(getDoc(docRef));
  });

  it('Should throw error for get all items', async () => {
    await createNewWorkweeks();
    await assertFails(
      firestore
        .collection(
          `companies/${otherToken}/schedules/${defaultScheduleId}/intervals`
        )
        .get()
    );
  });

  it('Should return all items', async () => {
    await createNewWorkweeks();
    await assertSucceeds(
      firestore
        .collection(
          `companies/${token}/schedules/${defaultScheduleId}/intervals`
        )
        .get()
    );
  });
});
