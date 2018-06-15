import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'
import itemDinamicStyle from './itemDinamic.style'
import constants from '../../commons/constans'
import VideoPlayer from './video/video.component'
import {getItem} from '../../commons/localStorage'

export default class ItemDinamic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      element: <Text></Text>
    }
  }

  componentWillMount() {
    const self = this
    getItem(constants.LOCAL_STORAGE.URL_SERVER, (error, item ) => {
      let urlServer = undefined;
      if (error) {
        urlServer = constants.CONNECTION.SOCKET
      } else {
        urlServer = item 
      }

      if (self.props.message) {
        let element = <Text></Text>
        if ((self.props.message.split('.').indexOf('jpg') !== -1) || (self.props.message.split('.').indexOf('gif') !== -1) || (self.props.message.split('.').indexOf('png') !== -1) || (self.props.message.split('.').indexOf('jpeg') !== -1)) {
          element = <View style={itemDinamicStyle.containerImage}>
            <Image
              resizeMode="contain"
              style={itemDinamicStyle.itemImage}
              source={{
              uri: `${urlServer}/${self.props.message}`
            }}/>
          </View>
        } else if ((self.props.message.split('.').indexOf('mp4') !== -1) || (self.props.message.split('.').indexOf('m4v') !== -1)) {
          element = <VideoPlayer urlVideo={`${urlServer}/${self.props.message}`}/>
        } else {
          if (self.props.isSent) {
            element = <Text style={itemDinamicStyle.textMessageReceived}>{self.props.message}</Text>
          } else {
            element = <Text style={itemDinamicStyle.textMessageSent}>{self.props.message}</Text>
          }
        }
        self.setState({element: element})
      }
    })
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
