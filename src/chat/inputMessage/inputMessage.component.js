/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import COLORS from '../../commons/constans'

export default class InputMessage extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    return (
      <View style={styles.inputMessage}>
        <Icon name="paperclip" style={styles.uploadFile} onPress={this.uploadFile}></Icon>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.textMessage}
          editable={true}
          maxLength={40}
        />
        <Icon name="arrow-right" style={styles.uploadFile} onPress={this.uploadFile}></Icon>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  uploadFile: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 25,
    paddingVertical: 4,
    paddingHorizontal: 5,
    color: COLORS.COLORS.COLOR_1
  },
  inputMessage: {
    flexDirection: 'row',
    borderTopColor: '#cccccc',
    borderTopWidth: 1
  },
  textMessage: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomColor: 'red',
    textDecorationLine: 'none',
    paddingVertical: 2,
    paddingHorizontal: 3,
    borderRadius: 10,
    marginHorizontal: 4,
    marginVertical: 4
  }
})

