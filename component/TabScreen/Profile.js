import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";

import HomeScreen from "../HomeScreen";

export default class Profile extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
                <Header style ={{backgroundColor: '#0000e6'}} >
    <StatusBar
     backgroundColor="#000099"
     barStyle="light-content"
   />
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>PT APA</Title>
      </Body>
      <Right />
    </Header>
      </Container>
    );
  }
}
