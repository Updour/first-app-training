import React, { Component } from "react";
import { DrawerNavigator, StackNavigator, TabNavigator } from "react-navigation";
//component
import HomeScreen from "./HomeScreen"
import MainScreenNavigator from "../TabScreen"
import SideBar from "../SideBar/SideBar"
import About from "../ProfileScreen"
import Logout from "../ProfileScreen"
//login router
import LoginRouter from "../login"
//tab router && navigator
import Transaksi from "../TabScreen/"
import Chat from "../TabScreen/"
import Complaint from "../TabScreen/"
import History from "../TabScreen/"
//menu navigator
import Pulsa from '../MainMenu/Pulsa'
import Deposit from '../MainMenu/Deposit'
import Transfer from '../MainMenu/Transfer'
import Paketdata from '../MainMenu/Paketdata'
import Bpjs from '../MainMenu/Bpjs'
import Pdam from '../MainMenu/Pdam'
import Prabayar from '../MainMenu/Prabayar'
import Pascabayar from '../MainMenu/Pascabayar'
//
import Menu1 from '../menu/Menu1'
import Menu2 from '../menu/Menu2'
import Menu3 from '../menu/Menu3'

//menu stack
import Main1 from '../menu'

const Navigation = StackNavigator(
  {   
    Home: { screen: MainScreenNavigator, },
    Login: { screen: LoginRouter },
    Pulsa: {screen : Navigation},
  },
  {
    headerMode:'none'
  }
  );
//home router
const HomeScreenRouter = DrawerNavigator(
{

  Home: { 
    screen: MainScreenNavigator 
  }, 
  Pulsa: {screen : Navigation},
  About: { 
      screen : About
  },
  Logout: { 
      screen : Logout
  }
  },
  {
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: 350
  }
  );



export default HomeScreenRouter;



// const DrawerNavKu = DrawerNavigator({
//   pulsa: {screen:pulsa}
//   saldo: {screen:saldo}
// });
// const Utama = StackNavigator({
//   main:{screen:main},
//   pageLain: {screen: DrawerNavKu}
// })
// gk mungkin saya rombak semua. Jd lama. maaf ya mas..
// mas harus buat ulang. saran dri saya
//\\iya mas, sarannya gimana untuk navigatornya mas?
// ya kaya di notepad tadi, klo mau navigate ya harus ada dalem satu navigator, sementara
// sementara yg mas bikin ini enggak, dan gk teratur pisah2.

