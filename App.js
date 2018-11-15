import React from 'react';

// Screens
import ProductScreen from './app/screens/ProductScreen';
import CommentScreen from './app/screens/CommentScreen';

// Navigation
import { createBottomTabNavigator, } from 'react-navigation';

const App = createBottomTabNavigator({
  Products: { 
    screen: ProductScreen,
    navigationOptions: {
      tabBarLabel: 'Products',
    },
  },
  Comments: { 
    screen: CommentScreen,
    navigationOptions: {
      tabBarLabel: 'Comments',
    },
  },
});

export default App;
