import * as functions from 'firebase-functions';

export const test = functions
  .region('europe-west3')
  .https.onRequest((request, response) => {
    response.send('Ok');
  });
