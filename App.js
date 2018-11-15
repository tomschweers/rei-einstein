import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import CampScreen from './app/screens/CampScreen'
import CycleScreen from './app/screens/CycleScreen'
import SnowScreen from './app/screens/SnowScreen'
import TravelScreen from './app/screens/TravelScreen'
import { createBottomTabNavigator, } from 'react-navigation';

const App = createBottomTabNavigator({
  Camp: { screen: CampScreen },
  Cycle: { screen: CycleScreen },
  Snow: { screen: SnowScreen },
  Travel: { screen: TravelScreen },
});

export default App;
