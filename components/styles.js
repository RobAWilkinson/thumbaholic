import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20
  },
  first_page: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  second_page: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: 10
  },
  logo: {
    width: 300
  },
  logo_container: {
    alignItems: 'center',
    padding: 10
  },
  goback_container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  goback: {
    // width: 300
  }
})
export default styles
