/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {Text,View} from 'react-native'
import InputMessage from '../inputMessage/inputMessage.component'
import ListMessage from '../listMessage/listMessage.component'
import socketServer from '../../commons/constans'
import SocketIOClient from 'socket.io-client'
import chatStyle from './chat.style'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Chat extends Component {
  state = {
    message: ''
  }

  constructor (props) {
    super(props)
    this.socket = SocketIOClient(socketServer.CONNECTION.SOCKET)
//    this.socket.on('connect', function(){debugger});
//  this.socket.on('event', function(data){debugger});
//   this.socket.on('disconnect', function(){debugger});

    this.socket.emit('join', 'a')
    this.socket.on('mensaje', (mgs) => {
      debugger 
      console.warn('socket:', mgs)
      this.setState({message: mgs.mensaje})
    })

    
  }
  
  _sendMessage(message) {
    debugger
    this.socket.emit('mensaje',{ mensaje: 'siiii', user: 'mobile', key: new Date()})    
  }


  render () {

    return (
      <View style={chatStyle.container}>
        <ListMessage/>
        <InputMessage sendMessage={this._sendMessage}/>
      </View>
    )
  }
}

