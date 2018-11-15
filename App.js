import React from 'react';

// Screens
import ImagesScreen from './app/screens/ImagesScreen';
import CommentScreen from './app/screens/CommentScreen';

// Navigation
import { createBottomTabNavigator, } from 'react-navigation';

const App = createBottomTabNavigator({
  Home: { 
    screen: ImagesScreen,
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
