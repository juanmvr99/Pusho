import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native'

import BackButton from './BackButton'

export default class PushButton extends Component {
	state = {
		count: 0
	}

	//esta funcion se llama cada vez que se presiona el boton y hay que hacer algo con la cuenta
	sumar = () => {
		this.setState((prevState) => {
			return {count: prevState.count + 1}
		});
	}
	
	render() {
		return (
			<View style={styles.container}>
				
				<View style={{alignSelf: 'flex-start'}}>
					<BackButton onPress={() => this.props.navigation.goBack()}/>
				</View>

				<TouchableOpacity activeOpacity={0.7} onPress={this.sumar}>
					<View style={styles.outerCircle}>
						<View style={styles.innerCircle}>
						  <Text style={styles.text}>Push!</Text>	
						</View>
					</View>	
				</TouchableOpacity>
				<Text style={[styles.text, {color: '#2c3941'}]}>{this.state.count}</Text>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	text: {
		color: '#7cd0b9',
		fontSize: 40,
		fontWeight: 'bold'
	},

	outerCircle: {
		backgroundColor: '#2c3941',
		height: 300,
		width: 300,
		borderRadius: 300/2,
		borderColor: '#7cd0b9',
		borderWidth:15,
		justifyContent: 'center',
		alignItems: 'center'
	},

	innerCircle: {
		backgroundColor: '#2c3941',
		height: 240,
		width: 240,
		borderRadius: 240/2,
		borderColor: '#7cd0b9',
		borderWidth:15,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
