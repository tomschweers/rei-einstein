# REI Einstein App

A mobile app imagining the possibilities with Salesforce's Einstein AI using a popular outdoor retail company.

What is [Einstein AI](https://einstein.ai/)?


## Overview

This is a cross-platform mobile app built with [React Native](https://facebook.github.io/react-native/).


## Get started

Depending on what device you are running you will either run-ios or run-android. Make sure you have Xcode or Android Studio already installed on your machine. 


### Note

If you are running Xcode for the first time, you may need to manually open the Simulator before running the run-ios command. After that you will be able to run the Simulator directly from the terminal.

NOTE: I have only tested this app on iOS, but it should work just fine on Android.

```bash
git clone https://github.com/tomschweers/einstein-rei.git <project>

cd <project>

yarn install

react-native run-ios

react-native run-android
```


## Authorization

After you install the app, you will need to generate a new OAuth Token for the Einstein Platform Services API. The token is required and will be the same for all API calls to Einstein, however it is time dependent and will expire after a number of minutes. 

You will first need a private key to generate the token.
To generate the private key, sign up [here](https://api.einstein.ai/signup).

Once you have the private key, use it to generate your token [here](https://api.einstein.ai/token).


### Updating your token

The first time (and any time after your token expires) that you want to run this app, you will need to update the OAuth Token. To do so, navigate to 'rei-einstein/app/services/Assets.js' and replace the existing token with the new one. This will update the token for any and all requests to Einstein in the app.


## Making changes

Check out the [developer docs](https://metamind.readme.io/) for more on what Einstein can do.