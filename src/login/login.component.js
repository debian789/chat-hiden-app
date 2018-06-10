import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import LoginStyle from './login.style'

export default class Login extends Component {

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
                        autoCapitalize="none"/>
                    <TextInput
                        autoCorrect={false}
                        style={LoginStyle.textInput}
                        underlineColorAndroid="transparent"
                        placeholder="Palabra seguridad"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"/>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Chat')}>
                        <Text style={LoginStyle.button}>
                            Ingresar
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}