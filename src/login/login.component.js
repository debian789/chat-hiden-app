import React, {Component} from 'react'
import {View, Text, TextInput, Image,TouchableOpacity, StyleSheet ,  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform} from 'react-native';
import LoginStyle from './login.style'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Share from 'react-native-share';


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
        this._refresh = this._refresh.bind(this)
        this._share = this._share.bind(this)
    }
    
    _handleUser(text) {
        this.setState({ user: text })
    }

    _handleSala(text) {
        this.setState({ sala: text })
    }

    _ingresar() {
        if (this.state.user && this.state.sala) {
            this.props.navigation.navigate('Chat', this.state)
        } else {
            alert('Falta nombre o codigo')
        }
    }

    _refresh() {
        const numberRandom = Math.floor((Math.random() * 10000) + 1).toString()
        this.setState({ sala: numberRandom })
    }

    _share() {
      let shareOptions = {
        title: "Chat incógnito",
        message: this.state.sala,
        url: "",
        subject: "Codigo chat incógnito" //  for email
      };
  
      if (this.state.sala) {
        Share.open(shareOptions);
      } else {
          alert('Codigo requerido')
      }
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
                        placeholder="Nombre"
                        placeholderTextColor="#ccc"
                        onChangeText = {this._handleUser}
                        autoCapitalize="none"/>
                        <View style={LoginStyle.containerCode}>
                            <TextInput
                                keyboardType="numeric"
                                autoCorrect={false}
                                style={LoginStyle.textInputCode}
                                underlineColorAndroid="transparent"
                                placeholder="Codigo ..."
                                placeholderTextColor="#ccc"
                                onChangeText = {this._handleSala}
                                value={this.state.sala}
                                autoCapitalize="none"/>
                            <TouchableOpacity onPress={this._refresh}>
                                <Icon name="refresh" style={LoginStyle.refresh} />
                            </TouchableOpacity>   
                            <TouchableOpacity onPress={this._share}>
                                <MaterialIcons name="share" style={LoginStyle.share}/>
                            </TouchableOpacity>   
                        </View>
                            <Text style={LoginStyle.ayuda}>Comparte este código para iniciar la conversación</Text>
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
