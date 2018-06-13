import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import DrawerStyle from './drawer.style'
import Icon from 'react-native-vector-icons/FontAwesome'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class drawerComponent extends Component {

    constructor(props) {
        super(props)
        this._navigateToConfiguration = this
            ._navigateToConfiguration
            .bind(this)

        this._navigateToChat = this
            ._navigateToChat
            .bind(this)

        this._navigateToLogin = this
            ._navigateToLogin
            .bind(this)
    }

    _navigateToConfiguration() {
        this
            .props
            .navigation
            .navigate('Configuration')
    }

    _navigateToChat() {
        this
            .props
            .navigation
            .navigate('Chat')
    }

    _navigateToLogin() {
        this
            .props
            .navigation
            .navigate('Login')
    }

    render() {
        return (
            <View style={DrawerStyle.container}>
                <ScrollView style={DrawerStyle.scrollView}>
                    <View style={DrawerStyle.containerOptions}>
                        <View style={DrawerStyle.navSectionStyle} key="a">
                            <MaterialIcons name="message" size={25} style={DrawerStyle.iconsBtn}/>
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToChat}>
                                Chat
                            </Text>
                        </View>
                        
                        <View style={DrawerStyle.navSectionStyle} key="c">
                            <MaterialIcons name="settings" size={25} style={DrawerStyle.iconsBtn}/>
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToConfiguration}>
                                Configuración
                            </Text>
                        </View>
                        <View style={DrawerStyle.navSectionStyle} key="d">
                            <Icon name="sign-out" size={25} style={DrawerStyle.iconsBtn}/>
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToLogin}>
                                Salir
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}
