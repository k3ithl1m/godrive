import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Bottom extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {[styles.time, styles.text]}>11:53</Text>
        <Text style = {[styles.date, styles.text]}>August 21</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT / 4.8,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10
  },
  text: {
    fontFamily: "Montserrat",
    color: "#1d1d1d",
    letterSpacing: 2
  },
  time: {
    fontSize: 15,
  },
  date: {
    fontSize: 13,
    opacity: 0.8,
    padding: 3
  }
})

export default Bottom;
