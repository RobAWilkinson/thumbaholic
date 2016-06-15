import FitImage from 'react-native-fit-image'
import Slider from 'react-native-slider'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class RateNeon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {tracker: 0}
  }
  navWhatsHot () {
    this.props.navigator.pop({
      id: 'whats_hot'
    })
  }
  render () {
      return (
      <View style={styles.container}>

        <TouchableHighlight onPress={this.navWhatsHot.bind(this)} underlayColor="white">
          <View style={styles.logo_container}>
            <FitImage
              style={styles.logo}
              source={{uri: 'http://fantastic-surprise.surge.sh/back_btn.jpg'}}/>
          </View>
        </TouchableHighlight>


          <View>
            <FitImage source={{uri: 'http://dng-com.s3.amazonaws.com/download/wavves/rate_1.jpg'}} />
          </View>

      </View>
      )
  }
}
