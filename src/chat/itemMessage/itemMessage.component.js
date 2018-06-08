/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import itemMessage from './itemMessage.style'

export default class ItemMessage extends Component {
  state = {
    message: ''
  }

  constructor (props) {
    super(props)
  }

  render () {

    let styleItem = this.props.isSent ? itemMessage.messageSent : itemMessage.messageReceived
    let styleItemText = this.props.isSent ? itemMessage.textMessageSent : itemMessage.textMessageReceived

    let itemSent = (<View style={itemMessage.itemMessage}>

      <View style={styleItem}>
        <Text style={styleItemText}>
          esto es un mensaje Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          consequatur eligendi eos saepe vero! Eligendi incidunt tempore voluptatem. Alias
          aspernatur beatae eum iste labore odit officia praesentium quae rem totam!
        </Text>
      </View>
      <Image style={itemMessage.imageMessage}
             source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      />
    </View>)

    let itemReceived = (<View style={itemMessage.itemMessage}>
      <Image style={itemMessage.imageMessage}
             source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      />
      <View style={styleItem}>
        <Text style={styleItemText}>
          esto es un mensaje Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          consequatur eligendi eos saepe vero! Eligendi incidunt tempore voluptatem. Alias
          aspernatur beatae eum iste labore odit officia praesentium quae rem totam!
        </Text>
      </View>
    </View>)

    let item = this.props.isSent ? itemSent : itemReceived

    return (item)
  }
}
