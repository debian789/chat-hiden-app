import React, {Component} from 'react'
import {Text, View} from 'react-native'
import InputMessage from '../inputMessage/inputMessage.component'
import ListMessage from '../listMessage/listMessage.component'
import constans from '../../commons/constans'
import {getItem, setItem} from '../../commons/localStorage'
import SocketIOClient from 'socket.io-client'
import chatStyle from './chat.style'
import * as Progress from 'react-native-progress';

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mensajes: [],
      user: '',
      sala: '',
      percentageUpload: undefined,
      urlServer: undefined
    }

    this._sendMessage = this
      ._sendMessage
      .bind(this)
    this._renderProgressBar = this
      ._renderProgressBar
      .bind(this)
  }

  static navigationOptions = {
    title: 'Home',
    headerMode: 'screen'
  };

  componentWillMount() {

    const user = this
      .props
      .navigation
      .getParam('user')
    const sala = this
      .props
      .navigation
      .getParam('sala')

    this.setState({user: user})
    this.setState({sala: sala})

    const self = this

    getItem(constans.LOCAL_STORAGE.URL_SERVER, (error, item) => {
      if (error) {
        self.setState({urlServer: constans.CONNECTION.SOCKET})
      } else {        
        self.setState({urlServer: item})
      }
      
      self.socket = SocketIOClient(self.state.urlServer)

      //Esta pendiente de recibir informacion desde el server
      self
        .socket
        .on('mensaje', (mgs) => {
          if (mgs.user !== self.state.user) {
            mgs.isSent = true;
            self._receiveMessage(mgs)
          }
        })

      self
        .socket
        .on('clear', (data) => {
          self.setState({mensajes: []})
        })

      self
        .socket
        .emit('join', sala)

    })

  }

  _receiveMessage(mensaje) {
    this
      .state
      .mensajes
      .push(mensaje)
    let mensajes = this.state.mensajes
    this.setState({mensajes: mensajes})
  }

  _sendMessage(mensaje, percentageUpload) {
    if (percentageUpload) {
      this.setState({percentageUpload})
    } else {
      if (mensaje) {
        let mensajeEnviar = {
          mensaje: mensaje.mensaje,
          user: this.state.user,
          key: new Date()
        }
        let mensajeInsertar = {
          mensaje: mensaje.mensaje,
          user: this.state.user,
          key: new Date(),
          isSent: false
        }

        this._receiveMessage(mensajeInsertar)

        //Envia un mensaje al server, este se encarga de reenviarlo a todos
        this
          .socket
          .emit('mensaje', mensajeEnviar)
      }
    }
  }

  _renderProgressBar() {
    if ((this.state.percentageUpload) && this.state.percentageUpload < 100) {
      let progress = this.state.percentageUpload / 100
      const element = (<Progress.Bar progress={progress} width={null}/>)
      return element
    } 

  }

  render() {
    return (
      <View style={chatStyle.container}>
        <ListMessage messages={this.state.mensajes}/>{this._renderProgressBar()}
        <InputMessage sendMessage={this._sendMessage}/>
      </View>
    )
  }
}
