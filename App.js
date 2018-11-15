import React from 'react';
import { Icon, } from 'native-base';

// Screens
import HomeScreen from './app/screens/HomeScreen';

// Navigation
import { createBottomTabNavigator, } from 'react-navigation';

const App = createBottomTabNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Upload: { 
    screen: UploadScreen,
    navigationOptions: {
      tabBarLabel: 'Upload',
    },
  },
});

export default App;
