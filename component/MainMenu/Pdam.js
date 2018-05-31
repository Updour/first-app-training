/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";

// import styles from './styles';

export default class Pdam extends Component {
  render() {
    return (
      <View>
      <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Prabayar') }>
      	<Text>
      	Pdam ke prabayar
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
Pdam.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Pdam</Title>
      </Body>
      <Right />
    </Header>
  )
});