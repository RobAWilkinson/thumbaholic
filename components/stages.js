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

    <TouchableHighlight onPress={this.navMain.bind(this)} underlayColor="white">
          <View style={styles.logo_container}>
            <FitImage
              style={styles.logo}
              source={{uri: 'http://fantastic-surprise.surge.sh/back_btn.jpg'}}/>
          </View>
        </TouchableHighlight>



        <TouchableHighlight onPress={this.navBasspod.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://exciting-father.surge.sh/basspod_1.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navCircuitGrounds.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://exciting-father.surge.sh/circuit_1.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navNeonGarden.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://dng-com.s3.amazonaws.com/download/wavves/neon_garden.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navCosmicMeadow.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://exciting-father.surge.sh/cosmic_1.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navKineticField.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://dng-com.s3.amazonaws.com/download/wavves/kinetic_field.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navWasteland.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://dng-com.s3.amazonaws.com/download/wavves/wasteland.jpg'}}/>
          </View>
        </TouchableHighlight>

      
    </View>

    )
  }
}
