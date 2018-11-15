import React, { Component } from 'react';
import { 
  Platform, StyleSheet, TextInput, View, Image,
} from 'react-native';
import { 
  Container, Header, Body, Footer, Text, Button, FooterTab, Title, Content, Icon, Form, Textarea,
} from 'native-base';

import GetSentiment, { getSentiment } from '../services/GetSentiment'

export default class CampScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      error: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputText: e.nativeEvent.text
    });
  }
  handleSubmit() {
    let query = this.state.inputText;
    getSentiment(query)
      .then((res) => {
        if(res.message === 'Invalid access token') {
          alert('Invalid access token')
        }
        else {
          alert(
            'Positive: ' + JSON.stringify(res.probabilities[0].probability) + ' ' + 
            'Negative: ' + JSON.stringify(res.probabilities[1].probability) + ' ' + 
            'Neutral: ' + JSON.stringify(res.probabilities[2].probability)
              );
          this.setState({
            error: false,
          })
        }
      })
      .catch(function(error) {
        alert('ERROR: ' + error)
      });
  }
  static navigationOptions = {
    title: 'Camp',
    headerLeft: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
            <Image
              style={{flex:1, height: 300, width: null, marginTop: -40}}
              source={require('../images/Snow.jpg')}
              resizeMode="contain"
            />
            <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}}>
              <View style={{height: 150}}>
                <Form>
                  <Textarea rowSpan={5} bordered placeholder="Textarea" onChange={this.handleChange} />
                </Form>
              </View>
              <View style={{height: 150}}>
                <Button block style={styles.button} onPress={this.handleSubmit}>
                  <Text>Submit</Text>
                </Button>
              </View>
            </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical
              onPress={() =>
                navigate('Camp')
              }>
              <Icon name="flame" />
              <Text>Camp</Text>
            </Button>
            <Button vertical 
                onPress={() =>
                navigate('Cycle')
              }>
              <Icon name="bicycle" />
              <Text>Cycle</Text>
            </Button>
            <Button active vertical
              onPress={() =>
                navigate('Snow')
              }>
              <Icon active name="snow" />
              <Text>Snow</Text>
            </Button>
            <Button vertical
              onPress={() =>
                navigate('Travel')
              }>
              <Icon name="train" />
              <Text>Travel</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'black'
  },
  button: {
    padding: '10%', 
    alignSelf: 'center'
  }
});
