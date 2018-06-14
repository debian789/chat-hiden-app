import React, {Component} from 'react'
import {View, Image} from 'react-native'
import itemMessageStyle from './itemMessage.style'
import constants from '../../commons/constans'
import ItemDinamic from '../itemDinamic/itemDinamic.component'

export default class ItemMessage extends Component {
  state = {
    message: ''
  }

  constructor(props) {
    super(props)
  }

  render() {
    let styleItem = this.props.isSent
      ? itemMessageStyle.messageSent
      : itemMessageStyle.messageReceived
    let styleItemText = this.props.isSent
      ? itemMessageStyle.textMessageSent
      : itemMessageStyle.textMessageReceived
    let itemSent = (
      <View style={itemMessageStyle.itemMessage}>
        <View style={styleItem}>
          <ItemDinamic isSent={true} style={styleItemText} message={this.props.message}/>
        </View>
        <Image
          style={itemMessageStyle.imageMessage}
          source={{
          uri: 'https://facebook.github.io/react/img/logo_og.png'
        }}/>
      </View>
    )

    let itemReceived = (
      <View style={itemMessageStyle.itemMessage}>
        <Image
          style={itemMessageStyle.imageMessage}
          source={{
          uri: 'https://facebook.github.io/react/img/logo_og.png'
        }}/>
        <View style={styleItem}>
          <ItemDinamic isSent={false} style={styleItemText} message={this.props.message}/>
        </View>
      </View>
    )

    let item = this.props.isSent
      ? itemSent
      : itemReceived

    return (item)
  }
}
