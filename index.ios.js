/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
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
import styles from './components/styles'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  TouchableHighlight,
  AsyncStorage,
  ScrollView
} from 'react-native'
import guid from './guid'

var STORAGE_KEY = '@Thumbaholic:user_id';
class Main extends React.Component{
  componentDidMount() {
    this._loadInitialState().done();
    var ws = new WebSocket('ws://thumbaholic.herokuapp.com/');
    ws.onopen = () => {
      navigator.geolocation.getCurrentPosition( position => {
        let { latitude, longitude } = position.coords
        console.log(position);
        ws.send(JSON.stringify({id: this.state.id, latitude, longitude }))
      });
    }
    ws.onmessage = (e) => {
      // a message was received
      navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude } = position.coords
        console.log(latitude);
        console.log(longitude);
        ws.send(JSON.stringify({ id: this.state.id, latitude, longitude }))
      });
    };
  }
  async _loadInitialState() {
    try {
      var id = await AsyncStorage.getItem(STORAGE_KEY);
      if (id !== null){
        this.setState({ id });
      } else {
        id = guid()
        await AsyncStorage.setItem(STORAGE_KEY, id);
        this.setState({ id });
      }
    } catch (error) {
      console.log(error);

    }
  }
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
          <View style={styles.logo_container}>
            <FitImage
              style={styles.logo}
              source={{uri: 'http://defiant-nation.surge.sh/powered_by_thumbaholics.png'}}/>
            </View>


          <TouchableHighlight onPress={this.navFirstAid.bind(this)}>
            <View>
              <FitImage
                style={styles.first_aid}
                source={{uri: 'http://finicky-fruit.surge.sh/first_aid.jpg'}}/>
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
                source={{uri: 'http://finicky-fruit.surge.sh/transpo.jpg'}}/>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}

class thumbaholic extends React.Component {
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
    }
  }
}

AppRegistry.registerComponent('thumbaholic', () => thumbaholic)
