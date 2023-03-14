# react-native-jitsi

Jitsi SDK implementation for react native

# Version

Jitsi Meet Native SDKs Implemented

| iOS SDK | Android SDK |
|---------|-------------|
| 7.0.1   | WIP         |

https://jitsi.github.io/handbook/docs/intro 

https://cocoapods.org/pods/JitsiMeetSDK

https://github.com/jitsi/jitsi-meet-sdk-samples

## Installation

```sh
npm i --save react-native-jitsi

or

yarn add react-native-jitsi
```

## Usage

```js
import JitsiMeet from 'react-native-jitsi';

// ...

const conferenceOptions = {
	url: callUrl,
	userInfo: {
		displayName: userName,
		avatar: avatarUrl
	}
};

await JitsiMeet.launch(conferenceOptions)
```

## iOS install

1.) This library uses Swift code, so make sure that you have created the `Objective-C bridging header file`.

If not, open your project in Xcode and create an empty Swift file.

Xcode will ask if you wish to create the bridging header file, please choose yes.

For more information check [Create Objective-C bridging header file](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift).

2.) Replace the following code in AppDelegate.m:

```objective-c
UIViewController *rootViewController = [UIViewController new];
rootViewController.view = rootView;
self.window.rootViewController = rootViewController;
```

with this one

```objective-c
UIViewController *rootViewController = [UIViewController new];
UINavigationController *navigationController = [[UINavigationController alloc]initWithRootViewController:rootViewController];
navigationController.navigationBarHidden = YES;
rootViewController.view = rootView;
self.window.rootViewController = navigationController;
```

This will create a navigation controller to be able to navigate between the Jitsi component and your react native screens.

3.) Add the following lines to your `Info.plist`

```xml
<key>NSCameraUsageDescription</key>
<string>Camera Permission</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone Permission</string>
<key>NSCalendarUsageDescription</key>
<string>Calendar Permission</string>
```

4.) Modify your platform version in Podfile and Xcode to have platform version `12.0` or above.

![](https://firebasestorage.googleapis.com/v0/b/react-native-jitsimeet.appspot.com/o/Captura%20de%20Tela%202021-12-16%20a%CC%80s%2016.44.57.png?alt=media&token=c653bdbb-f08b-4e6a-a571-0f0894a12997)

![](https://firebasestorage.googleapis.com/v0/b/react-native-jitsimeet.appspot.com/o/Captura%20de%20Tela%202021-12-16%20a%CC%80s%2016.45.25.png?alt=media&token=d97bfa72-d583-4046-88fd-a3d1c290834d)

5.) In Xcode, under `Build settings` set `Enable Bitcode` to `No` and `Always Embed Swift Standard Libraries` to `Yes`.

6.) In Xcode, under `Signing & Capabilities` add the capability `Background Modes` and check `Voice over IP`. Otherwise, it won't work well in background.

7.) Clean your project and run `npx pod-install`.

## Android install

1.) WIP - It doesn't work with android yet.

### Feature Flags

For a full list of Feature Flags, see the [Jitsi Docs](https://jitsi.github.io/handbook/docs/dev-guide/mobile-feature-flags).

Feature flags must be added via url

## UserInfo

| key         | Data type | Default | Description              |
| ----------- | --------- | ------- | ------------------------ |
| displayName | string    | ""      | Participant's name       |
| email       | string    | ""      | Participant's e-mail     |
| avatar      | string    | ""      | Participant's avatar URL |

## Screen Sharing

It is already enabled by default on Android.

On iOS it requires a few extra steps. Set the flag `screenSharingEnabled` to true and follow this tutorial [Screen Sharing iOS](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-ios-sdk#screen-sharing-integration) to get it working.

## License

MIT
