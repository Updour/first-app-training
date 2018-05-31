import React, { Component } from 'react';
import {StatusBar, Keyboard} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button, Text, Title, Left, Body, Right, Icon 
, Card, CardItem,ListItem,CheckBox, } from 'native-base';
import axios from 'axios';
import {NavigationActions } from "react-navigation";

import styles from './styles';
import Login from './index';
//navigasi 

const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Login',
          params: {}
        })
      ]
    })


export default class Registrasi extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
     email: '',
     password:  ''
    };
    this.regUser = this.regUser.bind(this);
  }



 regUser =()=>{
    if (this.state.email == "") {
      ToastAndroid.show('nama Tidak Boleh Kosong', ToastAndroid.SHORT)
    } else if (this.state.password == "") {
      ToastAndroid.show('Password Tidak Boleh Kosong', ToastAndroid.SHORT)
    } else {
      this.setState({
        isLoading: false
      })
      axios({
        method: 'POST',
        url:    'http://192.168.214.2/User', 
        // headers:{
        //   Authorization : 'Bearer' + token
        // },
        data:   {
          email     : this.state.email,
          password  : this.state.password
        },
      })
          .then(response => {
       if (response == 'Try Again') {
                    ToastAndroid.show('Try Again, the input is empty', ToastAndroid.SHORT)
                } else {
                    ToastAndroid.show('sukses', ToastAndroid.SHORT)
              this.props.navigation.dispatch(resetAction)
    // this.props.navigation.dispatch(goHome)
                    // console.log(navigateAction)
                }
            })
            .catch((error) => {
                console.error(error);
            });
        Keyboard.dismiss()
    }
  }
  render() {
    return (
       <Container>
        <Header style={styles.header}>
          <StatusBar
            backgroundColor="#e60000"
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