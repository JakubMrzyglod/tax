import { firestore, https } from 'firebase-functions';
import { TriggerPath } from './constants/firestore';
import { onUpdateCompanyHandler } from './functions/onUpdateCompany';

export const test = https.onRequest((request, response) => {
  response.send('Ok');
});

export const onUpdateCompany = firestore
  .document(TriggerPath.companies)
  .onCreate(onUpdateCompanyHandler);
