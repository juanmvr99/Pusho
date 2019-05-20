import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Header from '../components/Header'

export default class Estadisticas extends Component {
	render() {
		return (
			<View style={styles.container}>
				
				<Header titulo={'STATS'} goBack={this.props.navigation.goBack} />
				<Text>Estasdisticas xd</Text>

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


});