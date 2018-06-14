import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import InputMessageStyle from './inputMessage.style'
import selectFilePhoto from '../../commons/selectFilePhoto'
import selectFileVideo from '../../commons/selectFileVideo'

export default class InputMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      textInputValue: ''
    }
    this._uploadFile = this._uploadFile.bind(this)
    this._uploadFileVideo = this._uploadFileVideo.bind(this)
  }

  _sendMensaje(percentageUpload) {    
    if (percentageUpload) {
      this.props.sendMessage.call(null, null, percentageUpload)
    } else {
      if (this.state.textInputValue){
        this.props.sendMessage.call(null, {mensaje:this.state.textInputValue})
        this.setState({textInputValue:''})
      }
    }
  }

  _uploadFile() {
    const self2 = this
  
    selectFilePhoto((error, url) => {
      if (!error) {
        self2.setState({textInputValue: url})
        self2._sendMensaje()
      }
    })
  }

  _uploadFileVideo() {
    const self2 = this
  
    selectFileVideo((error, url, percentageUpload) => {
      if (!error) {
        if (percentageUpload) {
          self2._sendMensaje(percentageUpload)
        } else {
          self2.setState({textInputValue: url})
          self2._sendMensaje(null)
        }
      }
    })
  }

  render () {
    return (
      <View style={InputMessageStyle.inputMessage}>
        <TouchableHighlight onPress={this._uploadFile}>
          <Icon name="photo" style={InputMessageStyle.uploadFile} ></Icon>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._uploadFileVideo}>
          <Foundation name="video" style={InputMessageStyle.uploadFile} ></Foundation>
        </TouchableHighlight>
        <TextInput
          underlineColorAndroid="transparent"
          style={InputMessageStyle.textMessage}
          editable={true}
          autoCorrect={false}
          maxLength={5000}
          placeholder="Aa"
          value={this.state.textInputValue}
          onChangeText={textInputValue => this.setState({textInputValue})}
        />
        <Icon name="arrow-right" style={InputMessageStyle.uploadFile} onPress={this._sendMensaje.bind(this, null)}></Icon>
      </View>
    )
  }
}
