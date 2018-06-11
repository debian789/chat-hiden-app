/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import InputMessageStyle from './inputMessage.style'

import selectFile from '../../commons/selectFile'


export default class InputMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      textInputValue: ''
    }

    this._uploadFile = this._uploadFile.bind(this)

  }

  _sendMensaje() {
    if (this.state.textInputValue){
      this.props.sendMessage.call(null, {mensaje:this.state.textInputValue})
      this.setState({textInputValue:''})
    }
  }

  _uploadFile() {
    const self2 = this



    
    selectFile((error, url) => {
      if (!error) {
        debugger 
        self2.setState({textInputValue: url})
        self2._sendMensaje()
      }
    })

    /*
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
   
    var files = [
      {
        name: 'file',
        filename: response.fileName,
        filepath: response.path ,
        filetype: response.type
      }
    ];




    var uploadBegin = (response) => {
      var jobId = response.jobId;
      console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };
    
    var uploadProgress = (response) => {
      var percentage = Math.floor((response.totalBytesSent/response.totalBytesExpectedToSend) * 100);
      console.log('UPLOAD IS ' + percentage + '% DONE!');
    };
    
    RNFS.uploadFiles({
      toUrl: uploadUrl,
      files: files,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      fields: {
        'hello': 'world',
      },
      begin: uploadBegin,
      progress: uploadProgress
    }).promise.then((response) => {
        if (response.statusCode == 200) {
          const urlImageUpload = JSON.parse(response.body)

          self2.setState({textInputValue: urlImageUpload.file})
          self2._sendMensaje()


          console.log('FILES UPLOADED!'); 
        } else {
          console.log('SERVER ERROR');
        }
      })
      .catch((err) => {
          debugger
        if(err.description === "cancelled") {

        }
        console.log(err);
      });


      

      }
    });

    */
  }

  render () {
    return (
      <View style={InputMessageStyle.inputMessage}>
        <TouchableHighlight onPress={this._uploadFile}>
          <Icon name="paperclip" style={InputMessageStyle.uploadFile} ></Icon>
        </TouchableHighlight>
        <TextInput
          underlineColorAndroid="transparent"
          style={InputMessageStyle.textMessage}
          editable={true}
          maxLength={40}
          placeholder="Enter Text here"
          value={this.state.textInputValue}
          onChangeText={textInputValue => this.setState({textInputValue})}
        />
        <Icon name="arrow-right" style={InputMessageStyle.uploadFile} onPress={this._sendMensaje.bind(this)}></Icon>
      </View>
    )
  }
}
