import {StackNavigator, TabNavigator} from 'react-navigation';
import AuthNavigator from "./AuthNavigator";
import Main from "../screens/main/Main";
import Detail from "../screens/detail/Detail";
import Create from "../screens/create/Create";

const Navigator = StackNavigator(
  {
    auth: {screen: AuthNavigator},
    main: StackNavigator(
      {
        feed: StackNavigator(
          {
            main: {screen: Main},
            detail: {screen: Detail},
          },
          {
            headerMode: "none",
            cardStyle: {backgroundColor: "#FFF"}
          }
        ),
        create: {screen: Create},
      },
      {
        initialRouteName: "feed",
        headerMode: "none",
        cardStyle: {backgroundColor: "#FFF"},
        mode: "modal"
      }
    )
  },
  {
    initialRouteName: "auth",
    headerMode: "none",
    cardStyle: {backgroundColor: "#FFF"}
  }
)

export default Navigator;
