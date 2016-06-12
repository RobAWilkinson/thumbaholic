import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class Basspod extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  navMain () {
    this.props.navigator.pop({
      id: 'stages_page'
    })
  }
  render () {
    if(this.state.value == "1") {
      return(
        <View style={styles.container}>
      
          <TouchableHighlight onPress={this.navMain.bind(this)}>
            <View style={styles.goback_container}>
              <FitImage style={styles.goback} source={{uri: 'http://unruly-process.surge.sh/go_back.png'}} />
            </View>
          </TouchableHighlight>

          <View>
            <FitImage 
              source={{uri: 'http://dramatic-station.surge.sh/one_full.jpg'}}/>
          </View>

        </View>
      );
    } 

    if(this.state.value == "2") {
      return(
        <View style={styles.container}>
      
          <TouchableHighlight onPress={this.navMain.bind(this)}>
            <View style={styles.goback_container}>
              <FitImage style={styles.goback} source={{uri: 'http://unruly-process.surge.sh/go_back.png'}} />
            </View>
          </TouchableHighlight>

          <View>
            <FitImage 
              source={{uri: 'http://dramatic-station.surge.sh/two_full.jpg'}}/>
          </View>

        </View>
      );
    } 

    if(this.state.value == "3") {
      return(
        <View style={styles.container}>
      
          <TouchableHighlight onPress={this.navMain.bind(this)}>
            <View style={styles.goback_container}>
              <FitImage style={styles.goback} source={{uri: 'http://unruly-process.surge.sh/go_back.png'}} />
            </View>
          </TouchableHighlight>

          <View>
            <FitImage 
              source={{uri: 'http://dramatic-station.surge.sh/three_full.jpg'}}/>
          </View>

        </View>
      );
    } 

    return(

      <View>
        <TouchableHighlight onPress={this.navMain.bind(this)}>
          <View style={styles.goback_container}>
            <FitImage style={styles.goback} source={{uri: 'http://unruly-process.surge.sh/go_back.png'}} />
          </View>
        </TouchableHighlight>
        <FitImage
          source={{uri: 'http://anxious-map.surge.sh/stage_placeholder.jpg'}}/>
      </View>
      )


  }
  componentDidMount() {
    fetch('https://thumbaholic.herokuapp.com/stages/1')
     .then(resp => resp.json())
     .then(data => {
       console.log(data);
       this.setState({ value: data.value})
    })
  }
}
