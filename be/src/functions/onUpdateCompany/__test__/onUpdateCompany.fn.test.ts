import { auth } from '@common/firebase';
import { FS_PATH } from '@constants/firestore';
import { onCreateCompany } from '@root';
import { datatype } from 'faker';
import test from 'firebase-functions-test';

describe('on update company', () => {
  const { wrap, firestore } = test();
  const uid = datatype.uuid();
  const onUpdateCompanyWrapped = wrap(onCreateCompany);

  it('Should onboard user', async () => {
    await auth.createUser({ uid });

    const companyDocPath = FS_PATH.companies(uid);
    const companySnapshot = firestore.makeDocumentSnapshot({}, companyDocPath);

    onUpdateCompanyWrapped(companySnapshot);

    const updatedUser = await auth.getUser(uid);
    expect(updatedUser.customClaims?.isOnboarded).toBeTruthy();
  });
});
