import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import AppHeader from '../components/AppHeader';
import ProductList from '../components/ProductList';

export default class ProductScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <AppHeader heading={'Products'} />
        <Content>
          <ProductList />
        </Content>
      </Container>
    );
  }
}
