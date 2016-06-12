/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'

import FitImage from 'react-native-fit-image'
import Food from './components/food'
import Transportation from './components/transportation'
import FirstAid from './components/firstAid'
import Restrooms from './components/restrooms'
import Stages from './components/stages'
import Water from './components/water'
import Basspod from './components/basspod'
import CircuitGrounds from './components/circuit_grounds'
import NeonGarden from './components/neon_garden'
import CosmicMeadow from './components/cosmic_meadow'
import KineticField from './components/kinetic_field'
import Wasteland from './components/wasteland'
import GateA from './components/gate_a'
import GateB from './components/gate_b'
import GateC from './components/gate_c'
import GateD from './components/gate_d'
import styles from './components/styles'
import {
  AppRegistry,
  AppState,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  TouchableHighlight,
  AsyncStorage,
  ScrollView,
  DeviceEventEmitter
} from 'react-native'

import guid from './guid'

// user_id 
var STORAGE_KEY = '@Thumbaholic:user_id';

var { RNLocation: Location } = require('NativeModules');

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

// ws.onmessage = (e) => {
//   // a message was received
//   // send location immediately
//   navigator.geolocation.getCurrentPosition(position => {
//     let { latitude, longitude } = position.coords
//     console.log(latitude);
//     console.log(longitude);
//     this.ws.send(JSON.stringify({ id: id, latitude, longitude }))
//   });
// };

class Main extends React.Component{
  navFirstAid() {
    this.props.navigator.push({
      id: 'first_aid_page'
    })
  }
  navFood () {
    this.props.navigator.push({
      id: 'food_page'
    })
  }
  navRestrooms () {
    this.props.navigator.push({
      id: 'restrooms_page'
    })
  }
  navStages () {
    this.props.navigator.push({
      id: 'stages_page'
    })
  }
  navWater () {
    this.props.navigator.push({
      id: 'water_page'
    })
  }
  navTransportation () {
    this.props.navigator.push({
      id: 'transportation_page'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          <TouchableHighlight onPress={this.navFirstAid.bind(this)}>
            <View>
              <FitImage
                style={styles.first_aid}
                source={{uri: 'http://broad-uncle.surge.sh/first_aid.jpg'}}/>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.navFood.bind(this)}>
            <View>
              <FitImage
                style={styles.food}
                source={{uri: 'http://materialistic-sugar.surge.sh/food.jpg'}}/>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.navRestrooms.bind(this)}>
            <View>
              <FitImage
                style={styles.restrooms}
                source={{uri: 'http://finicky-fruit.surge.sh/restrooms.jpg'}}/>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.navStages.bind(this)}>
            <View>
              <FitImage
                style={styles.stages}
                source={{uri: 'http://nutty-room.surge.sh/stages.jpg'}}/>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.navWater.bind(this)}>
            <View>
              <FitImage
                style={styles.water}
                source={{uri: 'http://jealous-form.surge.sh/water.jpg'}}/>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.navTransportation.bind(this)}>
            <View>
              <FitImage
                style={styles.transportation}
                source={{uri: 'http://fine-children.surge.sh/transpo.jpg'}}/>
            </View>
          </TouchableHighlight>

        </ScrollView>
            <View style={styles.logo_container}>
              <FitImage
                style={styles.logo}
                source={{uri: 'http://defiant-nation.surge.sh/powered_by_thumbaholics.png'}}/>
            </View>
      </View>
    )
  }
}

var navOptions = {
  enableHighAccuracy: true
}
class thumbaholic extends React.Component {
  componentWillUnMount = () => {
    console.log('unmount');
    sub.remove()
    ws.close()
  }
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <Navigator style={styles.container} initialRoute={{id: 'main'}} renderScene={this.navigatorRenderScene} />
    )
  }

  navigatorRenderScene (route, navigator) {
    _navigator = navigator
    switch (route.id) {
      case 'main':
        return (<Main navigator={navigator} data={route.data} title="main" />)
      case 'first_aid_page':
        return (<FirstAid navigator={navigator} title="first_aid_page" />)
      case 'food_page':
        return (<Food navigator={navigator} title="food_page" />)
      case 'restrooms_page':
        return (<Restrooms navigator={navigator} title="restrooms_page" />)
      case 'stages_page':
        return (<Stages navigator={navigator} title="stages_page" />)
      case 'water_page':
        return (<Water navigator={navigator} title="water_page" />)
      case 'transportation_page':
        return (<Transportation navigator={navigator} title="transportation_page" />)
      case 'basspod':
        return (<Basspod navigator={navigator} title="basspod" />)
      case 'circuit_grounds':
        return (<CircuitGrounds navigator={navigator} title="circuit_grounds" />)
      case 'neon_garden':
        return (<NeonGarden navigator={navigator} title="neon_garden" />)
      case 'cosmic_meadow':
        return (<CosmicMeadow navigator={navigator} title="cosmic_meadow" />)
      case 'kinetic_field':
        return (<KineticField navigator={navigator} title="kinetic_field" />)
      case 'wasteland':
        return (<Wasteland navigator={navigator} title="wasteland" />)
      case 'gate_a':
        return (<GateA navigator={navigator} title="gate_a" />)
      case 'gate_b':
        return (<GateB navigator={navigator} title="gate_b" />)
      case 'gate_c':
        return (<GateC navigator={navigator} title="gate_c" />)
      case 'gate_d':
        return (<GateD navigator={navigator} title="gate_d" />)
    }
  }
}

AppRegistry.registerComponent('thumbaholic', () => thumbaholic)
