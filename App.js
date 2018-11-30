/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Button
} from "react-native"

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      errorText: ""
    }
  }

  onPressIncrement = () => {
    const {count} = this.state

    const callBack = incrementedCount => {
      this.setState({count: incrementedCount, errorText: ""})
    }

    NativeModules.Counter.increment(count, callBack)
  }

  onPressDecrement = () => {
    const {count} = this.state
    NativeModules.Counter.decrement(count)
      .then(decrementedCount => this.setState({count: decrementedCount}))
      .catch(error => {
        this.setState({errorText: error.message})
      })
  }

  render() {
    const {count, errorText} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.padding}>{count}</Text>
        <Text style={[{color: "red"}, styles.padding]}>{errorText}</Text>
        <Button
          onPress={this.onPressIncrement}
          title="Increment(+)"
          style={styles.padding}
        />
        <Button
          onPress={this.onPressDecrement}
          title="Decrement(-)"
          style={styles.padding}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  padding: {
    padding: 10
  }
})
