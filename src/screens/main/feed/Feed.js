import React, {Component} from "react";
import {View} from "react-native";
import Swiper from 'react-native-swiper';
import Go from "./Go";
import Drive from "./Drive";


class Feed extends Component {
  render() {
    return (
      <Swiper
        activeDotColor = "#1c1c1c"
        dotColor = "#ebebeb"
      >
        <Go
          onPress={this.props.onPress}
        />
        <Drive
          onPress= {this.props.onPress}
        />
      </Swiper>
    )
  }
}

export default Feed;
