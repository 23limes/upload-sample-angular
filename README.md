Clone this repo into your local dir, then run npm install and bower install
```
npm install
```
```
bower install
```

Create a new file in the app/ folder called app.config.json to hold your Cloudinary credentials
When you run gulp build, it will automatically create the angular constant for your environment
The default is development (thanks to gulp-ng-config)
```
{
  "production": {
    "apiDomain": "http://your.backend.com/api/v1",
    "CLOUDINARY": {
      "upload_endpoint": "https://api.cloudinary.com/v1_1/<your account folder>/image/upload",
      "upload_preset": "<your preset>"
    }
  },
  "staging": {
    "apiDomain": "http://your.backend.com/api/v1",
    "CLOUDINARY": {
      "upload_endpoint": "https://api.cloudinary.com/v1_1/<your account folder>/image/upload",
      "upload_preset": "<your preset>"
    }
  },
  "development": {
    "apiDomain": "http://your.backend.com/api/v1",
    "CLOUDINARY": {
      "upload_endpoint": "https://api.cloudinary.com/v1_1/<your account folder>/image/upload",
      "upload_preset": "<your preset>"
    }
  }
}
```

Now you're ready to use the gulp tasks below!

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in /dist
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
