import React, {Component} from "react";
import {
  View,
  Dimensions,
  TouchableOpacity
 } from "react-native";
import Drawer from "./drawer/Drawer";
import SideMenu from 'react-native-side-menu';
import Feed from "./feed/Feed";
import Go from "./feed/Go";
import {Icon} from "react-native-elements";
import {NavigationActions} from "react-navigation"

const SCREEN_WIDTH = Dimensions.get("window").width;

const navigateAction = NavigationActions.navigate({
  routeName: 'create',
  params: {
    mode: "modal"
  }
})

const navigateActionDetail = NavigationActions.navigate({
  routeName: 'detail',
  params: {
    mode: "modal"
  }
})

class Main extends Component {
  render() {
    // The side menu API requires a const React.Component
    const menu = <Drawer style = {{backgroundColor: "#000", flex: 1}}/>

    return (
      <SideMenu
        menu={menu}
        menuPosition="right"
        openMenuOffset = {SCREEN_WIDTH*2/3}
      >
        <Feed
          onPress = {() => this.props.navigation.navigate(navigateActionDetail)}
        />
        <View
        style = {{
          position: "absolute",
          justifyContent: "flex-end",
          width: SCREEN_WIDTH,
          height: 40,
          marginBottom: 10,
          paddingRight: 10,
          paddingLeft: 10,
          bottom: 0,
          flexDirection: "row"
        }}
        >
          <TouchableOpacity
            onPress = {() => this.props.navigation.navigate(navigateAction)}
          >
            <Icon
              size = {40}
              color = "#000"
              name = "add"
              style = {{
                padding: 20
              }}
            />
          </TouchableOpacity>
        </View>
      </SideMenu>
    )
  }
}

export default Main;
