import { QueryDocumentSnapshot } from 'firebase-functions/v1/firestore';
import { auth } from '../../common/firebase';

export const onCreateCompanyHandler = ({ id }: QueryDocumentSnapshot) =>
  auth.setCustomUserClaims(id, { isOnboarded: true });
