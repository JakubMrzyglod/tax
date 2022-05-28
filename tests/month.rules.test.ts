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
import { getMonth, Month } from './utils/month.test.utils';

describe('Months rules', () => {
  const token = datatype.uuid();
  const otherToken = datatype.uuid();
  const defaultScheduleId = datatype.uuid();
  const defaultMonthId = datatype.uuid();
  const getPath = (
    userUid = token,
    scheduleId = defaultScheduleId,
    monthId = defaultMonthId
  ) => `companies/${userUid}/schedules/${scheduleId}/months/${monthId}`;

  let env: RulesTestEnvironment;
  let firestore: firebase.firestore.Firestore;
  let otherUserFirestore: firebase.firestore.Firestore;

  let createNewMonth: CreateNewItemFn<Month>;

  beforeAll(async () => {
    env = await initializeTestEnvironment({ projectId: datatype.uuid() });
    firestore = env.authenticatedContext(token).firestore();
    otherUserFirestore = env.authenticatedContext(otherToken).firestore();
    createNewMonth = createNewItemFn({
      firestore,
      path: getPath(),
      getItemData: getMonth,
    });
  });

  beforeEach(async () => {
    await env.clearFirestore();
  });

  afterAll(async () => {
    await env.cleanup();
  });

  it('Should create new item', async () => {
    await createNewMonth();
  });

  it('Should update item', async () => {
    const [docRef] = await createNewMonth();
    const newMonthData = getMonth();
    await assertSucceeds(updateDoc(docRef, newMonthData));
  });

  it('Should throw error for create month for other user id', async () => {
    await createNewMonth({
      path: getPath(datatype.uuid()),
      withSuccess: false,
    });
  });

  it('Should throw error for update month for other user id', async () => {
    const [{ path }] = await createNewMonth();
    const docRef = doc(otherUserFirestore, path);
    await assertFails(updateDoc(docRef, getMonth()));
  });

  it('Should get my group data', async () => {
    const [docRef] = await createNewMonth();
    await assertSucceeds(getDoc(docRef));
  });

  it('Should throw error for get other group data', async () => {
    const [{ path }] = await createNewMonth();
    const docRef = doc(otherUserFirestore, path);
    await assertFails(getDoc(docRef));
  });

  it('Should throw error for get all groups', async () => {
    await createNewMonth();
    await assertFails(
      firestore
        .collection(
          `companies/${otherToken}/schedules/${defaultScheduleId}/months`
        )
        .get()
    );
  });

  it('Should throw error for get all groups', async () => {
    await createNewMonth();
    await assertSucceeds(
      firestore
        .collection(`companies/${token}/schedules/${defaultScheduleId}/months`)
        .get()
    );
  });
});
