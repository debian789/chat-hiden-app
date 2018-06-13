import {StyleSheet} from 'react-native'
import COLORS from '../../commons/constans'

export default StyleSheet.create({
    uploadFile: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontSize: 25,
      paddingVertical: 4,
      paddingHorizontal: 5,
      color: COLORS.COLORS.COLOR_3
    },
    inputMessage: {
      flexDirection: 'row',
      borderTopColor: '#cccccc',
      borderTopWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 3,
      paddingBottom: 2,
    },
    textMessage: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 1,
      // borderBottomColor: 'red',
      textDecorationLine: 'none',
      paddingVertical: 2,
      paddingHorizontal: 13,
      borderRadius: 13,
      marginHorizontal: 4,
      marginVertical: 4
    }
  })
  
  