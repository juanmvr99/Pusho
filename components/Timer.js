import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native'

export class Timer extends Component {
  state = {
    timer: this.props.time,
    interval: null
  }

  

  componentDidMount() {
    this.state.interval = setInterval( () => this.setState((prevState) => ({timer: prevState.timer--})), 1000);
  }

  componentDidUpdate() {
    if(this.state.timer === 1){ 
      clearInterval(this.state.interval);
    }
  }

  componentWillUnmount() {
   clearInterval(this.state.interval);
 }

 render() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text> {this.state.timer} </Text>
    </View> 
    )
}
}
