import React from "react";
import { TabNavigator, StackNavigator, NavigationActions } from "react-navigation";
import Login from './Login';
import Registrasi from './Registrasi';

const LoginRouter  = TabNavigator({
  Login: {
    screen: Login,
        navigationOptions: {
            headerMode: 'screen',
            title: 'Login'
        }


  },
  Registrasi: {
    screen: Registrasi,
    navigationOptions: {
            headerMode: 'screen',
            title: 'Registrasi',
        }
  },
},
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled : true,
      tabBarOptions:{
        activeTintColor: 'blue',
        activeBackgroundColor: "gray",
        inactiveTintColor: 'red',    
          labelStyle: {
            fontSize: 15,
          },
            style: {
              backgroundColor: '#ccc',
            },
      }
  }
);
export default LoginRouter;
// yaudah coba ta bikin gini aja:
// export default class LoginRouter extends React.Component{
//   render(){
//     return <LoginRouterSaya />
//   }
// }
