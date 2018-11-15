import React, { Component } from 'react';
import { 
  Platform, StyleSheet, TextInput, View, Image,
} from 'react-native';
import { 
  Container, Header, Body, Footer, Text, Button, FooterTab, Title, Content, Icon, Form, Textarea,
} from 'native-base';

import AppHeader from '../components/Header'
import Camp from '../components/Camp'
import GetSentiment, { getSentiment } from '../services/GetSentiment'

export default class CampScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <AppHeader heading={'Camp'} />
        <Camp />
      </Container>
    );
  }
}
