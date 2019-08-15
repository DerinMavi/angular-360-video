# Angular 360° Video

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

For UI components I used [Angular Material](https://material.angular.io) (instead of Bootstrap because I believe the components are higher quality.)
For video display [video.js](https://videojs.com/) and [videojs-vr.js](https://github.com/videojs/videojs-vr) plugin are used.

I implemented two components `file-upload` to enter the video URL and `video-view` to view it. 'Submit' button will be
enabled only after a valid URL is entered. The video URL is passed as parameter to video view.

## Testing
I uploaded my app to Google App Engine Standard environment. ~~You can see it [here](https://caner-playground.appspot.com)~~.

You can use these sample videos:

    http://vids.slawrence.io/bears.mp4
    http://vids.slawrence.io/manhattan.mp4
    http://vids.slawrence.io/volcano.mp4
    http://vids.slawrence.io/moscow.mp4

Remember some websites have [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) disabled. To access 
such videos from Chrome browser for example you need to start it with `--disable-web-security` flag:

On Windows:

    chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
  
On Mac OS X:

    open -a Google\ Chrome --args --disable-web-security --user-data-dir
  
You can use this video to test that it works:

    https://github.com/videojs/videojs-vr/blob/master/samples/eagle-360.mp4?raw=true
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Install Dependencies
Run `npm install`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Unit tests

Not implemented
