import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import {GDText} from 'godrive-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class MessageModal extends Component {
  state = {
    transparent: true
  }

  render() {
    const {
      visible,
      onPress,
      onBackgroundPressed
    } = this.props;

    const modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? "rgba(0, 0, 0, 0.2)" : "#f5fcff"
    };
    return (
      <Modal
        animationType = "fade"
        transparent = {true}
        visible={visible}
      >
        <View style = {[styles.container, modalBackgroundStyle]}>
          <TouchableWithoutFeedback
            onPress = {onBackgroundPressed}
          >
            <View style = {styles.background}/>
          </TouchableWithoutFeedback>
          <View style = {styles.box}>
            <TextInput
              placeholder= "Don't flirt ;)"
              multiline
              autoFocus
              style = {styles.input}
            />
            <TouchableOpacity style={styles.button}>
              <GDText>SEND</GDText>
            </TouchableOpacity>
          </View>
        </View>
    </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  background: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: "#333333",
    opacity: 0.5,
  },
  box: {
    backgroundColor: "#FFF",
    width: SCREEN_WIDTH / 1.2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SCREEN_WIDTH / 20,
  },
  input: {
    fontFamily: "Montserrat",
    width: SCREEN_WIDTH / 1.4,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    height: 80,
    flexWrap: "wrap",
    alignItems: "center"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10
  }
})

export default MessageModal;
