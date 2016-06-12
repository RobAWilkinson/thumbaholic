import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class Food extends React.Component {
  navMain () {
    this.props.navigator.pop({
      id: 'food_page'
    })
  }
  render () {
    return (
    <View style={styles.container}>
      <TouchableHighlight onPress={this.navMain.bind(this)}>
        <View style={styles.goback_container}>
          <FitImage style={styles.goback} source={{uri: 'http://unruly-process.surge.sh/go_back.png'}} />
        </View>
      </TouchableHighlight>
      <Text style={styles.second_page}>
        Food & Drinks
      </Text>
    </View>
    )
  }
}
