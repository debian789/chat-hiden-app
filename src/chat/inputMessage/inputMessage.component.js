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
        />
        <Icon name="arrow-right" style={InputMessageStyle.uploadFile} onPress={this.uploadFile}></Icon>
      </View>
    )
  }
}
