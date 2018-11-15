import React, { Component, } from 'react';
import { Container, Icon, } from 'native-base';

import AppHeader from '../components/AppHeader';
import Upload from '../components/Upload';

export default class UploadScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <AppHeader heading={'Upload'} />
        <Home />
      </Container>
    );
  }
}
