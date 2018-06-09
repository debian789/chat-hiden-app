/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import itemDinamicStyle from './itemDinamic.style'
import constants from '../../commons/constans'
const urlServer = constants.CONNECTION.SOCKET

export default class ItemDinamic extends Component {

  constructor (props) {
    super(props)
    this.state= {
        element: <Text></Text>
    }
  }


  componentWillMount () {
    if (this.props.message) {
      debugger
      let element = <Text></Text>
      if ((this.props.message.split('.').indexOf('jpg') !== -1) ||
        (this.props.message.split('.').indexOf('gif') !== -1) || 
        (this.props.message.split('.').indexOf('png') !== -1) || 
        (this.props.message.split('.').indexOf('jpeg') !== -1)) {
        element = <View style={itemDinamicStyle.containerImage}>
            <Image 
            resizeMode="contain"
                style={itemDinamicStyle.itemImage}
                source={{uri: `${urlServer}/${this.props.message}`}}
            />
        </View>
      } else if (this.props.message.split('.').indexOf('mp4') !== -1) {
        element = <Video controls autoPlay>
          <source src={this.props.message} type="video/mp4"/>
        </Video>
      } else if (this.props.message.split('.').indexOf('m4v') !== -1) {
        element = <Video controls autoPlay>
          <source src={this.props.message} type="video/mp4"/>
        </Video>
      }
      // else if (this.props.message.split('.').indexOf('gif') !== -1) {
     //   element = <View style="containerSubItems"><Image alt="Image" style="ImageMessage" src={this.props.message}/></View>
      //} else if (this.props.message.split('.').indexOf('png') !== -1) {
      //  debugger
      //  element = <View style="containerSubItems"><Image alt="Image" style="ImageMessage" src={this.props.message}/></View>
      //} else if (this.props.message.split('.').indexOf('jpeg') !== -1) {
      //  element = <View style="containerSubItems"><Image alt="Image" style="ImageMessage" src={this.props.message}/></View>
      //} 
      else {
        element = <Text>{this.props.message}</Text>
      }
      this.setState({element: element})
    }
  }

  render () {
      return (
          <View style={{flex:1}}>
              {this.state.element}
          </View>)

  
  }
}
