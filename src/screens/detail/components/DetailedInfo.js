import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import InfoSection from "./InfoSection";
import AvatarWithName from "./AvatarWithName";
import {GDText} from "godrive-ui";
import {Avatar} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const list = [
  {
    name: "Cat",
    image: require("../../../assets/animals.jpeg"),
  },
  {
    name: "Dog",
    image: require("../../../assets/animals.jpeg"),
  },
  {
    name: "Jon",
    image: require("../../../assets/animals.jpeg"),
  },

]

class DetailedInfo extends Component {
  render() {
    const {
      children,
      onProfilePressed
    } = this.props;

    return (
      <View
        style = {{
          margin:20,
          justifyContent: "space-between",
          height: SCREEN_HEIGHT * 5 / 6
        }}
        >
        <View style = {{justifyContent: "center", alignItems :"center"}}>
          <GDText textStyle = {{margin: 20, fontSize: 30}} >{children}</GDText>
        </View>
          <View style = {styles.place}>
            <InfoSection title = "TO">Philadelphia, PA, USA</InfoSection>
            <InfoSection title = "FROM" right>New York City, New York, USA</InfoSection>
          </View>
          <View style = {styles.place}>
            <InfoSection title = "DATE">8-12-2017</InfoSection>
            <InfoSection title = "SEATS LEFT" right >4</InfoSection>
          </View>

          <View style = {styles.user}>
            <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10}}>
              <Avatar
                medium
                rounded
                source= {require("../../../assets/animals.jpeg")}
              />
              <GDText textStyle = {{marginLeft: 10}}>KEITH</GDText>
            </View>
            <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <View style = {{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <GDText textStyle = {{fontSize: 25}}>4</GDText>
                <GDText textStyle = {{fontSize: 8, margin: 5}}>MILES AWAY</GDText>
              </View>
              <View style = {{flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
                <GDText textStyle = {{fontSize: 8, margin: 5}}>REQUESTING</GDText>
                <GDText textStyle = {{fontSize: 25}}>$4.00</GDText>
              </View>
            </View>
          </View>

          <View style = {styles.invite}>
            <GDText textStyle = {{fontSize: 10, margin: 5}}>RIDING ALONG</GDText>
            <View style = {{flexDirection: "row", justifyContent: "center"}}>
              {list.map((l, i) =>
                <AvatarWithName
                  name = {l.name}
                  image = {l.image}
                  key = {i}
                  onPress={onProfilePressed}
                />)}
            </View>
        </View>
      </View>
    )
  }
}

const styles = {
  place: {
    flexDirection: "row",
    borderColor: "#000",
    borderTopWidth: 1,
    justifyContent: "space-between",
    paddingRight: 20,
  },
  invite: {
    borderTopWidth: 1,
    borderColor: "#000",
    padding : 10,
    justifyContent: "center",
    alignItems: "center"
  },
  user: {
    borderTopWidth: 1,
    borderColor: "#000",
    padding : 20,
    justifyContent: "center",
  }
}

export default DetailedInfo;
