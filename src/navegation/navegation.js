import { createStackNavigator } from 'react-navigation';

import Chat from '../chat/chat/chat.component'



export default createStackNavigator({
    Home: {
      screen: Chat
    }
})