import React, { Component, } from 'react';
import { Container, Content, } from 'native-base';

import AppHeader from '../components/AppHeader';
import Images from '../components/Images';

export default class ImagesScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <AppHeader heading={'Images'} />
        <Content>
          <Images />
        </Content>
      </Container>
    );
  }
}
