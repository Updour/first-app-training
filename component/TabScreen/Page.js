import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text,Fab  } 
from "native-base";
//styling
import styles from './styles';
//component menu 
import Menu1 from '../menu/Menu1'
import Menu2 from '../menu/Menu2'
import Menu3 from '../menu/Menu3'
import HomeScreen from "../HomeScreen";


export default class Page extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      active: 'true'
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style ={{backgroundColor: '#0000e6'}}>
         <StatusBar
           backgroundColor="#000099"
           barStyle="light-content"
         />
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body  >
            <Title>ESYS DASHBOARD</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
      {/*import from folder menu */}
        <Menu1 />
        <Menu2 />
        <Menu3 />
      </Content>
       <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#00cc00' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="md-options" style={{ color: 'blue' }}/>
            <Button 
              style={{ backgroundColor: '#ff1a1a' }} 
              onPress={() => this.props.navigation.navigate("Chat") }
            >
              <Icon name="chatbubbles" />
            </Button>
          </Fab>
      </Container>
    );
  }
}
