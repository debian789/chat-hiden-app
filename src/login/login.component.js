import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import LoginStyle from './login.style'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:'',
            sala: ''
        }
        this._handleUser = this._handleUser.bind(this)
        this._handleSala = this._handleSala.bind(this)
        this._ingresar = this._ingresar.bind(this)
    }
    
    _handleUser(text) {
        this.setState({ user: text })
    }

    _handleSala(text) {
        this.setState({ sala: text })
    }

    _ingresar() {
        this.props.navigation.navigate('Chat', this.state)
    }

    render() {
        return (
            <View style={LoginStyle.container}>
                <View style={LoginStyle.logo}></View>
                <View style={LoginStyle.containerInput}>
                    <TextInput
                        autoCorrect={false}
                        style={LoginStyle.textInput}
                        underlineColorAndroid="transparent"
                        placeholder="Usuario"
                        placeholderTextColor="#9a73ef"
                        onChangeText = {this._handleUser}
                        autoCapitalize="none"/>
                    <TextInput
                        autoCorrect={false}
                        style={LoginStyle.textInput}
                        underlineColorAndroid="transparent"
                        placeholder="Palabra seguridad"
                        placeholderTextColor="#9a73ef"
                        onChangeText = {this._handleSala}
                        autoCapitalize="none"/>
                    <TouchableHighlight onPress={this._ingresar}>
                        <Text style={LoginStyle.button}>
                            Ingresar
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}