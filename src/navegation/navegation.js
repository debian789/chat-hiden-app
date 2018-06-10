import { createStackNavigator } from 'react-navigation';

import Chat from '../chat/chat/chat.component'
import Login from '../login/login.component'

const ChatNavigator = createStackNavigator({
    Chat: {
      screen: Chat
    },

},
{
    headerMode: 'screen',
    initialRouteName: 'Chat',
}
)

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

