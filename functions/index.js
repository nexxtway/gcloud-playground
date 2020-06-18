const debug = require('@google-cloud/debug-agent').start({ allowExpressions: true });
const functions = require('firebase-functions');


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest(async (request, response) => {
    await debug.isReady();
    response.send('Hello from Firebase!');
});
