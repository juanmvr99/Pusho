import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native'
import { Constants } from 'expo'

import Header from '../components/Header'
import BackButton from '../components/BackButton'
import PushButton from '../components/PushButton'
import Boton from '../components/Boton'
import Timer from '../components/Timer'

var screenWidth = Dimensions.get('window').width; //ancho de la pantalla

export default class SoloSetup extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Header titulo={'SOLO'} goBack={this.props.navigation.goBack} />
        <View style={styles.body}>
          <PushButton /> 
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
            
            <Text>Rendirse</Text>
          </View>  
        </View>
        <View style={styles.footer}>

        </View>

      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  body: {

  },

  footer: {
    backgroundColor: '#2c3942',
    width: screenWidth,
    height: 100,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly'
  }
});
