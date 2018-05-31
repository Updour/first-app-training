/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";

// import styles from './styles';

export default class Paketdata extends Component {
  render() {
    return (
      <View>
           <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Transfer') }>
      	<Text>
      	Paketdata ke Tranfers
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
Paketdata.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Paketdata</Title>
      </Body>
      <Right />
    </Header>
  )
});

