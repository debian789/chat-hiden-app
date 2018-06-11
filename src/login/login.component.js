import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import LoginStyle from './login.style'
var ImagePicker = require('react-native-image-picker');

var options = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

  

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

    _file() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);

            }
            else {
              let source = { uri: response.uri };
          
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source
              });
            }
          });
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
                    <TouchableHighlight onPress={this._file}>
                        <Text style={LoginStyle.button}>
                            adjuntr
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}