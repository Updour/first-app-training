/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Left, Body, Thumbnail, Icon , Title, Card, CardItem, Content, Right, Button, Text } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from "react-navigation";
import styles from './styles';
import Pulsa from '../MainMenu/Pulsa'
import Deposit from '../MainMenu/Deposit'
import Transfer from '../MainMenu/Transfer'

export default class Menu1 extends Component {
  render() {
    // const {navigation} = this.props;
    return (
      <Grid style={styles.grid}>
            <Col style={styles.col}>
             <Content>
             <TouchableOpacity onPress = {() => console.log(this.props.navigation)} >
             <Card style= {{borderRadius: 13}} >
               <Icon name="ios-phone-portrait" style={styles.icon} />
               <Content style={styles.contentIcon}>
                 <Text>Pulsa</Text>
               </Content>
              </Card>
             </TouchableOpacity>
             </Content>
            </Col>
            <Col style={styles.col}>
             <Content>
             <TouchableOpacity onPress = {() => this.props.navigation.navigate("Deposit")} >
             <Card style= {{borderRadius: 13}} >
               <Icon name="ios-bicycle-outline" style={styles.icon} />
               <Content style={styles.contentIcon}>
                 <Text>Deposit Pulsa</Text>
               </Content>
              </Card>
              </TouchableOpacity>
             </Content>
            </Col>
            <Col style={styles.col}>
             <Content>
             <TouchableOpacity onPress = {() => this.props.navigation.navigate('Transfer')} >
             <Card style= {{borderRadius: 13}} >
               <Icon name="ios-paper-plane-outline" style={styles.icon} />
               <Content style={styles.contentIcon}>
                 <Text>Transfer Saldo</Text>
               </Content>
              </Card>
              </TouchableOpacity>
             </Content>
            </Col>
          </Grid>
    );
  }
}

