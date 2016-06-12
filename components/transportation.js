import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class Transportation extends React.Component {
  navMain () {
    this.props.navigator.pop({
      id: 'transportation_page'
    })
  }

  navGateA () {
    this.props.navigator.push({
      id: 'gate_a'
    })
  }

  navGateB () {
    this.props.navigator.push({
      id: 'gate_b'
    })
  }

  navGateC () {
    this.props.navigator.push({
      id: 'gate_c'
    })
  }

  navGateD () {
    this.props.navigator.push({
      id: 'gate_d'
    })
  }

  render () {
    return (
    <View style={styles.entrance_container}>
      <ScrollView>
        <View>
          <FitImage
            style={styles.entrance_background}
            source={{uri: 'http://bloody-toothbrush.surge.sh/entrance_background.jpg'}}/>
        </View>

        <TouchableHighlight onPress={this.navGateA.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://wanting-journey.surge.sh/gate_a.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navGateB.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://wanting-journey.surge.sh/gate_b.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navGateC.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://wanting-journey.surge.sh/gate_c.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navGateD.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://wanting-journey.surge.sh/gate_d.jpg'}}/>
          </View>
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
