import React from 'react';

// Screens
import HomeScreen from './app/screens/HomeScreen';
import CommentScreen from './app/screens/CommentScreen';

// Navigation
import { createBottomTabNavigator, } from 'react-navigation';

const App = createBottomTabNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Images',
    },
  },
  Comment: { 
    screen: CommentScreen,
    navigationOptions: {
      tabBarLabel: 'Comments',
    },
  },
});

export default App;
