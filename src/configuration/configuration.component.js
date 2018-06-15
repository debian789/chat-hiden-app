import React, {Component} from 'react'
import {View, Text, CheckBox, TextInput, TouchableOpacity} from 'react-native'
import ConfigurationStyle from './configuration.style'
import {getItem,setItem} from '../commons/localStorage'
import constans from '../commons/constans'

export default class ConfigurationComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urlServer: undefined,
            textValue: undefined
        }
        this._changeUrlServer = this._changeUrlServer.bind(this)
        this._resetUrlServer = this._resetUrlServer.bind(this)
    }

    componentWillMount() {

        const self = this

        getItem(constans.LOCAL_STORAGE.URL_SERVER, (error, item) => {
            if (error) {
                self.setState({urlServer:constans.CONNECTION.SOCKET})
                self.setState({textValue:constans.CONNECTION.SOCKET})
            } else  {
                self.setState({urlServer: item})
                self.setState({textValue: item})
            }
        }) 
    }

    _changeUrlServer() {
        setItem(constans.LOCAL_STORAGE.URL_SERVER, this.state.textValue)
        alert('Guardado')
    }
    
    _resetUrlServer() {
        setItem(constans.LOCAL_STORAGE.URL_SERVER, constans.CONNECTION.SOCKET)
        this.setState({textValue: constans.CONNECTION.SOCKET})
        alert('Restaurado')
    }

    render() {
        return (
            <View style={ConfigurationStyle.container}>
                <View style={ConfigurationStyle.containerNotfication}>
                    <Text style={ConfigurationStyle.titleNotification}>Permitir notificaciones</Text>
                    <CheckBox style={ConfigurationStyle.btnCheck}/>
                </View>
                <View style={ConfigurationStyle.containerServer}>
                    <Text style={ConfigurationStyle.styleTitle}>Conexión con el servidor</Text>

                    <TextInput style={ConfigurationStyle.input} onChangeText={textInputValue => this.setState({textValue: textInputValue})}
                     value={this.state.textValue} />

                    <View style={ConfigurationStyle.containerButton} >
                        <TouchableOpacity style={ConfigurationStyle.btnAction} onPress={this._resetUrlServer}>
                            <Text style={ConfigurationStyle.btnText}>Restablecer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ConfigurationStyle.btnAction} onPress={this._changeUrlServer}>
                            <Text style={ConfigurationStyle.btnText}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}