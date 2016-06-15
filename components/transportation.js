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

    <TouchableHighlight onPress={this.navMain.bind(this)} underlayColor="white">
      <View style={styles.logo_container}>
        <FitImage
          style={styles.logo}
          source={{uri: 'http://fantastic-surprise.surge.sh/back_btn.jpg'}}/>
      </View>
    </TouchableHighlight>
      <ScrollView>
        <View>
          <FitImage
            style={styles.entrance_background}
            source={{uri: 'http://bloody-toothbrush.surge.sh/entrance_background.jpg'}}/>
        </View>

        <TouchableHighlight onPress={this.navGateA.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://boiling-farmer.surge.sh/gate_a.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navGateB.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://boiling-farmer.surge.sh/gate_b.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navGateC.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://boiling-farmer.surge.sh/gate_c.jpg'}}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navGateD.bind(this)}>
          <View>
            <FitImage
              source={{uri: 'http://boiling-farmer.surge.sh/gate_d.jpg'}}/>
          </View>
        </TouchableHighlight>

      </ScrollView>

    </View>
    )
  }
}
