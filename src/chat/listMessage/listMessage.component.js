/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import ItemMessage from '../itemMessage/itemMessage.component'
import ListMessageStyle from './listMessage.style'

export default class ListMessage extends Component {
  state = {
    message: ''
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ScrollView style={ListMessageStyle.containerMessage}>
        <ItemMessage isSent={true}/>
        <ItemMessage isSent={false}/>
        <ItemMessage isSent={true}/>
        <ItemMessage isSent={true}/>
        <ItemMessage isSent={false}/>
        <ItemMessage isSent={false}/>
        <ItemMessage isSent={true}/>
        <ItemMessage isSent={false}/>
        <ItemMessage isSent={false}/>

      </ScrollView>
    )
  }
}
