import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import {Avatar} from "react-native-elements";


const SCREEN_WIDTH = Dimensions.get("window").width;

class Card extends Component {
  render() {
    const {
      from,
      to,
      time,
      user,
      onPress
    } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={onPress} style = {styles.card}>

        <View style = {{flexDirection: "column", marginTop: 10}}>
          <View style = {[styles.content, {width: SCREEN_WIDTH/2.7}]}>
            <Text style = {styles.title}>from</Text>
            <Text style = {styles.detail}>{from}</Text>
          </View>

          <View style = {styles.content}>
            <Text style = {styles.title}>to</Text>
            <Text style = {styles.detail}>{to}</Text>
          </View>
        </View>


        <View style = {{flexDirection: "column", justifyContent: "space-between", marginTop: 10}}>
          <View style = {styles.content}>
            <Text style = {styles.title}>at</Text>
            <Text style = {styles.time}>{time}</Text>
          </View>


          <View style = {[styles.content, {alignItems: "center"}]}>
            <Text style = {[styles.time, {paddingRight: 5}]}>Keith</Text>
            <Avatar
              size = "small"
              rounded
              source= {require("../../../assets/animals.jpeg")}
            />
          </View>

        </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderBottomWidth: 1.0,
    borderTopWidth: 1.0,
    padding: 14,
    borderColor: "#1d1d1d",
    justifyContent: "space-between"
  },
  content: {
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,

  },
  detail: {
    fontWeight: "400",
    fontSize: 17,
    color: "#1d1d1d",
    fontFamily: "Montserrat",
    letterSpacing: 1.5
  },
  title: {
    fontSize: 8,
    fontWeight: "300",
    marginRight: 7,
    color: "#1d1d1d",

    fontFamily: "Montserrat"
  },
  divider: {
    backgroundColor: "#1d1d1d",
    height : 1,
    opacity: 0.35
  },
  time: {
    fontWeight: "400",
    fontSize: 12,
    color: "#1d1d1d",
    fontFamily: "Montserrat"
  }
})

export default Card;
