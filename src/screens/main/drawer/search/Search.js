import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Search extends Component {
  render() {
    return (
      <View>
        <Text style = {{color:"#FFF"}}>Hey</Text>
      </View>
    )
  }
}

export default Search;
