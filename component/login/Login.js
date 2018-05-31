import React, { Component } from 'react'; 
import { View, ActivityIndicator, AsyncStorage, StatusBar, ToastAndroid, Keyboard} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button, Text, Title, Left, Body, Right, Icon, 
  Card, CardItem,} from 'native-base';
import { StackNavigator,NavigationActions } from "react-navigation";
import Storage from 'react-native-storage';
import axios from 'axios';
import styles from './styles';
// import Storage from 'react-native-storage';



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {        
        email      : '',
        password    : '',
        // loading : true,    
    };
      this.LoginUser   = this.LoginUser.bind(this);

  }

  clearAndNavigate(screen) {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: screen })
        ]
      })
    );
  }

  componentWillMount() {
    this.CheckUserLogin()
  }

  async CheckUserLogin() {
    let user = await AsyncStorage.getItem('dataLogin')
    if (user !== null) {
      console.log(user)
      this.clearAndNavigate('Home')
    } else {
      this.setState({
        isLoading: false
      })
    }
  }

//for login\\\
 LoginUser = () =>{
    if (this.state.email == "") {
      ToastAndroid.show('Email can not be empty', ToastAndroid.SHORT)
    } else if (this.state.password == "") {
      ToastAndroid.show('Password can not be empty', ToastAndroid.SHORT)
    } else {
      this.setState({
        loading: true
      })
      axios({
        method: 'POST',
        url:    'http://192.168.214.2/Auth/user', 
        data:   {
          email     : this.state.email,
          password  : this.state.password
        },
      }).then(response => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.status) {
          ToastAndroid.show('Welcome', ToastAndroid.SHORT)
          // this.storageAsyncStorage(response.data)
            this.clearAndNavigate('Home')
            AsyncStorage.setItem('dataLogin', JSON.stringify(response.data))
          console.log(response.data);
        }else{
          ToastAndroid.show('Email Atau Password salah', ToastAndroid.SHORT)
          ToastAndroid.showWithGravityAndOffset('Please check your username and password', 
          ToastAndroid.LONG,  ToastAndroid.CENTER, 25, 50 );
          console.log(response.data);
          // ToastAndroid.show('sukses', ToastAndroid.SHORT)
        }
      }
      else {
        console.log('gagal');
        ToastAndroid.show('Tidak ada response dari server', ToastAndroid.SHORT)
      }
        
      }).catch(err => {
        // this.setState({
        //   loading : false
        // })
      })
        Keyboard.dismiss()
      }
    }



  render() {
    // if (this.state.loading) {
    //   return (
    //     <View
    //       style={{
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         flex: 1
    //       }}
    //     >
    //       <ActivityIndicator size="large" color="#0000ff" />
    //     </View>
    //   )
    // }
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar
            backgroundColor="#0000b3"
            barStyle="light-content"
            />
          <Left />
            {/*<Button transparent>
              <Icon name='menu' />
            </Button> 
          </Left>*/} 
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content} >
          <Content style={styles.login}>
            <Form>
              <Item floatingLabel last style={styles.Lname}>
                <Label style={styles.name}>User name</Label>
                <Input 
                  onChangeText= {email => this.setState({email})}
                  returnKeyType="next" 
                />
              </Item>
              <Item floatingLabel last style={styles.Lpassword}>
                <Label style={styles.password}>Password</Label>
                <Input 
                  onChangeText= {password => this.setState({password})} 
                  autoCorrect={false}  
                  returnKeyType="go" 
                  // ref={(input)=> this.passwordInput = input} 
                  secureTextEntry
              />
              </Item>
            </Form>
              <Button block style={styles.button}
                onPress={this.LoginUser}
              >
                <Text>Login</Text>
              </Button>
            {/*
 <Button style={styles.Ltext}>
                 <Text style={{color: '#000000'}} >atau</Text>
                </Button>
              <Button iconLeft block style={styles.fb}>
                <Icon name='logo-facebook' />
                  <Text>Login With Facebook</Text>
              </Button>
              <Button iconLeft block transparent danger style={styles.google}>
                    <Icon name='logo-googleplus' />
                      <Text>Login With Google</Text>
              </Button>
            */}
              
          </Content>
        </Content>
      </Container>
    );
  }
}


          // ToastAndroid.show('sukses', ToastAndroid.SHORT)
            // this.props.navigation.dispatch(resetAction)
             // this.props.navigation.dispatch(goHome)
                    // console.log(navigateAction)