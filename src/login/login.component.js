import React, {Component} from 'react'
import {View, Text, TextInput, Image,TouchableOpacity} from 'react-native';
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
                <View style={LoginStyle.logoContainer}>
                    <Image source={require('./image/logo.png')} style={LoginStyle.logo} />
                    <Text style={LoginStyle.titleLogin}>Chat incógnito</Text>
                </View>
                <View style={LoginStyle.containerInput}>
                    <TextInput
                        autoCorrect={false}
                        style={LoginStyle.textInput}
                        underlineColorAndroid="transparent"
                        placeholder="Usuario"
                        placeholderTextColor="#ccc"
                        onChangeText = {this._handleUser}
                        autoCapitalize="none"/>
                    <TextInput
                        autoCorrect={false}
                        style={LoginStyle.textInput}
                        underlineColorAndroid="transparent"
                        placeholder="Palabra seguridad"
                        placeholderTextColor="#ccc"
                        onChangeText = {this._handleSala}
                        autoCapitalize="none"/>
                    <TouchableOpacity onPress={this._ingresar}>
                        <Text style={LoginStyle.button}>
                            Ingresar
                        </Text>
                    </TouchableOpacity>                    
                </View>
            </View>
        )
    }
}