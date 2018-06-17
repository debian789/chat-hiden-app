import {StyleSheet} from 'react-native'
import constants from '../commons/constans'
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: constants.COLORS.COLOR_4,
      flexDirection: 'column',

      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,

    },
    titleLogin: {
        color: constants.COLORS.COLOR_5,
        fontSize: 23
    },
    containerInput: {
        backgroundColor: constants.COLORS.COLOR_GRIS_2,
        padding: 25,
        width: "80%",
        // flex:1,
        margin: 20,
        flexDirection: 'column',
    },
    textInput: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5 ,
        borderBottomLeftRadius: 5 ,
    },
    button: {
        borderWidth: 0,
        fontSize: 18,
        padding: 15,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5 ,
        borderBottomLeftRadius: 5 ,
        textAlign: 'center',
        fontWeight: 'bold',
        borderColor: 'black',
        color: 'white',
        backgroundColor: constants.COLORS.COLOR_4
    }


  })
  