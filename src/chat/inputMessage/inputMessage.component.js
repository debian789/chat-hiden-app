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
var ImagePicker = require('react-native-image-picker');
var RNFS = require('react-native-fs');
var uploadUrl = 'http://192.168.1.111:3000/upload';  // For testing purposes, go to http://requestb.in/ and create your own link

const options = {
  title: 'Select Avatar',
//  customButtons: [
//    {name: 'fb', title: 'Choose Photo from Facebook'},
//  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

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
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    // response.path 

   
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
    
    // upload files
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

          //  if (this.state.textInputValue){


          console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
        } else {
          console.log('SERVER ERROR');
        }
      })
      .catch((err) => {
          debugger
        if(err.description === "cancelled") {
          // cancelled by user
        }
        console.log(err);
      });


      

        //this.setState({
        //  avatarSource: source
        //});
      }
    });
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
