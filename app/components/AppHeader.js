import React, { Component, } from 'react';
import { Header, Left, Body, Title, Right, } from 'native-base';

export default class AppHeader extends Component {
  render(){
    return(
      <Header>
        <Left/>
        <Body>
          <Title>{this.props.heading}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
