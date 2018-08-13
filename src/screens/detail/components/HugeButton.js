import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Animated
} from 'react-native';
import {GDText} from 'godrive-ui'

const SCREEN_WIDTH = Dimensions.get("window").height;
const SCREEN_HEIGHT = Dimensions.get("window").width;

class HugeButton extends Component {
  render() {
    const {
      children,
      expand,
      onPress,
      color
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style = {[
          styles.button,
          color && {backgroundColor: color}
        ]}
      >
        <GDText header textStyle = {{color: "#FFF"}}>{children}</GDText>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

  button: {
    height: SCREEN_HEIGHT / 6,
    backgroundColor: "#499333",
    justifyContent: "center",
    alignItems: "center"
  },
})

export default HugeButton;
