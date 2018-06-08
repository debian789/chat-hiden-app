/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  TextInput
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import InputMessageStyle from './inputMessage.style'

export default class InputMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      textInputValue: ''
    }
  }

  _sendMensaje() {
    if (this.state.textInputValue){
      this.props.sendMessage.call(null, {mensaje:this.state.textInputValue})
      this.setState({textInputValue:''})
    }
  }

  render () {
    return (
      <View style={InputMessageStyle.inputMessage}>
        <Icon name="paperclip" style={InputMessageStyle.uploadFile} onPress={this.uploadFile}></Icon>
        <TextInput
          underlineColorAndroid="transparent"
          style={InputMessageStyle.textMessage}
          editable={true}
          maxLength={40}
          placeholder="Enter Text here"
          value={this.state.textInputValue}
          onChangeText={textInputValue => this.setState({textInputValue})}
        />
        <Icon name="arrow-right" style={InputMessageStyle.uploadFile} onPress={this._sendMensaje.bind(this)}></Icon>
      </View>
    )
  }
}
