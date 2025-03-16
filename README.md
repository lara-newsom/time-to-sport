# Time to Sport - Upgrading Angular for Performance Workshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

During the workshop this course will be updated to the current version and we will implement many of the major improvements that have been recently added to the Angular framework.

## Setting up Your Development Machine
Your machine will need to have node installed, it is recommended to use a Node Version manager like [NVM](https://github.com/nvm-sh/nvm) to help manage node versions between updates. New versions of Angular often have dependencies on newer versions of Node. 
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

Clone the repo `git clone https://github.com/lara-newsom/time-to-sport.git` or `git clone git@github.com:lara-newsom/time-to-sport.git`
Run `npm install --legacy-peer-deps` to install the required node modules. 

Verify that the local version of Angular is the version noted in the package.json file `ng version`

## Serve the Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you get the following error, add the following export to your .zshrc file `export NODE_OPTIONS=--openssl-legacy-provider`

```
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/).
