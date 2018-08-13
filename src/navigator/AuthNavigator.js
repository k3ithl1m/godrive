import {StackNavigator} from 'react-navigation';

import WelcomeScreen from "../screens/auth/WelcomeScreen";

const AuthNavigator = StackNavigator({
  welcome: {screen: WelcomeScreen}
},
{
  headerMode: 'none',
  cardStyle: {backgroundColor: "#FFF"}
})

export default AuthNavigator;
