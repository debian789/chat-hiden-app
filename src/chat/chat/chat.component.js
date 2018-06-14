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
import * as Progress from 'react-native-progress';


export default class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {mensajes: [], user: '', sala: '', percentageUpload: undefined}
    //    this.socket.on('connect', function(){debugger});
    //  this.socket.on('event', function(data){debugger});
    //   this.socket.on('disconnect', function(){debugger});
    this._sendMessage = this._sendMessage.bind(this)    
this._renderProgressBar = this._renderProgressBar.bind(this)
  }

  static navigationOptions = {
    title: 'Home',
    headerMode: 'screen',
  };
  

  
  componentWillMount () {
    
    const user = this.props.navigation.getParam('user')
    const sala = this.props.navigation.getParam('sala')


    this.setState({user:user})
    this.setState({sala:sala})

    // Url de escucha de socket.io, el cliente con  el server
    this.socket = SocketIOClient(socketServer.CONNECTION.SOCKET)

    const self= this

    //Esta pendiente de recibir informacion desde el server
    this.socket.on('mensaje', (mgs) => {
      if (mgs.user !== self.state.user) {
        mgs.isSent = true;

        self._receiveMessage(mgs)
      }
    })

    this.socket.on('clear', (data) => {
      self.setState({mensajes: []})
    })





    this.socket.emit('join', sala)
    //this.socket.on('mensaje', (mgs) => {
    //  debugger 
    //  console.warn('socket:', mgs)
    //  self.setState({message: mgs.mensaje})
    //})
    

//     this._sendMessage = this._sendMessage.bind(this)


    //Obtiene los parametros que se pasaron por url

    //let user = this.props.location.state.nameUser
    //let sala = this.props.location.state.sala

    //this.setState({user: user})
    //this.setState({sala: sala})

    //this.socket.emit('join', sala)


  }

  _receiveMessage(mensaje) {
      this.state.mensajes.push(mensaje)
      let mensajes = this.state.mensajes
      // mensaje.mensaje.split('.')[mensaje.mensaje.split('.').length -1 ]
      // mensaje.mensaje.split('.').indexOf("jpg")
      this.setState({mensajes: mensajes})
  }

  _sendMessage(mensaje, percentageUpload) {

    if (percentageUpload) {
      this.setState({percentageUpload})

    } else  {

      // this.socket.emit('mensaje',{ mensaje: message.mensaje, user: 'mobile', key: new Date()})  
      let mensajeEnviar = {mensaje: mensaje.mensaje, user: this.state.user, key: new Date()}
      let mensajeInsertar = {mensaje: mensaje.mensaje, user: this.state.user, key: new Date(), isSent: false}
      this._receiveMessage(mensajeInsertar)
      
      //Envia un mensaje al server, este se encarga de reenviarlo a todos
      this.socket.emit('mensaje', mensajeEnviar)
      
    }

  }

  _renderProgressBar() {
    element = (<View></View>)
    if ( (this.state.percentageUpload ) && this.state.percentageUpload < 100 )  {
      let progress = this.state.percentageUpload / 100
      element = (<Progress.Bar progress={progress} width={null} />)  

    } 

    return  element
    
  }

  render () {
    return (
      <View style={chatStyle.container}>
        <ListMessage  messages={this.state.mensajes}/>
        {this._renderProgressBar()}
        <InputMessage sendMessage={this._sendMessage}/>
      </View>
    )
  }
}

