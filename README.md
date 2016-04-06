Clone this repo into your local dir, then run npm install and bower install
```
npm install
```
```
bower install
```

Now you're ready to use the gulp tasks below!

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in /dist
* `gulp build:<env>` to build a target specific build; env config options are (local, development, staging, production)
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:local` to launch a browser sync server on your source files and connect to a local rails backend on port 3001
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
