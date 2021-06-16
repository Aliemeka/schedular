// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

require('dotenv').load();

export const environment = {
  production: false,
  apiKey: "AIzaSyAUh9J4b1XtuyRXS_Ba4ZbVdid4NmRQaH8",
  authDomain: "schedular-d7b44.firebaseapp.com",
  projectId: "schedular-d7b44",
  storageBucket: "schedular-d7b44.appspot.com",
  messagingSenderId: "105880545261",
  appId: "1:105880545261:web:6a77941b46ed6996db69e4",
  measurementId: "G-YN1BVM5R9T"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
