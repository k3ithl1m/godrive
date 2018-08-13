import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {GDText} from 'godrive-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class ProfileModal extends Component {
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

    return(
      <Modal
        animationType = "fade"
        transparent = {true}
        visible = {visible}
      >
        <View style = {[styles.container, modalBackgroundStyle]}>
          <TouchableWithoutFeedback
            onPress={onBackgroundPressed}
          >
            <View style = {styles.background}/>
          </TouchableWithoutFeedback>
          <View style = {styles.box}>
            <Image
              style = {styles.profilePic}
              source= {require("../../assets/animals.jpeg")}
            />
            <GDText textStyle = {styles.name}>Keith</GDText>
            <View style = {styles.goDriveInfo}>
              <Icon
                color = "#FFF"
                name = "paw"
              />
              <GDText textStyle = {styles.info}>12</GDText>
              <View style = {styles.line}/>
              <GDText textStyle = {styles.info}>20</GDText>
              <Icon
                color = "#FFF"
                name = "car"
              />
            </View>
            <View style= {{flexWrap: 'wrap'}}>
              <GDText textStyle = {{color: "#FFF", flexWrap: 'wrap', textAlign: 'center'}}>
              Call me Kitty Kat
              </GDText>
            </View>
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
    opacity: 0.3,
  },
  box: {
    backgroundColor: "#1b1b1b",
    width: SCREEN_WIDTH / 1.5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SCREEN_WIDTH / 10,
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 30,
    margin: 10
  },
  goDriveInfo: {
    flexDirection: "row",
    padding: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontFamily: "Montserrat",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "400"
  },
  info: {
    fontFamily: "Montserrat",
    color: "#FFF",
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  line: {
    height: 15,
    backgroundColor: "#FFF",
    width: 1.5
  }
})

export default ProfileModal;
