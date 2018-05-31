import React, { Component } from 'react';
import { StatusBar, Alert, AsyncStorage, Image, TouchableOpacity } from "react-native";
import { Container, Header, Left, Body, Thumbnail, Icon , Title, Card, CardItem, Content, Right, Button, Text } from "native-base";
import { NavigationActions } from "react-navigation";
import { Col, Row, Grid } from 'react-native-easy-grid';
// import Menu1 from '../menu/menu1'
// import Menu2 from '../menu/menu2'
// import Menu3 from '../menu/menu3'
// import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles';
//fro navigate
const resetAction = NavigationActions.reset({
    index: 0,
    key:null,
    actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'Login' }),
    ]
})

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {

      userlogin: '',
      loading: true,
      email      : '',
      password    : '',
      token: null
    };
  } 

  //  componentWillMount() {
  //   this.checkUserAuth()
  // }

  ///navigate
  clearAndNavigate(screen) {
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
  ///received
  async checkhUserLogin() {
    try {
      let user = await AsyncStorage.getItem('dataLogin')
      let parsed = JSON.parse(user)
      if (user !== null) {
        this.setState({
          userlogin: parsed.email,
          token: parsed.token,
          isLoading: false
        })
      } else {
        this.props.navigation.navigate('Login') //ini navigatornya di mana?? LOGIN
        // bukan screenbya, tapi navitgatornya
      }
    } catch (error) {
      console.log('error' + error)
    }
  }
    
  render() {
    return (
      <Container>
        <Header style={styles.header}>
         <StatusBar
           backgroundColor="#0000b3"
           barStyle="light-content"
         />
          <Left>
            <Button
              transparent 
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="md-list"  style ={{color: 'white'}} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title} >PT APA</Title>
          </Body>
          <Right>           
              <Button transparent onPress={() => Alert.alert('pencarian')} >
                <Icon name="md-search" style={{color:'white'}} />
              </Button>
          </Right>
        </Header>
         <Content style={styles.content}>
        </Content>
      </Container>
    );
  }
}
