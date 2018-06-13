import {StyleSheet} from 'react-native'
import COLORS from '../../commons/constans'

export default StyleSheet.create({
    itemMessage: {
      flexDirection: 'row',
      paddingHorizontal: 5,
      paddingVertical: 4
    },
    imageMessage: {
      width: 40,
      height: 40,
      borderRadius: 50
    },
    messageReceived: {
      marginHorizontal: 5,
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 5,
      flex: 1,
      backgroundColor: COLORS.COLORS.COLOR_3
      
    },
    messageSent: {
      marginHorizontal: 5,
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 5,
      backgroundColor: COLORS.COLORS.COLOR_GRIS,
      flex: 1,
    },
    textMessageReceived: {
      color: 'red'
    },
    textMessageSent: {
      color: 'blue'
    }
  })
  