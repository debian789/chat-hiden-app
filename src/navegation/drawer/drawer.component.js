import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, CheckBox} from 'react-native'
import DrawerStyle from './drawer.style'

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
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToChat}>
                                Chat
                            </Text>
                        </View>
                        <View style={DrawerStyle.navSectionStyle} key="c">
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToConfiguration}>
                                Configuracion
                            </Text>
                        </View>
                        <View style={DrawerStyle.navSectionStyle} key="d">
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
