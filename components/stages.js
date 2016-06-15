import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class Stages extends React.Component {
  navMain () {
    this.props.navigator.pop({
      id: 'stages_page'
    })
  }

  navBasspod () {
    this.props.navigator.push({
      id: 'basspod'
    })
  }

  navCircuitGrounds () {
    this.props.navigator.push({
      id: 'circuit_grounds'
    })
  }

  navNeonGarden () {
    this.props.navigator.push({
      id: 'neon_garden'
    })
  }

  navCosmicMeadow () {
    this.props.navigator.push({
      id: 'cosmic_meadow'
    })
  }

  navKineticField () {
    this.props.navigator.push({
      id: 'kinetic_field'
    })
  }

  navWasteland () {
    this.props.navigator.push({
      id: 'wasteland'
    })
  }

  render () {
    return (

    <View style={styles.container}>

    <TouchableHighlight underlayColor="white">
          <View style={styles.logo_container}>
            <FitImage
              style={styles.logo}
              source={{uri: 'http://wooden-brush.surge.sh/edcwavves.jpg'}}/>
          </View>
        </TouchableHighlight>

      <ScrollView>

        <TouchableHighlight onPress={this.navBasspod.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://demonic-root.surge.sh/basspod_stage.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navCircuitGrounds.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://demonic-root.surge.sh/circuit_grounds.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navNeonGarden.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://demonic-root.surge.sh/neon_garden.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navCosmicMeadow.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://demonic-root.surge.sh/cosmic_meadow.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navKineticField.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://demonic-root.surge.sh/kinetic_field.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navWasteland.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://demonic-root.surge.sh/wasteland.jpg'}}/>
          </View>
        </TouchableHighlight>


      </ScrollView>
      
      <TouchableHighlight onPress={this.navMain.bind(this)} underlayColor="white">
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
