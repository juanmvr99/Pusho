import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'

export default class Boton extends Component {
	render() {
    const ancho = this.props.ancho > 0 ? this.props.ancho : 250; //por si se quiere que el boton no mida 250 de ancho
		return (
			<TouchableOpacity onPress={this.props.onPress} activeOpacity={0.7}>
        <LinearGradient
          colors={["#D2C5FB", "#C8B9FA", "#BBA9F9", "#B29EF8", "#AA93F8"]}
          start={[0, 0]}
          end={[1, 0]}
          style={[styles.button, {width: ancho}]} >
					<Text style={styles.buttonText}>{this.props.texto}</Text>
        </LinearGradient>
      </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
    padding: 12,
    borderRadius: 30,
    width: 250
  },  

  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  }
});