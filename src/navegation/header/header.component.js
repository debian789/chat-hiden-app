import React, { Component } from 'react'
import {Alert,View,TouchableOpacity,Text} from 'react-native'
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
        Alert.alert(
            'Realmente desea salir',
            '',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {
                  this.props.navigation.navigate('Login')
              }}
            ],
            { cancelable: false }
          )
    }

    render () {
        return (
             <View style={HeaderStyle.container}>
                 <View style={HeaderStyle.containerA}>
                     <TouchableOpacity
                          style={HeaderStyle.menu}
                          onPress={this._handlerDrawer}>
                         <Text><Icon style={HeaderStyle.menuIcon} name="bars" size={25}/></Text>
                     </TouchableOpacity>
                     <View style={HeaderStyle.logo}><Text style={HeaderStyle.logoText}>Chat</Text></View>
                     <TouchableOpacity
                          style={HeaderStyle.navegation}
                          onPress={this._quit}>
                         <Text><Icon name="sign-out" size={25} style={HeaderStyle.navegationIcon}/></Text>
                     </TouchableOpacity>
                 </View>
             </View>
        )
    }
}
