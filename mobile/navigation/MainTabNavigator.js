import React from "react";
import {
  Platform,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none"
  }
);

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
   headerMode: "none"
  }
);

const GroupStack = createStackNavigator(
  {
    Group: GroupScreen
  },
  {
    headerMode: "none"
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10
  }
});

const DrawerStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack
    },
    Groups: {
      screen: GroupStack
    },
    Logout: {
      screen: LoginStack,
        
    }
  },
  {
    initialRouteName: "Logout"
  }
);

export default createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack
    }
  },
  {
    initialRouteName: "DrawerStack",
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#4C3E54" },
      // title: "Welcome!",
      headerTintColor: "white",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../assets/images/hamburger-icon.png")}
            style={[styles.icon]}
          />
        </TouchableOpacity>
      )
    })
  }
);
