/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";


// import styles from './styles';

export default class Transfer extends Component {
  render() {
    return (
      <View>
           <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Deposit') }>
      	<Text>
      	Transfer ke Deposit
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
Transfer.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Transfer</Title>
      </Body>
      <Right />
    </Header>
  )
});