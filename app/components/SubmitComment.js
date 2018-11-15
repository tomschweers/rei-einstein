import React, { Component, } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Text, Button, Form, Textarea, H1, } from 'native-base';

// Einstein service
import { getSentiment, } from '../services/GetSentiment';

export default class SubmitComment extends Component {
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
    if (query !== '') {
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
    else {
      alert('Please enter a comment')
    }
  }

  render() {
    return (
      <View>
        <View style={styles.myView}>
          <View style={styles.childView}>
              <H1 style={styles.myHeader}>Instructions:</H1>
              <Text style={styles.myText}>
                Submit a comment about one of the images and REI Einstein will guess which image you are describing.
              </Text> 
          </View>
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
      </View>
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
    height: 250,
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
  myHeader: {
    padding: '10%', 
    alignSelf: 'center',
  },
  myText: {
    paddingTop: '10%', 
    alignSelf: 'center',
  },
});
