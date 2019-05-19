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
  state = {
    count: 0
  }

  //esta funcion se llama cada vez que se presiona el PushBoton y la cuenta es el resultado
  sumar = () => {
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    });
  }
  
  render() {
    const modo = this.props.navigation.getParam('modo', 'REVISA');
    return (
      <View style={styles.container}>

        <Header titulo={modo} goBack={this.props.navigation.goBack} />
        <View>
          <PushButton onPress={this.sumar} /> 
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16}}>
            {/*Aqui en los navigate del Timer y el boton debe ir en vez de 'Home' la pantalla de finalizacion con el resultado*/}
            <Timer 
              time={this.props.navigation.getParam('tiempo', 18)} 
              navigate={() => this.props.navigation.navigate('Home')}
            />
            <Boton 
              texto={'ME RINDO'} 
              onPress={() => this.props.navigation.navigate('Home')} 
              ancho={150}
            />
          </View>  
        </View>
        <View style={styles.footer}>
          <Text style={styles.pushUps}>{this.state.count}</Text>
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

  footer: {
    backgroundColor: '#2c3942',
    width: screenWidth,
    height: 100,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  pushUps: {
    color: '#7cd0b9',
    fontSize: 40,
    fontWeight: 'bold'
  }
});
