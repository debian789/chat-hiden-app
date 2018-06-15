import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'
import itemDinamicStyle from './itemDinamic.style'
import constants from '../../commons/constans'
import VideoPlayer from './video/video.component'
import {getItem, setItem} from '../../commons/localStorage'

export default class ItemDinamic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      element: <Text></Text>
    }
  }

  componentWillMount() {
    let urlServer = undefined;
    if (getItem(constants.LOCAL_STORAGE.URL_SERVER)) {
      urlServer = getItem(constants.LOCAL_STORAGE.URL_SERVER)
    } else {
      urlServer = constants.CONNECTION.SOCKET
    }

    if (this.props.message) {
      let element = <Text></Text>
      if ((this.props.message.split('.').indexOf('jpg') !== -1) || (this.props.message.split('.').indexOf('gif') !== -1) || (this.props.message.split('.').indexOf('png') !== -1) || (this.props.message.split('.').indexOf('jpeg') !== -1)) {
        element = <View style={itemDinamicStyle.containerImage}>
          <Image
            resizeMode="contain"
            style={itemDinamicStyle.itemImage}
            source={{
            uri: `${urlServer}/${this.props.message}`
          }}/>
        </View>
      } else if ((this.props.message.split('.').indexOf('mp4') !== -1) || (this.props.message.split('.').indexOf('m4v') !== -1)) {
        element = <VideoPlayer urlVideo={`${urlServer}/${this.props.message}`}/>
      } else {
        if (this.props.isSent) {
          element = <Text style={itemDinamicStyle.textMessageReceived}>{this.props.message}</Text>
        } else {
          element = <Text style={itemDinamicStyle.textMessageSent}>{this.props.message}</Text>
        }
      }
      this.setState({element: element})
    }
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        {this.state.element}
      </View>
    )
  }
}
