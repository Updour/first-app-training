import React, { Component } from "react";
import { DrawerNavigator, StackNavigator, TabNavigator } from "react-navigation";
//menu
// import Menu1 from '../menu'
//component
import Pulsa from './Pulsa'
import Deposit from './Deposit'
import Transfer from './Transfer'
import Paketdata from './Paketdata'
import Bpjs from './Bpjs'
import Pdam from './Pdam'
import Prabayar from './Prabayar'
import Pascabayar from './Pascabayar'


const Main = StackNavigator({
  Pulsa: {screen:Pulsa},
  Deposit: {screen:Deposit},
  Transfer: {screen:Transfer},
  Paketdata: {screen:Paketdata},
  Bpjs: {screen:Bpjs},
  Pdam: {screen:Pdam},
  Prabayar: {screen:Prabayar},
  Pascabayar: {screen:Pascabayar},
})
export default Main;