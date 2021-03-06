import FitImage from 'react-native-fit-image'
import Slider from 'react-native-slider'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'
import styles from './styles'

export default class Basspod extends React.Component {
  constructor (props) {
    super(props)
    this.state = {tracker: 0}
  }
  navMain () {
    this.props.navigator.pop({
      id: 'stages_page'
    })
  }
  render () {
    if (this.state.value == '1') {
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
          <View>
            <FitImage source={{uri: 'http://tense-thunder.surge.sh/one_full.jpg'}} />
            <Slider
            step={.09}
            style={styles.slide}
            trackStyle={{opacity: 0}}
            thumbStyle={{width: 35, height: 35, borderRadius: 50}}
            thumbTouchSize={{width:60, height: 40}}
            value={this.state.tracker}
            onValueChange={(e) => {
              console.log(e)

            }}
            thumbTintColor={'white'}/>
          </View>

        </ScrollView>

      </View>
      )
    }

    if (this.state.value == '2') {
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
          <View>
            <FitImage source={{uri: 'http://tense-thunder.surge.sh/two_full.jpg'}} />
            <Slider
            step={.09}
            style={styles.slide}
            trackStyle={{opacity: 0}}
            thumbStyle={{width: 35, height: 35, borderRadius: 50}}
            thumbTouchSize={{width:60, height: 40}}
            value={this.state.tracker}
            onValueChange={(e) => {
              console.log(e)

            }}
            thumbTintColor={'white'}/>
          </View>
        </ScrollView>
      </View>
      )
    }

    if (this.state.value == '3') {
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
          <View>
            <FitImage source={{uri: 'http://tense-thunder.surge.sh/three_full.jpg'}} />
            <Slider
            step={.09}
            style={styles.slide}
            trackStyle={{opacity: 0}}
            thumbStyle={{width: 35, height: 35, borderRadius: 50}}
            thumbTouchSize={{width:60, height: 40}}
            value={this.state.tracker}
            onValueChange={(e) => {
              console.log(e)

            }}
            thumbTintColor={'white'}/>
          </View>
        </ScrollView>
      </View>
      )
    }

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
        <View>
          <FitImage source={{uri: 'http://tense-thunder.surge.sh/stage_placeholder.jpg'}} />
          <Slider
            step={.09}
            style={styles.slide}
            trackStyle={{opacity: 0}}
            thumbStyle={{width: 35, height: 35, borderRadius: 50}}
            thumbTouchSize={{width:60, height: 40}}
            value={this.state.tracker}
            onValueChange={(e) => {
              console.log(e)

            }}
            thumbTintColor={'white'}/>
        </View>
      </ScrollView>

    </View>
    )
  }
  componentDidMount () {
    fetch('https://thumbaholic.herokuapp.com/stages/1')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if(data.value == 3) {
          this.setState({tracker: 1})
        }
        if(data.value == 2) {
          this.setState({tracker: 0.5})
        }
        if(data.value == 1) {
          this.setState({tracker: 0.2})
        }
        this.setState({ value: data.value})
      }).catch(err => {
      console.error(err)
    })
  }
}
