import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import  DrawerStyle from './drawer.style'


export default class drawerComponent extends Component {
   
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    })
    this.props.navigation.dispatch(navigateAction)
}

render () {
    return (
         <View style={DrawerStyle.container}>
             <ScrollView style={DrawerStyle.scrollView}>

                 <View style={DrawerStyle.containerOptions}>

                     <View style={DrawerStyle.navSectionStyle} key="a">
                         <Text style={DrawerStyle.navItemStyle} onPress={this.navigateToScreen('DealsMap')}>
                             Ingresar / registrarme
                         </Text>
                     </View>

                     <View style={DrawerStyle.navSectionStyle} key="b">
                         <Text style={DrawerStyle.navItemStyle} onPress={this.navigateToScreen('DealsMap')}>
                             Tarjetas y beneficios
                         </Text>
                     </View>

                     <View style={DrawerStyle.navSectionStyle} key="c">
                         <Text style={DrawerStyle.navItemStyle} onPress={this.navigateToScreen('DealsMap')}>
                             Compartir Offrie
                         </Text>
                     </View>

                     <View style={DrawerStyle.navSectionStyle} key="d">
                         <Text style={DrawerStyle.navItemStyle} onPress={this.navigateToScreen('DealsMap')}>
                             Configuración
                         </Text>
                     </View>
                 </View>
             </ScrollView>

         </View>
    )
}

  }
  
  const DrawerStyle2 = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });