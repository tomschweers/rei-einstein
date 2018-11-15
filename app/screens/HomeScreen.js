import React, { Component, } from 'react';
import { Container, Content, } from 'native-base';

import AppHeader from '../components/AppHeader';
import Home from '../components/Home';

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <AppHeader heading={'Images'} />
        <Content>
          <Home />
        </Content>
      </Container>
    );
  }
}
