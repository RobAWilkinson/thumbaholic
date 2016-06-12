/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import MapView from 'react-native-maps'

class Main extends React.Component{
  navFirstAid() {
    this.props.navigator.push({
      id: 'first_aid_page'
    })
  }
  navFood() {
    this.props.navigator.push({
      id: 'food_page'
    })
  }
  navRestrooms() {
    this.props.navigator.push({
      id: 'restrooms_page'
    })
  }
  navStages() {
    this.props.navigator.push({
      id: 'stages_page'
    })
  }
  navWater() {
    this.props.navigator.push({
      id: 'water_page'
    })
  }
  navTransportation() {
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

class FirstAid extends React.Component{
  navMain() {
    this.props.navigator.pop({
      id: 'first_aid_page'
    })
  }
  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={this.navMain.bind(this)}>
          <View style={styles.goback_container}>
            <FitImage
              style={styles.goback}
              source={{uri: 'http://unruly-process.surge.sh/go_back.png'}}/>
          </View>
        </TouchableHighlight>

        <Text style={styles.second_page}>
          First Aid
        </Text>

      </View>
    )
  }
}

class Food extends React.Component{
  navMain() {
    this.props.navigator.pop({
      id: 'food_page'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableHighlight onPress={this.navMain.bind(this)}>
          <View style={styles.goback_container}>
            <FitImage
              style={styles.goback}
              source={{uri: 'http://unruly-process.surge.sh/go_back.png'}}/>
          </View>
        </TouchableHighlight>

        <Text style={styles.second_page}>
          Food & Drinks
        </Text>

      </View>
    )
  }
}

class Restrooms extends React.Component{
  navMain() {
    this.props.navigator.pop({
      id: 'restrooms_page'
    })
  }
  render() {
    return (
      <View style={styles.container}>
       
        <TouchableHighlight onPress={this.navMain.bind(this)}>
          <View style={styles.goback_container}>
            <FitImage
              style={styles.goback}
              source={{uri: 'http://unruly-process.surge.sh/go_back.png'}}/>
          </View>
        </TouchableHighlight>

        <Text style={styles.second_page}>
          Restrooms
        </Text>

      </View>
    )
  }
}

class Stages extends React.Component{
  navMain() {
    this.props.navigator.pop({
      id: 'stages_page'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableHighlight onPress={this.navMain.bind(this)}>
          <View style={styles.goback_container}>
            <FitImage
              style={styles.goback}
              source={{uri: 'http://unruly-process.surge.sh/go_back.png'}}/>
          </View>
        </TouchableHighlight>

        <Text style={styles.second_page}>
          Stages
        </Text>

      </View>
    )
  }
}

class Water extends React.Component{
  navMain() {
    this.props.navigator.pop({
      id: 'water_page'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableHighlight onPress={this.navMain.bind(this)}>
          <View style={styles.goback_container}>
            <FitImage
              style={styles.goback}
              source={{uri: 'http://unruly-process.surge.sh/go_back.png'}}/>
          </View>
        </TouchableHighlight>

        <Text style={styles.second_page}>
          Free Water
        </Text>

      </View>
    )
  }
}

class Transportation extends React.Component{
  navMain() {
    this.props.navigator.pop({
      id: 'transportation_page'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableHighlight onPress={this.navMain.bind(this)}>
          <View style={styles.goback_container}>
            <FitImage
              style={styles.goback}
              source={{uri: 'http://unruly-process.surge.sh/go_back.png'}}/>
          </View>
        </TouchableHighlight>
        
        <Text style={styles.second_page}>
          Transportation
        </Text>

      </View>
    )
  }
}

class thumbaholic extends React.Component{
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: 'main'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'main':
        return (<Main navigator={navigator} data={route.data} title="main"/>);
      case 'first_aid_page':
        return (<FirstAid navigator={navigator} title="first_aid_page" />);
      case 'food_page':
        return (<Food navigator={navigator} title="food_page" />);
      case 'restrooms_page':
        return (<Restrooms navigator={navigator} title="restrooms_page" />);
      case 'stages_page':
        return (<Stages navigator={navigator} title="stages_page" />);
      case 'water_page':
        return (<Water navigator={navigator} title="water_page" />);
      case 'transportation_page':
        return (<Transportation navigator={navigator} title="transportation_page" />);
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
    margin: 10,
  },
  second_page: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  logo: {
    width: 300,
  },
  logo_container: {
    alignItems: 'center',
    padding: 10
  },
  goback_container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  goback: {
    // width: 300
  }

})

AppRegistry.registerComponent('thumbaholic', () => thumbaholic)
