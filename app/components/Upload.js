import React, { Component, } from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, Content, Form, Textarea, Icon, } from 'native-base';

// Einstein service
import { getSentiment, } from '../services/GetSentiment';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get user input to send to Einstein
  handleChange(e) {
    this.setState({
      inputText: e.nativeEvent.text,
    });
  }

  // Send a request to Einstein
  handleSubmit() {
    let query = this.state.inputText;
    getSentiment(query)
      .then((res) => {
        if(res.message === 'Invalid access token') {
          alert('OAuth Token expired. Please create a new one.')
        }
        else {
          alert(
            'Positive: ' + JSON.stringify(res.probabilities[0].probability) + ' ' + 
            'Negative: ' + JSON.stringify(res.probabilities[1].probability) + ' ' + 
            'Neutral: ' + JSON.stringify(res.probabilities[2].probability)
          );
        }
      })
      .catch(function(error) {
        alert('ERROR: ' + error)
      });
  }

  render() {
    return (
      <Content>
        <Image
          style={styles.myImage}
          source={require('../images/Camp.jpg')}
          resizeMode="contain"
        />
        <View style={styles.myView}>
          <View style={styles.childView}>
            <Form>
              <Textarea 
                rowSpan={5} 
                bordered 
                placeholder="Textarea" 
                onChange={this.handleChange} 
              />
            </Form>
          </View>
          <View style={styles.childView}>
            <Button 
              block 
              style={styles.myButton} 
              onPress={this.handleSubmit}>
              <Text>
                Submit
              </Text>
            </Button>
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between',
  },
  childView: {
    height: 150,
  },
  myImage: {
    flex:1, 
    height: 300, 
    width: null, 
    marginTop: -40,
  },
  myButton: {
    padding: '10%', 
    alignSelf: 'center',
  },
});
