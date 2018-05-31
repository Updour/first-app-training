import React, { Component } from "react";
import {  StackNavigator } from "react-navigation";
//menu
// import Menu1 from '../menu'
//component
import Pulsa from '../MainMenu/Pulsa'
import Deposit from '../MainMenu/Deposit'
import Transfer from '../MainMenu/Transfer'
import Paketdata from '../MainMenu/Paketdata'
import Bpjs from '../MainMenu/Bpjs'
import Pdam from '../MainMenu/Pdam'
import Prabayar from '../MainMenu/Prabayar'
import Pascabayar from '../MainMenu/Pascabayar'
//
import Menu1 from './Menu1'
import Menu2 from './Menu2'
import Menu3 from './Menu3'
//
export default (DrawNav = StackNavigator({
	Menu1 : {screen : Menu1},
	Pulsa: {screen:Pulsa},
	Deposit: {screen:Deposit},
	Transfer: {screen:Transfer},
	Paketdata: {screen:Paketdata},
	Bpjs: {screen:Bpjs},
	Pdam: {screen:Pdam},
	Prabayar: {screen:Prabayar},
	Pascabayar: {screen:Pascabayar},
}));
