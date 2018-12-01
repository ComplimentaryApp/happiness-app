# React app for hAPPiness

## Getting ReactNative up and running

Firstly, a couple of tutorials:

- https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0
- https://learn.handlebarlabs.com/courses/253279/lectures/3939766

Cloning: for reasons unbeknownst to me, the project doesn't work if you have a space in the folder path. This took me forty minutes to fix, please don't repeat my pain!

First of all, React runs on Node.js, so install node from your package manager. On Mac: `brew install node`. Debian/Ubuntu: [https://nodejs.org/en/download/package-manager/](See here).

Now, with Node we want to install `yarn`. I also installed `create-react-native-app`, but I don't think this is necessary if the app has already been created. You'll also need `expo-cli`, to run the project. `npm install -g yarn expo-cli`.

I then created the project with `create-react-native-app`. This has already been done, so no need to do it again.

`yarn start` can then be used to actually get the app up and running. You'll need to install the Expo app from your App Store, then for iOS, scan the QR code printed in the terminal with your camera, or for Android scan it with the Expo app. This will load you into the app. Alternatively, use one of the shortcuts printed in your terminal to get a simulator up and running.

To lint your code, if you don't have eslint installed globally, run `yarn lint`. Note that you may need to install dependencies initially with the bare command `yarn`.

Other development tools: `eslint`, `prettier`. If using VSCode, install the extensions for each too.
