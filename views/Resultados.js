import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import Header from '../components/Header'

var screenWidth = Dimensions.get('window').width;

export default class Resultados extends Component {
	secondsToTime(secs) {
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    
    let obj = {
      "min": minutes,
      "sec": seconds
    };
    return obj;
  }

	render() {
		const { navigation } = this.props;
		const modo = navigation.getParam('modo', 'REVISA');
		const tiempo = navigation.getParam('tiempo', 0);
		const resultado = navigation.getParam('resultado', 999);
		//el 0, el 999 y el REVISA son valores para saber si da error la obtencion del parametro

		const tiempito = this.secondsToTime(tiempo);
		return (
			<View style={styles.container}>
				
				<Header titulo={modo} goBack={this.props.navigation.goBack} />
				{/*mostrar esto si era en solo*/}
				{modo == 'SOLO' && 
					<View>
						<Text style={{color: '#2c3942', fontSize: 45, fontWeight: 'bold', textAlign: 'center'}}>
							Tiempo!
						</Text>
						<Text style={{color: '#aa93f8', fontSize: 55, fontWeight: 'bold'}}>
							{resultado} {' '}
							<Text style={{color: '#2c3942', fontSize: 45}}>
								flexiones
							</Text>
						</Text>
						<Text style={{color: '#aa93f8', fontSize: 55, fontWeight: 'bold'}}>
							{tiempito.min} {' '}
							<Text style={{color: '#2c3942', fontSize: 45}}>
								min {' '}
							</Text>
							<Text >
								{tiempito.sec} {' '}
							</Text>
							<Text style={{color: '#2c3942', fontSize: 45}}>
								seg
							</Text>
						</Text>
					</View>
				}
				{/*mostrar esto si era en 1v1*/}
				{modo == '1 VS 1' && 
					<View>
						xd
					</View>
				}

				<View style={styles.footer}>
					<Text>Resultados xd</Text>
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
    height: 250,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }

});