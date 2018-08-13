import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Avatar} from "react-native-elements";
import {GDText} from 'godrive-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Profile extends Component {
  render() {
    return (
      <TouchableOpacity style = {styles.container}>
        <View style = {styles.inner}>
        <Image
          style = {styles.profilePic}
          source= {require("../../../../assets/animals.jpeg")}
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
          <GDText textStyle = {{color: "#FFF", flexWrap: 'wrap', textAlign: 'center'}}>Killin this game like im the man bitch</GDText>
        </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT / 3,
  },
  inner: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  goDriveInfo: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 60,
    margin: 10
  },
  name: {
    fontFamily: "Montserrat",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "500"
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

export default Profile;
