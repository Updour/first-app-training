import React from "react";
import { AppRegistry, Alert,Image, StatusBar } from "react-native";
import { Container, Header, Left, Body, Thumbnail, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { createStackNavigator } from "react-navigation";

export default class Logout extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header>
              <Text>X- METRIK</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  keluar
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>WASSALAM</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
Logout.navigationOptions = ({ navigation }) => ({
  header: (
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
  )
});
