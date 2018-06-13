/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import InputMessageStyle from './inputMessage.style'
import selectFile from '../../commons/selectFile'

export default class InputMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      textInputValue: ''
    }

    this._uploadFile = this._uploadFile.bind(this)

  }

  _sendMensaje() {
    if (this.state.textInputValue){
      this.props.sendMessage.call(null, {mensaje:this.state.textInputValue})
      this.setState({textInputValue:''})
    }
  }

  _uploadFile() {
    const self2 = this
  
    selectFile((error, url) => {
      if (!error) {
        debugger 
        self2.setState({textInputValue: url})
        self2._sendMensaje()
      }
    })
  }

  render () {
    return (
      <View style={InputMessageStyle.inputMessage}>
        <TouchableHighlight onPress={this._uploadFile}>
          <Icon name="paperclip" style={InputMessageStyle.uploadFile} ></Icon>
        </TouchableHighlight>
        <TextInput
          underlineColorAndroid="transparent"
          style={InputMessageStyle.textMessage}
          editable={true}
          autoCorrect={false}
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
