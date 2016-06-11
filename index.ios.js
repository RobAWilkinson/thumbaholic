/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'

class thumbaholic extends Component {
  constructor(props) {
    super(props)
    this.state = { latitude: 39.78825,  longitude: -128.4324 }
  }
  componentDidMount = () => {
    // send data as stringified json with { channel: 'channel', user_id: user, lat: lng }
    var ws = new WebSocket('ws://thumbaholic.herokuapp.com/');
    ws.onopen= () => {
      navigator.geolocation.getCurrentPosition( position => {
        let { latitude, longitude } = position.coords
        ws.send(JSON.stringify({latitude, longitude }))
      });
    }
    ws.onmessage = (e) => {
      // a message was received
      console.log(e);
      navigator.geolocation.getCurrentPosition( position => {
        let { latitude, longitude } = position.coords
        console.log(latitude);
        console.log(longitude);
        ws.send(JSON.stringify({latitude, longitude }))
      });
    };
  }
  render () {
    console.log('render');
    console.log(this.state);
    return (
    <View style={styles.map}>
      <MapView style={styles.map} initialRegion={{  latitude: this.state.latitude,  longitude: this.state.longitude,  latitudeDelta: 0.0922,  longitudeDelta: 0.0421}} />
    </View>
    )
  }
}
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

AppRegistry.registerComponent('thumbaholic', () => thumbaholic)
