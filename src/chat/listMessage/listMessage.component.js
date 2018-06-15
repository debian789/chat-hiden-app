import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import ItemMessage from '../itemMessage/itemMessage.component'
import ListMessageStyle from './listMessage.style'

export default class ListMessage extends Component {
  constructor(props) {
    super(props)

    this._renderMessage = this
      ._renderMessage
      .bind(this)
  }

  _renderMessage() {
    if (this.props.messages) {
      return this
        .props
        .messages
        .map((message, index) => {
          return (<ItemMessage key={index} isSent={message.isSent} message={message.mensaje}/>)
        })
    } 
  }

  render() {
    return (
      <ScrollView 
        ref={ref => this.scrollView = ref}
        onContentSizeChange={(contentWidth, contentHeight)=>{        
          this.scrollView.scrollToEnd({animated: true});
        }}
        style={ListMessageStyle.containerMessage}  
      >
        {
          this._renderMessage()
        }
      </ScrollView>
    )
  }
}
