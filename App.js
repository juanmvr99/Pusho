import React from 'react'
import { StyleSheet, View} from 'react-native'

import Header from './components/Header'
import Boton from './components/Boton'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >

        <Header />
        <View style={styles.buttonContainer}>
          <Boton texto={'SOLO'}/>
          <Boton texto={'1 CONTRA 1'}/>
          <Boton texto={'ESTADISTICAS'}/>
        </View>

      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //paddingTop: Constants.statusBarHeight //se supone que esto deberia ponerse para que no haga overlap con la statusbar
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly'
  }
});
