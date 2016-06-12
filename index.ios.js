/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, AsyncStorage } from 'react-native'
import guid from './guid'

var STORAGE_KEY = '@Thumbaholic:user_id';
class Main extends React.Component {
  componentDidMount() {
    this._loadInitialState().done();
    var ws = new WebSocket('ws://thumbaholic.herokuapp.com/');
    ws.onopen = () => {
      navigator.geolocation.getCurrentPosition( position => {
        let { latitude, longitude } = position.coords
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
  navFirstAid () {
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

  render () {
    return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <FitImage style={styles.logo} source={{uri: 'http://defiant-nation.surge.sh/powered_by_thumbaholics.png'}} />
      </View>
      <TouchableHighlight onPress={this.navFirstAid.bind(this)}>
        <View>
          <FitImage style={styles.fird_aid} source={{uri: 'http://pink-vessel.surge.sh/first_aid.jpg'}} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.navFood.bind(this)}>
        <View>
          <FitImage style={styles.food} source={{uri: 'http://materialistic-sugar.surge.sh/food.jpg'}} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.navRestrooms.bind(this)}>
        <View>
          <FitImage style={styles.restrooms} source={{uri: 'http://materialistic-sugar.surge.sh/restrooms.jpg'}} />
        </View>
      </TouchableHighlight>
    </View>
    )
  }
}

class FirstAid extends React.Component {
  navMain () {
    this.props.navigator.pop({
      id: 'first_aid_page'
    })
    console.log('clicked again!')
  }
  render () {
    return (
    <View style={styles.container}>
      <Text style={styles.second_page}>
        First Aid
      </Text>
      <TouchableHighlight onPress={this.navMain.bind(this)}>
        <Text style={styles.button}>
          Go back to page one!
        </Text>
      </TouchableHighlight>
    </View>
    )
  }
}

class Food extends React.Component {
  navMain () {
    this.props.navigator.pop({
      id: 'food_page'
    })
  }
  render () {
    return (
    <View style={styles.container}>
      <Text style={styles.second_page}>
        Food & Drinks
      </Text>
      <TouchableHighlight onPress={this.navMain.bind(this)}>
        <Text style={styles.button}>
          Go back to page one!
        </Text>
      </TouchableHighlight>
    </View>
    )
  }
}

class Restrooms extends React.Component {
  navMain () {
    this.props.navigator.pop({
      id: 'restrooms_page'
    })
  }
  render () {
    return (
    <View style={styles.container}>
      <Text style={styles.second_page}>
        Restrooms
      </Text>
      <TouchableHighlight onPress={this.navMain.bind(this)}>
        <Text style={styles.button}>
          Go back to page one!
        </Text>
      </TouchableHighlight>
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
        console.log('second')
        return (<FirstAid navigator={navigator} title="first_aid_page" />)
      case 'food_page':
        console.log('food')
        return (<Food navigator={navigator} title="food_page" />)
      case 'restrooms_page':
        console.log('restrooms')
        return (<Restrooms navigator={navigator} title="restrooms_page" />)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20
  },
  first_page: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  second_page: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: 10
  },
  logo: {
    width: 300
  },
  logo_container: {
    alignItems: 'center',
    padding: 10
  },
  goto_firstaid: {
  }
})

AppRegistry.registerComponent('thumbaholic', () => thumbaholic)
