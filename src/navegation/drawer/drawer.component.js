import React, {Component} from 'react'
import {Alert, View, Text, ScrollView} from 'react-native'
import DrawerStyle from './drawer.style'
import Icon from 'react-native-vector-icons/FontAwesome'
import Share from 'react-native-share';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {getItem,setItem} from '../../commons/localStorage'
import constans from '../../commons/constans'

export default class drawerComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: undefined
        }
        this._navigateToConfiguration = this
            ._navigateToConfiguration
            .bind(this)

        this._navigateToChat = this
            ._navigateToChat
            .bind(this)

        this._navigateToLogin = this
            ._navigateToLogin
            .bind(this)
        
        this._share = this
            ._share
            .bind(this)
    }

    componentWillMount() {
        const self = this

        getItem(constans.LOCAL_STORAGE.CODE, (error, item) => {
            if (!error && item) {
                self.setState({code:item})               
            }
        }) 
    }

    _navigateToConfiguration() {
        this
            .props
            .navigation
            .navigate('Configuration')
    }

    _navigateToChat() {
        this
            .props
            .navigation
            .navigate('Chat')
    }

    _navigateToLogin() {
        Alert.alert(
            'Realmente desea salir',
            '',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => {
                  this.props.navigation.navigate('Login')
              }}
            ],
            { cancelable: false }
          )
          
    }

    _share() {
        let shareOptions = {
          title: "Chat incógnito",
          message: "Aplicación para chat",
          url: "https://play.google.com/store/apps/details?id=com.chathideapp",
          subject: "Codigo chat incógnito" //  for email
        };
   
        Share.open(shareOptions);

      }      

    render() {
        return (
            <View style={DrawerStyle.container}>
                <ScrollView style={DrawerStyle.scrollView}>
                    <View style={DrawerStyle.containerOptions}>

                        <View style={DrawerStyle.navSectionStyle} key="xa">
                            <MaterialIcons name="security" size={25} style={DrawerStyle.iconsBtn}/>
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToChat}>
                                Codigo: {this.state.code}
                            </Text>
                        </View>

                        <View style={DrawerStyle.navSectionStyle} key="a">
                            <MaterialIcons name="message" size={25} style={DrawerStyle.iconsBtn}/>
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToChat}>
                                Chat
                            </Text>
                        </View>
                        
                        <View style={DrawerStyle.navSectionStyle} key="c">
                            <MaterialIcons name="settings" size={25} style={DrawerStyle.iconsBtn}/>
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToConfiguration}>
                                Configuración
                            </Text>
                        </View>

                        <View style={DrawerStyle.navSectionStyle} key="cd">
                            <MaterialIcons name="share" size={25} style={DrawerStyle.iconsBtn}/>
                            <Text style={DrawerStyle.navItemStyle} onPress={this._share}>
                                Compartir aplicación
                            </Text>
                        </View>

                        <View style={DrawerStyle.navSectionStyle} key="d">
                            <Icon name="sign-out" size={25} style={DrawerStyle.iconsBtn}/>
                            <Text style={DrawerStyle.navItemStyle} onPress={this._navigateToLogin}>
                                Salir
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}
