import FitImage from 'react-native-fit-image'
import Slider from 'react-native-slider'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class MyPoints extends React.Component{

  navMain () {
    this.props.navigator.pop({
      id: 'main'
    })
  }
  render() {
    return (
      <View style={styles.container}>

      <TouchableHighlight onPress={this.navMain.bind(this)} underlayColor="white">
          <View style={styles.logo_container}>
            <FitImage
              style={styles.logo}
              source={{uri: 'http://fantastic-surprise.surge.sh/back_btn.jpg'}}/>
          </View>
        </TouchableHighlight>

            <View>
              <FitImage
                style={styles.first_aid}
                source={{uri: 'http://dng-com.s3.amazonaws.com/download/wavves/my_points_page.jpg'}}/>
            </View>          

      </View>
    )
  }
}