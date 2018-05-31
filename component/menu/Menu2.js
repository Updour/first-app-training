/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import { Container, Header, Left, Body, Thumbnail, Icon , Title, Card, CardItem, Content, Right, Button, Text } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';

export default class Menu2 extends Component {
  render() {
    return (
      <Grid style={styles.grid}>
            <Col style={styles.col}>
             <Content>
             <Card style= {{borderRadius: 13}} >
               <Icon name="bulb" style={styles.icon} />
               <Content style={styles.contentIcon}>
                 <Text>Paket Data</Text>
               </Content>
              </Card>
             </Content>
            </Col>
            <Col style={styles.col}>
             <Content>
             <Card style= {{borderRadius: 13}} >
               <Icon type="FontAwesome" name="medkit" style={styles.icon} />
               <Content style={styles.contentIcon}>
                 <Text>BPJS</Text>
               </Content>
              </Card>
             </Content>
            </Col>
            <Col style={styles.col}>
             <Content>
             <Card style= {{borderRadius: 13}} >
               <Icon name="logo-steam" style={styles.icon} />
               <Content style={styles.contentIcon}>
                 <Text>PDAM</Text>
               </Content>
              </Card>
             </Content>
            </Col>
          </Grid>
    );
  }
}


