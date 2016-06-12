import FitImage from 'react-native-fit-image'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class NeonGarden extends React.Component {
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
      
          <ScrollView>
          <View>
            <FitImage 
              source={{uri: 'http://aback-ladybug.surge.sh/one_full.jpg'}}/>
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
      );
    } 

    if(this.state.value == "2") {
      return(
        <View style={styles.container}>

        <ScrollView>
          <View>
            <FitImage 
              source={{uri: 'http://aback-ladybug.surge.sh/two_full.jpg'}}/>
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
      );
    } 

    if(this.state.value == "3") {
      return(
        <View style={styles.container}>

          <ScrollView>
            <View>
              <FitImage 
                source={{uri: 'http://aback-ladybug.surge.sh/three_full.jpg'}}/>
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
      );
    } 

    return(

      <View style={styles.container}>
        <ScrollView>
          <View>
            <FitImage
              source={{uri: 'http://aback-ladybug.surge.sh/stage_placeholder.jpg'}}/>
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
  componentDidMount() {
    fetch('https://thumbaholic.herokuapp.com/stages/3')
     .then(resp => resp.json())
     .then(data => {
       console.log(data)
       this.setState({ value: data.value})
    })
  }
}
