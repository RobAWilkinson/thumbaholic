import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class Restrooms extends React.Component {
  // componentDidMount () {
  //   fetch('https://thumbaholic.herokuapp.com/restrooms')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  // }
  navMain () {
    this.props.navigator.pop({
      id: 'restrooms_page'
    })
  }
  render () {
    return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.second_page}>
            Restrooms
          </Text>
        </View>
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
