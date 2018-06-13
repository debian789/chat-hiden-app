import React, { Component } from 'react'
import {
    View,
    TouchableHighlight,
    Text,
    TextInput
} from 'react-native'
import HeaderStyle from './header.style'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HeaderComponent extends Component {
    constructor (props) {
        super(props)
        this._handlerDrawer = this._handlerDrawer.bind(this)
        this._quit = this._quit.bind(this)
    }

    _handlerDrawer() {
        if (this.props.navigation.state.isDrawerOpen) {
            this.props.navigation.closeDrawer()
        } else {
            this.props.navigation.openDrawer()
        } 
    }


    _quit() {
        this.props.navigation.navigate('Login')
    }

    render () {
        return (
             <View style={HeaderStyle.container}>
                 <View style={HeaderStyle.containerA}>
                     <TouchableHighlight
                          style={HeaderStyle.menu}
                          onPress={this._handlerDrawer}>
                         <Text><Icon style={HeaderStyle.menuIcon} name="bars" size={25}/></Text>
                     </TouchableHighlight>
                     <View style={HeaderStyle.logo}><Text style={HeaderStyle.logoText}>Chat</Text></View>
                     <TouchableHighlight
                          style={HeaderStyle.navegation}
                          onPress={this._quit}>
                         <Text><Icon name="sign-out" size={25} style={HeaderStyle.navegationIcon}/></Text>
                     </TouchableHighlight>
                 </View>
             </View>
        )
    }
}
