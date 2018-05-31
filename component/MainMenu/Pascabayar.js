/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";

// import styles from './styles';

export default class Pascabayar extends Component {
  render() {
    return (
      <View>
      <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Bpjs') }>
      	<Text>
      	Pascabayar ke 	Bpjs
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
Pascabayar.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Pascabayar</Title>
      </Body>
      <Right />
    </Header>
  )
});