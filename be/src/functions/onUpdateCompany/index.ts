import { QueryDocumentSnapshot } from 'firebase-functions/v1/firestore';
import { auth } from '../../common/firebase';

export const onUpdateCompanyHandler = ({ id }: QueryDocumentSnapshot) =>
  auth.setCustomUserClaims(id, { isOnboarded: true });
