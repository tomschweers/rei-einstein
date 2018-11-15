import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

export default class Images extends Component {
  render() {
    return (
      <View style={styles.myView}>
        <View style={styles.childView}>
          <Image
            style={styles.myImage}
            source={require('../images/Camp.jpg')}
              
          />
        </View>
        <View style={styles.childView}>
          <Image
            style={styles.myImage}
            source={require('../images/Cycle.jpg')}
              
          />
        </View>
        <View style={styles.childView}>
          <Image
            style={styles.myImage}
            source={require('../images/Snow.jpg')}
              
          />
        </View>
        <View style={styles.childView}>
          <Image
            style={styles.myImage}
            source={require('../images/Travel.jpg')}
              
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  childView: {
    height: 500,
  },
  myImage: {
    flex:1, 
    height: 300, 
    width: null, 
  },
});
