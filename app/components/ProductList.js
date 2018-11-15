import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class ProductList extends Component {
  render() {
    return (
      <View>
        <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/Logo.png')} />
            <Body>
              <Text>REI Co-op</Text>
              <Text note>Half Dome 2 Plus Tent</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={require('../images/Tent.jpeg')} style={{height: 300, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/Logo.png')} />
            <Body>
              <Text>REI Co-op</Text>
              <Text note>Big Haul 40 Duffel</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={require('../images/Bag.jpeg')} style={{height: 300, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>19 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>10 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>15h ago</Text>
          </Right>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/Perception.jpg')} />
            <Body>
              <Text>Perception</Text>
              <Text note>Sound 9.5 Kayak</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={require('../images/Kayak.jpeg')} style={{height: 300, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>8 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>2 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>9h ago</Text>
          </Right>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/DB.png')} />
            <Body>
              <Text>Diamondback</Text>
              <Text note>Line 27.5 Bike - 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={require('../images/Bike.jpeg')} style={{height: 300, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>21 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>12 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>22h ago</Text>
          </Right>
        </CardItem>
      </Card>
      </View>
    );
  }
}
