import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class FirstAid extends React.Component {
  navMain () {
    this.props.navigator.pop({
      id: 'first_aid_page'
    })
  }
  render () {
    return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <FitImage
            style={styles.entrance_background}
            source={{uri: 'http://bloody-toothbrush.surge.sh/entrance_background.jpg'}}/>
        </View>

        <View>
          <FitImage
            source={{uri: 'http://mute-truck.surge.sh/first_aid_placeholder.png'}}/>
        </View>
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
