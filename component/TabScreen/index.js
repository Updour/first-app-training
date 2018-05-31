import React, { Component } from "react";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { TabNavigator } from "react-navigation";

import Page from "./Page";
import Transaksi from "./Transaksi";
import Chat from "./Chat";
import Complaint from "./Complaint";
import History from "./History";

export default (MainScreenNavigator = TabNavigator(
  {
      Page: { 
        screen: Page 
    },
      Transaksi: {
        screen: Transaksi 
    },
     Chat: { 
        screen: Chat 
    }, 
    Complaint: {
        screen: Complaint 
    },
    History: { 
        screen: History 
    },
  },
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled : true,
  // tabBarOptions: {
  //   activeTintColor: 'blue',
  //   activeBackgroundColor: "gray",
  //   inactiveTintColor: 'red',
  //   labelStyle: {
  //     fontSize: 12,
  //   },
  //   style: {
  //   backgroundColor: '#ccc',
  // },
  // }, 
  tabBarComponent: props => {
      return (
        <Footer style={{}} >
          <FooterTab style={{backgroundColor: '#d9d9d9'}} >
            <Button vertical style={{backgroundColor: '#d9d9d9'}}
              active ={true} 
              onPress={() => props.navigation.navigate("Page")}>
              <Icon type="FontAwesome" name="home" style={{fontSize: 20, color: 'red'}}/>
              <Text style={{color: 'red'}} >Home</Text>
            </Button>
            <Button vertical style={{backgroundColor: '#d9d9d9'}}
              active ={false} 
              onPress={() => props.navigation.navigate("Transaksi")}>
              <Icon name="paper-plane" style={{fontSize: 20, color: '#000066'}}/>
              <Text style={{color: 'red'}} >Transaksi</Text>
            </Button>
            <Button vertical style={{}}               
              onPress={() => props.navigation.navigate("Complaint")}>
                <Icon name="md-information-circle" style={{fontSize: 20, color: '#000066'}} />
                  <Text style={{color: 'red'}} >Complaint</Text>
            </Button>
            <Button vertical style={{}}
              onPress={() => props.navigation.navigate("History")}>
              <Icon name="md-clock" style={{fontSize: 20, color: '#000066'}} />
                <Text style={{color: 'red'}} >History</Text>
            </Button>
            </FooterTab>
        </Footer>
      );
    }
  }
));

 
  