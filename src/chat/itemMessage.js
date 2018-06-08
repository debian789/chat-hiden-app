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
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import COLORS from '../commons/constans'

export default class ItemMessage extends Component {
  state = {
    message: ''
  }

  constructor (props) {
    super(props)
  }

  render () {

    let styleItem = this.props.isSent ? styles.messageSent : styles.messageReceived
    let styleItemText = this.props.isSent ? styles.textMessageSent : styles.textMessageReceived

    let itemSent = (<View style={styles.itemMessage}>

      <View style={styleItem}>
        <Text style={styleItemText}>
          esto es un mensaje Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          consequatur eligendi eos saepe vero! Eligendi incidunt tempore voluptatem. Alias
          aspernatur beatae eum iste labore odit officia praesentium quae rem totam!
        </Text>
      </View>
      <Image style={styles.imageMessage}
             source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      />
    </View>)

    let itemReceived = (<View style={styles.itemMessage}>
      <Image style={styles.imageMessage}
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

const styles = StyleSheet.create({
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
    backgroundColor: COLORS.COLORS.COLOR_GRIS,

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
