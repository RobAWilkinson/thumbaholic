import FitImage from 'react-native-fit-image'
import Slider from 'react-native-slider'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class WaitTimes extends React.Component{
  
  navFirstAid() {
    this.props.navigator.push({
      id: 'first_aid_page'
    })
  }
  navFood () {
    this.props.navigator.push({
      id: 'food_page'
    })
  }
  navRestrooms () {
    this.props.navigator.push({
      id: 'restrooms_page'
    })
  }
  navStages () {
    this.props.navigator.push({
      id: 'stages_page'
    })
  }
  navWater () {
    this.props.navigator.push({
      id: 'water_page'
    })
  }
  navTransportation () {
    this.props.navigator.push({
      id: 'transportation_page'
    })
  }

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
        <ScrollView>

          <TouchableHighlight onPress={this.navFirstAid.bind(this)}>
            <View>
              <FitImage
                style={styles.first_aid}
                source={{uri: 'http://broad-uncle.surge.sh/first_aid.jpg'}}/>
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
                source={{uri: 'http://fine-children.surge.sh/transpo.jpg'}}/>
            </View>
          </TouchableHighlight>

        </ScrollView>
      </View>
    )
  }
}