# REI Einstein App

A mobile app imagining the possibilities with Salesforce's Einstein AI using a popular outdoor retail company.

What is [Einstein AI](https://einstein.ai/)?

## Overview

This is a cross-platform mobile app built with [React Native](https://facebook.github.io/react-native/). I am using [React Navigation](https://reactnavigation.org/) for navigation and [NativeBase](https://nativebase.io/) for UI components.

## Architecture

This is a good visualization of React Native and how it can be expanded to web. This is purely a native app, but if you wanted to add that capability sharing the same code base, you could. 

![alt text](https://www.icapps.com/sites/default/files/styles/wide_image/public/Schermafbeelding-2017-04-24-om-10.24.55.png?itok=Wp383bxW)

In this app there is currenty no back-end storage, but in the future we could add something to save comments, photos, likes and other information. We could also use it to make user profiles, save user preferences, posts and authentication data.

The back-end in our app is Einstein, so the diagram is still accurate in a sense. Einstein handles a lot of computation behind the scenes that our front-end doesn't care about. We just send it some data and it sends us a response.

## Getting started

Depending on what device you are running you will either run-ios or run-android. Make sure you have Xcode or Android Studio already installed on your machine. 

If you are running Xcode for the first time, you may need to manually open the Simulator before running the run-ios command. After that you will be able to run the Simulator directly from the terminal.

**NOTE:** I have only tested this app on iOS, but it should work just fine on Android.

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

The first time (and any time after your token expires) that you want to run this app, you will need to update the OAuth Token. To do so, navigate to 'rei-einstein/app/services/Assets.js' and replace the existing token with the new one. This will update the bearer token for any and all requests to Einstein in the app.

## Using the app

The app is used to showcase how the Einstein Sentiment API can provide immediate feedback to the user. The first tab is a list of 4 sample products. These are just static entries to paint the picture better. In the future, we could retrieve them from the actual site, save comments and provide a user login. 

The second tab is where you enter a comment about a product. Again, in the future we could link this screen to each of the products on the first tab, passing data between screens. Enter a comment in the text box and click submit. Einstein will analyze your comment and give you a response back depending on your sentiment.

## Story

So what is this app all about? How can something like this be used in a real life example? Deep learning and AI capabilities are becoming more and more useful in the business world as people begin to uncover new uses for these technologies.

### Identify a problem

We all know the classic 'Reviews' section on any ecommerce website. Think about an Amazon listing, at the bottom of the page you have a simple graphic showcasing the percentage of reviews for each star rating. This is useful because users who have yet to purchase an item can get a sense of how satisfied other users were with their purchase decision.

The problem is users have to deliberately choose their star rating, and they only have 5 stars to choose from (maybe 10 if the site allows half stars). This adds a level of bias to a review because in many cases, the user will be forced to round up a star or down a star from where they actually feel.

### Clear solution

Using Einstein Sentiment, we can get rid of the star rating system all together. Users will simply enter a comment and click submit. The API will calculate the level of positive, negative and neutral sentiment that it detects from the review. Using the response from API call we can average it in with the other reviews and create our own, more accurate, display of user satisfaction. 

Taking it a step forward, if we have Salesforce connected to our ecommerce site we can then route the reviews we receive to cases, categorized by the level of sentiment. For positive reviews we will take one action, neutral another and negative a third. Consumers may exhibit unfavorable word-of-mouth communication, if they are dissatisfied with a product. In this case, customers tell twice as many people about bad experiences as good ones and such behavior can severely damage a company's image. 

Addressing [post-purchase dissonance](http://www.zeepedia.com/read.php?post_purchase_dissonance_dissonance_reduction_marketing_implications_consumer_psychology&b=86&c=42) quickly and accurately can change the attitude of the buyer, and they may give the company another chance in the future. The buyer may even spread positive word-of-mouth if the level of recovery exceeds the buyers expectations.

### User narrative

In the case of REI, let's imagine a first time customer comes across the REI website due to some online advertisement on their Facebook feed. Maybe she was doing a basic search on Google for a camping tent and in turn, Facebook suggested a REI Co-Op Half Dome 2 Plus Tent from the REI ecommerce site.

The customer clicks on the ad and proceeds to purchase the product from the website. She is very excited with her purchase as it comes in the mail earlier than expected, is packaged nicely, looks like the right size and loves the color. She is so ecstatic that she goes immediately to the REI website and leaves a great review. 

From the review, Einstein is going to analyze her sentiment as extremely positive and create a case in Salesforce for a sales rep to send her a thank you email. Because she is a first time buyer, a new account record will be created for her as well.

Fast-forward to the weekend, our buyer goes on an extended 3 day camping trip. After hiking 20 miles into the wilderness on the first day, she is exhausted and has just enough energy to pitch her new tent. Come to find out the tent was missing a couple of critical components causing her to have a miserable night of sleep and cut her trip short.

She then goes back on the REI site and posts a negative review. Einstein then takes her comment and creates a new case for the sales rep to reach out immediately to her directly over the phone to resolve the conflict. He also offers her a 50% discount on her next purchase on top of the replacement of the original tent. 

Our buyer is now more likely to keep purchasing from REI even though she experienced post-purchase dissonance because the conflict was resolved quickly, efficiently and exceeded her expectations.

## Making changes

Check out the [developer docs](https://metamind.readme.io/) for more on what Einstein can do. This app takes advantage of Einstein Community Sentiment, which already has a data model trained and ready to go. However, you can train your own models and use image/object classifications or language intent type predictions.

Everything that you will need to make changes to this app will can be found in the 'app' folder. Use the 'app/screens' folder for entire pages, then import them into 'App.js' to hook them up to the navigation.

Use the 'app/services' folder for calls to Einstein or a back-end system. I would suggest checking out [Firebase](https://firebase.google.com/) to get up and running quickly. You can also use Firebase pretty easily for user authentication.

The 'app/components' folder holds reusable components that can be used in multiple screens or other components. The key is writing as little code as possible and reusuing the same assets throughout the application, passing in different props as necessary.
