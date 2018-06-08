/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import COLORS from '../commons/constans'
import ItemMessage from './itemMessage'

export default class ListMessage extends Component {
  state = {
    message: ''
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ScrollView style={styles.containerMessage}>
        <ItemMessage isSent={true}/>
        <ItemMessage isSent={false}/>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  containerMessage: {
    flex: 1,
    backgroundColor: 'white'
  },
  itemMessage: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 4
  },
  imageMessage: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  messageReceived: {
    marginHorizontal: 5,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 5,
    flex: 1,
    backgroundColor: '#E1E1E1',

  },
  messageSent: {
    marginHorizontal: 5,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 5,
    flex: 1,
    backgroundColor: COLORS.COLORS.COLOR_2
  },
  textMessageReceived: {
    color: 'black'
  },
  textMessageSent: {
    color: 'white'
  }
})
