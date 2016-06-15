import { AppRegistry, StyleSheet, Text, Image, View, Navigator, TouchableHighlight, ScrollView } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 10,
  },
  entrance_container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 10,
  },
  entrance_background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // flex: 1,
    // width: null,
    // height: null,
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
  logo_container: {
    flex: 1,
  },
  logo: {
    flex:1,
  },
  flex: {
    flex: 1,
  },
  goback_container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  goback: {
    width: 100
  },
  slide: {
    position: 'absolute',
    width: 325,
    marginLeft: 25,
    marginRight: 25,
    // height: 1,
    top: 525,
    // left: 0,
  },
  locationBtn: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
})

export default styles
