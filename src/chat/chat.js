/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import InputMessage from './inputMessage'
import ListMessage from './listMessage'
import socketServer from '../commons/constans'
import SocketIOClient from 'socket.io-client'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Chat extends Component {
  state = {
    message: ''
  }

  constructor (props) {
    super(props)
    this.socket = SocketIOClient(socketServer.CONNECTION.SOCKET)
  }

  render () {
    this.socket.emit('join', {sala: 'a', user: 'user'})
    this.socket.on('mensaje', (mgs) => {
      console.warn('socket:', mgs)
      this.setState({message: mgs.mensaje})
    })
    return (
      <View style={styles.container}>
        <View>
          <Text> hola</Text>
        </View>
        <ListMessage/>
        <InputMessage/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
})
