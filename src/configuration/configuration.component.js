import React, {Component} from 'react'
import {View, Text, CheckBox, TextInput, TouchableOpacity} from 'react-native'
import ConfigurationStyle from './configuration.style'

export default class ConfigurationComponent extends Component {
    render() {
        return (
            <View style={ConfigurationStyle.container}>
                <View style={ConfigurationStyle.containerNotfication}>
                    <Text style={ConfigurationStyle.titleNotification}>Permitir notificaciones</Text>
                    <CheckBox style={ConfigurationStyle.btnCheck}/>
                </View>
                <View style={ConfigurationStyle.containerServer}>
                    <Text style={ConfigurationStyle.styleTitle}>Configuración con el servidor</Text>

                    <TextInput style={ConfigurationStyle.input} value="12.2.2.32.3" />

                    <View style={ConfigurationStyle.containerButton} >
                        <TouchableOpacity style={ConfigurationStyle.btnAction}>
                            <Text style={ConfigurationStyle.btnText}>Restablecer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ConfigurationStyle.btnAction} >
                            <Text style={ConfigurationStyle.btnText}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}