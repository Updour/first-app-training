/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TouchableOpacity,Alert } from 'react-native';
import { Container, Header, Left, Body, Thumbnail, Icon , Title, Card, CardItem, Content, Right, Button, Text } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import {StackNavigator} from 'react-navigation';
import styles from './styles';

export default class Menu3 extends Component {
  render() {
    return (
      <Grid style={styles.grid}>
            <Col style={styles.col}>
             <Content>
             <TouchableOpacity onPress = {() => this.props.navigation.navigate("Prabayar")}>
             <Card style= {{borderRadius: 13}} >
               <Icon name="ios-flash-outline" style={styles.icon} />
               <Content style={styles.contentIcon}>
                 <Text>PLN Prabayar</Text>
               </Content>
              </Card>
              </TouchableOpacity>
             </Content>
            </Col>
            <Col style={styles.col}>
             <Content>
             <Card style= {{borderRadius: 13}} >
               <Icon name="flash" style={styles.icon} />
               <Content style={styles.contentIcon}>
                 <Text>PLN Pascabayar</Text>
               </Content>
              </Card>
             </Content>
            </Col>
          </Grid>
    );
  }
}


