import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Constants } from 'expo'

import Header from '../components/Header'
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
  
  navegar = () => {
    const modo = this.props.navigation.getParam('modo', 'REVISA');
    const tiempo = this.props.navigation.getParam('tiempo', 6969);

    if (modo == 'SOLO') {
      this.props.navigation.navigate('Resultados', {modo: modo, resultado: this.state.count, tiempo: tiempo}); 
      return;
    }
    //caso de 2 jugadores
    this.props.navigation.getParam('turno', 1) == 1 ? 
      this.props.navigation.push('Game', {modo: modo, tiempo: tiempo, turno: 2}) :
      this.props.navigation.navigate('Resultados', {modo: modo});
  }

  render() {
    const modo = this.props.navigation.getParam('modo', 'REVISA');
    //esto es para pintar las cosas del color del jugador
    var color = modo == 'SOLO' ? '#7cd0b9' : '#aa93f8'; 
    if (modo == '1 VS 1' && this.props.navigation.getParam('turno', 1) == 1) {
      color = '#7cd0b9' 
    }
    return (
      <View style={styles.container}>
              
        <Header titulo={modo} goBack={this.props.navigation.goBack} />
      {/*verga condicional para el modo 1v1*/}
        {modo == '1 VS 1' && 
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
            <Text style={styles.textoTurno}>Turno: </Text>
            <Text style={[styles.textoTurno, {color: color}]}>Jugador {this.props.navigation.getParam('turno', 0)}</Text>
          </View>
        }
        <View>
          <PushButton 
            onPress={this.sumar} 
            color={color}
          /> 
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16}}>
            {/*Aqui en los navigate del Timer y el boton debe ir en vez de 'Home' la pantalla de finalizacion con el resultado*/}
            <Timer 
              time={this.props.navigation.getParam('tiempo', 6969)} 
              navigate={() => this.navegar()}
              color={color}
            />
            <Boton 
              texto={'ME RINDO'} 
              onPress={() => this.navegar()} 
              ancho={150}
              color={color}
            />
          </View>  
        </View>
        <View style={styles.footer}>
          <Text style={[styles.pushUps, {color: color}]}>{this.state.count}</Text>
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

  textoTurno: {
    color: '#2c3942',
    fontSize: 32,
    fontWeight: 'bold'
  },

  footer: {
    backgroundColor: '#2c3942',
    width: screenWidth,
    height: 75,
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
