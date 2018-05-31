import React from "react";
import { AppRegistry, Alert, AsyncStorage,ToastAndroid, Image, StatusBar,TouchableOpacity } from "react-native";
import { Container, CardItem,Right, Card, Content, Text, List,Left, ListItem,Icon,Body } from "native-base";
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  //navigate
    clearAndNavigate(screen, removeData) {
    this.removeData()
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: screen })
        ]
      })
    );
  }
  //delete token
   async removeData() {
    await AsyncStorage.removeItem('dataLogin')
    // console.log(removeData)
  }

  logOut() {
  Alert.alert(
  'Log Out',
  'Are you sure ??',
  [
    {text: 'Cancel', onPress: () => ToastAndroid.show('please go back to the home page', ToastAndroid.LONG), style: 'cancel'},
    {text: 'Yes', onPress: () => this.clearAndNavigate('Login')},
  ],
  { cancelable: false }
)
  }


  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content style={{}} >
          <Image
            source={{
              uri: "https://facebook.github.io/react/logo-og.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center", 
              alignItems: "center"
            }} />
            
          
          <List>
          <Content style={{}} >
            <Card style={{}}>
            <CardItem style={{ }}>
              <Icon type="FontAwesome" name="home" style={{fontSize: 20, color: 'red'}}/>
              <Text  onPress={() => navigate("Home") }
              style={{color: '#000000'}} >Home</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           </Content>
      {/*                  <ListItem  avatar>
                    <Left>
                      <Icon name="cart" style={{fontSize: 20, color: 'red'}} />
                    </Left>
                    <Body>
                      <Text style={{color:'black'}}
                      onPress={() => navigate("Product")}>
                        Service </Text>
                    </Body>
                  </ListItem> 
      */}
                  <ListItem avatar>
                    <Left>
                      <Icon name="help" style={{fontSize: 20, color: 'red'}}  />
                    </Left>
                    <Body>
                      <Text style={{color:'black'}}
                      onPress={() => navigate("About")}>
                      About</Text>
                    </Body>
                  </ListItem>
                  <ListItem avatar>
                    <Left>
                      <Icon name="help" style={{fontSize: 20, color: 'red'}}  />
                    </Left>
                    <Body>
                      <Text style={{color:'black'}}
                      onPress={() => navigate("Menu1")}>
                      progi</Text>
                    </Body>
                  </ListItem>
                  { /* <ListItem avatar>
                                      <Left>
                                        <Icon name="help" style={{fontSize: 20, color: 'red'}}  />
                                      </Left>
                                      <Body>
                                        <Text style={{color:'black'}}
                                        onPress={() => navigate("Auth")}>
                                        Auth</Text>
                                      </Body>
                                    </ListItem> */}
                  <ListItem avatar>
                    <Left>
                      <Icon name="md-contact" style={{fontSize: 20, color: 'red'}}  />
                    </Left>
                    <Body>
                      <Text style={{color:'black'}}
                       onPress={this.logOut.bind(this)}>
                      Logout</Text>
                    </Body>
                  </ListItem>
                </List>
               
        </Content>
      </Container>
    );
  }
}
