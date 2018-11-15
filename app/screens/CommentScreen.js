import React, { Component } from 'react';
import { Container, Icon } from 'native-base';

import AppHeader from '../components/AppHeader';
import SubmitComment from '../components/SubmitComment';

export default class CommentScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <AppHeader heading={'Comments'} />
        <SubmitComment />
      </Container>
    );
  }
}
