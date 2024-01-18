# Eureka Labs Technical Challenge

This is my finalized Image Viewer project using React Native with Typescript

Dev: Germán Gómez 🇦🇷

### 1. Download or Clone this repository

Open terminal

```
git clone https://github.com/gg-ballin/challengeEL.git
git checkout develop
```

### 2. Install dependencies

Once you've already cloned the project, run:
`npm i` or `yarn`

#### iOS Specific

Install pods

```
  cd ios && pod install
```

#### Additional required steps

Is required for this project tu use node version 19 or lower to run:

```
nvm use 19
```

After that, you can start the metro bundler with:

`yarn start`

### 3. Run the project

#### iOS

```
yarn ios
```

#### Android

```
yarn android
```

### Common errors and how to tackle them

- Android Gradle plugin requires Java 17 to run. You are currently using Java 15.

If you are having issues with Java versions, you should install the Java Version 17 in your Android Studio. In my case
I've used coretto-17(17.0.9). Once that is set, you can run the app. There is a command called `yarn fix-java` that
can bypass this error in runtime. You can check it out in `package.json`.

- Watchman issues
  If your metro bundler keeps shutting down, run:

```
watchman watch-del-all
rm -f /usr/local/bin/watchman
rm -rf /usr/local/Cellar/watchman/2023.04.10.00/bin/watchman
```

### External libraries used

- [react-navigation(v.6)](https://github.com/react-navigation/react-navigation)
- [react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera)
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)
- [redux-toolkit](https://github.com/reduxjs/redux-toolkit)
