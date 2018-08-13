import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';
import {HugeButton} from 'godrive-ui';
import DetailedInfo from './components/DetailedInfo';
import MessageModal from '../detail/components/MessageModal';
import ProfileModal from '../profile/ProfileModal';
import {NavigationActions} from 'react-navigation'

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

class Detail extends Component {
  state = {
    modalVisible: false
  };

  _setModalVisible = () => {
    this.setState({modalVisible: true});
  }

  backgroundPressed = () => {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.detail}>

          <DetailedInfo/>
          <TouchableOpacity
            style = {{
              position: "absolute",
              marginTop: 18,
              paddingRight: 10,
              paddingLeft: 15,
            }}
            onPress = {
              () => this.props.navigation.dispatch(
                NavigationActions.back()
              )
            }
          >
            <Icon
              size = {30}
              color = "#000"
              name = "clear"
              style = {{
                padding: 20
              }}
            />
          </TouchableOpacity>
          <HugeButton
            color = "#363636"
            onPress={this._setModalVisible}
          >
          CREATE
          </HugeButton>
          <MessageModal
            onBackgroundPressed = {this.backgroundPressed}
            visible = {this.state.modalVisible}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    justifyContent: "space-between",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH
  }
})

export default Detail;
