/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {Text, View, Image, ScrollView} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import ItemMessage from '../itemMessage/itemMessage.component'
import ListMessageStyle from './listMessage.style'

export default class ListMessage extends Component {
  constructor(props) {
    super(props)

    this._renderMessage = this
      ._renderMessage
      .bind(this)
  }

  _renderMessage() {
    if (this.props.messages) {
      return this
        .props
        .messages
        .map((message, index) => {
          return (<ItemMessage key={index} isSent={message.isSent} message={message.mensaje}/>)
        })
    } 
  }

  render() {
    return (
      <ScrollView style={ListMessageStyle.containerMessage}>
        {
          this._renderMessage()
        }
      </ScrollView>
    )
  }
}
