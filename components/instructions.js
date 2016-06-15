import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, AsyncStorage, ScrollView, locationPrompt, DeviceEventEmitter } from 'react-native'
import guid from '../guid'
import styles from './styles'



var STORAGE_KEY = '@Thumbaholic:user_id';
var { RNLocation: Location } = require('NativeModules');

export default class Instructions extends React.Component {

  locationPrompt = () => {

    // options for location updating
    Location.requestAlwaysAuthorization();
    Location.startUpdatingLocation();
    Location.setDistanceFilter(5.0);


    // create/ load an id
    AsyncStorage.getItem(STORAGE_KEY).then( id => {
      if (id !== null){
        return  id
      } else {
        id = guid()
        return AsyncStorage.setItem(STORAGE_KEY, id);
      }
    }).then(id => {
      console.log('user id is', id);

      // create the websocket
      var ws = new WebSocket('ws://thumbaholic.herokuapp.com/');
      var sub;
      console.log('creating websocket');
      ws.onopen = () => {
        console.log('websocket open');
        // when its open,  listen for all location changes and push them with the users id
        //
        sub = DeviceEventEmitter.addListener('locationUpdated', (position) => {
          console.log('sending position');
          let { latitude, longitude } = position.coords
          console.log('user id is', id);
          ws.send(JSON.stringify({id: id, latitude, longitude }))
        })
      }
      ws.onerror = (e) => {
        console.error(e);
        console.error('error');
      }
    })
  }
  

  navMain () {
    this.props.navigator.pop({
      id: 'instrucions'
    })
  }

  render () {
    return (

    <View style={styles.container}>
      <ScrollView>
        <TouchableHighlight 
          onPress={this.locationPrompt.bind(this)}
          style={styles.locationBtn}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>


      </ScrollView>
      
      <TouchableHighlight onPress={this.navMain.bind(this)}>
        <View style={styles.goback_container}>
          <FitImage 
            style={styles.goback} 
            source={{uri: 'http://narrow-songs.surge.sh/go_back.png'}} />
        </View>
      </TouchableHighlight>
    </View>

    )
  }
}
