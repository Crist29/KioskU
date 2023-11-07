// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
   
    production: false,
    endPoint:"https://localhost:7209/api/",
    firebaseConfig: {
        apiKey: "AIzaSyAiOdCRjG4LCkhxQ94WC2ZR5Uz13HnHzjg",
        authDomain: "kiosku-b5ebc.firebaseapp.com",
        projectId: "kiosku-b5ebc",
        storageBucket: "kiosku-b5ebc.appspot.com",
        messagingSenderId: "377969632639",
        appId: "1:377969632639:web:53f0f35c03c7cc549f664a"
    }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
