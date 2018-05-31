import React from "react";
import { AppRegistry, Alert,Image, StatusBar } from "react-native";
import { Container, Header, Left, Body, Thumbnail, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";

export default class About extends React.Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.avatarmovie.com/assets/backgrounds/avtr-he-bg-03.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                square
                style={{ height: 120, alignSelf: "stretch",
                justifyContent: "center", 
                alignItems: "center" }}
                source={{
                  uri: "http://www.avatarmovie.com/assets/backgrounds/avtr-he-bg-03.jpg"
                }}
              />
              </Body>
            </CardItem>
            <CardItem>
             
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>X- METRIK</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  
Using lorem ipsum to focus attention on graphic elements in a webpage design proposal
In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content (also called greeking). Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.

The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.

A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker.
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
About.navigationOptions = ({ navigation }) => ({
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
