import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import React from 'react'
import ChatComponent from '../chat/chat/chat.component'
import Login from '../login/login.component'
import DrawerComponent from './drawer/drawer.component'
import HeaderComponent from './header/header.component'
import ConfigurationComponent from '../configuration/configuration.component'

const ChatNavigator = createStackNavigator({
    Chat: {
        screen: ChatComponent
    },
    Configuration: {
        screen: ConfigurationComponent
    }    
}, {
    headerMode: 'screen',
    initialRouteName: 'Chat',
    navigationOptions: (navigation) => {
        return {
            header: <HeaderComponent navigation={navigation.navigation}></HeaderComponent>
        }
    }
})

const DrawerMenu = createDrawerNavigator({
    ChatNavigator: {
        screen: ChatNavigator
    }
}, {
    initialRouteName: 'ChatNavigator',
    contentComponent: DrawerComponent
});

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

const LoginNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    DrawerMenu: DrawerMenu

}, {
    initialRouteName: 'Login',
    headerMode: 'none'
})

export default LoginNavigator
