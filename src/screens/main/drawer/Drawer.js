import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";
import Profile from "./profile/Profile";
import Search from "./search/Search";

class Drawer extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Profile/>
        <Search/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    borderLeftWidth: 2
  }
})

export default Drawer;
