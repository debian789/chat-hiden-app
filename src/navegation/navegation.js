import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Chat from '../chat/chat/chat.component'
import Login from '../login/login.component'
import DrawerComponent from './drawer/drawer.component'





const DrawerMenu = createDrawerNavigator({
    Chat: {
      screen: Chat,
    },
  
},
{
    initialRouteName: 'Chat',
    contentComponent: DrawerComponent
}
);


const ChatNavigator = createStackNavigator({
    DrawerMenu: {
      screen: DrawerMenu
    }

},
{
    headerMode: 'screen',
    initialRouteName: 'DrawerMenu',
}
)



/*
const ChatNavigator = createStackNavigator({
    Chat: {
      screen: Chat
    },
    DrawerNavigator: {
        screen: DrawerNavigator
    }

},
{
    headerMode: 'screen',
    initialRouteName: 'Chat',
}
)*/


const LoginNavigator =  createStackNavigator({
    Login: {
        screen: Login
    },
    ChatNavigator:ChatNavigator

},
{
    initialRouteName: 'Login',
    headerMode: 'none',
}
)



export default LoginNavigator

