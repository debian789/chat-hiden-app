import { StyleSheet } from 'react-native'
import constants from '../../commons/constans'
export default StyleSheet.create({
    container: {
        backgroundColor: constants.COLORS.COLOR_4,
    },
    containerA: {
        paddingTop: 7,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    menu: {
        flex: 1,
        alignItems: 'center'
    },
    menuIcon: {
        color: 'white',

    },
    logo: {
        flexDirection: 'column',
        flex: 6,
        justifyContent: 'center'
    },
    logoText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',

    },
    navegation: {
        flex: 1,
        alignItems: 'center'
    },
    navegationIcon: {
        color: 'white'
    },
    containerB: {
        paddingTop: 5,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 7,

    },
    searchContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    searchView: {
        flex:1,
        marginTop: 4,
        alignItems: 'center'
    },
    searchInput: {
        flex: 6
    },
    searchIcon: {
        color: '#ccc'
    },
    searchTextInput: {
        height: 40,
        borderColor: 'white',
        borderWidth: 0
    }
})


