import { firestore, https } from 'firebase-functions';
import { TriggerPath } from './constants/firestore';
import { onCreateCompanyHandler } from './functions/onUpdateCompany';

export const test = https.onRequest((request, response) => {
  response.send('Ok');
});

export const onCreateCompany = firestore
  .document(TriggerPath.companies)
  .onCreate(onCreateCompanyHandler);
