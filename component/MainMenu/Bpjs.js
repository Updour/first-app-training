/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";

// import styles from './styles';

export default class Bpjs extends Component {
  render() {
    return (
      <View>
           <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Paketdata') }>
      	<Text>
      	Bpjs ke paket data
      </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
Bpjs.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Bpjs</Title>
      </Body>
      <Right />
    </Header>
  )
});
