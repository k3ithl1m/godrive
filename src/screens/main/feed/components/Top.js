import React , {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Top extends Component {

  render() {
    const {
      title
    } = this.props;
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT / 4.8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#1d1d1d",
    fontSize: 30,
    fontFamily: "Montserrat",
    letterSpacing: 2
  }
})

export default Top;
