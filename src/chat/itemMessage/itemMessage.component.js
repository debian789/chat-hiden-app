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
import itemMessageStyle from './itemMessage.style'
import constants from '../../commons/constans'
const urlServer = constants.CONNECTION.SOCKET
import ItemDinamic from '../itemDinamic/itemDinamic.component'

export default class ItemMessage extends Component {
  state = {
    message: ''
  }

  constructor (props) {
    super(props)
  }

  render () {
    let styleItem = this.props.isSent ? itemMessageStyle.messageSent : itemMessageStyle.messageReceived
    let styleItemText = this.props.isSent ? itemMessageStyle.textMessageSent : itemMessageStyle.textMessageReceived
    let itemSent = (<View style={itemMessageStyle.itemMessage}>

      <View style={styleItem}>
        <ItemDinamic   style={styleItemText} message={this.props.message}/>       
      </View>
      <Image style={itemMessageStyle.imageMessage}
             source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      />
    </View>)

    
    let itemReceived = (<View style={itemMessageStyle.itemMessage}>
      <Image style={itemMessageStyle.imageMessage}
             source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      />
      <View style={styleItem}>
      <ItemDinamic   style={styleItemText} message={this.props.message}/>  
      </View>
    </View>)

    let item = this.props.isSent ? itemSent : itemReceived

    return (item)
  }
}
