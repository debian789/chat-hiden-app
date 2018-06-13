import { StyleSheet } from 'react-native'
import constants from '../commons/constans'
export default StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
    },
    containerNotfication: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleNotification: {
        fontSize: 14,
    },
    ConfigurationStyle: {

    },
    containerServer: {
        flexDirection: 'column',
        marginTop: 30,
        paddingTop: 25,
        borderTopWidth: 1,
        borderColor: "#ccc" ,

    },
    styleTitle: {
        // color: "#cccccc"
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,

        marginTop: 5,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    containerButton: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
    },
    btnAction: {
        backgroundColor: constants.COLORS.COLOR_3,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    btnText: {
        color: 'white'
    }

})


