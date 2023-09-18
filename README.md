This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# IDE: Visual Studio Code

# Language: JavaScript, React Native

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install node modules

First, you will need to install node modules. Open terminal from the root project, run following command.

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

For ios, we need to install pods. Open terminal from the root project, run following command.

```bash
cd ios && pod install
```

## Step 2: Start your Application

### For Android

For debug, open terminal from the root project, run following command.

```bash
npx react-native run-android
```

For release of APK, open terminal from the root project, run following command.

```bash
cd android && ./gradlew app:assembleRelease
```

You will find apk under android->app->build->outputs->apk->release->app-release.apk

### For iOS

For debug, open terminal from the root project, run following command.

```bash
npx react-native run-ios
```
