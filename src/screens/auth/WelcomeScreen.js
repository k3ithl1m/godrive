import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  CameraRoll,
  ScrollView,
  Image
} from "react-native";
import {GDText} from "godrive-ui";
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions} from 'react-navigation';

const navigateAction = NavigationActions.navigate({
  routeName: 'main',
  params: {}
})

const FBSDK = require('react-native-fbsdk');

const {
  LoginManager,
} = FBSDK;

const SCREEN_HEIGHT = Dimensions.get("window").height;

class WelcomeScreen extends Component {
  state = {
    cameraRollPhotos: []
  }

  _LoginFB = (navigation) => {
    console.log("hey");
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if(result.isCancelled) {
          alert('Login cancelled');
        } else {
          console.log(this.props);
          navigation.replace(navigateAction);
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }


  render() {
    const {
      navigation
    } = this.props;

    return (
      <View style = {styles.container}>

        <View style = {{height: SCREEN_HEIGHT *3/5, justifyContent: "center"}}>

          <GDText title>GoDRIVE</GDText>
        </View>
        <View style = {{justifyContent: "space-between", height :SCREEN_HEIGHT *2/5, paddingBottom: 25}}>
          <View>

            <TouchableOpacity
            onPress= {() => {
              this._LoginFB(navigation)
            }}
            style = {[styles.button, {backgroundColor: "#3b5998", flexDirection: "row"}]}
            >
              <Icon style ={{color: "#FFF", fontSize: 15}} name= "facebook" />
              <Text style = {{color: "#FFF", fontFamily: "Montserrat"}}>    LOGIN WITH FACEBOOK</Text>
            </TouchableOpacity>

            <View style={{height: 40, flexDirection: "row", alignItems: "center"}}>
              <View style ={styles.line}/>
                <Text style = {{color: "#000", fontFamily: "Montserrat", fontSize: 12}}>  OR  </Text>
              <View style = {styles.line}/>
            </View>

            <TouchableOpacity
              style = {styles.button}
              onPress = {this.fetchPhotosFromCameraRoll}
            >
                <Text style = {{color: "#FFF", fontFamily: "Montserrat"}}>CREATE AN ACCOUNT</Text>
            </TouchableOpacity>

          </View>

          <View style = {{flexDirection :"row", justifyContent: "center"}}>
            <Text style = {[styles.login,{color: "#4d4d4d"}]}>HAVE AN ACCOUNT?</Text>
            <TouchableOpacity>
              <Text style = {styles.login}> LOGIN HERE</Text>
            </TouchableOpacity>
          </View>
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
  button: {
    height: 40,
    width: 250,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  },
  line: {
    backgroundColor: "#000",
    height: 1.5,
    width: 107
  },
  login: {
    fontFamily : "Montserrat",
    fontSize: 12
  }
})

export default WelcomeScreen;
